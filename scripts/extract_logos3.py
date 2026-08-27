import json, re
for fname, name in [('cp_about.json','Coinpaprika About'),('dl_github.json','DeFiLlama GitHub')]:
    try:
        data = json.load(open(f'/home/z/my-project/scripts/{fname}'))
        html = data.get('data',data).get('html','') if isinstance(data,dict) else ''
        imgs = re.findall(r'(https?://[^"\'> ]+\.(?:png|svg|ico|webp|zip))', html)
        logo_imgs = [i for i in imgs if any(k in i.lower() for k in ['logo','icon','brand','llama','paprika','media'])][:8]
        print(f'{name}:')
        for l in logo_imgs:
            print(f'  {l}')
    except Exception as e:
        print(f'{name}: error={e}')
