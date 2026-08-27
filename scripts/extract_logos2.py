import json, re
for fname, name in [
    ('mm_assets.json','MetaMask Assets'),
    ('mm_search.json','MetaMask Search'),
    ('cmc_logo2.json','CMC Logo Search'),
    ('dt_search.json','DexTools Search'),
    ('ds_search.json','DexScreener Search'),
    ('dl_search.json','DeFiLlama Search'),
    ('cp_search.json','Coinpaprika Search'),
    ('bw_search.json','Bitget Wallet Search'),
]:
    try:
        data = json.load(open(f'/home/z/my-project/scripts/{fname}'))
        if isinstance(data, dict) and 'results' in data:
            results = data['results']
            print(f'\n=== {name} ===')
            for r in results[:3]:
                print(f'  {r["url"]}')
                print(f'  {r["snippet"][:150]}')
        elif isinstance(data, dict):
            html = data.get('data',data).get('html','')
            imgs = re.findall(r'(https?://[^"\'\'> ]+\.(?:png|svg|ico|webp))', html)
            logo_imgs = [i for i in imgs if 'logo' in i.lower() or 'metamask' in i.lower() or 'icon' in i.lower()][:5]
            print(f'\n=== {name} ===')
            for l in logo_imgs:
                print(f'  {l}')
    except Exception as e:
        print(f'{name}: error={e}')
