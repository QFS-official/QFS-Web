import re, json

with open('/home/z/my-project/src/store/lang-store.ts', 'r') as f:
    content = f.read()

# Add 'th' to Lang type
content = content.replace(
    "type Lang = 'en' | 'es' | 'fr' | 'pt' | 'de' | 'zh' | 'ar';",
    "type Lang = 'en' | 'es' | 'fr' | 'pt' | 'de' | 'zh' | 'ar' | 'th';"
)

# Thai translations for all keys
th_translations = {
    "all.arab.name": "Al Arab",
    "all.arab.tag": "การขยายตัวในภูมิภาค",
    "all.desc": "QFS สร้างสะพานความร่วมมือกับองค์กรและรัฐบาลเพื่อสร้างโครงสร้างพื้นฐานทางการเงินระดับโลกที่แท้จริง",
    "all.gcrm.name": "พันธมิตร GCRM",
    "all.gcrm.tag": "พันธมิตรเชิงกลยุทธ์",
    "all.gov.name": "สกุลเงินรัฐบาล",
    "all.gov.tag": "รัฐบาลดิจิทัล",
    "all.subtitle": "พันธมิตรเชิงกลยุทธ์",
    "all.title": "พันธมิตร",
    "all.title2": "ระดับโลก",
    "cta.desc": "QFS ไม่ใช่แค่วอลเล็ต ไม่ใช่แค่การชำระเงิน ไม่ใช่แค่แลกเปลี่ยน แต่เป็นระบบนิเวศทางการเงินดิจิทัลแบบบูรณาการที่ออกแบบมาสำหรับยุคถัดไปของเศรษฐกิจโลก",
    "cta.title1": "สร้างอนาคต",
    "cta.title2": "แห่งการเงินดิจิทัล",
    "eco.desc": "สถาปัตยกรรมทางการเงินแบบโมดูลาร์ที่ผสานรวมบริการต่างๆ ไว้ในระบบนิเวศดิจิทัลเดียว",
    "eco.subtitle": "ระบบนิเวศ",
    "eco.title": "ระบบนิเวศ QFS",
    "faq.subtitle": "คำถามที่พบบ่อย",
    "faq.title": "คำถามที่พบบ่อย",
    "hero.badge": "QUANTUM FINANCIAL SYSTEM",
    "hero.desc": "QFS Official พัฒนาโครงสร้างพื้นฐานทางการเงินดิจิทัลใหม่ที่ผสานรวมบล็อกเชน ปัญญาประดิษฐ์ ความปลอดภัยทางการเข้ารหัสขั้นสูง การชำระเงินดิจิทัล และบริการทางการเงินแบบกระจายศูนย์",
    "hero.explore_btn": "สำรวจ QFS",
    "hero.qfspay": "QFSPay",
    "hero.tags.connectivity": "การเชื่อมต่อระดับโลก",
    "hero.tags.decentralization": "การกระจายอำนาจ",
    "hero.tags.finance": "การเงินดิจิทัล",
    "hero.tags.security": "ความปลอดภัย",
    "hero.tags.technology": "เทคโนโลยี",
    "hero.title1": "อนาคตของ",
    "hero.title2": "การเงินดิจิทัล",
    "hero.wallet": "QFS Wallet",
    "nav.explore": "สำรวจ QFS",
    "nav.home": "หน้าแรก",
    "nav.join": "เข้าร่วมชุมชน",
    "nav.portal": "พอร์ทัล",
    "nav.roadmap": "แผนงาน",
    "nav.subtitle": "QUANTUM FINANCIAL SYSTEM",
    "nav.whitepaper": "เอกสารขาว",
    "pil.desc": "QFS เสนอสถาปัตยกรรมทางการเงินใหม่บนพื้นฐานหลักการที่จะเปลี่ยนแปลงเศรษฐกิจดิจิทัล",
    "pil.subtitle": "สถาปัตยกรรม",
    "pil.title1": "ห้า",
    "pil.title2": "เสาหลัก",
    "pil.title3": "พื้นฐาน",
    "prod.ai.subtitle": "การเงินอัจฉริยะ",
    "prod.ai.title": "QFS + AI",
    "prod.cards.subtitle": "ดิจิทัลสู่กายภาพ",
    "prod.cards.title": "QFS Quantum Cards",
    "prod.dex.subtitle": "การซื้อขายแบบกระจายศูนย์",
    "prod.dex.title": "QFS Exchange DEX",
    "prod.qfspay.subtitle": "การชำระเงินดิจิทัล",
    "prod.qfspay.title": "QFSPay",
    "prod.subtitle": "สินค้า",
    "prod.title": "สินค้า QFS",
    "prod.wallet.balance": "ยอดคงเหลือทั้งหมด",
    "prod.wallet.desc": "จุดเข้าถึงระบบนิเวศ QFS ของผู้ใช้ จัดการสินทรัพย์ดิจิทัลหลายประเภทจากอินเทอร์เฟซเดียวพร้อมความปลอดภัยขั้นสูง",
    "prod.wallet.month": "เดือนนี้",
    "prod.wallet.subtitle": "ศูนย์กลางการเงินดิจิทัลของคุณ",
    "prod.wallet.title": "QFS Wallet",
    "sec.desc": "ความปลอดภัยเป็นหนึ่งในเสาหลักพื้นฐานของระบบนิเวศ QFS ออกแบบมาให้วิวัฒนาการพร้อมกับภัยคุกคามดิจิทัลใหม่ๆ ผ่านสถาปัตยกรรมความปลอดภัยหลายชั้น",
    "sec.subtitle": "ความปลอดภัย",
    "sec.title": "QFS Security",
    "why.access": "การเข้าถึง",
    "why.access.desc": "บริการทางการเงินที่เข้าถึงได้จากแพลตฟอร์มบูรณาการ",
    "why.innovation": "นวัตกรรม",
    "why.innovation.desc": "บล็อกเชน + AI + การเข้ารหัส + การเงินดิจิทัล",
    "why.interop": "การทำงานร่วมกัน",
    "why.interop.desc": "การเชื่อมต่อระหว่างเครือข่ายและสินทรัพย์ต่างๆ",
    "why.security": "ความปลอดภัย",
    "why.security.desc": "โครงสร้างพื้นฐานที่ออกแบบโดยให้ความปลอดภัยเป็น first priority อันดับหนึ่ง",
    "why.speed": "ความเร็ว",
    "why.speed.desc": "การประมวลผลดิจิทัลที่มีประสิทธิภาพและขยายได้",
    "why.subtitle": "ทำไมต้อง QFS",
    "why.title": "ทำไมต้อง QFS?",
    "why.transparency": "ความโปร่งใส",
    "why.transparency.desc": "เทคโนโลยีบล็อกเชนและบันทึกที่ตรวจสอบได้",
    "foot.copyright.prefix": "QFS Official",
    "foot.tagline": "รุ่นถัดไปของการเงินดิจิทัล เทคโนโลยี ความปลอดภัย การกระจายอำนาจ นวัตกรรม",
    "foot.products": "สินค้า",
    "foot.resources": "ทรัพยากร",
    "foot.alliances": "พันธมิตร",
    "foot.technology": "เทคโนโลยี",
    "foot.finance": "การเงิน",
    "foot.security_footer": "ความปลอดภัย",
    "foot.decentralization": "การกระจายอำนาจ",
    "foot.innovation": "นวัตกรรม",
}

# Add th: to each key in t object
for key, th_val in th_translations.items():
    # Pattern: find the line with the key and add th translation
    # Match patterns like: "key": { en: "...", es: "...", ..., ar: "..." },
    # We need to add th: "value" before the closing }
    
    # Escape special regex chars in key
    escaped_key = key.replace('.', r'\.')
    
    # Pattern to find the translation object for this key
    # We look for the line containing the key definition
    pattern = rf'("{escaped_key}"\s*:\s*\{{[^}}]*?ar:\s*"[^"]*"")'
    
    def add_th(match):
        original = match.group(1)
        # Add th before the closing }
        return original + f', th: "{th_val}"'
    
    content = re.sub(pattern, add_th, content)

# Add th to td (dynamic translations)
# qfspay.features
th_qfspay = '["การชำระเงินดิจิทัล", "การโอน P2P", "การชำระเงินธุรกิจ", "การแลกเปลี่ยนสินทรัพย์", "API สำหรับนักพัฒนา", "โซลูชันองค์กร"]'
th_dex = '["การแลกเปลี่ยนสินทรัพย์", "สระสุทธิสภาพ", "การทำงานร่วมกันหลายเชน", "เครื่องมือตลาด", "สมาร์ทคอนแทร็กต์", "การกำกับดูแลแบบกระจายศูนย์"]'
th_ai = '["AI Security", "ตรวจจับธุรกรรมผิดปกติ", "AI Risk Monitoring", "การวิเคราะห์ความเสี่ยง", "AI Financial Assistance", "เครื่องมืออัจฉริยะ", "AI Compliance", "ระบบรับรองความปฏิบัติตามกฎหมาย"]'

# Find td entries and add th
content = re.sub(
    r'(  "qfspay\.features":\s*\{[^}]*?ar:\s*\[[^\]]*\])',
    lambda m: m.group(1) + ',\n    th: ' + th_qfspay,
    content
)
content = re.sub(
    r'(  "dex\.features":\s*\{[^}]*?ar:\s*\[[^\]]*\])',
    lambda m: m.group(1) + ',\n    th: ' + th_dex,
    content
)
content = re.sub(
    r'(  "ai\.items":\s*\{[^}]*?ar:\s*\[[^\]]*\])',
    lambda m: m.group(1) + ',\n    th: ' + th_ai,
    content
)

with open('/home/z/my-project/src/store/lang-store.ts', 'w') as f:
    f.write(content)

print('Thai language added successfully!')
