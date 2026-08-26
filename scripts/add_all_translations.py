#!/usr/bin/env python3
"""Add all missing translation keys for nav, roadmap, whitepaper, portal to lang-store.ts"""
import re

LANGS = ['en', 'es', 'fr', 'pt', 'de', 'zh', 'ar', 'th']

def entry(key, translations):
    """Generate a TypeScript entry like:  "key": { en: "...", es: "...", ... },"""
    parts = [f'  "{key}": {{']
    for lang in LANGS:
        val = translations.get(lang, translations.get('en', ''))
        if isinstance(val, list):
            items = ', '.join(f'"{v}"' for v in val)
            parts.append(f'    {lang}: [{items}],')
        else:
            parts.append(f'    {lang}: "{val}",')
    parts.append('  },')
    return '\n'.join(parts)

new_keys = []

# ============================================================
# NAVIGATION KEYS
# ============================================================
new_keys.append(entry('nav.home', {
    'en': 'Home', 'es': 'Inicio', 'fr': 'Accueil', 'pt': 'Início',
    'de': 'Startseite', 'zh': '首页', 'ar': 'الرئيسية', 'th': 'หน้าแรก'
}))
new_keys.append(entry('nav.portal', {
    'en': 'Portal', 'es': 'Portal', 'fr': 'Portail', 'pt': 'Portal',
    'de': 'Portal', 'zh': '门户', 'ar': 'البوابة', 'th': 'พอร์ทัล'
}))
new_keys.append(entry('nav.whitepaper', {
    'en': 'White Paper', 'es': 'Libro Blanco', 'fr': 'Livre Blanc', 'pt': 'Livro Branco',
    'de': 'Whitepaper', 'zh': '白皮书', 'ar': 'الوثيقة التفصيلية', 'th': 'เอกสารขาว'
}))
new_keys.append(entry('nav.roadmap', {
    'en': 'Roadmap', 'es': 'Roadmap', 'fr': 'Feuille de Route', 'pt': 'Roteiro',
    'de': 'Roadmap', 'zh': '路线图', 'ar': 'خريطة الطريق', 'th': 'แผนงาน'
}))
new_keys.append(entry('nav.explore', {
    'en': 'Explore QFS', 'es': 'Explorar QFS', 'fr': 'Explorer QFS', 'pt': 'Explorar QFS',
    'de': 'QFS entdecken', 'zh': '探索QFS', 'ar': 'استكشاف QFS', 'th': 'สำรวจ QFS'
}))
new_keys.append(entry('nav.join', {
    'en': 'Join Community', 'es': 'Unirse a la Comunidad', 'fr': 'Rejoindre la Communauté', 'pt': 'Junte-se à Comunidade',
    'de': 'Community beitreten', 'zh': '加入社区', 'ar': 'انضم للمجتمع', 'th': 'เข้าร่วมชุมชน'
}))

# ============================================================
# ROADMAP KEYS
# ============================================================
new_keys.append(entry('roadmap.badge', {
    'en': 'ROADMAP', 'es': 'ROADMAP', 'fr': 'FEUILLE DE ROUTE', 'pt': 'ROTEIRO',
    'de': 'ROADMAP', 'zh': '路线图', 'ar': 'خريطة الطريق', 'th': 'แผนงาน'
}))
new_keys.append(entry('roadmap.title', {
    'en': 'QFS Roadmap', 'es': 'Roadmap QFS', 'fr': 'Feuille de Route QFS', 'pt': 'Roteiro QFS',
    'de': 'QFS Roadmap', 'zh': 'QFS路线图', 'ar': 'خريطة طريق QFS', 'th': 'แผนงาน QFS'
}))
new_keys.append(entry('roadmap.subtitle', {
    'en': 'Progressive development of the QFS ecosystem through strategic phases, from the base infrastructure to global digital finance.',
    'es': 'Desarrollo progresivo del ecosistema QFS a través de fases estratégicas, desde la infraestructura base hasta las finanzas digitales globales.',
    'fr': 'Développement progressif de l’écosystème QFS à travers des phases stratégiques, de l’infrastructure de base à la finance numérique mondiale.',
    'pt': 'Desenvolvimento progressivo do ecossistema QFS através de fases estratégicas, da infraestrutura base às finanças digitais globais.',
    'de': 'Progressive Entwicklung des QFS-Ökosystems durch strategische Phasen, von der Basisinfrastruktur bis zur globalen Digitalfinanz.',
    'zh': '通过战略阶段逐步发展QFS生态系统，从基础设施到全球数字金融。',
    'ar': 'التطوير التدريجي لنظام QFS عبر مراحل استراتيجية، من البنية التحتية الأساسية إلى التمويل الرقمي العالمي.',
    'th': 'พัฒนาระบบนิเวศ QFS อย่างเป็นขั้นตอนกลยุทธ์ ตั้งแต่โครงสร้างพื้นฐานจนถึงการเงินดิจิทัลระดับโลก'
}))

# Ecosystem Map
new_keys.append(entry('roadmap.eco.badge', {
    'en': 'Ecosystem Map', 'es': 'Mapa del Ecosistema', 'fr': 'Carte de l’Écosystème', 'pt': 'Mapa do Ecossistema',
    'de': 'Ökosystem-Karte', 'zh': '生态系统图', 'ar': 'خريطة النظام', 'th': 'แผนที่ระบบนิเวศ'
}))
new_keys.append(entry('roadmap.eco.title1', {
    'en': 'One Ecosystem.', 'es': 'Un Ecosistema.', 'fr': 'Un Écosystème.', 'pt': 'Um Ecossistema.',
    'de': 'Ein Ökosystem.', 'zh': '一个生态系统。', 'ar': 'نظام واحد.', 'th': 'หนึ่งระบบนิเวศ'
}))
new_keys.append(entry('roadmap.eco.title2', {
    'en': 'Multiple Services.', 'es': 'Múltiples Servicios.', 'fr': 'De Multiples Services.', 'pt': 'Múltiplos Serviços.',
    'de': 'Mehrere Dienste.', 'zh': '多种服务。', 'ar': 'خدمات متعددة.', 'th': 'บริการหลายประเภท'
}))

# Ecosystem nodes (array of pairs: name, sub)
new_keys.append(entry('roadmap.eco.nodes', {
    'en': ['QFS Core', 'Infrastructure', 'QFS Wallet', 'Digital Asset Management', 'QFSPay', 'Digital Payments', 'QFS Exchange DEX', 'Decentralized Trading', 'QFS Quantum Cards', 'Digital-to-Physical', 'QFS AI', 'Intelligent Tools', 'QFS Multichain', 'Blockchain Interop', 'QFS Financial Services', 'Digital Economy'],
    'es': ['QFS Core', 'Infraestructura', 'QFS Wallet', 'Gestión de Activos Digitales', 'QFSPay', 'Pagos Digitales', 'QFS Exchange DEX', 'Trading Descentralizado', 'QFS Quantum Cards', 'Digital a Físico', 'QFS AI', 'Herramientas Inteligentes', 'QFS Multichain', 'Interop Blockchain', 'QFS Servicios Financieros', 'Economía Digital'],
    'fr': ['QFS Core', 'Infrastructure', 'QFS Wallet', 'Gestion d’Actifs Numériques', 'QFSPay', 'Paiements Numériques', 'QFS Exchange DEX', 'Trading Décentralisé', 'QFS Quantum Cards', 'Numérique vers Physique', 'QFS AI', 'Outils Intelligents', 'QFS Multichain', 'Interop Blockchain', 'QFS Services Financiers', 'Économie Numérique'],
    'pt': ['QFS Core', 'Infraestrutura', 'QFS Wallet', 'Gestão de Ativos Digitais', 'QFSPay', 'Pagamentos Digitais', 'QFS Exchange DEX', 'Trading Descentralizado', 'QFS Quantum Cards', 'Digital para Físico', 'QFS AI', 'Ferramentas Inteligentes', 'QFS Multichain', 'Interop Blockchain', 'QFS Serviços Financeiros', 'Economia Digital'],
    'de': ['QFS Core', 'Infrastruktur', 'QFS Wallet', 'Digital-Asset-Verwaltung', 'QFSPay', 'Digitale Zahlungen', 'QFS Exchange DEX', 'Dezentraler Handel', 'QFS Quantum Cards', 'Digital-zu-Physisch', 'QFS AI', 'Intelligente Werkzeuge', 'QFS Multichain', 'Blockchain-Interop', 'QFS Finanzdienstleistungen', 'Digitale Wirtschaft'],
    'zh': ['QFS Core', '基础设施', 'QFS Wallet', '数字资产管理', 'QFSPay', '数字支付', 'QFS Exchange DEX', '去中心化交易', 'QFS Quantum Cards', '数字到实体', 'QFS AI', '智能工具', 'QFS Multichain', '区块链互操', 'QFS金融服务', '数字经济'],
    'ar': ['QFS Core', 'البنية التحتية', 'QFS Wallet', 'إدارة الأصول الرقمية', 'QFSPay', 'الدفع الرقمي', 'QFS Exchange DEX', 'التداول اللامركزي', 'QFS Quantum Cards', 'رقمي إلى فيزيائي', 'QFS AI', 'أدوات ذكية', 'QFS Multichain', 'تشابكية البلوكتشين', 'QFS الخدمات المالية', 'الاقتصاد الرقمي'],
    'th': ['QFS Core', 'โครงสร้างพื้นฐาน', 'QFS Wallet', 'การจัดการสินทรัพย์ดิจิทัล', 'QFSPay', 'การชำระเงินดิจิทัล', 'QFS Exchange DEX', 'การ๋ื้อขายแบบกระจายศูนย์', 'QFS Quantum Cards', 'ดิจิทัลสู่ทางกายฟิสิกส์', 'QFS AI', 'เครื่องมืออัจจริย์', 'QFS Multichain', 'การทำงานร่วมกันของบล็อกเชน', 'QFS บริการทางการเงิน', 'เศรษฐกิจดิจิทัล']
}))

# Timeline
new_keys.append(entry('roadmap.tl.badge', {
    'en': 'Timeline', 'es': 'Línea de Tiempo', 'fr': 'Chronologie', 'pt': 'Linha do Tempo',
    'de': 'Zeitlinie', 'zh': '时间线', 'ar': 'الجدول الزمني', 'th': 'เส้นเวลา'
}))
new_keys.append(entry('roadmap.tl.title1', {
    'en': 'Development', 'es': 'Desarrollo', 'fr': 'Développement', 'pt': 'Desenvolvimento',
    'de': 'Entwicklung', 'zh': '开发', 'ar': 'التطوير', 'th': 'การพัฒนา'
}))
new_keys.append(entry('roadmap.tl.title2', {
    'en': 'Phases', 'es': 'Fases', 'fr': 'Phases', 'pt': 'Fases',
    'de': 'Phasen', 'zh': '阶段', 'ar': 'المراحل', 'th': 'ขั้นตอน'
}))

# Phase 1
new_keys.append(entry('roadmap.p1.title', {
    'en': 'Foundation', 'es': 'Fundamentos', 'fr': 'Fondations', 'pt': 'Fundamentos',
    'de': 'Grundlage', 'zh': '基础', 'ar': 'الأساس', 'th': 'รากฐาน'
}))
new_keys.append(entry('roadmap.p1.desc', {
    'en': 'Building the technological foundations and core products of the QFS ecosystem.',
    'es': 'Construyendo los cimientos tecnológicos y productos centrales del ecosistema QFS.',
    'fr': 'Construction des fondations technologiques et des produits centraux de l’écosystème QFS.',
    'pt': 'Construindo os alicerces tecnológicos e produtos centrais do ecossistema QFS.',
    'de': 'Aufbau der technologischen Grundlagen und Kernprodukte des QFS-Ökosystems.',
    'zh': '构建QFS生态系统的技术基础和核心产品。',
    'ar': 'بناء الأسس التقنية والمنتجات الأساسية لنظام QFS.',
    'th': 'สร้างรากฐานทางเทคโนโลยีและผลิตภัณฑหลักของระบบนิเวศ QFS'
}))
new_keys.append(entry('roadmap.p1.items', {
    'en': ['QFS Core infrastructure development', 'QFS Wallet launch and evolution', 'QFSPay system development', 'QFS Exchange DEX architecture design', 'Multi-layered security implementation', 'Initial ecosystem integration', 'Initial security audits', 'Technical community establishment'],
    'es': ['Desarrollo de infraestructura QFS Core', 'Lanzamiento y evolución de QFS Wallet', 'Desarrollo del sistema QFSPay', 'Diseño de arquitectura QFS Exchange DEX', 'Implementación de seguridad multicapa', 'Integración inicial del ecosistema', 'Auditorías de seguridad iniciales', 'Establecimiento de comunidad técnica'],
    'fr': ['Développement de l’infrastructure QFS Core', 'Lancement et évolution de QFS Wallet', 'Développement du système QFSPay', 'Conception de l’architecture QFS Exchange DEX', 'Mise en œuvre de la sécurité multicouche', 'Intégration initiale de l’écosystème', 'Audits de sécurité initiaux', 'Établissement de la communauté technique'],
    'pt': ['Desenvolvimento de infraestrutura QFS Core', 'Lançamento e evolução do QFS Wallet', 'Desenvolvimento do sistema QFSPay', 'Design de arquitetura QFS Exchange DEX', 'Implementação de segurança multicamadas', 'Integração inicial do ecossistema', 'Auditorias de segurança iniciais', 'Estabelecimento da comunidade técnica'],
    'de': ['QFS Core-Infrastrukturentwicklung', 'QFS Wallet Launch und Evolution', 'QFSPay-Systementwicklung', 'QFS Exchange DEX Architekturentwurf', 'Mehrschichtige Sicherheitsimplementierung', 'Initiale Ökosystemintegration', 'Initiale Sicherheitsaudits', 'Aufbau der technischen Community'],
    'zh': ['QFS Core基础设施开发', 'QFS Wallet发布与进化', 'QFSPay系统开发', 'QFS Exchange DEX架构设计', '多层安全实施', '初始生态系统集成', '初始安全审计', '技术社区建立'],
    'ar': ['تطوير بنية QFS Core التحتية', 'إطلاق محفظة QFS وتطويرها', 'تطوير نظام QFSPay', 'تصميم بنية QFS Exchange DEX', 'تنفيذ الأمان متعدد الطبقات', 'التكامل الأولي للنظام', 'التدقيقات الأمنية الأولية', 'تأسيس المجتمع التقني'],
    'th': ['การพัฒนาโครงสร้างพื้นฐาน QFS Core', 'การเปิดตัวและการพัฒนา QFS Wallet', 'การพัฒนาระบบ QFSPay', 'การออกแบบสถาปัตยกรม QFS Exchange DEX', 'การนำความปลอดภัยแบบหลายชั้น', 'การผสานระบบนิเวศเบื้องต้น', 'การตรวจสอบความปลอดภัยเบื้องต้น', 'การสร้างชุมชนทางเทคนิค']
}))

# Phase 2
new_keys.append(entry('roadmap.p2.title', {
    'en': 'Expansion', 'es': 'Expansión', 'fr': 'Expansion', 'pt': 'Expansão',
    'de': 'Expansion', 'zh': '扩展', 'ar': 'التوسع', 'th': 'การขยายตัว'
}))
new_keys.append(entry('roadmap.p2.desc', {
    'en': 'Multichain expansion, new assets and institutional tool development.',
    'es': 'Expansión multichain, nuevos activos y desarrollo de herramientas institucionales.',
    'fr': 'Expansion multichaîne, nouveaux actifs et développement d’outils institutionnels.',
    'pt': 'Expansão multichain, novos ativos e desenvolvimento de ferramentas institucionais.',
    'de': 'Multichain-Expansion, neue Assets und Entwicklung institutioneller Werkzeuge.',
    'zh': '多链扩展、新资产和机构工具开发。',
    'ar': 'التوسع متعدد السلاسل وتطوير الأدوات المؤسسية والأصول الجديدة.',
    'th': 'การขยายตัวแบบหลายเชน สินทรัพย์ใหม่ และการพัฒนาเครื่องมือสถาบัน'
}))
new_keys.append(entry('roadmap.p2.items', {
    'en': ['Expansion to multiple blockchains', 'Integration of new digital assets', 'QFS Quantum Cards development', 'APIs for enterprises and developers', 'Institutional tools (treasury, compliance)', 'Initial international expansion', 'GCRM Alliance integration', 'Collaboration with Al Arab for MENA markets'],
    'es': ['Expansión a múltiples blockchains', 'Integración de nuevos activos digitales', 'Desarrollo de QFS Quantum Cards', 'APIs para empresas y desarrolladores', 'Herramientas institucionales (tesorería, cumplimiento)', 'Expansión internacional inicial', 'Integración de Alianza GCRM', 'Colaboración con Al Arab para mercados MENA'],
    'fr': ['Expansion vers plusieurs blockchains', 'Intégration de nouveaux actifs numériques', 'Développement de QFS Quantum Cards', 'APIs pour entreprises et développeurs', 'Outils institutionnels (trésorerie, conformité)', 'Expansion internationale initiale', 'Intégration de l’Alliance GCRM', 'Collaboration avec Al Arab pour les marchés MENA'],
    'pt': ['Expansão para múltiplas blockchains', 'Integração de novos ativos digitais', 'Desenvolvimento de QFS Quantum Cards', 'APIs para empresas e desenvolvedores', 'Ferramentas institucionais (tesouraria, conformidade)', 'Expansão internacional inicial', 'Integração da Aliança GCRM', 'Colaboração com Al Arab para mercados MENA'],
    'de': ['Expansion auf mehrere Blockchains', 'Integration neuer digitaler Assets', 'Entwicklung von QFS Quantum Cards', 'APIs für Unternehmen und Entwickler', 'Institutionelle Werkzeuge (Treasury, Compliance)', 'Initiale internationale Expansion', 'GCRM-Allianz-Integration', 'Zusammenarbeit mit Al Arab für MENA-Märkte'],
    'zh': ['扩展到多条区块链', '整合新的数字资产', 'QFS Quantum Cards开发', '企业和开发者API', '机构工具（国库、合规）', '初始国际扩展', 'GCRM联盟整合', '与Al Arab合作拓展MENA市场'],
    'ar': ['التوسع إلى عدة بلوكتشينات', 'دمج أصول رقمية جديدة', 'تطوير بطاقات QFS الكمية', 'APIs للمؤسسات والمطورين', 'أدوات مؤسسية (الخزانة، الامتثال)', 'التوسع الدولي الأولي', 'دمج تحالف GCRM', 'التعاون مع Al Arab لأسواق MENA'],
    'th': ['ขยายไปสู่หลายบล็อกเชน', 'การผสานสินทรัพย์ดิจิทัลใหม่', 'การพัฒนา QFS Quantum Cards', 'APIs สำหรับองค์กรและนักพัฒนา', 'เครื่องมือสถาบัน (คลังคลานด์, การปฏิบัติ)', 'การขยายตัวระหว่างประเทศเบื้องต้น', 'การผสานพันธมิตร GCRM', 'ความร่วมมือกับ Al Arab สำหรับตลาด MENA']
}))

# Phase 3
new_keys.append(entry('roadmap.p3.title', {
    'en': 'Interoperability', 'es': 'Interoperabilidad', 'fr': 'Interopérabilité', 'pt': 'Interoperabilidade',
    'de': 'Interoperabilität', 'zh': '互操作性', 'ar': 'التشابكية', 'th': 'การทำงานร่วมกัน'
}))
new_keys.append(entry('roadmap.p3.desc', {
    'en': 'Greater integration between networks, asset tokenization and complete digital financial services.',
    'es': 'Mayor integración entre redes, tokenización de activos y servicios financieros digitales completos.',
    'fr': 'Intégration accrue entre réseaux, tokenisation d’actifs et services financiers numériques complets.',
    'pt': 'Maior integração entre redes, tokenização de ativos e serviços financeiros digitais completos.',
    'de': 'Größere Integration zwischen Netzwerken, Asset-Tokenisierung und vollständige digitale Finanzdienstleistungen.',
    'zh': '网络间更深入的集成、资产通证化和完整的数字金融服务。',
    'ar': 'تكامل أكبر بين الشبكات وترقيم الأصول وخدمات التمويل الرقمية الكاملة.',
    'th': 'การผสานที่มากขึ้นระหว่างเครือข่าย การทำโทกันสินทรัพย์ และบริการทางการเงินดิจิทัลอย่างสมบูรณ์'
}))
new_keys.append(entry('roadmap.p3.items', {
    'en': ['Advanced blockchain network integration', 'Real World Asset (RWA) tokenization', 'Complete digital financial services', 'Mature institutional infrastructure', 'CBDC and government currency integration', 'QFS ecosystem expansion', 'Operational decentralized governance'],
    'es': ['Integración avanzada de redes blockchain', 'Tokenización de activos del mundo real (RWA)', 'Servicios financieros digitales completos', 'Infraestructura institucional madura', 'Integración de CBDCs y monedas gubernamentales', 'Expansión del ecosistema QFS', 'Gobernanza descentralizada operativa'],
    'fr': ['Intégration avancée de réseaux blockchain', 'Tokenisation d’actifs du monde réel (RWA)', 'Services financiers numériques complets', 'Infrastructure institutionnelle mature', 'Intégration des CBDC et monnaies gouvernementales', 'Expansion de l’écosystème QFS', 'Gouvernance décentralisée opérationnelle'],
    'pt': ['Integração avançada de redes blockchain', 'Tokenização de ativos do mundo real (RWA)', 'Serviços financeiros digitais completos', 'Infraestrutura institucional madura', 'Integração de CBDCs e moedas governamentais', 'Expansão do ecossistema QFS', 'Governança descentralizada operacional'],
    'de': ['Erweiterte Blockchain-Netzwerkintegration', 'Real-World-Asset (RWA) Tokenisierung', 'Vollständige digitale Finanzdienstleistungen', 'Reife institutionelle Infrastruktur', 'CBDC- und Regierungswährungsintegration', 'QFS-Ökosystem-Expansion', 'Operative dezentrale Governance'],
    'zh': ['高级区块链网络集成', '真实世界资产（RWA）通证化', '完整的数字金融服务', '成熟的机构基础设施', 'CBDC和政府货币集成', 'QFS生态系统扩展', '运营中的去中心化治理'],
    'ar': ['تكامل متقدم لشبكات البلوكتشين', 'ترقيم أصول العالم الحقيقي (RWA)', 'خدمات مالية رقمية كاملة', 'بنية تحتية مؤسسية ناضجة', 'دمج CBDCs والعملات الحكومية', 'توسع نظام QFS', 'حكمة لامركزية تشغيلية'],
    'th': ['การผสานเครือข่ายบล็อกเชนขั้นสูง', 'การทำโทกันสินทรัพย์โลกจริง (RWA)', 'บริการทางการเงินดิจิทัลอย่างสมบูรณ์', 'โครงสร้างพื้นฐานสถาบันที่เจริญพร้อม', 'การผสาน CBDCs และสกุลเงินรัฐบาล', 'การขยายตัวของระบบนิเวศ QFS', 'การปกครองแบบกระจายศูนย์ที่ดำเนินการ']
}))

# Phase 4
new_keys.append(entry('roadmap.p4.title', {
    'en': 'Global Digital Finance', 'es': 'Finanzas Digitales Globales', 'fr': 'Finance Numérique Mondiale', 'pt': 'Finanças Digitais Globais',
    'de': 'Globale Digitalfinanz', 'zh': '全球数字金融', 'ar': 'التمويل الرقمي العالمي', 'th': 'การเงินดิจิทัลระดับโลก'
}))
new_keys.append(entry('roadmap.p4.desc', {
    'en': 'Progressive construction of a global, interoperable and accessible digital financial infrastructure.',
    'es': 'Construcción progresiva de una infraestructura financiera digital global, interoperable y accesible.',
    'fr': 'Construction progressive d’une infrastructure financière numérique mondiale, interopérable et accessible.',
    'pt': 'Construção progressiva de uma infraestrutura financeira digital global, interoperável e acessível.',
    'de': 'Progressiver Aufbau einer globalen, interoperablen und zugänglichen digitalen Finanzinfrastruktur.',
    'zh': '逐步构建全球性、互操作且可及的数字金融基础设施。',
    'ar': 'البناء التدريجي لبنية تحتية مالية رقمية عالمية قابلة للتشابك والوصول.',
    'th': 'การสร้างโครงสร้างพื้นฐานทางการเงินดิจิทัลระดับโลกที่สามารถทำงานร่วมกันและเข้าถึงได้อย่างเป็นขั้นตอน'
}))
new_keys.append(entry('roadmap.p4.items', {
    'en': ['Global digital financial infrastructure', 'Full connectivity between networks and assets', 'Massive adoption of QFS services', 'Fully integrated digital economy', 'Continuous innovation with emerging technologies'],
    'es': ['Infraestructura financiera digital global', 'Conectividad total entre redes y activos', 'Adopción masiva de servicios QFS', 'Economía digital totalmente integrada', 'Innovación continua con tecnologías emergentes'],
    'fr': ['Infrastructure financière numérique mondiale', 'Connectivité totale entre réseaux et actifs', 'Adoption massive des services QFS', 'Économie numérique pleinement intégrée', 'Innovation continue avec les technologies émergentes'],
    'pt': ['Infraestrutura financeira digital global', 'Conectividade total entre redes e ativos', 'Adoção massiva de serviços QFS', 'Economia digital totalmente integrada', 'Inovação contínua com tecnologias emergentes'],
    'de': ['Globale digitale Finanzinfrastruktur', 'Vollständige Konnektivität zwischen Netzwerken und Assets', 'Massive Adoption von QFS-Diensten', 'Vollständig integrierte digitale Wirtschaft', 'Kontinuierliche Innovation mit aufstrebenden Technologien'],
    'zh': ['全球数字金融基础设施', '网络和资产间的全面互联', 'QFS服务的大规模采用', '全面集成的数字经济', '与新兴技术的持续创新'],
    'ar': ['بنية تحتية مالية رقمية عالمية', 'اتصال كامل بين الشبكات والأصول', 'اعتماد واسع لخدمات QFS', 'اقتصاد رقمي متكامل بالكامل', 'ابتكار مستمر مع التقنيات الناشئة'],
    'th': ['โครงสร้างพื้นฐานทางการเงินดิจิทัลระดับโลก', 'การเชื่อมต่อกันอย่างเต็มที่ระหว่างเครือข่ายและสินทรัพย์', 'การนำรับบริการ QFS ในระดับขนาด', 'เศรษฐกิจดิจิทัลที่ผสานอย่างเต็มที่', 'นวัตกรรมต่อเนื่องกับเทคโนโลยีที่กำลังเกิดขึ้น']
}))

print(f"Generated {len(new_keys)} translation key blocks")

# Read current file
with open('/home/z/my-project/src/store/lang-store.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the closing }; of the t object - it's before 'export function useT'
marker = "export function useT()"
if marker not in content:
    print("ERROR: Could not find 'export function useT()' in lang-store.ts")
    exit(1)

# Insert new keys before the closing }; that precedes useT
# The pattern is: \n};\n\nexport function useT
insertion_point = content.index(marker)
# Find the }; before it
semi_pos = content.rfind('};', 0, insertion_point)
if semi_pos == -1:
    print("ERROR: Could not find closing }; before useT")
    exit(1)

new_content = content[:semi_pos] + '\n'.join(new_keys) + '\n' + content[semi_pos:]

with open('/home/z/my-project/src/store/lang-store.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added translation keys to lang-store.ts")