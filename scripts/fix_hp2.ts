import re

with open('/home/z/my-project/src/components/qfs/home-page-2.tsx', 'r') as f:
    content = f.read()

# 1. Fix import
content = content.replace(
    "import { useT, useLangStore } from '@/store/lang-store';",
    "import { useT, useTD } from '@/store/lang-store';",
)
# 2. Remove unused lang variable
content = content.replace("  const { lang } = useLangStore();\n", '')

# 3. Token Distribution subtitle
content = content.replace(
    'Token Distribution',
    "{t('token.alloc.subtitle')}",
)

# 4. Allocation title: QFS Token -> t('token.alloc.title1'), Allocation -> t('token.alloc.title2')
content = content.replace(
    '<span className="gradient-text">QFS Token</span>{' '}',
    '<span className="gradient-text">{t(\'token.alloc.title1\')}</span>{' '}',
)
content = content.replace(
    '>Allocation</span>',
    '>{t(\'token.alloc.title2\')}</span>',
)

# 5. Reference Supply
content = content.replace(
    '— Reference Supply*',
    '— {t(\'token.alloc.supply\')}',
)

# 6. Join Community
content = content.replace(
    'Join Community',
    "{t(\'cta.join_btn\')}",
)

# 7. Footnote
content = content.replace(
    '* Reference supply subject to adjustments based on ecosystem development.',
    "{t(\'token.alloc.footnote\')}",
)

# 8. Remove labelEs and labelEn from allocationData
content = re.sub(r"    labelEs: '[^']*',\n", '', content)
content = re.sub(r"    labelEn: '[^']*',\n", '', content)

# 9. Fix TokenAllocationBars
content = content.replace('key={item.labelEn}', 'key={i}')
content = content.replace('{item.labelEn}', '{allocLabels[i]}')
content = content.replace(
    'function TokenAllocationBars({ isDark, lang }: { isDark: boolean; lang: string })',
    'function TokenAllocationBars({ isDark }: { isDark: boolean })',
)
# 10. Fix parent component call
content = content.replace(
    '<TokenAllocationBars isDark={isDark} lang={lang} />',
    '<TokenAllocationBars isDark={isDark} />',
)

with open('/home/z/my-project/src/components/qfs/home-page-2.tsx', 'w') as f:
    f.write(content)

print('home-page-2.tsx fixed')
