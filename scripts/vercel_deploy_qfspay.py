import os, sys, json, hashlib, urllib.request, time

TOKEN = "REDACTED_TOKEN"
TEAM_ID = "team_4jQJrPzpyVVB6Vmv8X6gJiWB"
PROJECT_ID = "prj_LbWLDqmb8TkI2ke6vztVXgCAq0Pq"  # my-project - owns qfspay.org
BASE_URL = "https://api.vercel.com"

def api_req(method, path, data=None, team_id=True):
    url = f"{BASE_URL}{path}"
    if team_id:
        url += f"?teamId={TEAM_ID}"
    headers = {"Authorization": f"Bearer {TOKEN}"}
    if data:
        headers["Content-Type"] = "application/json"
        body = json.dumps(data).encode()
    else:
        body = None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.loads(resp.read())

# Collect files
project_dir = "/home/z/my-project"
skip_dirs = {'.next', 'node_modules', '.git', '.vercel', '.zscripts', 'scripts', 'mini-services', 'upload', 'tool-results', 'download', 'skills'}

file_map = {}
file_list = []

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
            if len(content) > 5 * 1024 * 1024:
                continue
            sha = hashlib.sha1(content).hexdigest()
            file_map[sha] = (relpath, content)
            file_list.append({"file": relpath, "sha": sha, "size": len(content)})
        except Exception:
            pass

print(f"Found {len(file_list)} files ({sum(f['size'] for f in file_list) / 1024 / 1024:.1f} MB)")

# Create deployment
print("Creating deployment...")
try:
    result = api_req("POST", "/v13/deployments", {
        "name": "my-project",
        "project": PROJECT_ID,
        "files": file_list,
        "framework": "nextjs",
        "target": "production",
    })
    deploy_id = result.get("id")
    print(f"Deployment created: {deploy_id}")
except urllib.error.HTTPError as e:
    error_body = json.loads(e.read().decode())
    if error_body.get("error", {}).get("code") == "missing_files":
        missing_shas = error_body["error"]["missing"]
        print(f"Need to upload {len(missing_shas)} files...")
        
        for i, sha in enumerate(missing_shas):
            if sha in file_map:
                relpath, content = file_map[sha]
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
        
        print("Creating deployment (retry)...")
        result = api_req("POST", "/v13/deployments", {
            "name": "my-project",
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

# Wait for deployment
print(f"Deployment ID: {deploy_id}")
print(f"URL: {result.get('url')}")
print("Waiting for build...")

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
        err = status.get("error", {})
        if err:
            print(f"Error: {err.get('message', 'unknown')}")
        break
    elif state == "BLOCKED":
        print(f"\n⚠️ BLOCKED")
        print(f"Inspect: https://vercel.com/qfs2/my-project/{deploy_id}")
        break
else:
    print("Timeout")

