import os, sys, json, hashlib, urllib.request, time, base64

TOKEN = "REDACTED_TOKEN"
TEAM_ID = "team_4jQJrPzpyVVB6Vmv8X6gJiWB"
PROJECT_ID = "prj_YSYzgux2x99LdBDMXaCphVERbDn1"
BASE_URL = "https://api.vercel.com"

def api_req(method, path, data=None, raw_data=None, content_type="application/json"):
    url = f"{BASE_URL}{path}?teamId={TEAM_ID}"
    headers = {"Authorization": f"Bearer {TOKEN}"}
    if data:
        headers["Content-Type"] = "application/json"
        body = json.dumps(data).encode()
    elif raw_data:
        body = raw_data
    else:
        body = None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.loads(resp.read())

# Collect all project files
project_dir = "/home/z/my-project"
skip_dirs = {'.next', 'node_modules', '.git', '.vercel', '.zscripts', 'scripts', 'mini-services', 'upload', 'tool-results', 'download'}

file_map = {}  # sha -> (relpath, content)
file_list = []  # for deployment API

print("Scanning project files...")
for root, dirs, filenames in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in skip_dirs]
    for filename in filenames:
        filepath = os.path.join(root, filename)
        relpath = os.path.relpath(filepath, project_dir)
        if len(relpath) > 150:
            continue
        try:
            with open(filepath, 'rb') as f:
                content = f.read()
            if len(content) > 5 * 1024 * 1024:  # skip files > 5MB
                continue
            sha = hashlib.sha1(content).hexdigest()
            file_map[sha] = (relpath, content)
            file_list.append({"file": relpath, "sha": sha, "size": len(content)})
        except Exception:
            pass

print(f"Found {len(file_list)} files ({sum(f['size'] for f in file_list) / 1024 / 1024:.1f} MB)")

# Step 1: Try to create deployment - will tell us which files need uploading
print("Creating deployment (step 1 - identify missing files)...")
try:
    result = api_req("POST", "/v13/deployments", {
        "name": "qfs-web-repo",
        "project": PROJECT_ID,
        "files": file_list,
        "framework": "nextjs",
        "target": "production",
    })
    # If successful, no files need uploading
    deploy_id = result.get("id")
    print(f"Deployment created: {deploy_id}")
except urllib.error.HTTPError as e:
    error_body = json.loads(e.read().decode())
    if error_body.get("error", {}).get("code") == "missing_files":
        missing_shas = error_body["error"]["missing"]
        print(f"Need to upload {len(missing_shas)} files...")
        
        # Step 2: Upload each missing file
        for i, sha in enumerate(missing_shas):
            if sha in file_map:
                relpath, content = file_map[sha]
                # Upload via Vercel file API
                try:
                    url = f"{BASE_URL}/v2/files?teamId={TEAM_ID}"
                    headers = {
                        "Authorization": f"Bearer {TOKEN}",
                        "Content-Type": "application/octet-stream",
                        "x-vercel-digest": sha,
                    }
                    req = urllib.request.Request(url, data=content, headers=headers, method="POST")
                    with urllib.request.urlopen(req, timeout=120) as resp:
                        pass
                    if (i+1) % 50 == 0 or i == len(missing_shas)-1:
                        print(f"  Uploaded {i+1}/{len(missing_shas)} files")
                except Exception as ex:
                    print(f"  Upload error {relpath}: {ex}")
            else:
                print(f"  SHA {sha} not found in local files")
        
        # Step 3: Create deployment again with all files uploaded
        print("Creating deployment (step 2 - all files uploaded)...")
        result = api_req("POST", "/v13/deployments", {
            "name": "qfs-web-repo",
            "project": PROJECT_ID,
            "files": file_list,
            "framework": "nextjs",
            "target": "production",
        })
        deploy_id = result.get("id")
        print(f"Deployment created: {deploy_id}")
    else:
        print(f"Error: {json.dumps(error_body, indent=2)}")
        sys.exit(1)

# Wait for deployment to complete
print(f"Deployment ID: {deploy_id}")
print(f"URL: {result.get('url')}")
print("Waiting for build to complete...")

for i in range(180):
    time.sleep(5)
    try:
        status = api_req("GET", f"/v13/deployments/{deploy_id}")
    except:
        continue
    state = status.get("readyState", "UNKNOWN")
    if i % 12 == 0:
        print(f"  [{i*5}s] State: {state}")
    if state == "READY":
        print(f"\n✅ Deployment READY!")
        print(f"URL: https://{status.get('url')}")
        break
    elif state in ("ERROR", "CANCELED", "FAILED"):
        print(f"\n❌ Failed: {state}")
        print(f"Error: {status.get('error')}")
        break
    elif state == "BLOCKED":
        print(f"\n⚠️ BLOCKED - Check: https://vercel.com/qfs2/qfs-web-repo/{deploy_id}")
        break
else:
    print("Timeout")

