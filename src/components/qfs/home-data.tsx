import {
  Atom, Shield, Zap, Eye, Network, Cpu, CreditCard, Wallet,
  ArrowRightLeft, Landmark, Globe, Bot, Link2, Boxes, Building2,
  Layers, Lightbulb, Gauge, BarChart3, Lock
} from 'lucide-react';

export const ecosystemCards = [
  {
    title: 'QFS Core',
    emoji: '⚛️',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
    icon: <Atom className="w-6 h-6 text-[#2563eb]" />,
    desc: 'Infraestructura tecnológica destinada a conectar los diferentes componentes del ecosistema QFS.',
  },
  {
    title: 'QFSPay',
    emoji: '💳',
    bgColor: 'bg-gradient-to-br from-violet-50 to-violet-100/50',
    icon: <CreditCard className="w-6 h-6 text-[#7c3aed]" />,
    desc: 'Sistema de pagos digitales orientado a facilitar pagos, transferencias y operaciones comerciales.',
  },
  {
    title: 'QFS Wallet',
    emoji: '👛',
    bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
    icon: <Wallet className="w-6 h-6 text-[#0d9488]" />,
    desc: 'Billetera digital para almacenar, gestionar, recibir y transferir activos digitales de manera segura.',
  },
  {
    title: 'QFS Exchange DEX',
    emoji: '🔄',
    bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100/50',
    icon: <ArrowRightLeft className="w-6 h-6 text-[#db2777]" />,
    desc: 'Plataforma descentralizada para el intercambio de activos digitales con liquidez del ecosistema.',
  },
  {
    title: 'QFS Quantum Cards',
    emoji: '💳',
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
    icon: <CreditCard className="w-6 h-6 text-[#d97706]" />,
    desc: 'Tarjetas QFS destinadas a conectar los activos digitales con soluciones de pago del mundo real.',
  },
  {
    title: 'QFS Financial Services',
    emoji: '🏦',
    bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100/50',
    icon: <Landmark className="w-6 h-6 text-[#2563eb]" />,
    desc: 'Integración progresiva de pagos, intercambio, gestión de activos y soluciones empresariales.',
  },
  {
    title: 'QFS Global Network',
    emoji: '🌍',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-violet-50',
    icon: <Globe className="w-6 h-6 text-[#2563eb]" />,
    desc: 'Infraestructura interoperable que conecta usuarios, empresas, comunidades y redes blockchain.',
  },
  {
    title: 'QFS AI',
    emoji: '🤖',
    bgColor: 'bg-gradient-to-br from-rose-50 to-violet-50',
    icon: <Bot className="w-6 h-6 text-[#db2777]" />,
    desc: 'Capa de inteligencia artificial para seguridad, análisis de riesgos y asistencia financiera.',
  },
];

export const pillars = [
  { title: 'Seguridad', icon: <Shield className="w-6 h-6" />, desc: 'Protección avanzada de activos, cuentas y operaciones financieras.' },
  { title: 'Transparencia', icon: <Eye className="w-6 h-6" />, desc: 'Registro verificable mediante tecnologías de contabilidad distribuida.' },
  { title: 'Interoperabilidad', icon: <Network className="w-6 h-6" />, desc: 'Conexión entre diferentes redes, activos y sistemas financieros.' },
  { title: 'Descentralización', icon: <Cpu className="w-6 h-6" />, desc: 'Reducción de dependencia de intermediarios financieros tradicionales.' },
  { title: 'Innovación', icon: <Lightbulb className="w-6 h-6" />, desc: 'Blockchain, IA, criptografía avanzada y tecnologías emergentes.' },
];

export const securityFeatures = [
  'Criptografía resistente a amenazas futuras',
  'Autenticación multifactor',
  'Gestión segura de claves',
  'Monitoreo de transacciones en tiempo real',
  'Protección avanzada de wallets',
  'Detección de anomalías con IA',
  'Auditoría de smart contracts',
  'Arquitectura de seguridad multicapa',
  'Inteligencia artificial aplicada a seguridad',
];

export const walletFeatures = [
  'Crear y administrar wallets',
  'Enviar y recibir activos',
  'Visualizar balances',
  'Gestionar múltiples redes',
  'Conectar con QFSPay',
  'Integrar QFS Cards',
  'Historial de operaciones',
  'Gestión de seguridad',
];

export const faqItems = [
  {
    q: '¿Qué es QFS?',
    a: 'QFS Official es una iniciativa que desarrolla una arquitectura y ecosistema de servicios financieros digitales inspirados en tecnologías como blockchain, criptografía avanzada, inteligencia artificial e interoperabilidad. Su objetivo es construir una infraestructura integrada para la gestión, transferencia e intercambio de activos digitales.',
  },
  {
    q: '¿Es QFS un reemplazo global del sistema bancario?',
    a: 'No. QFS Official representa una iniciativa y visión tecnológica en desarrollo. No debe presentarse como un sistema financiero global oficialmente implementado ni como reemplazo confirmado de la banca tradicional. Es una propuesta de infraestructura complementaria y evolutiva.',
  },
  {
    q: '¿Qué es QFS Wallet?',
    a: 'Es la billetera digital prevista para gestionar activos y conectarse con los diferentes servicios del ecosistema QFS. Permitirá crear y administrar wallets, enviar y recibir activos digitales, visualizar balances, gestionar múltiples redes y conectarse con QFSPay y QFS Exchange DEX.',
  },
  {
    q: '¿Qué es QFSPay?',
    a: 'Es la infraestructura de pagos digitales prevista para conectar usuarios, comercios y servicios financieros del ecosistema. Facilitará pagos digitales, transferencias, pagos entre usuarios y comerciales, conversión entre activos, y proveerá APIs para desarrolladores.',
  },
  {
    q: '¿Qué es QFS Exchange DEX?',
    a: 'Es el componente descentralizado destinado al intercambio de activos digitales. Incluirá swap de activos, pools de liquidez, interoperabilidad multicadena, herramientas de mercado, smart contracts y gobernanza descentralizada.',
  },
  {
    q: '¿Qué son las QFS Quantum Cards?',
    a: 'Es una línea de desarrollo destinada a crear tarjetas conectadas con QFS Wallet y QFSPay. Sujeta a integración tecnológica con proveedores de pago y regulación aplicable por jurisdicción. Su objetivo es conectar el ecosistema digital con soluciones de pago del mundo real.',
  },
  {
    q: '¿QFS está conectado con NESG?',
    a: 'Sí. QFS Official forma parte de la visión tecnológica y comunitaria desarrollada alrededor del ecosistema NESG, que impulsa iniciativas relacionadas con finanzas digitales, blockchain, DeFi, inclusión financiera e innovación tecnológica.',
  },
];
