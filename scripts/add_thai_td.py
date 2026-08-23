import re

with open('/home/z/my-project/src/store/lang-store.ts', 'r') as f:
    c = f.read()

# Thai td translations
th_qfspay = '["การชำระเงินดิจิทัล", "การโอน P2P", "การชำระเงินธุรกิจ", "การแลกเปลี่ยนสินทรัพย์", "API สำหรับนักพัฒนา", "โซลูชันองค์กร"]'
th_dex = '["การแลกเปลี่ยนสินทรัพย์", "สระสุทธิสภาพ", "การทำงานร่วมกันหลายเชน", "เครื่องมือตลาด", "สมาร์ทคอนแทร็กต์", "การกำกับดูแลแบบกระจายศูนย์"]'
th_ai = '["AI Security", "ตรวจจับธุรกรรมผิดปกติ", "AI Risk Monitoring", "การวิเคราะห์ความเสี่ยง", "AI Financial Assistance", "เครื่องมืออัจฉริยะ", "AI Compliance", "ระบบรับรองความปฏิบัติตามกฎหมาย"]'

# Add th to qfspay.features - match the ar: line and add th after it
c = re.sub(
    r'(ar: \[".*?"\]),\n  \},\n  "dex',
    lambda m: m.group(1) + ',\n    th: ' + th_qfspay + ',\n  },\n  "dex',
    c
)

# Add th to dex.features
c = re.sub(
    r'(ar: \[".*?"\]),\n  \},\n  "ai',
    lambda m: m.group(1) + ',\n    th: ' + th_dex + ',\n  },\n  "ai',
    c
)

# Add th to ai.items
# Match the last ar: line before the closing }; of td
c = re.sub(
    r'(ar: \[".*?"\]),\n  \},\n\);',
    lambda m: m.group(1) + ',\n    th: ' + th_ai + ',\n  },\n);',
    c
)

with open('/home/z/my-project/src/store/lang-store.ts', 'w') as f:
    f.write(c)

print('Thai td arrays added!')
print(f'th: count in td: {c.count("th: ")}')
