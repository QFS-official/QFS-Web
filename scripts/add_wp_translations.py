#!/usr/bin/env python3
"""Add whitepaper translation keys to lang-store.ts"""

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

# Whitepaper header
new_keys.append(entry('wp.badge', {
    'en': 'WHITE PAPER', 'es': 'LIBRO BLANCO', 'fr': 'LIVRE BLANC', 'pt': 'LIVRO BRANCO',
    'de': 'WHITEPAPER', 'zh': '白皮书', 'ar': 'الوثيقة التفصيلية', 'th': 'เอกสารขาว'
}))
new_keys.append(entry('wp.title', {
    'en': 'QFS White Paper', 'es': 'Libro Blanco QFS', 'fr': 'Livre Blanc QFS', 'pt': 'Livro Branco QFS',
    'de': 'QFS Whitepaper', 'zh': 'QFS白皮书', 'ar': 'الوثيقة التفصيلية لـ QFS', 'th': 'เอกสารขาว QFS'
}))
new_keys.append(entry('wp.subtitle', {
    'en': 'Technical document describing the vision, architecture and progressive development of the Quantum Financial System.',
    'es': 'Documento técnico que describe la visión, arquitectura y desarrollo progresivo del Sistema Financiero Cuántico.',
    'fr': 'Document technique décrivant la vision, l\'architecture et le développement progressif du Système Financier Quantique.',
    'pt': 'Documento técnico que descreve a visão, arquitetura e desenvolvimento progressivo do Sistema Financeiro Quântico.',
    'de': 'Technisches Dokument zur Beschreibung der Vision, Architektur und progressiven Entwicklung des Quanten-Finanzsystems.',
    'zh': '描述量子金融系统的愿景、架构和渐进发展的技术文档。',
    'ar': 'وثيقة تقنية تصف رؤية وبنية التطوير التدريجي للنظام المالي الكمي.',
    'th': 'เอกสารทางเทคนิคที่อธิบายวิสัยทัศน์ สถาปัตยกรรม และการพัฒนาอย่างเป็นขั้นตอนของระบบการเงินควอนตัม'
}))
new_keys.append(entry('wp.contents', {
    'en': 'Contents', 'es': 'Contenido', 'fr': 'Contenu', 'pt': 'Conteúdo',
    'de': 'Inhalt', 'zh': '目录', 'ar': 'المحتويات', 'th': 'สารบัญ'
}))
new_keys.append(entry('wp.section', {
    'en': 'SECTION', 'es': 'SECCIÓN', 'fr': 'SECTION', 'pt': 'SEÇÃO',
    'de': 'ABSCHNITT', 'zh': '章节', 'ar': 'القسم', 'th': 'ส่วน'
}))

# TOC items
new_keys.append(entry('wp.toc', {
    'en': ['Executive Summary', 'Vision & Architecture', 'Ecosystem Components', 'Security & Cryptography', 'Multichain Infrastructure', 'Artificial Intelligence', 'Digital Asset Economy', 'Institutional Solutions', 'Strategic Alliances', 'NESG Community'],
    'es': ['Resumen Ejecutivo', 'Visión y Arquitectura', 'Componentes del Ecosistema', 'Seguridad y Criptografía', 'Infraestructura Multichain', 'Inteligencia Artificial', 'Economía de Activos Digitales', 'Soluciones Institucionales', 'Alianzas Estratégicas', 'Comunidad NESG'],
    'fr': ['Résumé Exécutif', 'Vision et Architecture', 'Composants de l\'Écosystème', 'Sécurité et Cryptographie', 'Infrastructure Multichaîne', 'Intelligence Artificielle', 'Économie d\'Actifs Numériques', 'Solutions Institutionnelles', 'Alliances Stratégiques', 'Communauté NESG'],
    'pt': ['Resumo Executivo', 'Visão e Arquitetura', 'Componentes do Ecossistema', 'Segurança e Criptografia', 'Infraestrutura Multichain', 'Inteligência Artificial', 'Economia de Ativos Digitais', 'Soluções Institucionais', 'Alianças Estratégicas', 'Comunidade NESG'],
    'de': ['Executive Summary', 'Vision & Architektur', 'Ökosystem-Komponenten', 'Sicherheit & Kryptografie', 'Multichain-Infrastruktur', 'Künstliche Intelligenz', 'Digital-Asset-Wirtschaft', 'Institutionelle Lösungen', 'Strategische Allianzen', 'NESG-Community'],
    'zh': ['执行摘要', '愿景与架构', '生态系统组件', '安全与加密', '多链基础设施', '人工智能', '数字资产生济', '机构解决方案', '战略联盟', 'NESG社区'],
    'ar': ['الملخص التنفيذي', 'الرؤية والبنية', 'مكونات النظام', 'الأمان والتشفير', 'البنية التحتية متعددة السلاسل', 'الذكاء الاصطناعي', 'اقتصاد الأصول الرقمية', 'الحلول المؤسسية', 'التحالفات الاستراتيجية', 'مجتمع NESG'],
    'th': ['บทสรุปผู้บริหาร', 'วิสัยทัศน์และสถาปัตยกรรม', 'ส่วนประกอบของระบบนิเวศ', 'ความปลอดภัยและการเข้ารหัส', 'โครงสร้างพื้นฐานหลายเชน', 'ปัญญาประดิษฐ์', 'เศรษฐกิจสินทรัพย์ดิจิทัล', 'โซลูชันสถาบัน', 'พันธมิตรทางยุทธศาสตร์', 'ชุมชน NESG']
}))

# Section 01 - Executive Summary
new_keys.append(entry('wp.s1.p1', {
    'en': 'The global financial system is undergoing a fundamental transformation. Accelerated digitalization, the evolution of blockchain technologies, the emergence of digital assets and the growing demand for transparency and accessibility are redefining the expectations of users, enterprises and institutions regarding financial services.',
    'es': 'El sistema financiero global está experimentando una transformación fundamental. La digitalización acelerada, la evolución de las tecnologías blockchain, la emergencia de activos digitales y la creciente demanda de transparencia y accesibilidad están redefiniendo las expectativas de usuarios, empresas e instituciones respecto a los servicios financieros.',
    'fr': 'Le système financier mondial connaît une transformation fondamentale. La numérisation accélérée, l\'évolution des technologies blockchain, l\'émergence des actifs numériques et la demande croissante de transparence et d\'accessibilité redéfinissent les attentes des utilisateurs, entreprises et institutions en matière de services financiers.',
    'pt': 'O sistema financeiro global está passando por uma transformação fundamental. A digitalização acelerada, a evolução das tecnologias blockchain, o surgimento de ativos digitais e a crescente demanda por transparência e acessibilidade estão redefinindo as expectativas de usuários, empresas e instituições em relação aos serviços financeiros.',
    'de': 'Das globale Finanzsystem durchläuft eine grundlegende Transformation. Beschleunigte Digitalisierung, die Evolution von Blockchain-Technologien, das Aufkommen digitaler Assets und die wachsende Nachfrage nach Transparenz und Zugänglichkeit definieren die Erwartungen von Nutzern, Unternehmen und Institutionen an Finanzdienstleistungen neu.',
    'zh': '全球金融系统正在经历根本性变革。加速数字化、区块链技术的演进、数字资产的出现以及对透明度和可及性日益增长的需求，正在重新定义用户、企业和机构对金融服务的期望。',
    'ar': 'يشهد النظام المالي العالمي تحولاً جوهرياً. الرقمنة المتسارعة وتطور تقنيات البلوكتشين وظهور الأصول الرقمية والطلب المتزايد على الشفافية والوصول تعيد تعريف توقعات المستخدمين والمؤسسات والهيئات تجاه الخدمات المالية.',
    'th': 'ระบบการเงินทั่วโลกกำลังเปลี่ยนแปลงอย่างมาก การดิจิทัลเร่งตัว วิวัฒนาการของเทคโนโลยีบล็อกเชน การปรากฏของสินทรัพย์ดิจิทัล และความต้องการความโปร่งใสและการเข้าถึงที่เพิ่มขึ้น กำลังนิยามความคาดหวังของผู้ใช้ องค์กร และสถาบันเกี่ยวกับบริการทางการเงินใหม่'
}))
new_keys.append(entry('wp.s1.p2', {
    'en': 'In this context, QFS Official presents an initiative focused on developing a new digital financial infrastructure that integrates multiple convergent technologies: blockchain, artificial intelligence, advanced cryptography, digital payments and decentralized financial services.',
    'es': 'En este contexto, QFS Official presenta una iniciativa enfocada en desarrollar una nueva infraestructura financiera digital que integra múltiples tecnologías convergentes: blockchain, inteligencia artificial, criptografía avanzada, pagos digitales y servicios financieros descentralizados.',
    'fr': 'Dans ce contexte, QFS Official présente une initiative axée sur le développement d\'une nouvelle infrastructure financière numérique intégrant plusieurs technologies convergentes : blockchain, intelligence artificielle, cryptographie avancée, paiements numériques et services financiers décentralisés.',
    'pt': 'Neste contexto, o QFS Official apresenta uma iniciativa focada no desenvolvimento de uma nova infraestrutura financeira digital que integra múltiplas tecnologias convergentes: blockchain, inteligência artificial, criptografia avançada, pagamentos digitais e serviços financeiros descentralizados.',
    'de': 'In diesem Kontext präsentiert QFS Official eine Initiative zur Entwicklung einer neuen digitalen Finanzinfrastruktur, die mehrere konvergente Technologien integriert: Blockchain, KI, fortschrittliche Kryptografie, digitale Zahlungen und dezentrale Finanzdienstleistungen.',
    'zh': '在此背景下，QFS Official提出了一项倡议，专注于开发新的数字金融基础设施，整合多种融合技术：区块链、人工智能、高级加密、数字支付和去中心化金融服务。',
    'ar': 'في هذا السياق، يقدم QFS Official مبادرة تركز على تطوير بنية تحتية مالية رقمية جديدة تدمج تقنيات متقاربة متعددة: البلوكتشين والذكاء الاصطناعي والتشفير المتقدم والدفع الرقمي والخدمات المالية اللامركزية.',
    'th': 'ในบริบทนี้ QFS Official นำเสนอโครงการที่มุ่งเน้นการพัฒนาโครงสร้างพื้นฐานทางการเงินดิจิทัลใหม่ที่ผสานเทคโนโลยีที่มีการบรรจบกันหลายประเภท: บล็อกเชน ปัญญาประดิษฐ์ การเข้ารหัสขั้นสูง การชำระเงินดิจิทัล และบริการทางการเงินแบบกระจายศูนย์'
}))
new_keys.append(entry('wp.s1.p3', {
    'en': 'QFS does not seek to replace existing systems, but to complement the evolution of the global financial ecosystem by providing modular, secure and accessible infrastructure that can adapt to the needs of different users and jurisdictions. The approach is based on progressive construction, where each component of the ecosystem is developed and integrated incrementally.',
    'es': 'QFS no busca reemplazar los sistemas existentes, sino complementar la evolución del ecosistema financiero global proporcionando infraestructura modular, segura y accesible que pueda adaptarse a las necesidades de diferentes usuarios y jurisdicciones. El enfoque se basa en la construcción progresiva, donde cada componente del ecosistema se desarrolla e integra incrementalmente.',
    'fr': 'QFS ne cherche pas à remplacer les systèmes existants, mais à compléter l\'évolution de l\'écosystème financier mondial en fournissant une infrastructure modulaire, sécurisée et accessible pouvant s\'adapter aux besoins de différents utilisateurs et juridictions.',
    'pt': 'O QFS não busca substituir os sistemas existentes, mas complementar a evolução do ecossistema financeiro global fornecendo infraestrutura modular, segura e acessível que possa se adaptar às necessidades de diferentes usuários e jurisdições.',
    'de': 'QFS sucht nicht bestehende Systeme zu ersetzen, sondern die Evolution des globalen Finanzökosystems zu ergänzen, indem es modulare, sichere und zugängliche Infrastruktur bereitstellt, die sich an die Bedürfnisse verschiedener Nutzer und Jurisdiktionen anpassen kann.',
    'zh': 'QFS并不寻求取代现有系统，而是通过提供模块化、安全和可及的基础设施来补充全球金融生态系统的演进，以适应不同用户和司法管辖区需求。该方法基于渐进式建设，生态系统的每个组件都是逐步开发和集成的。',
    'ar': 'لا يسعى QFS لاستبدال الأنظمة الحالية، بل لاستكمال تطور النظام المالي العالمي من خلال توفير بنية تحتية معيارية آمنة وقابلة للوصول يمكن تكييفها مع احتياجات المستخدمين والولايات القضائية المختلفة.',
    'th': 'QFS ไม่มีเป้าหมายที่จะแทนที่ระบบที่มีอยู่ แต่เสริมการพัฒนาของระบบนิเวศทางการเงินระดับโลกโดยให้โครงสร้างพื้นฐานแบบโมดูล ปลอดภัย และเข้าถึงได้ที่สามารถปรับให้เข้ากับความต้องการของผู้ใช้และเขตอำนาจต่างๆ แนวทางนี้ขึ้นอยู่กับการก่อสร้างแบบเป็นขั้นตอน ซึ่งแต่ละส่วนประกอบของระบบนิเวศจะถูกพัฒนาและผสานรวมทีละน้อย'
}))
new_keys.append(entry('wp.s1.core', {
    'en': 'Core Proposal', 'es': 'Propuesta Central', 'fr': 'Proposition Principale', 'pt': 'Proposta Central',
    'de': 'Kernvorschlag', 'zh': '核心提案', 'ar': 'المقترح الأساسي', 'th': 'ข้อเสนอหลัก'
}))
new_keys.append(entry('wp.s1.core.desc', {
    'en': 'Build an integrated digital financial ecosystem where Wallet, Payments, Exchange, Cards, AI, Blockchain and Multichain operate within a unified, progressive and verifiable architecture.',
    'es': 'Construir un ecosistema financiero digital integrado donde Wallet, Pagos, Exchange, Tarjetas, IA, Blockchain y Multichain operen dentro de una arquitectura unificada, progresiva y verificable.',
    'fr': 'Construire un écosystème financier numérique intégré où Wallet, Paiements, Exchange, Cartes, IA, Blockchain et Multichaîne opèrent dans une architecture unifiée, progressive et vérifiable.',
    'pt': 'Construir um ecossistema financeiro digital integrado onde Wallet, Pagamentos, Exchange, Cartões, IA, Blockchain e Multichain operam em uma arquitetura unificada, progressiva e verificável.',
    'de': 'Ein integriertes digitales Finanzökosystem aufbauen, in dem Wallet, Zahlungen, Exchange, Karten, KI, Blockchain und Multichain in einer einheitlichen, progressiven und überprüfbaren Architektur operieren.',
    'zh': '构建一个集成的数字金融生态系统，其中钱包、支付、交易所、卡片、AI、区块链和多链在统一、渐进和可验证的架构内运作。',
    'ar': 'بناء نظام مالي رقمي متكامل حيث تعمل المحافظ والدفع والبورصة والبطاقات والذكاء الاصطناعي والبلوكتشين والتشابكية المتعددة ضمن بنية موحدة وتدريجية وقابلة للتحقق.',
    'th': 'สร้างระบบนิเวศทางการเงินดิจิทัลแบบบูรณาการ โดยที่ Wallet การชำระเงิน Exchange บัตร AI บล็อกเชน และ Multichain ทำงานภายในสถาปัตยกรรมที่เป็นหนึ่งเดียว เป็นขั้นตอน และตรวจสอบได้'
}))

# Section 02 - Vision
new_keys.append(entry('wp.s2.p1', {
    'en': 'The QFS vision is built on five pillars: Security, Transparency, Interoperability, Decentralization and Innovation. Each of these principles guides the design and development of every component within the ecosystem.',
    'es': 'La visión de QFS se construye sobre cinco pilares: Seguridad, Transparencia, Interoperabilidad, Descentralización e Innovación. Cada uno de estos principios guía el diseño y desarrollo de cada componente dentro del ecosistema.',
    'fr': 'La vision QFS repose sur cinq piliers : Sécurité, Transparence, Interopérabilité, Décentralisation et Innovation. Chacun de ces principes guide la conception et le développement de chaque composant de l\'écosystème.',
    'pt': 'A visão do QFS é construída sobre cinco pilares: Segurança, Transparência, Interoperabilidade, Descentralização e Inovação. Cada um destes princípios guia o design e desenvolvimento de cada componente dentro do ecossistema.',
    'de': 'Die QFS-Vision ruht auf fünf Säulen: Sicherheit, Transparenz, Interoperabilität, Dezentralisierung und Innovation. Jedes dieser Prinzipien leitet das Design und die Entwicklung jeder Komponente im Ökosystem.',
    'zh': 'QFS愿景建立在五大支柱上：安全、透明、互操作、去中心化和创新。这些原则指导着生态系统中每个组件的设计和开发。',
    'ar': 'تقوم رؤية QFS على خمسة أعمدة: الأمان والشفافية والتشابكية واللامركزية والابتكار. كل من هذه المبادئ يوجه تصميم وتطوير كل مكون داخل النظام.',
    'th': 'วิสัยทัศน์ QFS สร้างขึ้นบนห้าเสาหลัก: ความปลอดภัย ความโปร่งใส การทำงานร่วมกัน การกระจายอำนาจ และนวัตกรรม แต่ละหลักการนี้นำทางการออกแบบและพัฒนาทุกส่วนประกอบภายในระบบนิเวศ'
}))
new_keys.append(entry('wp.s2.p2', {
    'en': 'The QFS architecture is designed as a modular system where each component operates independently but can integrate with the others. This modularity enables progressive development, where functionality is built and deployed in phases, reducing risks and allowing continuous adaptation.',
    'es': 'La arquitectura de QFS está diseñada como un sistema modular donde cada componente opera independientemente pero puede integrarse con los otros. Esta modularidad permite el desarrollo progresivo, donde la funcionalidad se construye y despliega en fases, reduciendo riesgos y permitiendo adaptación continua.',
    'fr': 'L\'architecture QFS est conçue comme un système modulaire où chaque composant opère indépendamment mais peut s\'intégrer aux autres. Cette modularité permet un développement progressif, où les fonctionnalités sont construites et déployées en phases.',
    'pt': 'A arquitetura do QFS é projetada como um sistema modular onde cada componente opera independentemente mas pode se integrar com os outros. Esta modularidade permite o desenvolvimento progressivo, onde a funcionalidade é construída e implantada em fases.',
    'de': 'Die QFS-Architektur ist als modulares System konzipiert, in dem jede Komponente unabhängig arbeitet, sich aber mit den anderen integrieren lässt. Diese Modularität ermöglicht progressive Entwicklung.',
    'zh': 'QFS架构被设计为模块化系统，每个组件独立运行但可以相互集成。这种模块化支持渐进式开发，功能分阶段构建和部署，降低风险并允许持续适应。',
    'ar': 'صممت بنية QFS كنظام معياري حيث يعمل كل مكون بشكل مستقل لكن يمكن دمجه مع الآخرين. تتيح هذه المعيارية التطوير التدريجي حيث تُبنى الوظائف وتُنشر على مراحل.',
    'th': 'สถาปัตยกรรม QFS ได้รับการออกแบบเป็นระบบแบบโมดูลที่แต่ละส่วนประกอบทำงานอย่างอิสระแต่สามารถผสานรวมกับส่วนอื่นๆ ได้ การเป็นโมดูลนี้เปิดใช้การพัฒนาแบบเป็นขั้นตอน โดยฟังก์ชันจะถูกสร้างและปรับใช้เป็นช่วงๆ'
}))
new_keys.append(entry('wp.s2.p3', {
    'en': 'The long-term vision encompasses a global digital financial infrastructure that connects users, enterprises, institutions and governments, facilitating the management and transfer of digital assets in a secure, transparent and efficient manner. This vision includes progressive participation in the digital asset economy, including crypto assets, stablecoins, tokenized assets and Real World Assets (RWA).',
    'es': 'La visión a largo plazo abarca una infraestructura financiera digital global que conecta usuarios, empresas, instituciones y gobiernos, facilitando la gestión y transferencia de activos digitales de forma segura, transparente y eficiente. Esta visión incluye la participación progresiva en la economía de activos digitales.',
    'fr': 'La vision à long terme englobe une infrastructure financière numérique mondiale connectant utilisateurs, entreprises, institutions et gouvernements, facilitant la gestion et le transfert d\'actifs numériques de manière sécurisée, transparente et efficace.',
    'pt': 'A visão de longo prazo abrange uma infraestrutura financeira digital global que conecta usuários, empresas, instituições e governos, facilitando a gestão e transferência de ativos digitais de forma segura, transparente e eficiente.',
    'de': 'Die langfristige Vision umfasst eine globale digitale Finanzinfrastruktur, die Nutzer, Unternehmen, Institutionen und Regierungen verbindet und die Verwaltung und Übertragung digitaler Assets auf sichere, transparente und effiziente Weise erleichtert.',
    'zh': '长期愿景包括一个连接用户、企业、机构和政府的全球数字金融基础设施，以安全、透明和高效的方式促进数字资产的管理和转移。',
    'ar': 'تشمل الرؤية طويلة المدى بنية تحتية مالية رقمية عالمية تربط المستخدمين والمؤسسات والهيئات والحكومات وتسهل إدارة وتحويل الأصول الرقمية بطريقة آمنة وشفافة وفعالة.',
    'th': 'วิสัยทัศน์ระยะยาวครอบคลุมโครงสร้างพื้นฐานทางการเงินดิจิทัลระดับโลกที่เชื่อมต่อผู้ใช้ องค์กร สถาบัน และรัฐบาล อำนวยความสะดวกในการจัดการและส่งผ่านสินทรัพย์ดิจิทัลอย่างปลอดภัย โปร่งใส และมีประสิทธิภาพ'
}))

# Section 03 - Components
new_keys.append(entry('wp.s3.p1', {
    'en': 'The QFS ecosystem is composed of several integrated components, each designed to fulfill a specific function within the digital financial architecture:',
    'es': 'El ecosistema QFS está compuesto por varios componentes integrados, cada uno diseñado para cumplir una función específica dentro de la arquitectura financiera digital:',
    'fr': 'L\'écosystème QFS est composé de plusieurs composants intégrés, chacun conçu pour remplir une fonction spécifique dans l\'architecture financière numérique:',
    'pt': 'O ecossistema QFS é composto por vários componentes integrados, cada um projetado para cumprir uma função específica na arquitetura financeira digital:',
    'de': 'Das QFS-Ökosystem besteht aus mehreren integrierten Komponenten, jede dafür konzipiert, eine spezifische Funktion innerhalb der digitalen Finanzarchitektur zu erfüllen:',
    'zh': 'QFS生态系统由多个集成组件组成，每个组件都旨在完成数字金融架构中的特定功能：',
    'ar': 'يتكون نظام QFS من عدة مكونات متكاملة، كل منها مصمم لتحقيق وظيفة محددة ضمن البنية المالية الرقمية:',
    'th': 'ระบบนิเวศ QFS ประกอบด้วยหลายส่วนประกอบที่ผสานรวมกัน แต่ละส่วนออกแบบมาเพื่อทำหน้าที่เฉพาะภายในสถาปัตยกรรมทางการเงินดิจิทัล:'
}))
new_keys.append(entry('wp.s3.comps', {
    'en': ['QFS Core', 'Base infrastructure connecting all ecosystem components.', 'QFS Wallet', 'Multi-asset and multi-chain digital wallet for comprehensive management.', 'QFSPay', 'Digital payment and transfer system integrated with the ecosystem.', 'QFS Exchange DEX', 'Decentralized digital asset exchange platform.', 'QFS Quantum Cards', 'Cards connecting digital assets with the real world.', 'QFS Financial Services', 'Suite of financial services for users and institutions.'],
    'es': ['QFS Core', 'Infraestructura base que conecta todos los componentes del ecosistema.', 'QFS Wallet', 'Billetera digital multi-activo y multi-cadena para gestión integral.', 'QFSPay', 'Sistema de pago y transferencia digital integrado con el ecosistema.', 'QFS Exchange DEX', 'Plataforma descentralizada de intercambio de activos digitales.', 'QFS Quantum Cards', 'Tarjetas que conectan activos digitales con el mundo real.', 'QFS Servicios Financieros', 'Suite de servicios financieros para usuarios e instituciones.'],
    'fr': ['QFS Core', 'Infrastructure de base connectant tous les composants de l\'écosystème.', 'QFS Wallet', 'Portefeuille numérique multi-actifs et multi-chaînes pour gestion complète.', 'QFSPay', 'Système de paiement et de transfert numérique intégré à l\'écosystème.', 'QFS Exchange DEX', 'Plateforme décentralisée d\'échange d\'actifs numériques.', 'QFS Quantum Cards', 'Cartes connectant les actifs numériques au monde réel.', 'QFS Services Financiers', 'Suite de services financiers pour utilisateurs et institutions.'],
    'pt': ['QFS Core', 'Infraestrutura base conectando todos os componentes do ecossistema.', 'QFS Wallet', 'Carteira digital multi-ativo e multi-cadeia para gestão abrangente.', 'QFSPay', 'Sistema de pagamento e transferência digital integrado ao ecossistema.', 'QFS Exchange DEX', 'Plataforma descentralizada de troca de ativos digitais.', 'QFS Quantum Cards', 'Cartões conectando ativos digitais com o mundo real.', 'QFS Serviços Financeiros', 'Suite de serviços financeiros para usuários e instituições.'],
    'de': ['QFS Core', 'Basisinfrastruktur zur Verbindung aller Ökosystem-Komponenten.', 'QFS Wallet', 'Multi-Asset- und Multichain-Digitalwallet für umfassende Verwaltung.', 'QFSPay', 'Digitales Zahlungs- und Überweisungssystem, integriert ins Ökosystem.', 'QFS Exchange DEX', 'Dezentrale Plattform für digitalen Asset-Handel.', 'QFS Quantum Cards', 'Karten, die digitale Assets mit der realen Welt verbinden.', 'QFS Finanzdienstleistungen', 'Suite von Finanzdienstleistungen für Nutzer und Institutionen.'],
    'zh': ['QFS Core', '连接所有生态系统组件的基础设施。', 'QFS Wallet', '多资产多链数字钱包，用于综合管理。', 'QFSPay', '与生态系统集成的数字支付和转账系统。', 'QFS Exchange DEX', '去中心化数字资产交易平台。', 'QFS Quantum Cards', '将数字资产与现实世界连接的卡片。', 'QFS金融服务', '为用户和机构提供的金融服务套件。'],
    'ar': ['QFS Core', 'البنية التحتية الأساسية التي تربط جميع مكونات النظام.', 'QFS Wallet', 'محفظة رقمية متعددة الأصول والسلاسل لإدارة شاملة.', 'QFSPay', 'نظام دفع وتحويل رقمي متكامل مع النظام.', 'QFS Exchange DEX', 'منصة لامركزية لتبادل الأصول الرقمية.', 'QFS Quantum Cards', 'بطاقات تربط الأصول الرقمية بالعالم الحقيقي.', 'QFS الخدمات المالية', 'مجموعة خدمات مالية للمستخدمين والمؤسسات.'],
    'th': ['QFS Core', 'โครงสร้างพื้นฐานที่เชื่อมต่อส่วนประกอบทั้งหมดของระบบนิเวศ', 'QFS Wallet', 'วอลเล็ตดิจิทัลหลายสินทรัพย์หลายเชนสำหรับการจัดการอย่างครบถ้วน', 'QFSPay', 'ระบบชำระเงินและโอนเงินดิจิทัลที่ผสานกับระบบนิเวศ', 'QFS Exchange DEX', 'แพลตฟอร์มแลกเปลี่ยนสินทรัพย์ดิจิทัลแบบกระจายศูนย์', 'QFS Quantum Cards', 'บัตรที่เชื่อมต่อสินทรัพย์ดิจิทัลกับโลกแห่งความเป็นจริง', 'QFS บริการทางการเงิน', 'ชุดบริการทางการเงินสำหรับผู้ใช้และสถาบัน']
}))
new_keys.append(entry('wp.s3.footer', {
    'en': 'Each component is developed progressively, with integrations activated as the base infrastructure becomes ready and the corresponding regulatory frameworks are clarified.',
    'es': 'Cada componente se desarrolla progresivamente, con activaciones de integraciones a medida que la infraestructura base esté lista y los marcos regulatorios correspondientes se aclaren.',
    'fr': 'Chaque composant est développé progressivement, avec des intégrations activées au fur et à mesure que l\'infrastructure de base est prête et les cadres réglementaires clarifiés.',
    'pt': 'Cada componente é desenvolvido progressivamente, com integrações ativadas conforme a infraestrutura base fica pronta e os marcos regulatórios correspondentes são esclarecidos.',
    'de': 'Jede Komponente wird progressiv entwickelt, wobei Integrationen aktiviert werden, wenn die Basisinfrastruktur bereit ist und die entsprechenden Regulierungsrahmen geklärt sind.',
    'zh': '每个组件都是逐步开发的，随着基础基础设施的准备就绪和相应监管框架的明确，集成将被激活。',
    'ar': 'يتم تطوير كل مكون بشكل تدريجي، مع تفعيل التكاملات عندما تصبح البنية التحتية الأساسية جاهزة وتتضح الأطر التنظيمية.',
    'th': 'แต่ละส่วนประกอบถูกพัฒนาอย่างเป็นขั้นตอน โดยการผสานจะถูกเปิดใช้เมื่อโครงสร้างพื้นฐานพร้อมและกรอบกฎระเบียบที่เกี่ยวข้องถูกชี้แจง'
}))

# Sections 04-10 condensed (shorter key names)
new_keys.append(entry('wp.s4.p1', {
    'en': 'Security is the most critical pillar of the QFS ecosystem. The architecture contemplates multiple layers of protection that continuously evolve to address emerging threats. This includes quantum-computing-resistant cryptography, advanced multi-factor authentication, secure cryptographic key management, and AI-powered anomaly detection systems.',
    'es': 'La seguridad es el pilar más crítico del ecosistema QFS. La arquitectura contempla múltiples capas de protección que evolucionan continuamente para abordar amenazas emergentes. Esto incluye criptografía resistente a la computación cuántica, autenticación multifactor avanzada, gestión segura de claves criptográficas y sistemas de detección de anomalías impulsados por IA.',
    'fr': 'La sécurité est le pilier le plus critique de l\'écosystème QFS. L\'architecture envisage de multiples couches de protection évoluant en continu pour faire face aux menaces émergentes.',
    'pt': 'A segurança é o pilar mais crítico do ecossistema QFS. A arquitetura contempla múltiplas camadas de proteção que evoluem continuamente para enfrentar ameaças emergentes.',
    'de': 'Sicherheit ist das wichtigste Fundament des QFS-Ökosystems. Die Architektur beinhaltet mehrere Schutzebenen, die kontinuierlich weiterentwickelt werden, um aufkommenden Bedrohungen zu begegnen.',
    'zh': '安全是QFS生态系统最关键的支柱。架构考虑了多层保护，持续演进以应对新兴威胁。这包括抗量子计算密码学、高级多因素认证、安全密钥管理和AI驱动的异常检测系统。',
    'ar': 'الأمان هو الركيزة الأكثر أهمية في نظام QFS. تتضمن البنية عدة طبقات حماية تتطور باستمرار لمواجهة التهديدات الناشئة.',
    'th': 'ความปลอดภัยเป็นเสาหลักที่สำคัญที่สุดของระบบนิเวศ QFS สถาปัตยกรรมพิจารณาหลายชั้นของการป้องกันที่พัฒนาอย่างต่อเนื่องเพื่อรับมือกับภัยคุกคามที่เกิดใหม่'
}))
new_keys.append(entry('wp.s4.p2', {
    'en': 'The QFS security approach is not static: it is designed to evolve alongside new digital threats. This implies periodic smart contract audits, continuous transaction monitoring, and the incorporation of new cryptographic protocols as technology advances.',
    'es': 'El enfoque de seguridad de QFS no es estático: está diseñado para evolucionar junto con las nuevas amenazas digitales. Esto implica auditorías periódicas de smart contracts, monitoreo continuo de transacciones y la incorporación de nuevos protocolos criptográficos a medida que avanza la tecnología.',
    'fr': 'L\'approche de sécurité QFS n\'est pas statique : elle est conçue pour évoluer avec les nouvelles menaces numériques.',
    'pt': 'A abordagem de segurança do QFS não é estática: é projetada para evoluir junto com as novas ameaças digitais.',
    'de': 'Der QFS-Sicherheitsansatz ist nicht statisch: er ist darauf ausgelegt, sich mit neuen digitalen Bedrohungen weiterzuentwickeln.',
    'zh': 'QFS的安全方法不是静态的：它旨在与新的数字威胁共同演进。这意味着定期的智能合约审计、持续的交易监控，以及随着技术进步纳入新的加密协议。',
    'ar': 'نهج أمان QFS ليس ثابتاً: صُمم ليتطور مع التهديدات الرقمية الجديدة.',
    'th': 'แนวทางความปลอดภัยของ QFS ไม่คงที่: ได้รับการออกแบบให้พัฒนาตามภัยคุกคามดิจิทัลใหม่ๆ'
}))

# S5 Multichain
new_keys.append(entry('wp.s5.p1', {
    'en': 'QFS is oriented toward an interoperable architecture not limited to a single blockchain network. The multichain vision allows progressively connecting different networks and protocols, creating a more flexible, resilient and scalable ecosystem.',
    'es': 'QFS está orientado hacia una arquitectura interoperable no limitada a una sola red blockchain. La visión multichain permite conectar progresivamente diferentes redes y protocolos, creando un ecosistema más flexible, resiliente y escalable.',
    'fr': 'QFS est orienté vers une architecture interopérable non limitée à un seul réseau blockchain. La vision multichaîne permet de connecter progressivement différents réseaux et protocoles.',
    'pt': 'O QFS é orientado para uma arquitetura interoperável não limitada a uma única rede blockchain. A visão multichain permite conectar progressivamente diferentes redes e protocolos.',
    'de': 'QFS ist auf eine interoperable Architektur ausgerichtet, die nicht auf ein einzelnes Blockchain-Netzwerk beschränkt ist.',
    'zh': 'QFS面向互操作架构，不局限于单一区块链网络。多链愿景允许逐步连接不同的网络和协议，创建更灵活、更有弹性和更可扩展的生态系统。',
    'ar': 'QFS موجه نحو بنية متشابكة غير محدودة بشبكة بلوكتشين واحدة.',
    'th': 'QFS มุ่งเน้นสู่สถาปัตยกรรมที่ทำงานร่วมกันได้ ไม่จำกัดเพียงเครือข่ายบล็อกเชนเดียว'
}))
new_keys.append(entry('wp.s5.p2', {
    'en': 'The multichain infrastructure is implemented through bridges and interoperability protocols that enable the seamless transfer of assets between different networks. This means a user could manage assets on multiple chains from a single QFS Wallet interface, with QFSPay facilitating payments regardless of the underlying network.',
    'es': 'La infraestructura multichain se implementa a través de puentes y protocolos de interoperabilidad que permiten la transferencia fluida de activos entre diferentes redes. Esto significa que un usuario podría gestionar activos en múltiples cadenas desde una sola interfaz QFS Wallet, con QFSPay facilitando pagos independientemente de la red subyacente.',
    'fr': 'L\'infrastructure multichaîne est implémentée grâce à des ponts et des protocoles d\'interopérabilité permettant le transfert fluide d\'actifs entre différents réseaux.',
    'pt': 'A infraestrutura multichain é implementada através de pontes e protocolos de interoperabilidade que permitem a transferência fluida de ativos entre diferentes redes.',
    'de': 'Die Multichain-Infrastruktur wird durch Bridges und Interoperabilitätsprotokolle implementiert, die den nahtlosen Transfer von Assets zwischen verschiedenen Netzwerken ermöglichen.',
    'zh': '多链基础设施通过桥接和互操作协议实现，支持不同网络间资产的无缝转移。这意味着用户可以从单个QFS Wallet界面管理多链资产，QFSPay促进支付而不受底层网络限制。',
    'ar': 'تم تنفيذ البنية التحتية متعددة السلاسل من خلال جسور وبروتوكولات تشابكية تتيح النقل السلس للأصول بين الشبكات المختلفة.',
    'th': 'โครงสร้างพื้นฐานหลายเชนถูกนำไปใช้ผ่านสะพานและโปรโตคอลการทำงานร่วมกันที่เปิดใช้การส่งผ่านสินทรัพย์ระหว่างเครือข่ายต่างๆ อย่างราบรื่น'
}))

# S6 AI
new_keys.append(entry('wp.s6.p1', {
    'en': 'Artificial intelligence is integrated as a cross-cutting layer of the QFS ecosystem, applied across multiple areas: security (anomalous transaction detection), risk monitoring, personalized financial assistance, compliance automation and infrastructure optimization.',
    'es': 'La inteligencia artificial se integra como una capa transversal del ecosistema QFS, aplicada en múltiples áreas: seguridad (detección de transacciones anómalas), monitoreo de riesgos, asistencia financiera personalizada, automatización de cumplimiento y optimización de infraestructura.',
    'fr': 'L\'intelligence artificielle est intégrée comme couche transversale de l\'écosystème QFS, appliquée dans plusieurs domaines : sécurité, surveillance des risques, assistance financière personnalisée, automatisation de la conformité et optimisation de l\'infrastructure.',
    'pt': 'A inteligência artificial é integrada como uma camada transversal do ecossistema QFS, aplicada em múltiplas áreas: segurança, monitoramento de riscos, assistência financeira personalizada, automação de conformidade e otimização de infraestrutura.',
    'de': 'Künstliche Intelligenz ist als übergreifende Schicht des QFS-Ökosystems integriert und in mehreren Bereichen angewendet: Sicherheit, Risikomonitoring, personalisierte Finanzberatung, Compliance-Automatisierung und Infrastrukuroptimierung.',
    'zh': '人工智能作为QFS生态系统的跨领域层集成，应用于多个领域：安全（异常交易检测）、风险监控、个性化金融辅助、合规自动化和基础设施优化。',
    'ar': 'يتم دمج الذكاء الاصطناعي كطبقة شاملة في نظام QFS، ويُطبق في مجالات متعددة: الأمان ومراقبة المخاطر والمساعدة المالية المخصصة وأتمتة الامتثال وتحسين البنية التحتية.',
    'th': 'ปัญญาประดิษฐ์ถูกผสานเป็นชั้นข้ามของระบบนิเวศ QFS ใช้ในหลายด้าน: ความปลอดภัย การติดตามความเสี่ยง การช่วยเหลือทางการเงินส่วนบุคคล การทำให้เป็นไปอัตโนมัติของการปฏิบัติตามกฎ และการเพิ่มประสิทธิภาพโครงสร้างพื้นฐาน'
}))
new_keys.append(entry('wp.s6.p2', {
    'en': 'The vision for AI in QFS is not to replace human judgment, but to amplify the capabilities of the ecosystem by providing real-time analysis, early alerts and tools that help users make informed financial decisions.',
    'es': 'La visión de IA en QFS no es reemplazar el juicio humano, sino amplificar las capacidades del ecosistema proporcionando análisis en tiempo real, alertas tempranas y herramientas que ayuden a los usuarios a tomar decisiones financieras informadas.',
    'fr': 'La vision de l\'IA dans QFS n\'est pas de remplacer le jugement humain, mais d\'amplifier les capacités de l\'écosystème en fournissant des analyses en temps réel, des alertes précoces et des outils.',
    'pt': 'A visão de IA no QFS não é substituir o julgamento humano, mas ampliar as capacidades do ecossistema fornecendo análises em tempo real, alertas precoces e ferramentas.',
    'de': 'Die Vision für KI in QFS ist es nicht, menschliches Urteilsvermögen zu ersetzen, sondern die Fähigkeiten des Ökosystems durch Echtzeit-Analysen, Frühwarnungen und Werkzeuge zu verstärken.',
    'zh': 'QFS中AI的愿景不是取代人类判断，而是通过提供实时分析、早期预警和帮助用户做出明智金融决策的工具来增强生态系统的能力。',
    'ar': 'رؤية الذكاء الاصطناعي في QFS ليست استبدال الحكم البشري، بل تعزيز قدرات النظام من خلال التحليل الفوري والتنبيهات المبكرة والأدوات.',
    'th': 'วิสัยทัศน์ของ AI ใน QFS ไม่ใช่การแทนที่การตัดสินใจของมนุษย์ แต่เป็นการขยายความสามารถของระบบนิเวศโดยให้การวิเคราะห์แบบเรียลไทม์ การเตือนล่วงหน้า และเครื่องมือที่ช่วยให้ผู้ใช้ตัดสินใจทางการเงินอย่างมีข้อมูล'
}))

# S7 Digital Economy
new_keys.append(entry('wp.s7.p1', {
    'en': 'QFS is oriented toward participating in the evolution toward an economy where different types of assets can be represented and managed digitally. This includes crypto assets, stablecoins, tokenized assets, tokenized commodities, digital financial assets and Real World Assets (RWA).',
    'es': 'QFS está orientado a participar en la evolución hacia una economía donde diferentes tipos de activos pueden ser representados y gestionados digitalmente. Esto incluye activos cripto, stablecoins, activos tokenizados, materias primas tokenizadas, activos financieros digitales y Activos del Mundo Real (RWA).',
    'fr': 'QFS est orienté vers la participation à l\'évolution vers une économie où différents types d\'actifs peuvent être représentés et gérés numériquement.',
    'pt': 'O QFS é orientado a participar da evolução para uma economia onde diferentes tipos de ativos podem ser representados e gerenciados digitalmente.',
    'de': 'QFS ist darauf ausgerichtet, an der Evolution hin zu einer Wirtschaft teilzunehmen, in der verschiedene Arten von Assets digital dargestellt und verwaltet werden können.',
    'zh': 'QFS面向参与向不同类型资产可以数字化表示和管理的经济演进。这包括加密资产、稳定币、通证化资产、通证化商品、数字金融资产和真实世界资产（RWA）。',
    'ar': 'QFS موجه نحو المشاركة في التطور نحو اقتصاد يمكن فيها تمثيل وإدارة أنواع مختلفة من الأصول رقمياً.',
    'th': 'QFS มุ่งเน้นการมีส่วนร่วมในการพัฒนาสู่เศรษฐกิจที่สินทรัพย์ประเภทต่างๆ สามารถแทนด้วยและจัดการได้ในรูปแบบดิจิทัล'
}))
new_keys.append(entry('wp.s7.p2', {
    'en': 'The incorporation of assets backed by physical goods requires verifiable custody, auditing and regulatory compliance mechanisms. QFS contemplates the development of these capabilities progressively, prioritizing transparency and verifiability at every stage.',
    'es': 'La incorporación de activos respaldados por bienes físicos requiere mecanismos de custodia verificable, auditoría y cumplimiento regulatorio. QFS contempla el desarrollo de estas capacidades progresivamente, priorizando la transparencia y verificabilidad en cada etapa.',
    'fr': 'L\'incorporation d\'actifs adossés à des biens physiques nécessite des mécanismes de garde vérifiable, d\'audit et de conformité réglementaire.',
    'pt': 'A incorporação de ativos lastreados em bens físicos requer mecanismos de custódia verificável, auditoria e conformidade regulatória.',
    'de': 'Die Einbindung von durch physische Güter besicherten Assets erfordert verifizierbare Verwahrungs-, Audit- und Regulierungskonformitätsmechanismen.',
    'zh': '实物支持的资产纳入需要可验证的托管、审计和监管合规机制。QFS考虑逐步开发这些能力，在每个阶段优先考虑透明度和可验证性。',
    'ar': 'يتطلب دمج الأصول المدعومة بسلع مادية آليات حضانة قابلة للتحقق وتدقيق وامتثال تنظيمي.',
    'th': 'การผสานสินทรัพย์ที่สนับสนุนโดยสินค้าจริงต้องการกลไกการรักษาที่ตรวจสอบได้ การตรวจสอบ และการปฏิบัติตามกฎระเบียบ'
}))

# S8 Institutional
new_keys.append(entry('wp.s8.p1', {
    'en': 'QFS also contemplates specific solutions for enterprises and institutions, including large-scale digital asset management, treasury management, enterprise payments, international transfers, financial APIs, institutional custody, asset tokenization and compliance tools.',
    'es': 'QFS también contempla soluciones específicas para empresas e instituciones, incluyendo gestión de activos digitales a gran escala, gestión de tesorería, pagos empresariales, transferencias internacionales, APIs financieras, custodia institucional, tokenización de activos y herramientas de cumplimiento.',
    'fr': 'QFS envisage également des solutions spécifiques pour les entreprises et institutions, incluant la gestion d\'actifs numériques à grande échelle, la gestion de trésorerie, les paiements d\'entreprise et les outils de conformité.',
    'pt': 'O QFS também contempla soluções específicas para empresas e instituições, incluindo gestão de ativos digitais em larga escala, gestão de tesouraria, pagamentos empresariais e ferramentas de conformidade.',
    'de': 'QFS berücksichtigt auch spezifische Lösungen für Unternehmen und Institutionen, darunter groß angelegte Digital-Asset-Verwaltung, Treasury-Management, Unternehmenszahlungen und Compliance-Werkzeuge.',
    'zh': 'QFS还考虑了面向企业和机构的特定解决方案，包括大规模数字资产管理、国库管理、企业支付、国际转账、金融API、机构托管、资产通证化和合规工具。',
    'ar': 'يستوعب QFS أيضاً حلولاً محددة للمؤسسات والهيئات، بما في ذلك إدارة الأصول الرقمية واسعة النطاق وأدوات الامتثال.',
    'th': 'QFS ยังพิจารณาโซลูชันเฉพาะสำหรับองค์กรและสถาบัน รวมถึงการจัดการสินทรัพย์ดิจิทัลขนาดใหญ่ การจัดการคลังคลานด์ การชำระเงินองค์กร และเครื่องมือการปฏิบัติตามกฎ'
}))
new_keys.append(entry('wp.s8.p2', {
    'en': 'These solutions will be developed in later phases of the roadmap, once the base infrastructure and consumer-oriented products are operational and verified.',
    'es': 'Estas soluciones se desarrollarán en fases posteriores del roadmap, una vez que la infraestructura base y los productos orientados al consumidor estén operativos y verificados.',
    'fr': 'Ces solutions seront développées dans les phases ultérieures de la feuille de route, une fois l\'infrastructure de base et les produits grand public opérationnels et vérifiés.',
    'pt': 'Essas soluções serão desenvolvidas em fases posteriores do roteiro, uma vez que a infraestrutura base e os produtos orientados ao consumidor estejam operacionais e verificados.',
    'de': 'Diese Lösungen werden in späteren Phasen des Roadmaps entwickelt, sobald die Basisinfrastruktur und die verbraucherorientierten Produkte betriebsbereit und verifiziert sind.',
    'zh': '这些解决方案将在路线图的后期阶段开发，一旦基础基础设施和面向消费者的产品运营并验证完毕。',
    'ar': 'سيتم تطوير هذه الحلول في مراحل لاحقة من خريطة الطريق، بمجرد أن تصبح البنية التحتية الأساسية والمنتجات الاستهلاكية تشغيلية وموثقة.',
    'th': 'โซลูชันเหล่านี้จะถูกพัฒนาในขั้นตอนทีล่วงของแผนงาน เมื่อโครงสร้างพื้นฐานพื้นฐานและผลิตภัณฑ์ที่มุ่งเน้นผู้บริโภคทำงานและตรวจสอบแล้ว'
}))

# S9 Alliances
new_keys.append(entry('wp.s9.p1', {
    'en': 'QFS builds its vision on strategic alliances that strengthen the infrastructure and expand the reach of the ecosystem:',
    'es': 'QFS construye su visión sobre alianzas estratégicas que fortalecen la infraestructura y expanden el alcance del ecosistema:',
    'fr': 'QFS construit sa vision sur des alliances stratégiques qui renforcent l\'infrastructure et étendent la portée de l\'écosystème:',
    'pt': 'O QFS constrói sua visão sobre alianças estratégicas que fortalecem a infraestrutura e expandem o alcance do ecossistema:',
    'de': 'QFS baut seine Vision auf strategischen Allianzen auf, die die Infrastruktur stärken und die Reichweite des Ökosystems erweitern:',
    'zh': 'QFS在战略联盟基础上构建愿景，加强基础设施并扩展生态系统的覆盖范围：',
    'ar': 'يبني QFS رؤيته على تحالفات استراتيجية تعزز البنية التحتية وتوسع نطاق النظام:',
    'th': 'QFS สร้างวิสัยทัศน์บนพันธมิตรทางยุทธศาสตร์ที่เสริมสร้างโครงสร้างพื้นฐานและขยายขอบเขตของระบบนิเวศ:'
}))
new_keys.append(entry('wp.s9.alliances', {
    'en': ['GCRM Alliance', 'Integration of digital financial services to connect regional economies with QFS, facilitating cross-border payments and transfers.', 'Al Arab', 'Expansion in Middle East and North Africa markets, integrating digital assets with existing regional financial systems.', 'Government Currencies', 'Progressive integration with CBDCs and government digital assets to establish bridges between traditional finance and the decentralized ecosystem.'],
    'es': ['Alianza GCRM', 'Integración de servicios financieros digitales para conectar economías regionales con QFS, facilitando pagos y transferencias transfronterizas.', 'Al Arab', 'Expansión en mercados de Medio Oriente y Norte de África, integrando activos digitales con sistemas financieros regionales existentes.', 'Monedas de Gobiernos', 'Integración progresiva con CBDCs y activos digitales gubernamentales para establecer puentes entre la finanzas tradicionales y el ecosistema descentralizado.'],
    'fr': ['Alliance GCRM', 'Intégration de services financiers numériques pour connecter les économies régionales avec QFS.', 'Al Arab', 'Expansion sur les marchés du Moyen-Orient et d\'Afrique du Nord, intégrant les actifs numériques aux systèmes financiers régionaux.', 'Monnaies Gouvernementales', 'Intégration progressive avec les CBDC et les actifs numériques gouvernementaux.'],
    'pt': ['Aliança GCRM', 'Integração de serviços financeiros digitais para conectar economias regionais com QFS.', 'Al Arab', 'Expansão nos mercados do Oriente Médio e Norte da África.', 'Moedas Governamentais', 'Integração progressiva com CBDCs e ativos digitais governamentais.'],
    'de': ['GCRM-Allianz', 'Integration digitaler Finanzdienstleistungen zur Verbindung regionaler Wirtschaften mit QFS.', 'Al Arab', 'Expansion auf MENA-Märkten, Integration digitaler Assets mit bestehenden regionalen Finanzsystemen.', 'Regierungswährungen', 'Progressive Integration mit CBDCs und staatlichen digitalen Assets.'],
    'zh': ['GCRM联盟', '整合数字金融服务，将区域经济与QFS连接，促进跨境支付和转账。', 'Al Arab', '在中东和北非市场扩展，将数字资产与现有区域金融系统整合。', '政府货币', '逐步与CBDC和政府数字资产整合，在传统金融和去中心化生态系统之间建立桥梁。'],
    'ar': ['تحالف GCRM', 'دمج الخدمات المالية الرقمية لربط الاقتصادات الإقليمية مع QFS.', 'Al Arab', 'التوسع في أسواق الشرق الأوسط وشمال أفريقيا.', 'العملات الحكومية', 'التكامل التدريجي مع CBDCs والأصول الرقمية الحكومية.'],
    'th': ['พันธมิตร GCRM', 'การผสานบริการทางการเงินดิจิทัลเพื่อเชื่อมต่อเศรษฐกิจภูมิภาคกับ QFS', 'Al Arab', 'การขยายตัวในตลาดตะวันออกกลางและแอฟริกาเหนือ', 'สกุลเงินรัฐบาล', 'การผสานแบบเป็นขั้นตอนกับ CBDCs และสินทรัพย์ดิจิทัลของรัฐบาล']
}))

# S10 NESG
new_keys.append(entry('wp.s10.p1', {
    'en': 'QFS develops its vision within a technological and financial community linked to the NESG ecosystem. The community drives initiatives related to digital finance, blockchain, DeFi, financial inclusion, technological innovation, development projects, digital economy and international cooperation.',
    'es': 'QFS desarrolla su visión dentro de una comunidad tecnológica y financiera vinculada al ecosistema NESG. La comunidad impulsa iniciativas relacionadas con finanzas digitales, blockchain, DeFi, inclusión financiera, innovación tecnológica, proyectos de desarrollo, economía digital y cooperación internacional.',
    'fr': 'QFS développe sa vision au sein d\'une communauté technologique et financière liée à l\'écosystème NESG. La communauté anime des initiatives liées à la finance numérique, la blockchain, la DeFi et la coopération internationale.',
    'pt': 'O QFS desenvolve sua visão dentro de uma comunidade tecnológica e financeira ligada ao ecossistema NESG. A comunidade impulsiona iniciativas relacionadas a finanças digitais, blockchain, DeFi e cooperação internacional.',
    'de': 'QFS entwickelt seine Vision innerhalb einer technologischen und finanziellen Community, die mit dem NESG-Ökosystem verbunden ist.',
    'zh': 'QFS在与NESG生态系统相关的技术和金融社区中发展其愿景。该社区推动与数字金融、区块链、DeFi、金融包容性、技术创新、开发项目、数字经济和国际合作相关的倡议。',
    'ar': 'يطور QFS رؤيته ضمن مجتمع تقني ومالي مرتبط بنظام NESG. يدفع المجتمع مبادرات تتعلق بالمال الرقمي والبلوكتشين والتمويل اللامركزي والشمول المالي والتعاون الدولي.',
    'th': 'QFS พัฒนาวิสัยทัศน์ภายในชุมชนทางเทคโนโลยีและการเงินที่เชื่อมโยงกับระบบนิเวศ NESG ชุมชนขับเคลื่อนโครงการที่เกี่ยวข้องกับการเงินดิจิทัล บล็อกเชน DeFi และความร่วมมือระหว่างประเทศ'
}))
new_keys.append(entry('wp.s10.p2', {
    'en': 'Community participation is fundamental to the development of QFS, providing feedback, use case validation and support in the progressive adoption of the platform.',
    'es': 'La participación comunitaria es fundamental para el desarrollo de QFS, proporcionando retroalimentación, validación de casos de uso y apoyo en la adopción progresiva de la plataforma.',
    'fr': 'La participation communautaire est fondamentale au développement de QFS, fournissant des retours, la validation des cas d\'usage et un soutien dans l\'adoption progressive de la plateforme.',
    'pt': 'A participação da comunidade é fundamental para o desenvolvimento do QFS, fornecendo feedback, validação de casos de uso e apoio na adoção progressiva da plataforma.',
    'de': 'Die Community-Beteiligung ist grundlegend für die Entwicklung von QFS und bietet Feedback, Use-Case-Validierung und Unterstützung bei der progressiven Adoption der Plattform.',
    'zh': '社区参与是QFS发展的基础，提供反馈、用例验证和平台渐进式采用的支持。',
    'ar': 'مشاركة المجتمع أساسية لتطوير QFS، حيث توفر ملاحظات والتحقق من حالات الاستخدام ودعماً في التبني التدريجي للمنصة.',
    'th': 'การมีส่วนร่วมของชุมชนเป็นสิ่งสำคัญต่อการพัฒนา QFS โดยให้ข้อมูลย้อนกลับ การตรวจสอบกรณีการใช้ และการสนับสนุนในการยอมรับแพลตฟอร์มอย่างเป็นขั้นตอน'
}))
new_keys.append(entry('wp.s10.note', {
    'en': 'Note:', 'es': 'Nota:', 'fr': 'Note :', 'pt': 'Nota:',
    'de': 'Hinweis:', 'zh': '注意：', 'ar': 'ملاحظة:', 'th': 'หมายเหตุ:'
}))
new_keys.append(entry('wp.s10.note.desc', {
    'en': 'The reference to NESARA-GESARA is presented as part of the community vision and narrative; any claims regarding government recognition, official adoption or international implementation must be supported by verifiable documentation.',
    'es': 'La referencia a NESARA-GESARA se presenta como parte de la visión y narrativa de la comunidad; cualquier afirmación sobre reconocimiento gubernamental, adopción oficial o implementación internacional debe estar respaldada por documentación verificable.',
    'fr': 'La référence à NESARA-GESARA est présentée comme partie de la vision et du récit communautaire ; toute affirmation concernant la reconnaissance gouvernementale doit être étayée par une documentation vérifiable.',
    'pt': 'A referência a NESARA-GESARA é apresentada como parte da visão e narrativa da comunidade; qualquer afirmação sobre reconhecimento governamental deve ser suportada por documentação verificável.',
    'de': 'Der Verweis auf NESARA-GESARA wird als Teil der Community-Vision und -Erzählung dargestellt; alle Behauptungen bezüglich staatlicher Anerkennung müssen durch überprüfbare Dokumentation belegt werden.',
    'zh': '对NESARA-GESARA的引用作为社区愿景和叙事的一部分呈现；任何关于政府认可、官方采用或国际实施的主张都必须有可验证的文件支持。',
    'ar': 'يُقدم الإشارة إلى NESARA-GESARA كجزء من رؤية وسرد المجتمع؛ أي ادعاءات بخصوص الاعتراف الحكومي أو التبني الرسمي يجب أن تكون مدعومة بوثائق قابلة للتحقق.',
    'th': 'การอ้างอิงถึง NESARA-GESARA ถูกนำเสนอเป็นส่วนหนึ่งของวิสัยทัศน์และเรื่องราวของชุมชน ข้ออ้างใดๆ เกี่ยวกับการรับรองจากรัฐบาล การนำไปใช้อย่างเป็นทางการ หรือการนำไปปฏิบัติระหว่างประเทศ จะต้องได้รับการสนับสนุนจากเอกสารที่ตรวจสอบได้'
}))

print(f"Generated {len(new_keys)} translation key blocks (whitepaper)")

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

print("Successfully added whitepaper translation keys to lang-store.ts")