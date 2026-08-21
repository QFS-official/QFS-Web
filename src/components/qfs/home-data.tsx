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
    desc: 'Technological infrastructure designed to connect the different components of the QFS ecosystem.',
  },
  {
    title: 'QFSPay',
    emoji: '💳',
    bgColor: 'bg-gradient-to-br from-violet-50 to-violet-100/50',
    icon: <CreditCard className="w-6 h-6 text-[#7c3aed]" />,
    desc: 'Digital payment system designed to facilitate payments, transfers and commercial operations.',
  },
  {
    title: 'QFS Wallet',
    emoji: '👛',
    bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
    icon: <Wallet className="w-6 h-6 text-[#0d9488]" />,
    desc: 'Digital wallet to store, manage, receive and transfer digital assets securely.',
  },
  {
    title: 'QFS Exchange DEX',
    emoji: '🔄',
    bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100/50',
    icon: <ArrowRightLeft className="w-6 h-6 text-[#db2777]" />,
    desc: 'Decentralized platform for exchanging digital assets with ecosystem liquidity.',
  },
  {
    title: 'QFS Quantum Cards',
    emoji: '💳',
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
    icon: <CreditCard className="w-6 h-6 text-[#d97706]" />,
    desc: 'QFS cards designed to connect digital assets with real-world payment solutions.',
  },
  {
    title: 'QFS Financial Services',
    emoji: '🏦',
    bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100/50',
    icon: <Landmark className="w-6 h-6 text-[#2563eb]" />,
    desc: 'Progressive integration of payments, exchange, asset management and enterprise solutions.',
  },
  {
    title: 'QFS Global Network',
    emoji: '🌍',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-violet-50',
    icon: <Globe className="w-6 h-6 text-[#2563eb]" />,
    desc: 'Interoperable infrastructure connecting users, enterprises, communities and blockchain networks.',
  },
  {
    title: 'QFS AI',
    emoji: '🤖',
    bgColor: 'bg-gradient-to-br from-rose-50 to-violet-50',
    icon: <Bot className="w-6 h-6 text-[#db2777]" />,
    desc: 'Artificial intelligence layer for security, risk analysis and financial assistance.',
  },
];

export const pillars = [
  { title: 'Security', icon: <Shield className="w-6 h-6" />, desc: 'Advanced protection of assets, accounts and financial operations.' },
  { title: 'Transparency', icon: <Eye className="w-6 h-6" />, desc: 'Verifiable records through distributed ledger technologies.' },
  { title: 'Interoperability', icon: <Network className="w-6 h-6" />, desc: 'Connection between different networks, assets and financial systems.' },
  { title: 'Decentralization', icon: <Cpu className="w-6 h-6" />, desc: 'Reduced dependency on traditional financial intermediaries.' },
  { title: 'Innovation', icon: <Lightbulb className="w-6 h-6" />, desc: 'Blockchain, AI, advanced cryptography and emerging technologies.' },
];

export const securityFeatures = [
  'Future-threat-resistant cryptography',
  'Multi-factor authentication',
  'Secure key management',
  'Real-time transaction monitoring',
  'Advanced wallet protection',
  'AI-powered anomaly detection',
  'Smart contract auditing',
  'Multi-layered security architecture',
  'Artificial intelligence applied to security',
];

export const walletFeatures = [
  'Create and manage wallets',
  'Send and receive assets',
  'View balances',
  'Manage multiple networks',
  'Connect with QFSPay',
  'Integrate QFS Cards',
  'Transaction history',
  'Security management',
];

export const faqItems = [
  {
    q: 'What is QFS?',
    a: 'QFS Official is an initiative developing a digital financial services architecture and ecosystem inspired by technologies such as blockchain, advanced cryptography, artificial intelligence and interoperability. Its goal is to build an integrated infrastructure for the management, transfer and exchange of digital assets.',
  },
  {
    q: 'Is QFS a global replacement for the banking system?',
    a: 'No. QFS Official represents an initiative and technological vision in development. It should not be presented as an officially implemented global financial system or as a confirmed replacement for traditional banking. It is a proposal for complementary and evolutionary infrastructure.',
  },
  {
    q: 'What is QFS Wallet?',
    a: 'It is the digital wallet designed to manage assets and connect with the different services of the QFS ecosystem. It will allow users to create and manage wallets, send and receive digital assets, view balances, manage multiple networks and connect with QFSPay and QFS Exchange DEX.',
  },
  {
    q: 'What is QFSPay?',
    a: 'It is the digital payments infrastructure designed to connect users, merchants and financial services within the ecosystem. It will facilitate digital payments, transfers, peer-to-peer and commercial payments, asset conversion, and provide APIs for developers.',
  },
  {
    q: 'What is QFS Exchange DEX?',
    a: 'It is the decentralized component designed for exchanging digital assets. It will include asset swaps, liquidity pools, multi-chain interoperability, market tools, smart contracts and decentralized governance.',
  },
  {
    q: 'What are QFS Quantum Cards?',
    a: 'It is a development line designed to create cards connected with QFS Wallet and QFSPay. Subject to technological integration with payment providers and applicable regulation by jurisdiction. Its goal is to connect the digital ecosystem with real-world payment solutions.',
  },
  {
    q: 'Is QFS connected to NESG?',
    a: 'Yes. QFS Official is part of the technological and community vision developed around the NESG ecosystem, which drives initiatives related to digital finance, blockchain, DeFi, financial inclusion and technological innovation.',
  },
];
