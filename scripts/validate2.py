#!/usr/bin/env python3
import re, sys

with open('src/store/lang-store.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')
    # Find lines with string literals that might have unescaped chars
    in_str = False
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if not s: continue
        # Simple check: count quotes, if odd there's a problem
        q = s.count('"')
        if q % 2 != 0:
            print(f'Line {i}: quote count={q}')
    print('Done checking quotes')
