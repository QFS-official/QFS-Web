#!/usr/bin/env python3
"""Fix home-page-2.tsx translations."""
import re

with open('/home/z/my-project/src/components/qfs/home-page-2.tsx', 'r') as f:
    content = f.read()

# 1. Token Distribution subtitle
content = content.replace(
    'Token Distribution',
    "{t('token.alloc.subtitle')}"
)

# 2. QFS Token Allocation title
content = content.replace(
    '<span className="gradient-text">QFS Token</span>{' '}',
    "<span className=\"gradient-text\">{t('token.alloc.title1')}</span>{' '}"
)
content = content.replace(
    '<span className={isDark',
    "<span className={isDark"
)
# Fix the Allocation part
content = content.replace(
    '>Allocation</span>',
    ">{t('token.alloc.title2')}</span>"
)

# 3. Reference Supply
content = content.replace(
    '— Reference Supply*',
    '— {t(\'token.alloc.supply\')}'
)

# 4. Join Community button
content = content.replace(
    'Join Community',
    "{t('cta.join_btn')}"
)

# 5. Footnote
content = content.replace(
    '* Reference supply subject to adjustments based on ecosystem development.',
    "{t('token.alloc.footnote')}"
)

# 6. Remove labelEs and labelEn lines from allocationData
content = re.sub(r"    labelEs: '[^']*',\n", '', content)
content = re.sub(r"    labelEn: '[^']*',\n", '', content)

# 7. Fix key and label rendering in TokenAllocationBars
content = content.replace('key={item.labelEn}', 'key={i}')
content = content.replace('{item.labelEn}', '{allocLabels[i]}')

# 8. Update TokenAllocationBars to use translations
content = content.replace(
    'function TokenAllocationBars({ isDark, lang }: { isDark: boolean; lang: string })',
    'function TokenAllocationBars({ isDark }: { isDark: boolean })'
)

content = content.replace(
    '  const ref = useRef(null);',
    '  const td2 = useTD();\n  const allocLabels = td2(\'token.alloc.labels\');\n  const ref = useRef(null);'
)

# 9. Fix parent component
content = content.replace(
    '<TokenAllocationBars isDark={isDark} lang={lang} />',
    '<TokenAllocationBars isDark={isDark} />'
)

# 10. Fix imports
content = content.replace(
    "import { useT, useLangStore } from '@/store/lang-store';",
    "import { useT, useTD } from '@/store/lang-store';"
)

# 11. Remove unused lang variable
content = content.replace("  const { lang } = useLangStore();\n", '')

with open('/home/z/my-project/src/components/qfs/home-page-2.tsx', 'w') as f:
    f.write(content)

print('home-page-2.tsx fixed successfully')