import json

L = ["en", "es", "fr", "pt", "de", "zh", "ar"]

t = {}

# Helper
def a(k, en, es, fr, pt, de, zh, ar):
    t[k] = {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar}

def ad(k, en, es, fr, pt, de, zh, ar):
    t[k] = {"en": en, "es": es, "fr": fr, "pt": pt, "de": de, "zh": zh, "ar": ar}

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
a("hero.desc", "QFS Official develops a new digital financial infrastructure integrating blockchain, artificial intelligence, advanced cryptographic security, digital payments and decentralized financial services.",
  "QFS Official desarrolla una nueva infraestructura financiera digital que integra blockchain, inteligencia artificial, seguridad criptográfica avanzada, pagos digitales y servicios financieros descentralizados.",
  "QFS Official développe une nouvelle infrastructure financière numérique intégrant la blockchain, l'intelligence artificielle, la sécurité cryptographique avancée, les paiements numériques et les services financiers décentralisés.",
  "QFS Official desenvolve uma nova infraestrutura financeira digital integrando blockchain, inteligência artificial, segurança criptográfica avançada, pagamentos digitais e serviços financeiros descentralizados.",
  "QFS Official entwickelt eine neue digitale Finanzinfrastruktur, die Blockchain, Künstliche Intelligenz, fortschrittliche Kryptografie, digitale Zahlungen und dezentrale Finanzdienstleistungen integriert.",
  "QFS Official 开发了一套新的数字金融基础设施，整合区块链、人工智能、高级加密安全、数字支付和去中化金融服务。",
  "تطور QFS Official بنية مالية رقمية جديدة تدمج البلوكتشين والذكاء الاصطناعي والأمن التشفيري المتقدم والدفع الرقمي والخدمات المالية اللامركزية.")
a("hero.wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet")
a("hero.qfspay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay")
a("hero.explore_btn", "Explore QFS", "Explorar QFS", "Explorer QFS", "Explorar QFS", "QFS entdecken", "探索 QFS", "استكشاف QFS")
a("hero.tags.technology", "Technology", "Tecnología", "Technologie", "Tecnologia", "Technologie", "技术", "التكنولوجيا")
a("hero.tags.finance", "Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitale Finanzen", "数字金融", "المال الرقمي")
a("hero.tags.security", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("hero.tags.decentralization", "Decentralization", "Descentralización", "Décentralisation", "Descentralização", "Dezentralisierung", "去中化", "اللامركزية")
a("hero.tags.connectivity", "Global Connectivity", "Conectividad Global", "Connectivité Mondiale", "Conectividade Global", "Globale Vernetzung", "全球连接", "الاتصال العالمي")

# ===== ECOSYSTEM =====
a("eco.subtitle", "The Ecosystem", "El Ecosistema", "L'Écosystème", "O Ecossistema", "Das Ökosystem", "生态系统", "النظام البيئي")
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

# ===== PRODUCTS =====
a("prod.subtitle", "Products", "Productos", "Produits", "Produtos", "Produkte", "产品", "المنتجات")
a("prod.wallet.title", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet", "QFS Wallet")
a("prod.wallet.subtitle", "Your Digital Financial Hub", "Tu Centro Financiero Digital", "Votre Hub Financier Numérique", "Seu Hub Financeiro Digital", "Ihr Digitales Finanzzentrum", "您的数字金融中心", "مركزك المالي الرقمي")
a("prod.wallet.desc", "The user's entry point to the QFS ecosystem. Manage different types of digital assets from a single interface with advanced security.",
  "El punto de acceso del usuario al ecosistema QFS. Gestione diferentes tipos de activos digitales desde una única interfaz con seguridad avanzada.",
  "Le point d'accès des utilisateurs à l'écosystème QFS. Gérez différents types d'actifs numériques depuis une seule interface avec une sécurité avancée.",
  "O ponto de acesso do usuário ao ecossistema QFS. Gerencie diferentes tipos de ativos digitais de uma única interface com segurança avançada.",
  "Der Zugangspunkt der Benutzer zum QFS-Ökosystem. Verwalten Sie verschiedene digitale Asset-Typen von einer einzigen Oberfläche mit fortschrittlicher Sicherheit.",
  "用户进入QFS生态系统的入口。通过具有高级安全性的单一界面管理各种数字资产。",
  "نقطة دخول المستخدم إلى نظام QFS. إدارة أنواع مختلفة من الأصول الرقمية من واجهة واحدة بأمان متقدم.")
a("prod.wallet.balance", "Total Balance", "Balance Total", "Solde Total", "Saldo Total", "Gesamtguthaben", "总余额", "الرصيد الإجمالي")
a("prod.wallet.month", "this month", "este mes", "ce mois", "este mês", "diesen Monat", "本月", "هذا الشهر")
a("prod.qfspay.title", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay", "QFSPay")
a("prod.qfspay.subtitle", "Digital Payments", "Pagos Digitales", "Paiements Numériques", "Pagamentos Digitais", "Digitale Zahlungen", "数字支付", "الدفع الرقمي")
a("prod.qfspay.desc", "Digital payments for a connected economy. Facilitates the use of digital assets for everyday and commercial operations.",
  "Pagos digitales para una economía conectada. Facilita la utilización de activos digitales para operaciones cotidianas y comerciales.",
  "Paiements numériques pour une économie connectée. Facilite l'utilisation d'actifs numériques pour les opérations quotidiennes et commerciales.",
  "Pagamentos digitais para uma economia conectada. Facilita o uso de ativos digitais para operações diárias e comerciais.",
  "Digitale Zahlungen für eine vernetzte Wirtschaft. Erleichtert die Nutzung digitaler Assets für alltägliche und kommerzielle Operationen.",
  "为互联经济提供数字支付。促进数字资产在日常和商业运营中的使用。",
  "دفع رقمي لاقتصاد متصل. يسهل استخدام الأصول الرقمية للعمليات اليومية والتجارية.")
a("prod.dex.title", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX", "QFS Exchange DEX")
a("prod.dex.subtitle", "Decentralized Trading", "Trading Descentralizado", "Trading Décentralisé", "Trading Descentralizado", "Dezentraler Handel", "去中化交易", "التداول اللامركزي")
a("prod.dex.desc", "Decentralized platform for exchanging digital assets with access to ecosystem markets and liquidity.",
  "Plataforma descentralizada para el intercambio de activos digitales con acceso a mercados y liquidez del ecosistema.",
  "Plateforme décentralisée pour l'échange d'actifs numériques avec accès aux marchés et à la liquidité de l'écosystème.",
  "Plataforma descentralizada para troca de ativos digitais com acesso a mercados e liquidez do ecossistema.",
  "Dezentrale Plattform zum Austausch digitaler Assets mit Zugang zu Ökosystem-Märkten und Liquidität.",
  "去中化的数字资产交易平台，可访问生态系统市场和流动性。",
  "منصة لامركزية لتبادل الأصول الرقمية مع الوصول إلى أسواق وسيولة النظام.")
a("prod.cards.title", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards", "QFS Quantum Cards")
a("prod.cards.subtitle", "Digital-to-Physical", "Digital a Físico", "Numérique vers Physique", "Digital para Físico", "Digital-zu-Physisch", "数字到实体", "رقمي إلى فيزيائي")
a("prod.cards.desc", "Connects the QFS digital ecosystem with real-world physical and digital payment solutions.",
  "Conecta el ecosistema digital QFS con soluciones de pago físicas y digitales del mundo real.",
  "Connecte l'écosystème numérique QFS avec des solutions de paiement physiques et numériques du monde réel.",
  "Conecta o ecossistema digital QFS com soluções de pagamento físicas e digitais do mundo real.",
  "Verbindet das QFS-digitale Ökosystem mit physischen und digitalen Zahlungslösungen der realen Welt.",
  "将QFS数字生态系统与现实世界的实体和数字支付解决方案连接起来。",
  "يربط نظام QFS الرقمي بحلول الدفع الفيزيائية والرقمية في العالم الحقيقي.")
a("prod.ai.title", "QFS + AI", "QFS + IA", "QFS + IA", "QFS + IA", "QFS + KI", "QFS + AI", "QFS + AI")
a("prod.ai.subtitle", "Intelligent Finance", "Finanzas Inteligentes", "Finance Intelligente", "Finanças Inteligentes", "Intelligente Finanzen", "智能金融", "المال الذكي")

# ===== FAQ =====
a("faq.subtitle", "FAQ", "Preguntas Frecuentes", "FAQ", "Perguntas Frequentes", "FAQ", "常见问题", "الأسئلة الشائعة")

# ===== ALLIANCES =====
a("all.subtitle", "Strategic Alliances", "Alianzas Estratégicas", "Alliances Stratégiques", "Alianças Estratégicas", "Strategische Allianzen", "战略联盟", "التحالفات الاستراتيجية")
a("all.title", "Alliances", "Alianzas", "Alliances", "Alianças", "Allianzen", "联盟", "التحالفات")
a("all.title2", "Global", "Globales", "Mondiales", "Globais", "Global", "全球", "العالمية")
a("all.desc", "QFS builds bridges of collaboration with organizations and governments for a truly global financial infrastructure.",
  "QFS construye puentes de colaboración con organizaciones y gobiernos para una infraestructura financiera verdaderamente global.",
  "QFS construit des ponts de collaboration avec des organisations et des gouvernements pour une infrastructure financière véritablement mondiale.",
  "QFS constrói pontes de colaboração com organizações e governos para uma infraestrutura financeira verdadeiramente global.",
  "QFS baut Kooperationsbrücken mit Organisationen und Regierungen für eine wirklich globale Finanzinfrastruktur.",
  "QFS与组织和政府建立合作桥梁，打造真正全球化的金融基础设施。",
  "يبني QFS جسور تعاون مع المنظمات والحكومات لبناء بنية مالية عالمية حقيقية.")
a("all.gcrm.tag", "Strategic Partner", "Socio Estratégico", "Partenaire Stratégique", "Parceiro Estratégico", "Strategischer Partner", "战略合作伙伴", "شريك استراتيجي")
a("all.gcrm.name", "GCRM Alliance", "Alianza GCRM", "Alliance GCRM", "Aliança GCRM", "GCRM-Allianz", "GCRM联盟", "تحالف GCRM")
a("all.arab.tag", "Regional Expansion", "Expansión Regional", "Expansion Régionale", "Expansão Regional", "Regionale Expansion", "区域扩张", "التوسع الإقليمي")
a("all.arab.name", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab", "Al Arab")
a("all.gov.tag", "Digital Government", "Gobierno Digital", "Gouvernement Numérique", "Governo Digital", "Digitale Regierung", "数字政府", "الحكومة الرقمية")
a("all.gov.name", "Government Currencies", "Monedas de Gobiernos", "Monnaies Gouvernementales", "Moedas Governamentais", "Regierungswährungen", "政府货币", "العملات الحكومية")
a("all.nesg.tag", "NESG Ecosystem", "Ecosistema NESG", "Écosystème NESG", "Ecossistema NESG", "NESG-Ökosystem", "NESG生态系统", "نظام NESG")
a("all.nesg.name", "NESG", "NESG", "NESG", "NESG", "NESG", "NESG", "NESG")

# ===== WHY QFS =====
a("why.subtitle", "Why QFS", "Por qué QFS", "Pourquoi QFS", "Por que QFS", "Warum QFS", "为什么选QFS", "لماذا QFS")
a("why.title", "Why QFS?", "¿Por qué QFS?", "Pourquoi QFS ?", "Por que QFS?", "Warum QFS?", "为什么选QFS？", "لماذا QFS؟")
a("why.security", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("why.security.desc", "Infrastructure designed with security as absolute priority.", "Infraestructura diseñada con seguridad como prioridad absoluta.", "Infrastructure conçue avec la sécurité comme priorité absolue.", "Infraestrutura projetada com segurança como prioridade absoluta.", "Infrastruktur mit Sicherheit als absolutem Priorität.", "以安全为绝对优先事项设计的基础设施。", "بنية تحتيا الأمان كأولوية مطلقة.")
a("why.speed", "Speed", "Velocidad", "Vitesse", "Velocidade", "Geschwindigkeit", "速度", "السرعة")
a("why.speed.desc", "Efficient and scalable digital processing.", "Procesamiento digital eficiente y escalable.", "Traitement numérique efficace et évolutif.", "Processamento digital eficiente e escalável.", "Effiziente und skalierbare digitale Verarbeitung.", "高效可扩展的数字处理。", "معالجة رقمية فعالة وقابلة للتوسع.")
a("why.transparency", "Transparency", "Transparencia", "Transparence", "Transparência", "Transparenz", "透明度", "الشفافية")
a("why.transparency.desc", "Blockchain technology and verifiable records.", "Tecnología blockchain y registros verificables.", "Technologie blockchain et registres vérifiables.", "Tecnologia blockchain e registros verificáveis.", "Blockchain-Technologie und überprüfbare Aufzeichnungen.",
  "区块链技术和可验证记录。", "تكنولوجيا البلوكتشين وسجلات قابلة للتحقق.")
a("why.access", "Access", "Acceso", "Accès", "Acesso", "Zugang", "接入", "الوصول")
a("why.access.desc", "Financial services accessible from an integrated platform.", "Servicios financieros accesibles desde una plataforma integrada.", "Services financiers accessibles depuis une plateforme intégrée.", "Serviços financeiros acessíveis de uma plataforma integrada.", "Finanzdienstleistungen zugänglich über eine integrierte Plattform.",
  "通过集成平台即可访问的金融服务。", "خدمات مالية متاحة من منصة متكاملة.")
a("why.interop", "Interoperability", "Interoperabilidad", "Interopérabilité", "Interoperabilidade", "Interoperabilität", "互操作性", "التشابكية")
a("why.interop.desc", "Connection between different networks and assets.", "Conexión entre diferentes redes y activos.", "Connexion entre différents réseaux et actifs.", "Conexão entre diferentes redes e ativos.", "Verbindung zwischen verschiedenen Netzwerken und Assets.",
  "不同网络和资产之间的连接。", "الترابط بين الشبكات والأصول المختلفة.")
a("why.innovation", "Innovation", "Innovación", "Innovation", "Inovação", "Innovation", "创新", "الابتكار")
a("why.innovation.desc", "Blockchain + AI + Cryptography + Digital Finance.", "Blockchain + IA + Criptografía + Finanzas Digitales.", "Blockchain + IA + Cryptographie + Finances Numériques.", "Blockchain + IA + Criptografia + Finanças Digitais.", "Blockchain + KI + Kryptografie + Digitale Finanzen.",
  "区块链 + AI + 加密术 + 数字金融。", "البلوكتشين + الذكاء الاصطناعي + التشفير + المال الرقمي.")

# ===== CTA =====
a("cta.title1", "Building the Future", "Construyendo el Futuro", "Construire l'Avenir", "Construindo o Futuro", "Die Zukunft aufbauen", "构建未来", "بناء المستقبل")
a("cta.title2", "of Digital Finance", "de las Finanzas Digitales", "des Finances Numériques", "das Finanças Digitais", "der Digitalen Finanzen", "数字金融的未来", "للمال الرقمي")
a("cta.desc", "QFS is more than a wallet, more than payments, more than an exchange. It is an integrated digital financial ecosystem designed for the next generation of the global economy.",
  "QFS es más que una wallet, más que pagos, más que un exchange. Es un ecosistema financiero digital integrado diseñado para la próxima generación de la economía global.",
  "QFS est plus qu'un portefeuille, plus que des paiements, plus qu'un exchange. C'est un écosystème financier numérique intégré conçu pour la prochaine génération de l'économie mondiale.",
  "QFS é mais que uma carteira, mais que pagamentos, mais que uma exchange. É um ecossistema financeiro digital integrado projetado para a próxima geração da economia global.",
  "QFS ist mehr als eine Wallet, mehr als Zahlungen, mehr als eine Börse. Es ist ein integriertes digitales Finanzökosystem für die nächste Generation der Weltwirtschaft.",
  "QFS不仅仅是钱包、支付或交易所。它是一个为全球经济下一代设计的集成数字金融生态系统。",
  "QFS ليس مجرد محفظة أو دفع أو بورصة. إنه نظام مالي رقمي متكامل مصمم للجيل القادم من الاقتصاد العالمي.")

# ===== PORTAL =====
a("portal.badge", "PORTAL", "PORTAL", "PORTAIL", "PORTAL", "PORTAL", "门户", "البوابة")
a("portal.title", "QFS Portal", "Portal QFS", "Portail QFS", "Portal QFS", "QFS Portal", "QFS 门户", "بوابة QFS")
a("portal.subtitle", "Digital Financial Gateway", "Puerta de Acceso Financiera Digital", "Passerelle Financière Numérique", "Portal Financeiro Digital", "Digitales Finanzportal", "数字金融网关", "البوابة المالية الرقمية")
a("portal.desc", "Explore the currencies, features and services available within the QFS ecosystem.",
  "Explore las monedas, funciones y servicios disponibles dentro del ecosistema QFS.",
  "Explorez les devises, fonctionnalités et services disponibles dans l'écosystème QFS.",
  "Explore as moedas, recursos e serviços disponíveis no ecossistema QFS.",
  "Erkunden Sie die Währungen, Funktionen und Dienste im QFS-Ökosystem.",
  "探索QFS生态系统中可用的货币、功能和服务。",
  "استكشف العملات والميزات والخدمات المتاحة في نظام QFS.")
a("portal.currencies", "Supported Currencies", "Monedas Soportadas", "Devises Prises en Charge", "Moedas Suportadas", "Unterstützte Währungen", "支持的货币", "العملات المدعومة")
a("portal.features", "Platform Features", "Características de la Plataforma", "Fonctionnalités de la Plateforme", "Recursos da Plataforma", "Plattform-Funktionen", "平台功能", "ميزات المنصة")
a("portal.card.title", "QFSPay Card", "Tarjeta QFSPay", "Carte QFSPay", "Cartão QFSPay", "QFSPay Karte", "QFSPay 卡", "بطاقة QFSPay")
a("portal.card.desc", "Your QFS digital assets available for everyday purchases through the QFSPay card.",
  "Tus activos digitales QFS disponibles para compras cotidianas a través de la tarjeta QFSPay.",
  "Vos actifs numériques QFS disponibles pour les achats quotidiens via la carte QFSPay.",
  "Seus ativos digitais QFS disponíveis para compras diárias através do cartão QFSPay.",
  "Ihre QFS-digitalen Assets für tägliche Einkäufe verfügbar über die QFSPay-Karte.",
  "您的QFS数字资产可通过QFSPay卡用于日常购买。",
  "أصولك الرقمية QFS متاحة للمشتريات اليومية عبر بطاقة QFSPay.")
a("portal.security.title", "Enterprise-Grade Security", "Seguridad de Nivel Empresarial", "Sécurité de Niveau Entreprise", "Segurança de Nível Empresarial", "Enterprise-Sicherheit", "企业级安全", "أمان مستوى المؤسسات")
a("portal.security.desc", "Multi-layered protection with quantum-resistant cryptography and real-time monitoring.",
  "Protección multicapa con criptografía resistente a cuántica y monitoreo en tiempo real.",
  "Protection multicouche avec cryptographie résistante au quantique et surveillance en temps réel.",
  "Proteção multicamadas com criptografia resistente a quântica e monitoramento em tempo real.",
  "Mehrschichtiger Schutz mit quantenresistenter Kryptografie und Echtzeit-Überwachung.",
  "多层保护，采用抗量子加密和实时监控。",
  "حماية متعددة الطبقات مع تشفير مقاوم للكم ومراقبة في الوقت الفعلي.")
a("portal.multi.title", "Multichain Architecture", "Arquitectura Multicadena", "Architecture Multichaîne", "Arquitetura Multichain", "Multichain-Architektur", "多链架构", "هيكل متعدد السلسلة")
a("portal.multi.desc", "Interoperability across multiple blockchain networks for maximum flexibility.",
  "Interoperabilidad entre múltiples redes blockchain para máxima flexibilidad.",
  "Interopérabilité sur plusieurs réseaux blockchain pour une flexibilité maximale.",
  "Interoperabilidade entre múltiplas redes blockchain para máxima flexibilidade.",
  "Interoperabilität über mehrere Blockchain-Netzwerke für maximale Flexibilität.",
  "跨多个区块链网络的互操作性，实现最大灵活性。",
  "التشابكية عبر شبكات بلوكتشين متعددة لأقصى مرونة.")
a("portal.api.title", "APIs & Integration", "APIs e Integración", "APIs et Intégration", "APIs e Integração", "APIs und Integration", "API和集成", "الواجهات والتكامل")
a("portal.api.desc", "Developer tools for integrating QFS services into external platforms and applications.",
  "Herramientas para desarrolladores que integran servicios QFS en plataformas y aplicaciones externas.",
  "Outils de développeurs pour intégrer les services QFS dans des plateformes et applications externes.",
  "Ferramentas para desenvolvedores integrarem serviços QFS em plataformas e aplicações externas.",
  "Entwicklertools zur Integration von QFS-Diensten in externe Plattformen und Anwendungen.",
  "开发者工具，用于将QFS服务集成到外部平台和应用程序。",
  "أدوات للمطورين لدمج خدمات QFS في المنصات والتطبيقات الخارجية.")

# ===== ROADMAP =====
a("road.badge", "ROADMAP", "ROADMAP", "FEUILLE DE ROUTE", "ROTEIRO", "ROADMAP", "路线图", "خريطة الطريق")
a("road.title", "QFS Roadmap", "Roadmap QFS", "Feuille de Route QFS", "Roteiro QFS", "QFS Roadmap", "QFS 路线图", "خريطة طريق QFS")
a("road.desc", "Progressive development of the QFS ecosystem through strategic phases, from the base infrastructure to global digital finance.",
  "Desarrollo progresivo del ecosistema QFS a través de fases estratégicas, desde la infraestructura base hasta las finanzas digitales globales.",
  "Développement progressif de l'écosystème QFS à travers des phases stratégiques, de l'infrastructure de base à la finance numérique mondiale.",
  "Desenvolvimento progressivo do ecossistema QFS através de fases estratégicas, da infraestrutura bás às finanças digitais globais.",
  "Progressive Entwicklung des QFS-Ökosystems durch strategische Phasen, von der Basisinfrastruktur bis zur globalen digitalen Finanzierung.",
  "通过战略阶段逐步开发QFS生态系统，从基础设施到全球数字金融。",
  "التطوير التدريجي لنظام QFS عبر مراحل استراتيجية، من البنية الأساسية إلى المال الرقمي العالمي.")
a("road.eco.subtitle", "Ecosystem Map", "Mapa del Ecosistema", "Carte de l'Écosystème", "Mapa do Ecossistema", "Ökosystem-Karte", "生态系统图", "خريطة النظام")
a("road.eco.desc", "An interconnected suite of financial services powered by quantum technology.",
  "Una suite interconectada de servicios financieros impulsada por tecnología cuántica.",
  "Une suite interconnectée de services financiers alimentée par la technologie quantique.",
  "Um conjunto interconectado de serviços financeiros impulsionado por tecnologia quântica.",
  "Eine verbundene Suite von Finanzdienstleistungen, angetrieben von Quantentechnologie.",
  "由量子技术驱动的互联金融服务套件。",
  "مجموعة مترابطة من الخدمات المالية مدعومة بتكنولوجيا الكم.")
a("road.eco.live", "Live", "Activo", "Actif", "Ativo", "Aktiv", "已上线", "نشط")
a("road.eco.dev", "In Development", "En Desarrollo", "En Développement", "Em Desenvolvimento", "In Entwicklung", "开发中", "قيد التطوير")
a("road.eco.soon", "Coming Soon", "Próximamente", "Prochainement", "Em Breve", "Demnächst", "即将推出", "قريباً")
a("road.timeline", "Timeline", "Línea de Tiempo", "Chronologie", "Linha do Tempo", "Zeitstrahl", "时间线", "الجدول الزمني")
a("road.phases", "Development Phases", "Fases de Desarrollo", "Phases de Développement", "Fases de Desenvolvimento", "Entwicklungsphasen", "开发阶段", "مراحل التطوير")

# ===== WHITEPAPER =====
a("wp.badge", "WHITE PAPER", "LIBRO BLANCO", "LIVRE BLANC", "LIVRO BRANCO", "WHITEPAPER", "白皮书", "الوثيقة التفصيلية")
a("wp.title", "QFS White Paper", "Libro Blanco QFS", "Livre Blanc QFS", "Livro Branco QFS", "QFS Whitepaper", "QFS 白皮书", "الوثيقة التفصيلية QFS")
a("wp.desc", "Technical document describing the vision, architecture and progressive development of the Quantum Financial System.",
  "Documento técnico que describe la visión, arquitectura y desarrollo progresivo del Sistema Financiero Cuántico.",
  "Document technique décrivant la vision, l'architecture et le développement progressif du Système Financier Quantique.",
  "Documento técnico que descreve a visão, arquitetura e desenvolvimento progressivo do Sistema Financeiro Quântico.",
  "Technisches Dokument beschreiben Vision, Architektur und progressive Entwicklung des Quanten-Finanzsystems.",
  "描述量子金融系统的愿景、架构和逐步开发的技术文档。",
  "وثيقة تقنية تصف رؤية وهيكل والتطوير التدريجي للنظام المالي الكمي.")
a("wp.toc", "Contents", "Contenido", "Contenu", "Conteúdo", "Inhalt", "目录", "المحتويات")
a("wp.confidential", "Confidential", "Confidencial", "Confidentiel", "Confidencial", "Vertraulich", "机密", "سري")

# Whitepaper sections
for i, (num, title) in enumerate([
    ("01", "Executive Summary"), ("02", "Vision & Architecture"), ("03", "Ecosystem Components"),
    ("04", "Security & Cryptography"), ("05", "Multichain Infrastructure"), ("06", "Artificial Intelligence"),
    ("07", "Digital Asset Economy"), ("08", "Institutional Solutions"), ("09", "Strategic Alliances"), ("10", "NESG Community"),
], 1):
    key = f"wp.sec{num}"
    titles = {
        "01": ("Executive Summary", "Resumen Ejecutivo", "Résumé Exécutif", "Resumo Executivo", "Zusammenfassung", "执行摘要", "الملخص التنفيذي"),
        "02": ("Vision & Architecture", "Visión y Arquitectura", "Vision et Architecture", "Visão e Arquitetura", "Vision und Architektur", "愿景与架构", "الرؤية والهيكل"),
        "03": ("Ecosystem Components", "Componentes del Ecosistema", "Composants de l'Écosystème", "Componentes do Ecossistema", "Ökosystem-Komponenten", "生态系统组件", "مكونات النظام"),
        "04": ("Security & Cryptography", "Seguridad y Criptografía", "Sécurité et Cryptographie", "Segurança e Criptografia", "Sicherheit und Kryptografie", "安全与加密术", "الأمان والتشفير"),
        "05": ("Multichain Infrastructure", "Infraestructura Multicadena", "Infrastructure Multichaîne", "Infraestrutura Multichain", "Multichain-Infrastruktur", "多链基础设施", "بنية تحتية متعددة السلسلة"),
        "06": ("Artificial Intelligence", "Inteligencia Artificial", "Intelligence Artificielle", "Inteligência Artificial", "Künstliche Intelligenz", "人工智能", "الذكاء الاصطناعي"),
        "07": ("Digital Asset Economy", "Economía de Activos Digitales", "Économie des Actifs Numériques", "Economia de Ativos Digitais", "Digitale Asset-Wirtschaft", "数字资产经济", "اقتصاد الأصول الرقمية"),
        "08": ("Institutional Solutions", "Soluciones Institucionales", "Solutions Institutionnelles", "Soluções Institucionais", "Institutionelle Lösungen", "机构解决方案", "حلول مؤسسية"),
        "09": ("Strategic Alliances", "Alianzas Estratégicas", "Alliances Stratégiques", "Alianças Estratégicas", "Strategische Allianzen", "战略联盟", "التحالفات الاستراتيجية"),
        "10": ("NESG Community", "Comunidad NESG", "Communauté NESG", "Comunidade NESG", "NESG-Community", "NESG社区", "مجتمع NESG"),
    }
    a(key, *titles[num])

# ===== FOOTER =====
a("foot.desc", "The Next Generation of Digital Finance. Technology, Security, Decentralization, Innovation.",
  "La próxima generación de las finanzas digitales. Tecnología, Seguridad, Descentralización, Innovación.",
  "La prochaine génération de la finance numérique. Technologie, Sécurité, Décentralisation, Innovation.",
  "A próxima geração das finanças digitais. Tecnologia, Segurança, Descentralização, Inovação.",
  "Die nächste Generation der digitalen Finanzen. Technologie, Sicherheit, Dezentralisierung, Innovation.",
  "数字金融的下一代。技术、安全、去中化、创新。",
  "الجيل القادم من المال الرقمي. التكنولوجيا، الأمان، اللامركزية، الابتكار.")
a("foot.products", "Products", "Productos", "Produits", "Produtos", "Produkte", "产品", "المنتجات")
a("foot.resources", "Resources", "Recursos", "Ressources", "Recursos", "Ressourcen", "资源", "الموارد")
a("foot.alliances", "Alliances", "Alianzas", "Alliances", "Alianças", "Allianzen", "联盟", "التحالفات")
a("foot.tag.technology", "Technology", "Tecnología", "Technologie", "Tecnologia", "Technologie", "技术", "التكنولوجيا")
a("foot.tag.finance", "Digital Finance", "Finanzas Digitales", "Finances Numériques", "Finanças Digitais", "Digitale Finanzen", "数字金融", "المال الرقمي")
a("foot.tag.security", "Security", "Seguridad", "Sécurité", "Segurança", "Sicherheit", "安全", "الأمان")
a("foot.tag.decentralization", "Decentralization", "Descentralización", "Décentralisation", "Descentralização", "Dezentralisierung", "去中化", "اللامركزية")
a("foot.tag.connectivity", "Global Connectivity", "Conectividad Global", "Connectivité Mondiale", "Conectividade Global", "Globale Vernetzung", "全球连接", "الاتصال العالمي")
a("foot.tag.innovation", "Innovation", "Innovación", "Innovation", "Inovação", "Innovation", "创新", "الابتكار")

# ===== LANGUAGES =====
a("lang.en", "English", "Inglés", "Anglais", "Inglês", "Englisch", "英语", "الإنجليزية")
a("lang.es", "Español", "Español", "Espagnol", "Espanhol", "Spanisch", "西班牙语", "الإسبانية")
a("lang.fr", "Français", "Francés", "Français", "Francês", "Französisch", "法语", "الفرنسية")
a("lang.pt", "Português", "Portugués", "Portugais", "Português", "Portugiesisch", "葡萄牙语", "البرتغالية")
a("lang.de", "Deutsch", "Alemán", "Allemand", "Alemão", "Deutsch", "德语", "الألمانية")
a("lang.zh", "中文", "Chino", "Chinois", "Chinês", "Chinesisch", "中文", "الصينية")
a("lang.ar", "العربية", "Árabe", "Arabe", "Árabe", "Arabisch", "阿拉伯语", "العربية")

# Dynamic data translations
td_data = {
    "qfspay.features": {
        "en": ["Digital payments", "P2P transfers", "Commercial payments", "Asset conversion", "Developer APIs", "Enterprise solutions"],
        "es": ["Pagos digitales", "Transferencias P2P", "Pagos comerciales", "Conversión de activos", "APIs para desarrolladores", "Soluciones empresariales"],
        "fr": ["Paiements numériques", "Transferts P2P", "Paiements commerciaux", "Conversion d'actifs", "APIs développeur", "Solutions d'entreprise"],
        "pt": ["Pagamentos digitais", "Transferências P2P", "Pagamentos comerciais", "Conversão de ativos", "APIs para desenvolvedores", "Soluções empresariais"],
        "de": ["Digitale Zahlungen", "P2P-Überweisungen", "Kommerzielle Zahlungen", "Asset-Umwandlung", "Entwickler-APIs", "Unternehmenslösungen"],
        "zh": ["数字支付", "P2P转账", "商业支付", "资产兑换", "开发者API", "企业解决方案"],
        "ar": ["الدفع الرقمي", "تحويلات P2P", "الدفع التجاري", "تحويل الأصول", "APIs للمطورين", "حلول مؤسسية"],
    },
    "dex.features": {
        "en": ["Asset swap", "Liquidity pools", "Multi-chain interoperability", "Market tools", "Smart contracts", "Decentralized governance"],
        "es": ["Swap de activos", "Pools de liquidez", "Interoperabilidad multicadena", "Herramientas de mercado", "Smart contracts", "Gobernanza descentralizada"],
        "fr": ["Échange d'actifs", "Pools de liquidité", "Interopérabilité multichaîne", "Outils de marché", "Contrats intelligents", "Gouvernance décentralisée"],
        "pt": ["Troca de ativos", "Pools de liquidez", "Interoperabilidade multichain", "Ferramentas de mercado", "Contratos inteligentes", "Governança descentralizada"],
        "de": ["Asset-Swap", "Liquiditätspools", "Multichain-Interoperabilität", "Marktwerkzeuge", "Smart Contracts", "Dezentrale Governance"],
        "zh": ["资产兑换", "流动性池", "多链互操作", "市场工具", "智能合约", "去中化治理"],
        "ar": ["تبادل الأصول", "مجمعات السيولة", "تشابكية متعددة السلسلة", "أدوات السوق", "العقود الذكية", "الحكم اللامركزي"],
    },
    "ai.items": {
        "en": ["AI Security", "Anomalous transaction detection", "AI Risk Monitoring", "Risk and pattern analysis", "AI Financial Assistance", "Smart tools for users", "AI Compliance", "Compliance automation"],
        "es": ["IA Seguridad", "Detección de transacciones anómalas", "IA Monitoreo de Riesgos", "Análisis de riesgos y patrones", "IA Asistencia Financiera", "Herramientas inteligentes", "IA Cumplimiento", "Automatización de cumplimiento"],
        "fr": ["IA Sécurité", "Détection de transactions anormales", "IA Surveillance des Risques", "Analyse des risques et patterns", "IA Assistance Financière", "Outils intelligents", "IA Conformité", "Automatisation de la conformité"],
        "pt": ["IA Segurança", "Detecção de transações anômalas", "IA Monitoramento de Riscos", "Análise de riscos e padrões", "IA Assistência Financeira", "Ferramentas inteligentes", "IA Conformidade", "Automação de conformidade"],
        "de": ["KI-Sicherheit", "Erkennung anomaler Transaktionen", "KI-Risikoüberwachung", "Risiko- und Musteranalyse", "KI-Finanzhilfe", "Intelligente Werkzeuge", "KI-Compliance", "Compliance-Automatisierung"],
        "zh": ["AI安全", "异常交易检测", "AI风险监控", "风险与模式分析", "AI金融助手", "智能工具", "AI合规", "合规自动化"],
        "ar": ["أمان الذكاء الاصطناعي", "كشف المعاملات الغير الطارئة", "مراقبة المخاطر بالذكاء الاصطناعي", "تحليل المخاطر والأنماط", "مساعدة مالية بالذكاء الاصطناعي", "أدوات ذكية للمستخدمين", "الامتثال بالذكاء الاصطناعي", "أتمتاث الامتثال"],
    },
}

# Generate TypeScript
lines = []
lines.append("import { create } from 'zustand';")
lines.append("import { persist } from 'zustand/middleware';")
lines.append("")
lines.append("type Lang = 'en' | 'es' | 'fr' | 'pt' | 'de' | 'zh' | 'ar';")
lines.append("")
lines.append("interface LangStore {")
lines.append("  lang: Lang;")
lines.append("  setLang: (lang: Lang) => void;")
lines.append("}")
lines.append("")
lines.append("export const useLangStore = create<LangStore>()(")
lines.append("  persist(")
lines.append("    (set) => ({ lang: 'en', setLang: (lang) => set({ lang }) }),")
lines.append("    { name: 'qfs-lang' }")
lines.append("  )")
lines.append(");")
lines.append("")

# Static translations
lines.append("const t: Record<string, Record<Lang, string>> = {")
for key in sorted(t.keys()):
    v = t[key]
    lines.append(f'  "{key}": {{ en: {json.dumps(v["en"], ensure_ascii=False)}, es: {json.dumps(v["es"], ensure_ascii=False)}, fr: {json.dumps(v["fr"], ensure_ascii=False)}, pt: {json.dumps(v["pt"], ensure_ascii=False)}, de: {json.dumps(v["de"], ensure_ascii=False)}, zh: {json.dumps(v["zh"], ensure_ascii=False)}, ar: {json.dumps(v["ar"], ensure_ascii=False)} }},')
lines.append("};")
lines.append("")

# Dynamic translations
lines.append("const td: Record<string, Record<Lang, string[]>> = {")
for key in sorted(td_data.keys()):
    v = td_data[key]
    lines.append(f'  "{key}": {{')
    for lang in L:
        lines.append(f'    {lang}: {json.dumps(v[lang], ensure_ascii=False)},')
    lines.append(f'  }},')
lines.append("};")
lines.append("")
lines.append("export function useT() {")
lines.append("  const { lang } = useLangStore();")
lines.append("  return (key: string): string => t[key]?.[lang] ?? key;")
lines.append("}")
lines.append("")
lines.append("export function useTD() {")
lines.append("  const { lang } = useLangStore();")
lines.append("  return (key: string): string[] => td[key]?.[lang] ?? [];")
lines.append("}")

output = '\n'.join(lines)
with open('/home/z/my-project/src/store/lang-store.ts', 'w', encoding='utf-8') as f:
    f.write(output)
print(f'Generated {len(t)} static + {len(td_data)} dynamic translation keys across 7 languages')
