#!/usr/bin/env python3
"""Generate complete lang-store.ts with 8 languages for ALL pages."""

import json

L = ["en", "es", "fr", "pt", "de", "zh", "ar", "th"]

def tr(en, es, fr, pt, de, zh, ar, th):
    return {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar, "th": th}

def trd(en, es, fr, pt, de, zh, ar, th):
    return {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar, "th": th}

# Translation key -> translations in 8 languages
t = {}
td = {}

# ============================================================
# LANGUAGE NAMES (for the selector)
# ============================================================
t["lang.en"] = tr("English", "Inglés", "Anglais", "Inglês", "Englisch", "英语", "الإنجليزية", "อังกฤษ")
t["lang.es"] = tr("Español", "Español", "Espagnol", "Espanhol", "Spanisch", "西班牙语", "الإسبانية", "สเปน")
t["lang.fr"] = tr("Français", "Francés", "Français", "Francês", "Französisch", "法语", "الفرنسية", "ฝรั่งเศส")
t["lang.pt"] = tr("Português", "Portugués", "Portugais", "Português", "Portugiesisch", "葡萄牙语", "البرتغالية", "โปรตุเกส")
t["lang.de"] = tr("Deutsch", "Alemán", "Allemand", "Alemão", "Deutsch", "德语", "الألمانية", "เยอรมัน")
t["lang.zh"] = tr("中文", "Chino", "Chinois", "Chinês", "Chinesisch", "中文", "الصينية", "จีน")
t["lang.ar"] = tr("العربية", "Árabe", "Arabe", "Árabe", "Arabisch", "阿拉伯语", "العربية", "อาหรับ")
t["lang.th"] = tr("ภาษาไทย", "Tailandés", "Thaï", "Tailandês", "Thailändisch", "泰语", "التايلاندية", "ไทย")

# ============================================================
# NAVIGATION
# ============================================================
t["nav.home"] = tr("Home", "Inicio", "Accueil", "Inicio", "Startseite", "首页", "الرئيسية", "หน้าแรก")
t["nav.portal"] = tr("Portal", "Portal", "Portail", "Portal", "Portal", "门户", "البوابة", "พอร์ทัล")
t["nav.whitepaper"] = tr("White Paper", "Libro Blanco", "Livre Blanc", "Livro Branco", "Whitepaper", "白皮书", "الوثيقة التفصيلية", "เอกสาร White Paper")
t["nav.roadmap"] = tr("Roadmap", "Roadmap", "Feuille de Route", "Roteiro", "Roadmap", "路线图", "خريطة الطريق", "แผนงาน")
t["nav.explore"] = tr("Explore QFS", "Explorar QFS", "Explorer QFS", "Explorar QFS", "QFS entdecken", "探索 QFS", "استكشاف QFS", "สำรวจ QFS")
t["nav.join"] = tr("Join Community", "Unirse a la Comunidad", "Rejoindre la Communauté", "Junte-se à Comunidade", "Gemeinschaft beitreten", "加入社区", "انضم إلى المجتمع", "เข้าร่วมชุมชน")

# ============================================================
# HERO (home page)
# ============================================================
t["hero.badge"] = tr("QUANTUM FINANCIAL SYSTEM", "SISTEMA FINANCIERO CUÁNTICO", "SYSTÈME FINANCIER QUANTIQUE", "SISTEMA FINANCEIRO QUÂNTICO", "QUANTEN-FINANZSYSTEM", "量子金融系统", "نظام المال الكمي", "ระบบการเงินควอนตัม")
t["hero.title1"] = tr("The Future of", "El Futuro de las", "L'Avenir des", "O Futuro das", "Die Zukunft der", "数字金融的未来", "مستقبل", "อนาคตของ")
t["hero.title2"] = tr("Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitalen Finanzen", "数字金融的未来", "المال الرقمي", "การเงินดิจิทัล")
t["hero.desc"] = tr(
    "QFS Official develops a new digital financial infrastructure integrating blockchain, artificial intelligence, advanced cryptographic security, digital payments and decentralized financial services.",
    "QFS Official desarrolla una nueva infraestructura financiera digital que integra blockchain, inteligencia artificial, seguridad criptográfica avanzada, pagos digitales y servicios financieros descentralizados.",
    "QFS Official développe une nouvelle infrastructure financière numérique intégrant la blockchain, l'intelligence artificielle, la sécurité cryptographique avancée, les paiements numériques et les services financiers décentralisés.",
    "QFS Official desenvolve uma nova infraestrutura financeira digital integrando blockchain, inteligência artificial, segurança criptográfica avançada, pagamentos digitais e serviços financeiros descentralizados.",
    "QFS Official entwickelt eine neue digitale Finanzinfrastruktur, die Blockchain, Künstliche Intelligenz, fortschrittliche Kryptografie, digitale Zahlungen und dezentrale Finanzdienstleistungen integriert.",
    "QFS Official 开发了一套新的数字金融基础设施，整合区块链、人工智能、高级加密安全、数字支付和去中心化金融服务。",
    "تطور QFS Official بنية مالية رقمية جديدة تدمج البلوكتشين والذكاء الاصطناعي والأمن التشفيري المتقدم والدفع الرقمي والخدمات المالية اللامركزية.",
    "QFS Official พัฒนาโครงสร้างพื้นฐานทางการเงินดิจิทัลใหม่ที่ผสานรวมบล็อกเชน ปัญญาประดิษฐ์ ความปลอดภัยการเข้ารหัสขั้นสูง การชำระเงินดิจิทัล และบริการทางการเงินแบบกระจายศูนย์"
)
t["hero.wallet"] = tr("QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet")
t["hero.qfspay"] = tr("QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay")
t["hero.explore_btn"] = tr("Explore QFS", "Explorar QFS", "Explorer QFS", "Explorar QFS", "QFS entdecken", "探索 QFS", "استكشاف QFS", "สำรวจ QFS")
t["hero.tags.technology"] = tr("Technology", "Tecnología", "Technologie", "Tecnologia", "Technologie", "技术", "التكنولوجيا", "เทคโนโลยี")
t["hero.tags.security"] = tr("Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان", "ความปลอดภัย")
t["hero.tags.finance"] = tr("Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitale Finanzen", "数字金融", "المال الرقمي", "การเงินดิจิทัล")
t["hero.tags.decentralization"] = tr("Decentralization", "Descentralización", "Décentralisation", "Descentralização", "Dezentralisierung", "去中心化", "اللامركزية", "การกระจายอำนาจ")
t["hero.tags.connectivity"] = tr("Global Connectivity", "Conectividad Global", "Connectivité Mondiale", "Conectividade Global", "Globale Vernetzung", "全球连接", "الاتصال العالمي", "การเชื่อมต่อทั่วโลก")

# ============================================================
# WHY QFS (home page)
# ============================================================
t["why.title"] = tr("Why QFS?", "¿Por qué QFS?", "Pourquoi QFS ?", "Por que QFS?", "Warum QFS?", "为什么选QFS？", "لماذا QFS؟", "ทำไมต้อง QFS?")
t["why.subtitle"] = tr("Why QFS", "Por qué QFS", "Pourquoi QFS", "Por que QFS", "Warum QFS", "为什么选QFS", "لماذا QFS", "ทำไมต้อง QFS")
t["why.security"] = tr("Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان", "ความปลอดภัย")
t["why.security.desc"] = tr("Infrastructure designed with security as absolute priority.", "Infraestructura diseñada con seguridad como prioridad absoluta.", "Infrastructure conçue avec la sécurité comme priorité absolue.", "Infraestrutura projetada com segurança como prioridade absoluta.", "Infrastruktur mit Sicherheit als absolutem Priorität.", "以安全为绝对优先事项设计的基础设施。", "بنية تحتيا الأمان كأولوية مطلقة.", "โครงสร้างพื้นฐานที่ออกแบบโดยให้ความปลอดภัยเป็น first priority")
t["why.transparency"] = tr("Transparency", "Transparencia", "Transparence", "Transparência", "Transparenz", "透明度", "الشفافية", "ความโปร่งใส")
t["why.transparency.desc"] = tr("Blockchain technology and verifiable records.", "Tecnología blockchain y registros verificables.", "Technologie blockchain et registres vérifiables.", "Tecnologia blockchain e registros verificáveis.", "Blockchain-Technologie und überprüfbare Aufzeichnungen.", "区块链技术和可验证记录。", "تكنولوجيا البلوكتشين وسجلات قابلة للتحقق.", "เทคโนโลยีบล็อกเชนและบันทึกที่ตรวจสอบได้")
t["why.interop"] = tr("Interoperability", "Interoperabilidad", "Interopérabilité", "Interoperabilidade", "Interoperabilität", "互操作性", "التشابكية", "ความเข้ากันได้")
t["why.interop.desc"] = tr("Connection between different networks and assets.", "Conexión entre diferentes redes y activos.", "Connexion entre différents réseaux et actifs.", "Conexão entre diferentes redes e ativos.", "Verbindung zwischen verschiedenen Netzwerken und Assets.", "不同网络和资产之间的连接。", "الترابط بين الشبكات والأصول المختلفة.", "การเชื่อมต่อระหว่างเครือข่ายและสินทรัพย์ต่างๆ")
t["why.speed"] = tr("Speed", "Velocidad", "Vitesse", "Velocidade", "Geschwindigkeit", "速度", "السرعة", "ความเร็ว")
t["why.speed.desc"] = tr("Efficient and scalable digital processing.", "Procesamiento digital eficiente y escalable.", "Traitement numérique efficace et évolutif.", "Processamento digital eficiente e escalável.", "Effiziente und skalierbare digitale Verarbeitung.", "高效可扩展的数字处理。", "معالجة رقمية فعالة وقابلة للتوسع.", "การประมวลผลดิจิทัลที่มีประสิทธิภาพและขยายได้")
t["why.access"] = tr("Access", "Acceso", "Accès", "Acesso", "Zugang", "接入", "الوصول", "การเข้าถึง")
t["why.access.desc"] = tr("Financial services accessible from an integrated platform.", "Servicios financieros accesibles desde una plataforma integrada.", "Services financiers accessibles depuis une plateforme intégrée.", "Serviços financeiros acessíveis de uma plataforma integrada.", "Finanzdienstleistungen zugänglich über eine integrierte Plattform.", "通过集成平台即可访问的金融服务。", "خدمات مالية متاحة من منصة متكاملة.", "บริการทางการเงินที่เข้าถึงได้จากแพลตฟอร์มรวมศูนย์")
t["why.innovation"] = tr("Innovation", "Innovación", "Innovation", "Inovação", "Innovation", "创新", "الابتكار", "นวัตกรรม")
t["why.innovation.desc"] = tr("Blockchain + AI + Cryptography + Digital Finance.", "Blockchain + IA + Criptografía + Finanzas Digitales.", "Blockchain + IA + Cryptographie + Finances Numériques.", "Blockchain + IA + Criptografia + Finanças Digitais.", "Blockchain + KI + Kryptografie + Digitale Finanzen.", "区块链 + AI + 加密术 + 数字金融。", "البلوكتشين + الذكاء الاصطناعي + التشفير + المال الرقمي.", "บล็อกเชน + AI + วิทยาการเข้ารหัส + การเงินดิจิทัล")

# ============================================================
# PRODUCTS (home page)
# ============================================================
t["prod.subtitle"] = tr("Products", "Productos", "Produits", "Produtos", "Produkte", "产品", "المنتجات", "ผลิตภัณฑ์")
t["prod.wallet.title"] = tr("QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet")
t["prod.wallet.subtitle"] = tr("Your Digital Financial Hub", "Tu Centro Financiero Digital", "Votre Hub Financier Numérique", "Seu Hub Financeiro Digital", "Ihr Digitales Finanzzentrum", "您的数字金融中心", "مركزك المالي الرقمي", "ศูนย์กลางการเงินดิจิทัลของคุณ")
t["prod.wallet.desc"] = tr(
    "The user's entry point to the QFS ecosystem. Manage different types of digital assets from a single interface with advanced security.",
    "El punto de acceso del usuario al ecosistema QFS. Gestione diferentes tipos de activos digitales desde una única interfaz con seguridad avanzada.",
    "Le point d'accès des utilisateurs à l'écosystème QFS. Gérez différents types d'actifs numériques depuis une seule interface avec une sécurité avancée.",
    "O ponto de acesso do usuário ao ecossistema QFS. Gerencie diferentes tipos de ativos digitais de uma única interface com segurança avançada.",
    "Der Zugangspunkt der Benutzer zum QFS-Ökosystem. Verwalten Sie verschiedene digitale Asset-Typen von einer einzigen Oberfläche mit fortschrittlicher Sicherheit.",
    "用户进入QFS生态系统的入口。通过具有高级安全性的单一界面管理各种数字资产。",
    "نقطة دخول المستخدم إلى نظام QFS. إدارة أنواع مختلفة من الأصول الرقمية من واجهة واحدة بأمان متقدم.",
    "จุดเข้าสู่ระบบ QFS ของผู้ใช้ จัดการสินทรัพย์ดิจิทัลหลากประเภทจากอินเทอร์เฟซเดียวด้วยความปลอดภัยขั้นสูง"
)
t["prod.wallet.balance"] = tr("Total Balance", "Balance Total", "Solde Total", "Saldo Total", "Gesamtguthaben", "总余额", "الرصيد الإجمالي", "ยอดดุลรวม")
t["prod.wallet.month"] = tr("this month", "este mes", "ce mois", "este mês", "diesen Monat", "本月", "هذا الشهر", "เดือนนี้")
t["prod.qfspay.title"] = tr("QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay")
t["prod.qfspay.subtitle"] = tr("Digital Payments", "Pagos Digitales", "Paiements Numériques", "Pagamentos Digitais", "Digitale Zahlungen", "数字支付", "الدفع الرقمي", "การชำระเงินดิจิทัล")
t["prod.qfspay.desc"] = tr(
    "Digital payments for a connected economy. Facilitates the use of digital assets for everyday and commercial operations.",
    "Pagos digitales para una economía conectada. Facilita la utilización de activos digitales para operaciones cotidianas y comerciales.",
    "Paiements numériques pour une économie connectée. Facilite l'utilisation d'actifs numériques pour les opérations quotidiennes et commerciales.",
    "Pagamentos digitais para uma economia conectada. Facilita o uso de ativos digitais para operações diárias e comerciais.",
    "Digitale Zahlungen für eine vernetzte Wirtschaft. Erleichtert die Nutzung digitaler Assets für alltägliche und kommerzielle Operationen.",
    "为互联经济提供数字支付。促进数字资产在日常和商业运营中的使用。",
    "دفع رقمي لاقتصاد متصل. يسهل استخدام الأصول الرقمية للعمليات اليومية والتجارية.",
    "การชำระเงินดิจิทัลสำหรับเศรษฐกิจที่เชื่อมต่อ อำนวยความสะดวกในการใช้สินทรัพย์ดิจิทัลสำหรับการดำเนินงานประจำวันและเชิงพาณิชย์"
)
t["prod.dex.title"] = tr("QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX")
t["prod.dex.subtitle"] = tr("Decentralized Trading", "Trading Descentralizado", "Trading Décentralisé", "Trading Descentralizado", "Dezentraler Handel", "去中心化交易", "التداول اللامركزي", "การซื้อขายแบบกระจายศูนย์")
t["prod.dex.desc"] = tr(
    "Decentralized platform for exchanging digital assets with access to ecosystem markets and liquidity.",
    "Plataforma descentralizada para el intercambio de activos digitales con acceso a mercados y liquidez del ecosistema.",
    "Plateforme décentralisée pour l'échange d'actifs numériques avec accès aux marchés et à la liquidité de l'écosystème.",
    "Plataforma descentralizada para troca de ativos digitais com acesso a mercados e liquidez do ecossistema.",
    "Dezentrale Plattform zum Austausch digitaler Assets mit Zugang zu Ökosystem-Märkten und Liquidität.",
    "去中心化的数字资产交易平台，可访问生态系统市场和流动性。",
    "منصة لامركزية لتبادل الأصول الرقمية مع الوصول إلى أسواق وسيولة النظام.",
    "แพลตฟอร์มแบบกระจายศูนย์สำหรับแลกเปลี่ยนสินทรัพย์ดิจิทัล พร้อมเข้าถึงตลาดและสภาพคล่องในระบบนิเวศ"
)
t["prod.cards.title"] = tr("QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards")
t["prod.cards.subtitle"] = tr("Digital-to-Physical", "Digital a Físico", "Numérique vers Physique", "Digital para Físico", "Digital-zu-Physisch", "数字到实体", "رقمي إلى فيزيائي", "ดิจิทัลสู่ทางกายภาพ")
t["prod.cards.desc"] = tr(
    "Connects the QFS digital ecosystem with real-world physical and digital payment solutions.",
    "Conecta el ecosistema digital QFS con soluciones de pago físicas y digitales del mundo real.",
    "Connecte l'écosystème numérique QFS avec des solutions de paiement physiques et numériques du monde réel.",
    "Conecta o ecossistema digital QFS com soluções de pagamento físicas e digitais do mundo real.",
    "Verbindet das QFS-digitale Ökosystem mit physischen und digitalen Zahlungslösungen der realen Welt.",
    "将QFS数字生态系统与现实世界的实体和数字支付解决方案连接起来。",
    "يربط نظام QFS الرقمي بحلول الدفع الفيزيائية والرقمية في العالم الحقيقي.",
    "เชื่อมต่อระบบนิเวศดิจิทัล QFS กับโซลูชันการชำระเงินทางกายภาพและดิจิทัลในโลกแห่งความเป็นจริง"
)
t["prod.ai.title"] = tr("QFS + AI", "QFS + IA", "QFS + IA", "QFS + IA", "QFS + KI", "QFS + AI", "QFS + AI", "QFS + AI")
t["prod.ai.subtitle"] = tr("Intelligent Finance", "Finanzas Inteligentes", "Finance Intelligente", "Finanças Inteligentes", "Intelligente Finanzen", "智能金融", "المال الذكي", "การเงินอัจฉริยะ")

# ============================================================
# SECURITY (home page)
# ============================================================
t["sec.title"] = tr("QFS Security", "Seguridad QFS", "Sécurité QFS", "Segurança QFS", "QFS Sicherheit", "QFS 安全", "أمان QFS", "ความปลอดภัย QFS")
t["sec.subtitle"] = tr("Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان", "ความปลอดภัย")
t["sec.desc"] = tr(
    "Security is one of the fundamental pillars of the QFS ecosystem. Designed to evolve alongside new digital threats through a multi-layered security architecture.",
    "La seguridad constituye uno de los pilares fundamentales del ecosistema QFS. Diseñado para evolucionar con las nuevas amenazas digitales mediante una arquitectura de seguridad multicapa.",
    "La sécurité est l'un des piliers fondamentaux de l'écosystème QFS. Conçu pour évoluer avec les nouvelles menaces numériques grâce à une architecture de sécurité multicouche.",
    "A segurança é um dos pilares fundamentais do ecossistema QFS. Projetado para evoluir junto com as novas ameaças digitais por meio de uma arquitetura de segurança multicamadas.",
    "Sicherheit ist einer der Grundpfeiler des QFS-Ökosystems. Konzipiert, um sich mit neuen digitalen Bedrohungen durch eine mehrschichtige Sicherheitsarchitektur weiterzuentwickeln.",
    "安全是QFS生态系统的基本支柱之一。通过多层安全架构设计，能够随新型数字威胁一起演进。",
    "الأمان هو أحد الركائز الأساسية لنظام QFS. مصمم للتطور مع التهديدات الرقمية الجديدة من خلال هيكل أماني متعدد الطبقات.",
    "ความปลอดภัยเป็นหนึ่งในเสาหลักของระบบนิเวศ QFS ออกแบบมาให้พัฒนาไปพร้อมกับภัยคุกคามดิจิทัลใหม่ๆ ผ่านสถาปัตยกรรมความปลอดภัยหลายชั้น"
)

# ============================================================
# PILLARS (home page)
# ============================================================
t["pil.title1"] = tr("Five", "Cinco", "Cinq", "Cinco", "Fünf", "五大", "خمسة", "ห้า")
t["pil.title2"] = tr("Pillars", "Pilares", "Piliers", "Pilares", "Säulen", "支柱", "ركائز", "เสาหลัก")
t["pil.title3"] = tr("Fundamental", "Fundamentales", "Fondamentaux", "Fundamentais", "Grundlegend", "基础", "أساسية", "พื้นฐาน")
t["pil.desc"] = tr(
    "QFS proposes a new financial architecture based on principles that will transform the digital economy.",
    "QFS propone una nueva arquitectura financiera basada en principios que transformarán la economía digital.",
    "QFS propose une nouvelle architecture financière basée sur des principes qui transformeront l'économie numérique.",
    "QFS propõe uma nova arquitetura financeira baseada em princípios que transformarão a economia digital.",
    "QFS schlägt eine neue Finanzarchitektur vor, die auf Prinzipien basiert, die die digitale Wirtschaft transformieren werden.",
    "QFS 提出了一种基于将改变数字经济的原则的新金融架构。",
    "يقترح QFS هيكلاً مالياً جديداً قائماً على مبادئ ستحول الاقتصاد الرقمي.",
    "QFS เสนอสถาปัตยกรรมทางการเงินใหม่บนพื้นฐานหลักการที่จะเปลี่ยนแปลงเศรษฐกิจดิจิทัล"
)

# ============================================================
# ECOSYSTEM (home page)
# ============================================================
t["eco.subtitle"] = tr("The Ecosystem", "El Ecosistema", "L'Écosystème", "O Ecossistema", "Das Ökosystem", "生态系统", "النظام البيئي", "ระบบนิเวศ")
t["eco.desc"] = tr(
    "Modular financial architecture integrating different services within a single digital ecosystem.",
    "Arquitectura financiera modular que integra diferentes servicios dentro de un mismo ecosistema digital.",
    "Architecture financière modulaire intégrant différents services au sein d'un seul écosystème numérique.",
    "Arquitetura financeira modular que integra diferentes serviços dentro de um único ecossistema digital.",
    "Modulare Finanzarchitektur, die verschiedene Dienste in einem einzigen digitalen Ökosystem integriert.",
    "模块化金融架构，在单一数字生态系统中整合不同服务。",
    "هيكل مالي موديولار يدمج خدمات مختلفة ضمن نظام رقمي متكامل.",
    "สถาปัตยกรรมทางการเงินแบบโมดูลาร์ที่ผสานรวมบริการต่างๆ ภายในระบบนิเวศดิจิทัลเดียว"
)

# ============================================================
# ALLIANCES (home page)
# ============================================================
t["all.title"] = tr("Alliances", "Alianzas", "Alliances", "Alianças", "Allianzen", "联盟", "التحالفات", "พันธมิตร")
t["all.title2"] = tr("Global", "Globales", "Mondiales", "Globais", "Global", "全球", "العالمية", "ทั่วโลก")
t["all.subtitle"] = tr("Strategic Alliances", "Alianzas Estratégicas", "Alliances Stratégiques", "Alianças Estratégicas", "Strategische Allianzen", "战略联盟", "التحالفات الاستراتيجية", "พันธมิตรเชิงยุทธศาสตร์")
t["all.desc"] = tr(
    "QFS builds bridges of collaboration with organizations and governments for a truly global financial infrastructure.",
    "QFS construye puentes de colaboración con organizaciones y gobiernos para una infraestructura financiera verdaderamente global.",
    "QFS construit des ponts de collaboration avec des organisations et des gouvernements pour une infrastructure financière véritablement mondiale.",
    "QFS constrói pontes de colaboração com organizações e governos para uma infraestrutura financeira verdadeiramente global.",
    "QFS baut Kooperationsbrücken mit Organisationen und Regierungen für eine wirklich globale Finanzinfrastruktur.",
    "QFS与组织和政府建立合作桥梁，打造真正全球化的金融基础设施。",
    "يبني QFS جسور تعاون مع المنظمات والحكومات لبناء بنية مالية عالمية حقيقية.",
    "QFS สร้างสะพานความร่วมมือกับองค์กรและรัฐบาลเพื่อโครงสร้างพื้นฐานทางการเงินที่แท้จริงระดับโลก"
)
t["all.gcrm.name"] = tr("GCRM Alliance", "Alianza GCRM", "Alliance GCRM", "Aliança GCRM", "GCRM-Allianz", "GCRM联盟", "تحالف GCRM", "GCRM Alliance")
t["all.gcrm.tag"] = tr("Strategic Partner", "Socio Estratégico", "Partenaire Stratégique", "Parceiro Estratégico", "Strategischer Partner", "战略合作伙伴", "شريك استراتيجي", "พันธมิตรเชิงยุทธศาสตร์")
t["all.arab.name"] = tr("Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab")
t["all.arab.tag"] = tr("Regional Expansion", "Expansión Regional", "Expansion Régionale", "Expansão Regional", "Regionale Expansion", "区域扩张", "التوسع الإقليمي", "การขยายตัวในภูมิภาค")
t["all.gov.name"] = tr("Government Currencies", "Monedas de Gobiernos", "Monnaies Gouvernementales", "Moedas Governamentais", "Regierungswährungen", "政府货币", "العملات الحكومية", "สกุลเงินของรัฐบาล")
t["all.gov.tag"] = tr("Digital Government", "Gobierno Digital", "Gouvernement Numérique", "Governo Digital", "Digitale Regierung", "数字政府", "الحكومة الرقمية", "รัฐบาลดิจิทัล")
t["all.nesg.name"] = tr("NESG", "NESG", "NESG", "NESG", "NESG", "NESG", "NESG", "NESG")
t["all.nesg.tag"] = tr("NESG Ecosystem", "Ecosistema NESG", "Écosystème NESG", "Ecossistema NESG", "NESG-Ökosystem", "NESG生态系统", "نظام NESG", "ระบบนิเวศ NESG")

# ============================================================
# CTA (home page)
# ============================================================
t["cta.title1"] = tr("Building the Future", "Construyendo el Futuro", "Construire l'Avenir", "Construindo o Futuro", "Die Zukunft aufbauen", "构建未来", "بناء المستقبل", "สร้างอนาคต")
t["cta.title2"] = tr("of Digital Finance", "de las Finanzas Digitales", "des Finances Numériques", "das Finanças Digitais", "der Digitalen Finanzen", "数字金融的未来", "للمال الرقمي", "ของการเงินดิจิทัล")
t["cta.desc"] = tr(
    "QFS is more than a wallet, more than payments, more than an exchange. It is an integrated digital financial ecosystem designed for the next generation of the global economy.",
    "QFS es más que una wallet, más que pagos, más que un exchange. Es un ecosistema financiero digital integrado diseñado para la próxima generación de la economía global.",
    "QFS est plus qu'un portefeuille, plus que des paiements, plus qu'un exchange. C'est un écosystème financier numérique intégré conçu pour la prochaine génération de l'économie mondiale.",
    "QFS é mais que uma carteira, mais que pagamentos, mais que uma exchange. É um ecossistema financeiro digital integrado projetado para a próxima geração da economia global.",
    "QFS ist mehr als eine Wallet, mehr als Zahlungen, mehr als eine Börse. Es ist ein integriertes digitales Finanzökosystem für die nächste Generation der Weltwirtschaft.",
    "QFS不仅仅是钱包、支付或交易所。它是一个为全球经济下一代设计的集成数字金融生态系统。",
    "QFS ليس مجرد محفظة أو دفع أو بورصة. إنه نظام مالي رقمي متكامل مصمم للجيل القادم من الاقتصاد العالمي.",
    "QFS ไม่ใช่แค่กระเป๋าเงิน การชำระเงิน หรือแลกเปลี่ยน แต่เป็นระบบนิเวศทางการเงินดิจิทัลแบบรวมศูนย์ที่ออกแบบมาสำหรับยุคถัดไปของเศรษฐกิจโลก"
)

# ============================================================
# FAQ (home page)
# ============================================================
t["faq.subtitle"] = tr("FAQ", "Preguntas Frecuentes", "FAQ", "Perguntas Frequentes", "FAQ", "常见问题", "الأسئلة الشائعة", "คำถามที่พบบ่อย")

# ============================================================
# PORTAL PAGE
# ============================================================
t["portal.badge"] = tr("PORTAL", "PORTAL", "PORTAIL", "PORTAL", "PORTAL", "门户", "البوابة", "พอร์ทัล")
t["portal.title"] = tr("QFS Portal", "Portal QFS", "Portail QFS", "Portal QFS", "QFS Portal", "QFS 门户", "بوابة QFS", "พอร์ทัล QFS")
t["portal.subtitle"] = tr("Digital Financial Gateway", "Puerta de Acceso Financiera Digital", "Passerelle Financière Numérique", "Portal Financeiro Digital", "Digitales Finanzportal", "数字金融网关", "البوابة المالية الرقمية", "ประตูทางการเงินดิจิทัล")
t["portal.desc"] = tr("Explore the currencies, features and services available within the QFS ecosystem.", "Explore las monedas, funciones y servicios disponibles dentro del ecosistema QFS.", "Explorez les devises, fonctionnalités et services disponibles dans l'écosystème QFS.", "Explore as moedas, recursos e serviços disponíveis no ecossistema QFS.", "Erkunden Sie die Währungen, Funktionen und Dienste im QFS-Ökosystem.", "探索QFS生态系统中可用的货币、功能和服务。", "استكشف العملات والميزات والخدمات المتاحة في نظام QFS.", "สำรวจสกุลเงิน คุณสมบัติ และบริการที่มีอยู่ในระบบนิเวศ QFS")
t["portal.features"] = tr("Platform Features", "Características de la Plataforma", "Fonctionnalités de la Plateforme", "Recursos da Plataforma", "Plattform-Funktionen", "平台功能", "ميزات المنصة", "คุณสมบัติแพลตฟอร์ม")
t["portal.currencies"] = tr("Supported Currencies", "Monedas Soportadas", "Devises Prises en Charge", "Moedas Suportadas", "Unterstützte Währungen", "支持的货币", "العملات المدعومة", "สกุลเงินที่รองรับ")
t["portal.card.title"] = tr("QFSPay Card", "Tarjeta QFSPay", "Carte QFSPay", "Cartão QFSPay", "QFSPay Karte", "QFSPay 卡", "بطاقة QFSPay", "บัตร QFSPay")
t["portal.card.desc"] = tr("Your QFS digital assets available for everyday purchases through the QFSPay card.", "Tus activos digitales QFS disponibles para compras cotidianas a través de la tarjeta QFSPay.", "Vos actifs numériques QFS disponibles pour les achats quotidiens via la carte QFSPay.", "Seus ativos digitais QFS disponíveis para compras diárias através do cartão QFSPay.", "Ihre QFS-digitalen Assets für tägliche Einkäufe verfügbar über die QFSPay-Karte.", "您的QFS数字资产可通过QFSPay卡用于日常购买。", "أصولك الرقمية QFS متاحة للمشتريات اليومية عبر بطاقة QFSPay.", "สินทรัพย์ดิจิทัล QFS ของคุณพร้อมใช้สำหรับการซื้อของประจำวันผ่านบัตร QFSPay")

# Portal - Header
