import json, re

store_path = '/home/z/my-project/src/store/lang-store.ts'
with open(store_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Load the translations from a JSON file we'll create
with open('/home/z/my-project/scripts/new_translations.json', 'r', encoding='utf-8') as f:
    new_keys = json.load(f)

# Find insertion point: before the closing }; of const t
# The pattern is the last entry in `t` object before `const td`
td_pos = content.find('const td')
t_close = content.rfind('};', 0, td_pos)

# Build new entries
lines = []
for key, val in new_keys.items():
    parts = [f'{lang}: {json.dumps(val[lang])}' for lang in ['en','es','fr','pt','de','zh','ar','th']]
    lines.append(f'  {json.dumps(key)}: {{ {", ".join(parts)} }},')

new_block = '\n'.join(lines) + '\n'

# Insert before the closing }; of t object
content = content[:t_close] + new_block + content[t_close:]

with open(store_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Added {len(new_keys)} translation keys to lang-store.ts')
