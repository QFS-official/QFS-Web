#!/usr/bin/env python3
"""Add portal and whitepaper translation keys to lang-store.ts"""

LANGS = ['en', 'es', 'fr', 'pt', 'de', 'zh', 'ar', 'th']

def entry(key, translations):
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
# PORTAL KEYS
# ============================================================
new_keys.append(entry('portal.badge', {
    'en': 'GOVERNMENT PORTAL', 'es': 'PORTAL DEL GOBIERNO', 'fr': 'PORTAIL GOUVERNEMENTAL', 'pt': 'PORTAL DO GOVERNO',
    'de': 'REGIERUNGSPORTAL', 'zh': '政府门户', 'ar': 'البوابة الحكومية', 'th': 'พอร์ทัลรัฐบาล'
}))
new_keys.append(entry('portal.title', {
    'en': 'Quantum Financial System', 'es': 'Sistema Financiero Cuántico', 'fr': 'Système Financier Quantique', 'pt': 'Sistema Financeiro Quântico',
    'de': 'Quanten-Finanzsystem', 'zh': '量子金融系统', 'ar': 'النظام المالي الكمي', 'th': 'ระบบการเงินควอนตัม'
}))
new_keys.append(entry('portal.subtitle', {
    'en': 'The official government portal for the next-generation financial infrastructure and QFSpay.',
    'es': 'El portal oficial del gobierno para la infraestructura financiera de próxima generación y QFSpay.',
    'fr': 'Le portail gouvernemental officiel pour l\'infrastructure financière de nouvelle génération et QFSpay.',
    'pt': 'O portal oficial do governo para a infraestrutura financeira de próxima geração e QFSpay.',
    'de': 'Das offizielle Regierungsportal für die Next-Gen-Finanzinfrastruktur und QFSpay.',
    'zh': '下一代金融基础设施和QFSpay的官方政府门户。',
    'ar': 'البوابة الحكومية الرسمية للبنية التحتية المالية من الجيل التالي و QFSpay.',
    'th': 'พอร์ทัลรัฐบาลอย่างเป็นทางการสำหรับโครงสร้างพื้นฐานทางการเงินรุ่นใหม่และ QFSpay'
}))
new_keys.append(entry('portal.gov.vision', {
    'en': 'Government Vision', 'es': 'Visión Gubernamental', 'fr': 'Vision Gouvernementale', 'pt': 'Visão Governamental',
    'de': 'Regierungsvision', 'zh': '政府愿景', 'ar': 'رؤية حكومية', 'th': 'วิสัยทัศน์ของรัฐบาล'
}))
new_keys.append(entry('portal.gov.desc', {
    'en': 'The Quantum Financial System (QFS) represents a revolutionary leap in financial technology, providing a secure, transparent, and efficient platform for global transactions. As part of the NESARA/GESARA economic reforms, QFS establishes a new standard for financial sovereignty and integrity, with QFSpay as its official payment solution.',
    'es': 'El Sistema Financiero Cuántico (QFS) representa un salto revolucionario en la tecnología financiera, proporcionando una plataforma segura, transparente y eficiente para transacciones globales. Como parte de las reformas económicas NESARA/GESARA, QFS establece un nuevo estándar de soberanía e integridad financiera, con QFSpay como su solución de pago oficial.',
    'fr': 'Le Système Financier Quantique (QFS) représente un bond révolutionnaire dans la technologie financière, offrant une plateforme sécurisée, transparente et efficace pour les transactions mondiales. Dans le cadre des réformes économiques NESARA/GESARA, QFS établit une nouvelle norme de souveraineté et d\'intégrité financière, avec QFSpay comme solution de paiement officielle.',
    'pt': 'O Sistema Financeiro Quântico (QFS) representa um salto revolucionário na tecnologia financeira, fornecendo uma plataforma segura, transparente e eficiente para transações globais. Como parte das reformas econômicas NESARA/GESARA, o QFS estabelece um novo padrão de soberania e integridade financeira, com o QFSpay como sua solução de pagamento oficial.',
    'de': 'Das Quanten-Finanzsystem (QFS) repräsentiert einen revolutionären Sprung in der Finanztechnologie und bietet eine sichere, transparente und effiziente Plattform für globale Transaktionen. Als Teil der NESARA/GESARA-Wirtschaftsreformen etabliert QFS einen neuen Standard für finanzielle Souveränität und Integrität, mit QFSpay als offizieller Zahlungslösung.',
    'zh': '量子金融系统（QFS）代表了金融技术的革命性飞跃，为全球交易提供了安全、透明和高效的平台。作为NESARA/GESARA经济改革的一部分，QFS建立了金融主权和完整性的新标准，QFSpay是其官方支付解决方案。',
    'ar': 'يمثل النظام المالي الكمي (QFS) قفزة ثورية في التكنولوجيا المالية، مما يوفر منصة آمنة وشفافة وفعالة للمعاملات العالمية. كجزء من إصلاحات NESARA/GESARA الاقتصادية، يؤسس QFS معياراً جديداً للسيادة المالية والنزاهة، مع QFSpay كحل دفع رسمي.',
    'th': 'ระบบการเงินควอนตัม (QFS) แทนการก้าวกระโดดอย่างมหาศาลในเทคโนโลยีทางการเงิน โดยให้แพลตฟอร์มที่ปลอดภัย โปร่งใส และมีประสิทธิภาพสำหรับธุรกรรมระดับโลก เป็นส่วนหนึ่งของการปฏิรูปเศรษฐกิจ NESARA/GESARA QFS สร้างมาตรฐานใหม่ของอธิปไตยทางการเงินและความสมบูรณ์ โดยมี QFSpay เป็นโซลูชันการชำระเงินอย่างเป็นทางการ'
}))
new_keys.append(entry('portal.gov.features.title', {
    'en': 'Key Features:', 'es': 'Características Clave:', 'fr': 'Caractéristiques Clés :', 'pt': 'Características Principais:',
    'de': 'Hauptmerkmale:', 'zh': '主要特点：', 'ar': 'الميزات الرئيسية:', 'th': 'คุณสมบัติหลัก:'
}))
new_keys.append(entry('portal.gov.features', {
    'en': ['Quantum-secured financial transactions', 'QFSpay - Official government payment solution', 'Instant settlement across borders', 'Complete transparency and auditability', 'Integration with sovereign digital currencies'],
    'es': ['Transacciones financieras aseguradas con quantum', 'QFSpay - Solución de pago oficial del gobierno', 'Liquidación instantánea a través de fronteras', 'Transparencia y auditabilidad completa', 'Integración con monedas digitales soberanas'],
    'fr': ['Transactions financières sécurisées par quantum', 'QFSpay - Solution de paiement gouvernementale officielle', 'Règlement instantané transfrontalier', 'Transparence et auditabilité complètes', 'Intégration avec les monnaies numériques souveraines'],
    'pt': ['Transações financeiras garantidas por quantum', 'QFSpay - Solução de pagamento oficial do governo', 'Liquidação instantânea através de fronteiras', 'Transparência e auditabilidade completas', 'Integração com moedas digitais soberanas'],
    'de': ['Quantum-gesicherte Finanztransaktionen', 'QFSpay - Offizielle Regierungszahlungslösung', 'Grenzüberschreitende Sofortabwicklung', 'Vollständige Transparenz und Prüfbarkeit', 'Integration mit souveränen digitalen Währungen'],
    'zh': ['量子安全金融交易', 'QFSpay - 官方政府支付解决方案', '跨境即时结算', '完全透明和可审计', '与主权数字货币集成'],
    'ar': ['معاملات مالية مؤمنة بالكم', 'QFSpay - حل الدفع الحكومي الرسمي', 'تسوية فورية عبر الحدود', 'شفافية وقابلية تدقيق كاملة', 'الدمج مع العملات الرقمية السيادية'],
    'th': ['ธุรกรรมทางการเงินที่ปลอดภัยด้วยควอนตัม', 'QFSpay - โซลูชันการชำระเงินของรัฐบาลอย่างเป็นทางการ', 'การชำระเงินข้ามพรมแดนทันที', 'ความโปร่งใสและการตรวจสอบได้อย่างสมบูรณ์', 'การผสานรวมกับสกุลเงินดิจิทัลอธิปไตย']
}))
new_keys.append(entry('portal.btn.learn', {
    'en': 'Learn More', 'es': 'Más Información', 'fr': 'En Savoir Plus', 'pt': 'Saiba Mais',
    'de': 'Mehr Erfahren', 'zh': '了解更多', 'ar': 'اعرف المزيد', 'th': 'เรียนรู้เพิ่มเติม'
}))
new_keys.append(entry('portal.btn.tech', {
    'en': 'Technology', 'es': 'Tecnología', 'fr': 'Technologie', 'pt': 'Tecnologia',
    'de': 'Technologie', 'zh': '技术', 'ar': 'التكنولوجيا', 'th': 'เทคโนโลยี'
}))
new_keys.append(entry('portal.g20.title', {
    'en': 'Official Financial Infrastructure of the G20 Nations',
    'es': 'Infraestructura Financiera Oficial de las Naciones del G20',
    'fr': 'Infrastructure Financière Officielle des Nations du G20',
    'pt': 'Infraestrutura Financeira Oficial das Nações do G20',
    'de': 'Offizielle Finanzinfrastruktur der G20-Nationen',
    'zh': 'G20国家官方金融基础设施',
    'ar': 'البنية التحتية المالية الرسمية لدول مجموعة العشرين',
    'th': 'โครงสร้างพื้นฐานทางการเงินอย่างเป็นทางการของประเทศ G20'
}))
new_keys.append(entry('portal.g20.subtitle', {
    'en': 'Supporting the transition to a new era of financial transparency and sovereignty with QFSpay integration',
    'es': 'Apoyando la transición a una nueva era de transparencia y soberanía financiera con la integración de QFSpay',
    'fr': 'Soutenant la transition vers une nouvelle ère de transparence et de souveraineté financière avec l\'intégration QFSpay',
    'pt': 'Apoiando a transição para uma nova era de transparência e soberania financeira com a integração QFSpay',
    'de': 'Unterstützung des Übergangs in eine neue Ära der finanziellen Transparenz und Souveränität mit QFSpay-Integration',
    'zh': '通过QFSpay集成支持向金融透明和主权新时代的过渡',
    'ar': 'دعم الانتقال إلى عصر جديد من الشفافية المالية والسيادة مع دمج QFSpay',
    'th': 'สนับสนุนการเปลี่ยนผ่านสู่ยุคใหม่ของความโปร่งใสและอธิปไตยทางการเงินด้วยการผสานรวม QFSpay'
}))

# About QFS section
new_keys.append(entry('portal.about.label', {
    'en': 'ABOUT', 'es': 'ACERCA DE', 'fr': 'À PROPOS', 'pt': 'SOBRE',
    'de': 'ÜBER', 'zh': '关于', 'ar': 'حول', 'th': 'เกี่ยวกับ'
}))
new_keys.append(entry('portal.about.title', {
    'en': 'A New Digital Infrastructure for Global Finance',
    'es': 'Una Nueva Infraestructura Digital para las Finanzas Globales',
    'fr': 'Une Nouvelle Infrastructure Numérique pour la Finance Mondiale',
    'pt': 'Uma Nova Infraestrutura Digital para as Finanças Globais',
    'de': 'Eine neue digitale Infrastruktur für globale Finanzen',
    'zh': '全球金融的新数字基础设施',
    'ar': 'بنية تحتية رقمية جديدة للتمويل العالمي',
    'th': 'โครงสร้างพื้นฐานดิจิทัลใหม่สำหรับการเงินระดับโลก'
}))
new_keys.append(entry('portal.about.desc', {
    'en': 'Aligned with the vision of NESARA/GESARA economic transformation, the Quantum Financial System (QFS) is presented as a next-generation financial infrastructure designed to support secure, transparent and efficient digital transactions.',
    'es': 'Alineado con la visión de transformación económica NESARA/GESARA, el Sistema Financiero Cuántico (QFS) se presenta como una infraestructura financiera de próxima generación diseñada para soportar transacciones digitales seguras, transparentes y eficientes.',
    'fr': 'En accord avec la vision de transformation économique NESARA/GESARA, le Système Financier Quantique (QFS) est présenté comme une infrastructure financière de nouvelle génération conçue pour soutenir des transactions numériques sécurisées, transparentes et efficaces.',
    'pt': 'Alinhado com a visão de transformação econômica NESARA/GESARA, o Sistema Financeiro Quântico (QFS) é apresentado como uma infraestrutura financeira de próxima geração projetada para suportar transações digitais seguras, transparentes e eficientes.',
    'de': 'Im Einklang mit der Vision der NESARA/GESARA-Wirtschaftstransformation wird das Quanten-Finanzsystem (QFS) als Next-Gen-Finanzinfrastruktur präsentiert, die für sichere, transparente und effiziente digitale Transaktionen konzipiert ist.',
    'zh': '与NESARA/GESARA经济转型的愿景一致，量子金融系统（QFS）作为下一代金融基础设施，旨在支持安全、透明和高效的数字交易。',
    'ar': 'تماشياً مع رؤية التحول الاقتصادي NESARA/GESARA، يُقدم النظام المالي الكمي (QFS) كبنية تحتية مالية من الجيل التالي مصممة لدعم المعاملات الرقمية الآمنة والشفافة والفعالة.',
    'th': 'สอดคล้องกับวิสัยทัศน์การปรับเปลี่ยนเศรษฐกิจ NESARA/GESARA ระบบการเงินควอนตัม (QFS) ถูกนำเสนอเป็นโครงสร้างพื้นฐานทางการเงินรุ่นใหม่ที่ออกแบบมาเพื่อรองรับธุรกรรมดิจิทัลที่ปลอดภัย โปร่งใส และมีประสิทธิภาพ'
}))

# QFS Core Capabilities
new_keys.append(entry('portal.core.title', {
    'en': 'QFS Core Capabilities', 'es': 'Capacidades Principales de QFS', 'fr': 'Capacités Principales QFS', 'pt': 'Capacidades Principais do QFS',
    'de': 'QFS Kernfähigkeiten', 'zh': 'QFS核心能力', 'ar': 'القدرات الأساسية لـ QFS', 'th': 'ความสามารถหลักของ QFS'
}))
new_keys.append(entry('portal.core.items', {
    'en': ['Quantum-Resistant Security', 'Advanced cryptographic architecture designed for the evolving threat landscape.', 'QFSPay Integration', 'Digital payment solutions designed for fast and seamless transactions.', 'Real-Time Settlement', 'Enabling direct digital settlement with reduced dependence on traditional intermediaries.', 'Transparency & Privacy', 'Designed to combine transaction traceability with strong protection of financial information.', 'Asset-Backed Digital Economy', 'Built to support the integration of digital assets and asset-backed financial instruments.', 'Global Interoperability', 'A vision for connecting digital payments, wallets, exchanges and sovereign financial ecosystems.'],
    'es': ['Seguridad Resistente a Quantum', 'Arquitectura criptográfica avanzada diseñada para el panorama de amenazas evolutivo.', 'Integración QFSPay', 'Soluciones de pago digital diseñadas para transacciones rápidas y fluidas.', 'Liquidación en Tiempo Real', 'Permitiendo liquidación digital directa con reducida dependencia de intermediarios tradicionales.', 'Transparencia y Privacidad', 'Diseñado para combinar la trazabilidad de transacciones con fuerte protección de información financiera.', 'Economía Digital Respaldada por Activos', 'Construido para soportar la integración de activos digitales e instrumentos financieros respaldados.', 'Interoperabilidad Global', 'Una visión para conectar pagos digitales, billeteras, exchanges y ecosistemas financieros soberanos.'],
    'fr': ['Sécurité Résistante au Quantum', 'Architecture cryptographique avancée conçue pour l\'évolution des menaces.', 'Intégration QFSPay', 'Solutions de paiement numérique conçues pour des transactions rapides et fluides.', 'Règlement en Temps Réel', 'Permettant un règlement numérique direct avec une dépendance réduite aux intermédiaires traditionnels.', 'Transparence et Confidentialité', 'Conçu pour combiner la traçabilité des transactions avec une forte protection des informations financières.', 'Économie Numérique Adossée à des Actifs', 'Conçu pour soutenir l\'intégration d\'actifs numériques et d\'instruments financiers adossés.', 'Interopérabilité Mondiale', 'Une vision pour connecter paiements numériques, portefeuilles, échanges et écosystèmes financiers souverains.'],
    'pt': ['Segurança Resistente a Quantum', 'Arquitetura criptográfica avançada projetada para o cenário de ameaças em evolução.', 'Integração QFSPay', 'Soluções de pagamento digital projetadas para transações rápidas e fluidas.', 'Liquidação em Tempo Real', 'Permitindo liquidação digital direta com dependência reduzida de intermediários tradicionais.', 'Transparência e Privacidade', 'Projetado para combinar rastreabilidade de transações com forte proteção de informações financeiras.', 'Economia Digital lastreada em Ativos', 'Construído para suportar a integração de ativos digitais e instrumentos financeiros lastreados.', 'Interoperabilidade Global', 'Uma visão para conectar pagamentos digitais, carteiras, exchanges e ecossistemas financeiros soberanos.'],
    'de': ['Quanten-Resistente Sicherheit', 'Fortschrittelle Krypto-Architektur für die sich entwickelnde Bedrohungslandschaft.', 'QFSPay Integration', 'Digitale Zahlungslösungen für schnelle und nahtlose Transaktionen.', 'Echtzeit-Abwicklung', 'Ermöglicht direkte digitale Abwicklung mit reduzierter Abhängigkeit von traditionellen Intermediären.', 'Transparenz & Datenschutz', 'Konzipiert zur Kombination von Transaktionsnachverfolgung mit starkem Schutz Finanzinformationen.', 'Asset-Backed Digitale Wirtschaft', 'Gebaut zur Unterstützung der Integration digitaler Assets und asset-backter Finanzinstrumente.', 'Globale Interoperabilität', 'Eine Vision zur Verbindung digitaler Zahlungen, Wallets, Exchanges und souveräner Finanzökosysteme.'],
    'zh': ['抗量子安全', '为不断演变的威胁环境设计的先进加密架构。', 'QFSPay集成', '为快速无缝交易设计的数字支付解决方案。', '实时结算', '实现直接数字结算，减少对传统中介的依赖。', '透明度与隐私', '旨在将交易可追溯性与金融信息的强保护相结合。', '资产支持数字经济', '构建以支持数字资产和资产支持金融工具的整合。', '全球互操作性', '连接数字支付、钱包、交易所和主权金融生态系统的愿景。'],
    'ar': ['أمان مقاوم للكم', 'بنية تشفير متقدمة مصممة لساحة التهديدات المتطورة.', 'دمج QFSPay', 'حلول دفع رقمي مصممة للمعاملات السريعة والسلسة.', 'تسوية في الوقت الفعلي', 'تمكين التسوية الرقمية المباشرة مع تقليل الاعتماد على الوسطاء التقليديين.', 'الشفافية والخصوصية', 'مصمم لدمج تتبع المعاملات مع حماية قوية للمعلومات المالية.', 'اقتصاد رقمي مدعوم بأصول', 'مبني لدعم دمج الأصول الرقمية والأدوات المالية المدعومة.', 'التشابكية العالمية', 'رؤية لربط المدفوعات الرقمية والمحافظ والبورصات والأنظمة المالية السيادية.'],
    'th': ['ความปลอดภัยที่ทนต่อควอนตัม', 'สถาปัตยกรรมการเข้ารหัสขั้นสูงที่ออกแบบสำหรับภูมิทัศน์ภัยคุกคามที่เปลี่ยนแปลง', 'การผสานรวม QFSPay', 'โซลูชันการชำระเงินดิจิทัลที่ออกแบบสำหรับธุรกรรมที่รวดเร็วและราบรื่น', 'การชำระเงินแบบเรียลไทม์', 'เปิดใช้การชำระเงินดิจิทัลโดยตรงโดยลดการพึ่งพาตัวกลางแบบดั้งเดิม', 'ความโปร่งใสและความเป็นส่วนตัว', 'ออกแบบมาเพื่อผสานการติดตามธุรกรรมกับการป้องกันข้อมูลทางการเงินอย่างแข็งแกร่ง', 'เศรษฐกิจดิจิทัลที่สนับสนุนด้วยสินทรัพย์', 'สร้างขึ้นเพื่อรองรับการผสานรวมสินทรัพย์ดิจิทัลและเครื่องมือทางการเงินที่สนับสนุนด้วยสินทรัพย์', 'การทำงานร่วมกันระดับโลก', 'วิสัยทัศน์ในการเชื่อมต่อการชำระเงินดิจิทัล วอลเล็ต การแลกเปลี่ยน และระบบนิเวศทางการเงินอธิปไตย']
}))
new_keys.append(entry('portal.core.footer', {
    'en': 'QFS is designed to support the transition toward a more secure, efficient and digitally connected financial ecosystem.',
    'es': 'QFS está diseñado para apoyar la transición hacia un ecosistema financiero más seguro, eficiente y digitalmente conectado.',
    'fr': 'QFS est conçu pour soutenir la transition vers un écosystème financier plus sûr, efficace et numériquement connecté.',
    'pt': 'O QFS é projetado para apoiar a transição para um ecossistema financeiro mais seguro, eficiente e digitalmente conectado.',
    'de': 'QFS ist darauf ausgelegt, den Übergang zu einem sichereren, effizienteren und digital vernetzten Finanzökosystem zu unterstützen.',
    'zh': 'QFS旨在支持向更安全、更高效和数字化互联的金融生态系统的过渡。',
    'ar': 'صُمم QFS لدعم الانتقال إلى نظام مالي أكثر أماناً وكفاءة وترابطاً رقمياً.',
    'th': 'QFS ได้รับการออกแบบมาเพื่อสนับสนุนการเปลี่ยนผ่านสู่ระบบนิเวศทางการเงินที่ปลอดภัย มีประสิทธิภาพ และเชื่อมต่อดิจิทัลมากขึ้น'
}))

# QFSpay section
new_keys.append(entry('portal.qfspay.label', {
    'en': 'PAYMENT SOLUTION', 'es': 'SOLUCIÓN DE PAGO', 'fr': 'SOLUTION DE PAIEMENT', 'pt': 'SOLUÇÃO DE PAGAMENTO',
    'de': 'ZAHLUNGSLÖSUNG', 'zh': '支付解决方案', 'ar': 'حل الدفع', 'th': 'โซลูชันการชำระเงิน'
}))
new_keys.append(entry('portal.qfspay.subtitle', {
    'en': 'The Official Payment Solution of the Quantum Financial System',
    'es': 'La Solución de Pago Oficial del Sistema Financiero Cuántico',
    'fr': 'La Solution de Paiement Officielle du Système Financier Quantique',
    'pt': 'A Solução de Pagamento Oficial do Sistema Financeiro Quântico',
    'de': 'Die offizielle Zahlungslösung des Quanten-Finanzsystems',
    'zh': '量子金融系统的官方支付解决方案',
    'ar': 'حل الدفع الرسمي للنظام المالي الكمي',
    'th': 'โซลูชันการชำระเงินอย่างเป็นทางการของระบบการเงินควอนตัม'
}))
new_keys.append(entry('portal.qfspay.feats', {
    'en': ['Quantum Security', 'Military-grade quantum encryption protects every transaction from hacking and fraud.', 'Global Acceptance', 'Accepted by all G20 nations and participating merchants worldwide.', 'Instant Settlement', 'Transactions complete in quantum time with no banking delays.', 'Multi-Currency', 'Supports all QFS-backed currencies with automatic conversion.'],
    'es': ['Seguridad Cuántica', 'Cifrado cuántico de grado militar protege cada transacción contra hacking y fraude.', 'Aceptación Global', 'Aceptado por todas las naciones del G20 y comerciantes participantes mundialmente.', 'Liquidación Instantánea', 'Transacciones completas en tiempo cuántico sin retrasos bancarios.', 'Multidivisa', 'Soporta todas las monedas respaldadas por QFS con conversión automática.'],
    'fr': ['Sécurité Quantique', 'Le chiffrement quantique de niveau militaire protège chaque transaction contre le piratage et la fraude.', 'Acceptation Mondiale', 'Accepté par toutes les nations du G20 et les marchands participants dans le monde.', 'Règlement Instantané', 'Les transactions se complètent en temps quantique sans délais bancaires.', 'Multi-Devise', 'Prend en charge toutes les devises QFS avec conversion automatique.'],
    'pt': ['Segurança Quântica', 'Criptografia quântica de nível militar protege cada transação contra hacking e fraude.', 'Aceitação Global', 'Aceito por todas as nações do G20 e comerciantes participantes mundialmente.', 'Liquidação Instantânea', 'Transações completas em tempo quântico sem atrasos bancários.', 'Multi-Moeda', 'Suporta todas as moedas QFS com conversão automática.'],
    'de': ['Quanten-Sicherheit', 'Militärische Quantenverschlüsselung schützt jede Transaktion vor Hacking und Betrug.', 'Globale Akzeptanz', 'Akzeptiert von allen G20-Nationen und teilnehmenden Händlern weltweit.', 'Sofortabwicklung', 'Transaktionen werden in Quantenzeit ohne Bankverzögerungen abgeschlossen.', 'Mehrwährung', 'Unterstützt alle QFS-backed Währungen mit automatischer Umrechnung.'],
    'zh': ['量子安全', '军用级量子加密保护每笔交易免受黑客攻击和欺诈。', '全球认可', '被所有G20国家和全球参与商户接受。', '即时结算', '交易在量子时间内完成，无银行延迟。', '多货币', '支持所有QFS支持的货币，自动转换。'],
    'ar': ['الأمان الكمي', 'التشفير الكمي بمستوى عسكري يحمي كل معاملة من الاختراق والاحتيال.', 'القبول العالمي', 'مقبول من جميع دول مجموعة العشرين والتجار المشاركين حول العالم.', 'التسوية الفورية', 'المعاملات تكتمل في الوقت الكمي بدون تأخيرات مصرفية.', 'متعدد العملات', 'يدعم جميع العملات المدعومة من QFS مع التحويل التلقائي.'],
    'th': ['ความปลอดภัยระดับควอนตัม', 'การเข้ารหัสระดับทหารป้องกันทุกธุรกรรมจากการแฮ็กและการฉ้อโกง', 'การยอมรับระดับโลก', 'ได้รับการยอมรับจากประเทศ G20 ทั้งหมดและผู้ค้าที่เข้าร่วมทั่วโลก', 'การชำระเงินทันที', 'ธุรกรรมเสร็จสมบูรณ์ในเวลาควอนตัมโดยไม่มีความล่าช้าทางธนาคาร', 'หลายสกุลเงิน', 'รองรับสกุลเงินที่สนับสนุนโดย QFS ทั้งหมดพร้อมการแปลงอัตโนมัติ']
}))
new_keys.append(entry('portal.qfspay.download', {
    'en': 'Download QFSpay App', 'es': 'Descargar App QFSpay', 'fr': 'Télécharger l\'App QFSpay', 'pt': 'Baixar App QFSpay',
    'de': 'QFSpay App herunterladen', 'zh': '下载QFSpay应用', 'ar': 'تحميل تطبيق QFSpay', 'th': 'ดาวน์โหลดแอป QFSpay'
}))

# Technology section
new_keys.append(entry('portal.tech.label', {
    'en': 'Technology', 'es': 'Tecnología', 'fr': 'Technologie', 'pt': 'Tecnologia',
    'de': 'Technologie', 'zh': '技术', 'ar': 'التكنولوجيا', 'th': 'เทคโนโลยี'
}))
new_keys.append(entry('portal.tech.title', {
    'en': 'QFS Technology', 'es': 'Tecnología QFS', 'fr': 'Technologie QFS', 'pt': 'Tecnologia QFS',
    'de': 'QFS Technologie', 'zh': 'QFS技术', 'ar': 'تكنولوجيا QFS', 'th': 'เทคโนโลยี QFS'
}))
new_keys.append(entry('portal.tech.subtitle', {
    'en': 'The QFS combines cutting-edge quantum computing with advanced blockchain technology to create a financial system that is secure, efficient, and transparent, with QFSpay as its consumer-facing payment solution.',
    'es': 'El QFS combina computación cuántica de vanguardia con tecnología blockchain avanzada para crear un sistema financiero seguro, eficiente y transparente, con QFSpay como su solución de pago orientada al consumidor.',
    'fr': 'Le QFS combine l\'informatique quantique de pointe avec la technologie blockchain avancée pour créer un système financier sûr, efficace et transparent, avec QFSpay comme solution de paiement grand public.',
    'pt': 'O QFS combina computação quântica de ponta com tecnologia blockchain avançada para criar um sistema financeiro seguro, eficiente e transparente, com QFSpay como sua solução de pagamento para o consumidor.',
    'de': 'QFS kombiniert modernste Quantencomputer mit fortschrittlicher Blockchain-Technologie, um ein sicheres, effizientes und transparentes Finanzsystem zu schaffen, mit QFSpay als verbraucherorientierte Zahlungslösung.',
    'zh': 'QFS将尖端量子计算与先进区块链技术相结合，创建一个安全、高效和透明的金融系统，QFSpay是其面向消费者的支付解决方案。',
    'ar': 'يجمع QFS بين الحوسبة الكمية المتطورة وتكنولوجيا البلوكتشين المتقدمة لإنشاء نظام مالي آمن وفعال وشفاف، مع QFSpay كحل دفع للمستهلكين.',
    'th': 'QFS ผสานคอมพิวเตอร์ควอนตัมชั้นนำเข้ากับเทคโนโลยีบล็อกเชนขั้นสูงเพื่อสร้างระบบการเงินที่ปลอดภัย มีประสิทธิภาพ และโปร่งใส โดยมี QFSpay เป็นโซลูชันการชำระเงินสำหรับผู้บริโภค'
}))
new_keys.append(entry('portal.tech.items', {
    'en': ['Quantum Encryption', 'Unbreakable quantum key distribution ensures complete security for all transactions', 'Technical Details', 'Decentralized Network', 'Distributed across government nodes worldwide with no single point of failure', 'Network Map', 'Instant Settlement', 'Transactions settle in quantum time without traditional banking delays', 'Performance Data', 'Sovereign Security', 'Government-controlled access with military-grade protection', 'Security Protocols'],
    'es': ['Cifrado Cuántico', 'Distribución de claves cuánticas irrompibles asegura seguridad completa para todas las transacciones', 'Detalles Técnicos', 'Red Descentralizada', 'Distribuida en nodos gubernamentales en todo el mundo sin punto único de falla', 'Mapa de Red', 'Liquidación Instantánea', 'Las transacciones se liquidan en tiempo cuántico sin retrasos bancarios tradicionales', 'Datos de Rendimiento', 'Seguridad Soberana', 'Acceso controlado por el gobierno con protección de grado militar', 'Protocolos de Seguridad'],
    'fr': ['Chiffrement Quantique', 'Distribution de clés quantiques inviolables assure une sécurité complète pour toutes les transactions', 'Détails Techniques', 'Réseau Décentralisé', 'Distribué sur les nœuds gouvernementaux mondiaux sans point de défaillance unique', 'Carte du Réseau', 'Règlement Instantané', 'Les transactions se règlent en temps quantique sans délais bancaires', 'Données de Performance', 'Sécurité Souveraine', 'Accès contrôlé par le gouvernement avec protection de niveau militaire', 'Protocoles de Sécurité'],
    'pt': ['Criptografia Quântica', 'Distribuição de chaves quânticas inquebráveis garante segurança completa para todas as transações', 'Detalhes Técnicos', 'Rede Descentralizada', 'Distribuída em nós governamentais em todo o mundo sem ponto único de falha', 'Mapa da Rede', 'Liquidação Instantânea', 'Transações se liquidam em tempo quântico sem atrasos bancários tradicionais', 'Dados de Desempenho', 'Segurança Soberana', 'Acesso controlado pelo governo com proteção de nível militar', 'Protocolos de Segurança'],
    'de': ['Quantenverschlüsselung', 'Unbrechbare Quantenschlüsselverteilung sorgt für vollständige Sicherheit aller Transaktionen', 'Technische Details', 'Dezentrales Netzwerk', 'Verteilt auf Regierungsknoten weltweit ohne Single Point of Failure', 'Netzwerkkarte', 'Sofortabwicklung', 'Transaktionen werden in Quantenzeit ohne Bankverzögerungen abgewickelt', 'Leistungsdaten', 'Souveräne Sicherheit', 'Regierungskontrollierter Zugriff mit militärischem Schutz', 'Sicherheitsprotokolle'],
    'zh': ['量子加密', '不可破解的量子密钥分发确保所有交易的完全安全', '技术详情', '去中心化网络', '分布在全球政府节点，无单点故障', '网络地图', '即时结算', '交易在量子时间内结算，无传统银行延迟', '性能数据', '主权安全', '政府控制的访问，军用级保护', '安全协议'],
    'ar': ['التشفير الكمي', 'توزيع مفاتيح كم غير قابل للاختراق يضمن أماناً كاملاً لجميع المعاملات', 'تفاصيل تقنية', 'شبكة لامركزية', 'موزعة عبر عقد حكومية حول العالم بدون نقطة فشل واحدة', 'خريطة الشبكة', 'التسوية الفورية', 'المعاملات تستقر في الوقت الكمي بدون تأخيرات مصرفية', 'بيانات الأداء', 'الأمان السيادي', 'وصول يخضع لرقابة حكومية بحماية عسكرية', 'بروتوكولات الأمان'],
    'th': ['การเข้ารหัสควอนตัม', 'การกระจายกุญแจควอนตัมที่ไม่สามารถถูกทำลายได้รับประกันความปลอดภัยอย่างสมบูรณ์สำหรับทุกธุรกรรม', 'รายละเอียดทางเทคนิค', 'เครือข่ายแบบกระจายศูนย์', 'กระจายอยู่บนโหนดรัฐบาลทั่วโลกโดยไม่มีจุดล้มเหลวเดียว', 'แผนที่เครือข่าย', 'การชำระเงินทันที', 'ธุรกรรมชำระเงินในเวลาควอนตัมโดยไม่มีความล่าช้าทางธนาคาร', 'ข้อมูลประสิทธิภาพ', 'ความปลอดภัยอธิปไตย', 'การเข้าถึงที่ควบคุมโดยรัฐบาลพร้อมการป้องกันระดับทหาร', 'โปรโตคอลความปลอดภัย']
}))

# Currencies section
new_keys.append(entry('portal.currencies.label', {
    'en': 'CURRENCIES', 'es': 'MONEDAS', 'fr': 'DEVISES', 'pt': 'MOEDAS',
    'de': 'WÄHRUNGEN', 'zh': '货币', 'ar': 'العملات', 'th': 'สกุลเงิน'
}))
new_keys.append(entry('portal.currencies.title', {
    'en': 'Supported Sovereign Currencies', 'es': 'Monedas Soberanas Soportadas', 'fr': 'Devises Souveraines Prises en Charge', 'pt': 'Moedas Soberanas Suportadas',
    'de': 'Unterstützte Souveräne Währungen', 'zh': '支持的主权货币', 'ar': 'العملات السيادية المدعومة', 'th': 'สกุลเงินอธิปไตยที่รองรับ'
}))
new_keys.append(entry('portal.currencies.desc', {
    'en': 'QFS provides the infrastructure for the following institutional currencies backed by tangible assets and sovereign agreements, all compatible with QFSpay.',
    'es': 'QFS proporciona la infraestructura para las siguientes monedas institucionales respaldadas por activos tangibles y acuerdos soberanos, todas compatibles con QFSpay.',
    'fr': 'QFS fournit l\'infrastructure pour les devises institutionnelles suivantes adossées à des actifs tangibles et des accords souverains, toutes compatibles avec QFSpay.',
    'pt': 'O QFS fornece a infraestrutura para as seguintes moedas institucionais lastreadas em ativos tangíveis e acordos soberanos, todas compatíveis com QFSpay.',
    'de': 'QFS bietet die Infrastruktur für folgende institutionelle Währungen, die durch greifbare Assets und souveräne Abkommen abgesichert sind, alle kompatibel mit QFSpay.',
    'zh': 'QFS为以下由有形资产和主权协议支持的机构货币提供基础设施，全部与QFSpay兼容。',
    'ar': 'يوفر QFS البنية التحتية للعملات المؤسسية التالية المدعومة بأصول ملموسة واتفاقيات سيادية، جميعها متوافقة مع QFSpay.',
    'th': 'QFS ให้โครงสร้างพื้นฐานสำหรับสกุลเงินสถาบันต่อไปนี้ที่สนับสนุนโดยสินทรัพย์ที่จับต้องได้และข้อตกลงอธิปไตย ทั้งหมดเข้ากันได้กับ QFSpay'
}))

# Partners section
new_keys.append(entry('portal.partners.label', {
    'en': 'PARTNERS', 'es': 'SOCIOS', 'fr': 'PARTENAIRES', 'pt': 'PARCEIROS',
    'de': 'PARTNER', 'zh': '合作伙伴', 'ar': 'الشركاء', 'th': 'พันธมิตร'
}))
new_keys.append(entry('portal.partners.title', {
    'en': 'Government Partners', 'es': 'Socios Gubernamentales', 'fr': 'Partenaires Gouvernementaux', 'pt': 'Parceiros Governamentais',
    'de': 'Regierungspartner', 'zh': '政府合作伙伴', 'ar': 'الشركاء الحكوميون', 'th': 'พันธมิตรรัฐบาล'
}))
new_keys.append(entry('portal.partners.desc', {
    'en': 'QFS and QFSpay are developed and maintained through international cooperation between sovereign governments and leading technology institutions.',
    'es': 'QFS y QFSpay se desarrollan y mantienen a través de la cooperación internacional entre gobiernos soberanos e instituciones tecnológicas líderes.',
    'fr': 'QFS et QFSpay sont développés et maintenus grâce à la coopération internationale entre gouvernements souverains et institutions technologiques de premier plan.',
    'pt': 'O QFS e o QFSpay são desenvolvidos e mantidos através da cooperação internacional entre governos soberanos e instituições tecnológicas líderes.',
    'de': 'QFS und QFSpay werden durch internationale Kooperation zwischen souveränen Regierungen und führenden Technologieinstitutionen entwickelt und gepflegt.',
    'zh': 'QFS和QFSpay通过主权政府和领先技术机构之间的国际合作进行开发和维护。',
    'ar': 'يتم تطوير QFS و QFSpay وصيانتهما من خلال التعاون الدولي بين الحكومات السيادية والمؤسسات التقنية الرائدة.',
    'th': 'QFS และ QFSpay ได้รับการพัฒนาและดูแลผ่านความร่วมมือระหว่างประเทศระหว่างรัฐบาลอธิปไตยและสถาบันเทคโนโลยีชั้นนำ'
}))

# Final CTA
new_keys.append(entry('portal.cta.title1', {
    'en': 'are the future of sovereign finance', 'es': 'son el futuro de las finanzas soberanas', 'fr': 'sont l\'avenir de la finance souveraine', 'pt': 'são o futuro das finanças soberanas',
    'de': 'sind die Zukunft der souveränen Finanzen', 'zh': '是主权金融的未来', 'ar': 'هما مستقبل التمويل السيادي', 'th': 'คืออนาคตของการเงินอธิปไตย'
}))
new_keys.append(entry('portal.cta.desc', {
    'en': 'Secure, transparent, and efficient financial infrastructure for governments and citizens worldwide.',
    'es': 'Infraestructura financiera segura, transparente y eficiente para gobiernos y ciudadanos en todo el mundo.',
    'fr': 'Infrastructure financière sécurisée, transparente et efficace pour les gouvernements et les citoyens du monde entier.',
    'pt': 'Infraestrutura financeira segura, transparente e eficiente para governos e cidadãos em todo o mundo.',
    'de': 'Sichere, transparente und effiziente Finanzinfrastruktur für Regierungen und Bürger weltweit.',
    'zh': '为全球政府和公民提供安全、透明和高效的金融基础设施。',
    'ar': 'بنية تحتية مالية آمنة وشفافة وفعالة للحكومات والمواطنين حول العالم.',
    'th': 'โครงสร้างพื้นฐานทางการเงินที่ปลอดภัย โปร่งใส และมีประสิทธิภาพสำหรับรัฐบาลและพลเมืองทั่วโลก'
}))
new_keys.append(entry('portal.cta.login', {
    'en': 'Government Portal Login', 'es': 'Iniciar Sesión en el Portal del Gobierno', 'fr': 'Connexion au Portail Gouvernemental', 'pt': 'Login no Portal do Governo',
    'de': 'Regierungsportal-Login', 'zh': '政府门户登录', 'ar': 'تسجيل الدخول للبوابة الحكومية', 'th': 'เข้าสู่พอร์ทัลรัฐบาล'
}))
new_keys.append(entry('portal.cta.get', {
    'en': 'Get QFSpay App', 'es': 'Obtener App QFSpay', 'fr': 'Obtenir l\'App QFSpay', 'pt': 'Baixar App QFSpay',
    'de': 'QFSpay App bekommen', 'zh': '获取QFSpay应用', 'ar': 'الحصول على تطبيق QFSpay', 'th': 'รับแอป QFSpay'
}))

print(f"Generated {len(new_keys)} translation key blocks (portal)")

# Read current file
with open('/home/z/my-project/src/store/lang-store.ts', 'r', encoding='utf-8') as f:
    content = f.read()

marker = "export function useT()"
if marker not in content:
    print("ERROR: Could not find 'export function useT()' in lang-store.ts")
    exit(1)

insertion_point = content.index(marker)
semi_pos = content.rfind('};', 0, insertion_point)
if semi_pos == -1:
    print("ERROR: Could not find closing }; before useT")
    exit(1)

new_content = content[:semi_pos] + '\n'.join(new_keys) + '\n' + content[semi_pos:]

with open('/home/z/my-project/src/store/lang-store.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added portal translation keys to lang-store.ts")