#!/usr/bin/env python3
"""Restore the full 7-language lang-store.ts with 'Official' (not 'Oficial')."""
import json

L = ["en", "es", "fr", "pt", "de", "zh", "ar"]
t = {}
td = {}

def a(k, en, es, fr, pt, de, zh, ar):
    t[k] = {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar}

def ad(k, en, es, fr, pt, de, zh, ar):
    td[k] = {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar}

# ===== NAVIGATION =====
a("nav.home", "Home", "Inicio", "Accueil", "Inicio", "Startseite", "首页", "الرئيسية")
a("nav.portal", "Portal", "Portal", "Portail", "Portal", "Portal", "门户", "البوابة")
a("nav.whitepaper", "White Paper", "Libro Blanco", "Livre Blanc", "Livro Branco", "Whitepaper", "白皮书", "الوثيقة التفصيلية")
a("nav.roadmap", "Roadmap", "Roadmap", "Feuille de Route", "Roteiro", "Roadmap", "路线图", "خريطة الطريق")
a("nav.explore", "Explore QFS", "Explorar QFS", "Explorer QFS", "Explorar QFS", "QFS entdecken", "探索 QFS", "استكشاف QFS")
a("nav.join", "Join Community", "Unirse a la Comunidad", "Rejoindre la Communauté", "Junte-se à Comunidade", "Gemeinschaft beitreten", "加入社区", "انضم إلى المجتمع")

# ===== HERO =====
a("hero.badge", "QUANTUM FINANCIAL SYSTEM", "SISTEMA FINANCIERO CUÁNTICO", "SYSTÈME FINANCIER QUANTIQUE", "SISTEMA FINANCEIRO QUÂNTICO", "QUANTEN-FINANZSYSTEM", "量子金融系统", "نظام المال الكمي")
a("hero.title1", "The Future of", "El Futuro de las", "L'Avenir des", "O Futuro das", "Die Zukunft der", "数字金融的未来", "مستقبل")
a("hero.title2", "Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitalen Finanzen", "数字金融的未来", "المال الرقمي")
a("hero.desc",
  "QFS Official develops a new digital financial infrastructure integrating blockchain, artificial intelligence, advanced cryptographic security, digital payments and decentralized financial services.",
  "QFS Official desarrolla una nueva infraestructura financiera digital que integra blockchain, inteligencia artificial, seguridad criptográfica avanzada, pagos digitales y servicios financieros descentralizados.",
  "QFS Official développe une nouvelle infrastructure financière numérique intégrant la blockchain, l'intelligence artificielle, la sécurité cryptographique avancée, les paiements numériques et les services financiers décentralisés.",
  "QFS Official desenvolve uma nova infraestrutura financeira digital integrando blockchain, inteligência artificial, segurança criptográfica avançada, pagamentos digitais e serviços financeiros descentralizados.",
  "QFS Official entwickelt eine neue digitale Finanzinfrastruktur, die Blockchain, Künstliche Intelligenz, fortschrittliche Kryptografie, digitale Zahlungen und dezentrale Finanzdienstleistungen integriert.",
  "QFS Official 开发了一套新的数字金融基础设施，整合区块链、人工智能、高级加密安全、数字支付和去中心化金融服务。",
  "تطور QFS Official بنية مالية رقمية جديدة تدمج البلوكتشين والذكاء الاصطناعي والأمن التشفيري المتقدم والدفع الرقمي والخدمات المالية اللامركزية.")
a("hero.wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet")
a("hero.qfspay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay")
a("hero.explore_btn", "Explore QFS", "Explorar QFS", "Explorer QFS", "Explorar QFS", "QFS entdecken", "探索 QFS", "استكشاف QFS")
a("hero.tags.technology", "Technology", "Tecnología", "Technologie", "Tecnologia", "Technologie", "技术", "التكنولوجيا")
a("hero.tags.finance", "Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitale Finanzen", "数字金融", "المال الرقمي")
a("hero.tags.security", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("hero.tags.decentralization", "Decentralization", "Descentralización", "Décentralisation", "Descentralização", "Dezentralisierung", "去中心化", "اللامركزية")
a("hero.tags.connectivity", "Global Connectivity", "Conectividad Global", "Connectivité Mondiale", "Conectividade Global", "Globale Vernetzung", "全球连接", "الاتصال العالمي")

# ===== ECOSYSTEM =====
a("eco.subtitle", "The Ecosystem", "El Ecosistema", "L'Écosystème", "O Ecossistema", "Das Ökosystem", "生态系统", "النظام البيئي")
a("eco.title", "QFS Ecosystem", "Ecosistema QFS", "Écosystème QFS", "Ecossistema QFS", "QFS-Ökosystem", "QFS 生态系统", "نظام QFS البيئي")
a("eco.desc", "Modular financial architecture integrating different services within a single digital ecosystem.",
  "Arquitectura financiera modular que integra diferentes servicios dentro de un mismo ecosistema digital.",
  "Architecture financière modulaire intégrant différents services au sein d'un seul écosystème numérique.",
  "Arquitetura financeira modular que integra diferentes serviços dentro de um único ecossistema digital.",
  "Modulare Finanzarchitektur, die verschiedene Dienste in einem einzigen digitalen Ökosystem integriert.",
  "模块化金融架构，在单一数字生态系统中整合不同服务。",
  "هيكل مالي موديولار يدمج خدمات مختلفة ضمن نظام رقمي متكامل.")

# ===== PILLARS =====
a("pil.subtitle", "Architecture", "Arquitectura", "Architecture", "Arquitetura", "Architektur", "架构", "الهيكل المعماري")
a("pil.title1", "Five", "Cinco", "Cinq", "Cinco", "Fünf", "五大", "خمسة")
a("pil.title2", "Pillars", "Pilares", "Piliers", "Pilares", "Säulen", "支柱", "ركائز")
a("pil.title3", "Fundamental", "Fundamentales", "Fondamentaux", "Fundamentais", "Grundlegend", "基础", "أساسية")
a("pil.desc", "QFS proposes a new financial architecture based on principles that will transform the digital economy.",
  "QFS propone una nueva arquitectura financiera basada en principios que transformarán la economía digital.",
  "QFS propose une nouvelle architecture financière basée sur des principes qui transformeront l'économie numérique.",
  "QFS propõe uma nova arquitetura financeira baseada em princípios que transformarão a economia digital.",
  "QFS schlägt eine neue Finanzarchitektur vor, die auf Prinzipien basiert, die die digitale Wirtschaft transformieren werden.",
  "QFS 提出了一种基于将改变数字经济的原则的新金融架构。",
  "يقترح QFS هيكلاً مالياً جديداً قائماً على مبادئ ستحول الاقتصاد الرقمي.")

# ===== SECURITY =====
a("sec.subtitle", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("sec.title", "QFS Security", "Seguridad QFS", "Sécurité QFS", "Segurança QFS", "QFS Sicherheit", "QFS 安全", "أمان QFS")
a("sec.desc", "Security is one of the fundamental pillars of the QFS ecosystem. Designed to evolve alongside new digital threats through a multi-layered security architecture.",
  "La seguridad constituye uno de los pilares fundamentales del ecosistema QFS. Diseñado para evolucionar con las nuevas amenazas digitales mediante una arquitectura de seguridad multicapa.",
  "La sécurité est l'un des piliers fondamentaux de l'écosystème QFS. Conçu pour évoluer avec les nouvelles menaces numériques grâce à une architecture de sécurité multicouche.",
  "A segurança é um dos pilares fundamentais do ecossistema QFS. Projetado para evoluir junto com as novas ameaças digitais por meio de uma arquitetura de segurança multicamadas.",
  "Sicherheit ist einer der Grundpfeiler des QFS-Ökosystems. Konzipiert, um sich mit neuen digitalen Bedrohungen durch eine mehrschichtige Sicherheitsarchitektur weiterzuentwickeln.",
  "安全是QFS生态系统的基本支柱之一。通过多层安全架构设计，能够随新型数字威胁一起演进。",
  "الأمان هو أحد الركائز الأساسية لنظام QFS. مصمم للتطور مع التهديدات الرقمية الجديدة من خلال هيكل أماني متعدد الطبقات.")

# ===== WHY QFS =====
a("why.subtitle", "Why QFS", "Por qué QFS", "Pourquoi QFS", "Por que QFS", "Warum QFS", "为什么选QFS", "لماذا QFS")
a("why.title", "Why QFS?", "¿Por qué QFS?", "Pourquoi QFS ?", "Por que QFS?", "Warum QFS?", "为什么选QFS？", "لماذا QFS؟")
a("why.security", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("why.security.desc", "Infrastructure designed with security as absolute priority.", "Infraestructura diseñada con seguridad como prioridad absoluta.", "Infrastructure conçue avec la sécurité comme priorité absolue.", "Infraestrutura projetada com segurança como prioridade absoluta.", "Infrastruktur mit Sicherheit als absolutem Priorität.", "以安全为绝对优先事项设计的基础设施。", "بنية تحتيا الأمان كأولوية مطلقة.")
a("why.speed", "Speed", "Velocidad", "Vitesse", "Velocidade", "Geschwindigkeit", "速度", "السرعة")
a("why.speed.desc", "Efficient and scalable digital processing.", "Procesamiento digital eficiente y escalable.", "Traitement numérique efficace et évolutif.", "Processamento digital eficiente e escalável.", "Effiziente und skalierbare digitale Verarbeitung.", "高效可扩展的数字处理。", "معالجة رقمية فعالة وقابلة للتوسع.")
a("why.transparency", "Transparency", "Transparencia", "Transparence", "Transparência", "Transparenz", "透明度", "الشفافية")
a("why.transparency.desc", "Blockchain technology and verifiable records.", "Tecnología blockchain y registros verificables.", "Technologie blockchain et registres vérifiables.", "Tecnologia blockchain e registros verificáveis.", "Blockchain-Technologie und überprüfbare Aufzeichnungen.", "区块链技术和可验证记录。", "تكنولوجيا البلوكتشين وسجلات قابلة للتحقق.")
a("why.access", "Access", "Acceso", "Accès", "Acesso", "Zugang", "接入", "الوصول")
a("why.access.desc", "Financial services accessible from an integrated platform.", "Servicios financieros accesibles desde una plataforma integrada.", "Services financiers accessibles depuis une plateforme intégrée.", "Serviços financeiros acessíveis de uma plataforma integrada.", "Finanzdienstleistungen zugänglich über eine integrierte Plattform.", "通过集成平台即可访问的金融服务。", "خدمات مالية متاحة من منصة متكاملة.")
a("why.interop", "Interoperability", "Interoperabilidad", "Interopérabilité", "Interoperabilidade", "Interoperabilität", "互操作性", "التشابكية")
a("why.interop.desc", "Connection between different networks and assets.", "Conexión entre diferentes redes y activos.", "Connexion entre différents réseaux et actifs.", "Conexão entre diferentes redes e ativos.", "Verbindung zwischen verschiedenen Netzwerken und Assets.", "不同网络和资产之间的连接。", "الترابط بين الشبكات والأصول المختلفة.")
