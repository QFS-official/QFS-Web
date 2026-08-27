import json, re
for fname, name in [
    ('tw_press.json','Trust Wallet'),
    ('bg_brand.json','Bitget Wallet'),
    ('dt_brand.json','DexTools'),
    ('ds_brand.json','DexScreener'),
    ('dl_brand.json','DeFiLlama'),
    ('cp_brand.json','Coinpaprika'),
]:
    try:
        data = json.load(open(f'/home/z/my-project/scripts/{fname}'))
        html = data.get('data',data).get('html','') if isinstance(data,dict) else ''
        imgs = re.findall(r'(https?://[^"\'> ]+\.(?:png|svg|ico|webp))', html)
        logo_imgs = [i for i in imgs if 'logo' in i.lower() or 'icon' in i.lower() or 'brand' in i.lower() or 'favicon' in i.lower()][:5]
        print(f'{name}:')
        for l in logo_imgs[:3]:
            print(f'  {l}')
    except Exception as e:
        print(f'{name}: error={e}')
