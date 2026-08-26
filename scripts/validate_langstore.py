#!/usr/bin/env python3
"""Validate string literals in lang-store.ts"
import re, sys

with open('src/store/lang-store.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')
    errors = []
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if not s: continue
        if s.startswith('//'): continue
        # Count quotes
        dcount = s.count('"')
        if dcount % 2 != 0:
            # Odd number of quotes - check for unclosed quotes
            q = 0
            for j, ch in enumerate(s):
                if ch == '"': q += 1
                elif ch == "'": q -= 1
                if q < 0:
                    # Check if it's inside a template literal (backtick issue)
                    # Check surrounding context for issues
                    context = s[max(0,j-30):j+30]
                    for c in context:
                        if c == '\\' or c == '\\n':
                            continue
                        # Check if we can find a matching close quote after position j
                        rest = s[j+1:]
                        for k, ch2 in enumerate(rest):
                            if ch2 == '"':
                                errors.append(f'  Line {i}: Unclosed quote at pos {j}, context: ...{s[max(0,j-30):j+30]}...')
                                break
        print(f'Checked {lines.count()} lines, found {len(errors)} potential issues')
    for e in errors:
        print(f'  {e}')
    if not errors:
        print('All checked OK')
