import { create } from "zustand";
import { persist } from "zustand/middleware";

type Lang = "es" | "en";

interface LangStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
    }),
    { name: "qfs-lang" }
  )
);

// Translation helper
const t: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.portal": { es: "Portal", en: "Portal" },
  "nav.whitepaper": { es: "Libro Blanco", en: "White Paper" },
  "nav.roadmap": { es: "Roadmap", en: "Roadmap" },
  "nav.explore": { es: "Explorar QFS", en: "Explore QFS" },
  "nav.join": { es: "Unirse a la Comunidad", en: "Join Community" },
  "nav.subtitle": { es: "QUANTUM FINANCIAL SYSTEM", en: "QUANTUM FINANCIAL SYSTEM" },

  // Hero
  "hero.badge": { es: "QUANTUM FINANCIAL SYSTEM", en: "QUANTUM FINANCIAL SYSTEM" },
  "hero.title1": { es: "El Futuro de las", en: "The Future of" },
  "hero.title2": { es: "Finanzas Digitales", en: "Digital Finance" },
  "hero.desc": {
    es: "QFS Oficial desarrolla una nueva infraestructura financiera digital que integra blockchain, inteligencia artificial, seguridad criptografica avanzada, pagos digitales y servicios financieros descentralizados.",
    en: "QFS Official develops a new digital financial infrastructure integrating blockchain, artificial intelligence, advanced cryptographic security, digital payments and decentralized financial services.",
  },
  "hero.wallet": { es: "QFS Wallet", en: "QFS Wallet" },
  "hero.qfspay": { es: "QFSPay", en: "QFSPay" },
  "hero.explore_btn": { es: "Explorar QFS", en: "Explore QFS" },
  "hero.tags.technology": { es: "Technology", en: "Technology" },
  "hero.tags.finance": { es: "Digital Finance", en: "Digital Finance" },
  "hero.tags.security": { es: "Security", en: "Security" },
  "hero.tags.decentralization": { es: "Decentralization", en: "Decentralization" },
  "hero.tags.connectivity": { es: "Global Connectivity", en: "Global Connectivity" },

  // Ecosystem
  "eco.subtitle": { es: "El Ecosistema", en: "The Ecosystem" },
  "eco.title": { es: "Ecosistema QFS", en: "QFS Ecosystem" },
  "eco.desc": { es: "Arquitectura financiera modular que integra diferentes servicios dentro de un mismo ecosistema digital.", en: "Modular financial architecture integrating different services within a single digital ecosystem." },

  // Pillars
  "pil.subtitle": { es: "Arquitectura", en: "Architecture" },
  "pil.title1": { es: "Cinco", en: "Five" },
  "pil.title2": { es: "Pilares", en: "Pillars" },
  "pil.title3": { es: "Fundamentales", en: "Fundamental" },
  "pil.desc": { es: "QFS propone una nueva arquitectura financiera basada en principios que transformaran la economia digital.", en: "QFS proposes a new financial architecture based on principles that will transform the digital economy." },

  // Security
  "sec.subtitle": { es: "Seguridad", en: "Security" },
  "sec.title": { es: "QFS Security", en: "QFS Security" },
  "sec.desc": { es: "La seguridad constituye uno de los pilares fundamentales del ecosistema QFS. Disenado para evolucionar conjuntamente con las nuevas amenazas digitales mediante una arquitectura de seguridad multicapa.", en: "Security is one of the fundamental pillars of the QFS ecosystem. Designed to evolve alongside new digital threats through a multi-layered security architecture." },

  // Products
  "prod.subtitle": { es: "Productos", en: "Products" },
  "prod.title": { es: "Productos QFS", en: "QFS Products" },
  "prod.wallet.title": { es: "QFS Wallet", en: "QFS Wallet" },
  "prod.wallet.subtitle": { es: "Your Digital Financial Hub", en: "Your Digital Financial Hub" },
  "prod.wallet.desc": { es: "El punto de acceso del usuario al ecosistema QFS. Gestione diferentes tipos de activos digitales desde una unica interfaz con seguridad avanzada.", en: "The user's entry point to the QFS ecosystem. Manage different types of digital assets from a single interface with advanced security." },
  "prod.wallet.balance": { es: "Total Balance", en: "Total Balance" },
  "prod.wallet.month": { es: "este mes", en: "this month" },
  "prod.qfspay.title": { es: "QFSPay", en: "QFSPay" },
  "prod.qfspay.subtitle": { es: "Digital Payments", en: "Digital Payments" },
  "prod.qfspay.desc": { es: "Pagos digitales para una economia conectada. Facilita la utilizacion de activos digitales para operaciones cotidianas y comerciales.", en: "Digital payments for a connected economy. Facilitates the use of digital assets for everyday and commercial operations." },
  "prod.dex.title": { es: "QFS Exchange DEX", en: "QFS Exchange DEX" },
  "prod.dex.subtitle": { es: "Decentralized Trading", en: "Decentralized Trading" },
  "prod.dex.desc": { es: "Plataforma descentralizada para el intercambio de activos digitales con acceso a mercados y liquidez del ecosistema.", en: "Decentralized platform for exchanging digital assets with access to ecosystem markets and liquidity." },
  "prod.cards.title": { es: "QFS Quantum Cards", en: "QFS Quantum Cards" },
  "prod.cards.subtitle": { es: "Digital-to-Physical", en: "Digital-to-Physical" },
  "prod.cards.desc": { es: "Conecta el ecosistema digital QFS con soluciones de pago fisicas y digitales del mundo real.", en: "Connects the QFS digital ecosystem with real-world physical and digital payment solutions." },
  "prod.ai.title": { es: "QFS + IA", en: "QFS + AI" },
  "prod.ai.subtitle": { es: "Intelligent Finance", en: "Intelligent Finance" },

  // FAQ
  "faq.subtitle": { es: "Preguntas Frecuentes", en: "FAQ" },
  "faq.title": { es: "FAQ", en: "FAQ" },

  // Alliances
  "all.subtitle": { es: "Alianzas Estrategicas", en: "Strategic Alliances" },
  "all.title": { es: "Alianzas", en: "Alliances" },
  "all.title2": { es: "Globales", en: "Global" },
  "all.desc": { es: "QFS construye puentes de colaboracion con organizaciones y gobiernos para una infraestructura financiera verdaderamente global.", en: "QFS builds bridges of collaboration with organizations and governments for a truly global financial infrastructure." },
  "all.gcrm.tag": { es: "Socio Estrategico", en: "Strategic Partner" },
  "all.gcrm.name": { es: "Alianza GCRM", en: "GCRM Alliance" },
  "all.gcrm.desc": { es: "Alianza estrategica con GCRM para la integracion de servicios financieros digitales, facilitando la conectividad entre economias regionales y el ecosistema QFS mediante soluciones de pago y transferencias transfronterizas.", en: "Strategic alliance with GCRM for the integration of digital financial services, facilitating connectivity between regional economies and the QFS ecosystem through payment and cross-border transfer solutions." },
  "all.arab.tag": { es: "Expansion Regional", en: "Regional Expansion" },
  "all.arab.name": { es: "Al Arab", en: "Al Arab" },
  "all.arab.desc": { es: "Colaboracion con Al Arab para expandir la infraestructura financiera digital en mercados de Medio Oriente y Norte de Africa, integrando activos digitales con sistemas financieros regionales existentes.", en: "Collaboration with Al Arab to expand digital financial infrastructure in Middle East and North Africa markets, integrating digital assets with existing regional financial systems." },
  "all.gov.tag": { es: "Gobierno Digital", en: "Digital Government" },
  "all.gov.name": { es: "Monedas de Gobiernos", en: "Government Currencies" },
  "all.gov.desc": { es: "Integracion progresiva con monedas digitales de bancos centrales (CBDCs) y activos digitales gubernamentales para establecer puentes entre la finanzas tradicionales y el ecosistema descentralizado.", en: "Progressive integration with central bank digital currencies (CBDCs) and government digital assets to establish bridges between traditional finance and the decentralized ecosystem." },

  // Why QFS
  "why.subtitle": { es: "Por que QFS", en: "Why QFS" },
  "why.title": { es: "Por que QFS?", en: "Why QFS?" },
  "why.security": { es: "Seguridad", en: "Security" },
  "why.security.desc": { es: "Infraestructura disenada con seguridad como prioridad absoluta.", en: "Infrastructure designed with security as absolute priority." },
  "why.speed": { es: "Velocidad", en: "Speed" },
  "why.speed.desc": { es: "Procesamiento digital eficiente y escalable.", en: "Efficient and scalable digital processing." },
  "why.transparency": { es: "Transparencia", en: "Transparency" },
  "why.transparency.desc": { es: "Tecnologia blockchain y registros verificables.", en: "Blockchain technology and verifiable records." },
  "why.access": { es: "Acceso", en: "Access" },
  "why.access.desc": { es: "Servicios financieros accesibles desde una plataforma integrada.", en: "Financial services accessible from an integrated platform." },
  "why.interop": { es: "Interoperabilidad", en: "Interoperability" },
  "why.interop.desc": { es: "Conexion entre diferentes redes y activos.", en: "Connection between different networks and assets." },
  "why.innovation": { es: "Innovacion", en: "Innovation" },
  "why.innovation.desc": { es: "Blockchain + IA + Criptografia + Finanzas Digitales.", en: "Blockchain + AI + Cryptography + Digital Finance." },

  // CTA
  "cta.title1": { es: "Construyendo el Futuro", en: "Building the Future" },
  "cta.title2": { es: "de las Finanzas Digitales", en: "of Digital Finance" },
  "cta.desc": { es: "QFS es mas que una wallet, mas que pagos, mas que un exchange. Es un ecosistema financiero digital integrado disenado para la proxima generacion de la economia global.", en: "QFS is more than a wallet, more than payments, more than an exchange. It is an integrated digital financial ecosystem designed for the next generation of the global economy." },
};

// Dynamic data translations
const td: Record<string, Record<Lang, string[]>> = {
  "qfspay.features": {
    es: ["Pagos digitales", "Transferencias P2P", "Pagos comerciales", "Conversion de activos", "APIs para desarrolladores", "Soluciones empresariales"],
    en: ["Digital payments", "P2P transfers", "Commercial payments", "Asset conversion", "Developer APIs", "Enterprise solutions"],
  },
  "dex.features": {
    es: ["Swap de activos", "Pools de liquidez", "Interoperabilidad multicadena", "Herramientas de mercado", "Smart contracts", "Gobernanza descentralizada"],
    en: ["Asset swap", "Liquidity pools", "Multi-chain interoperability", "Market tools", "Smart contracts", "Decentralized governance"],
  },
  "ai.items": {
    es: ["AI Security", "Deteccion de transacciones anomalas", "AI Risk Monitoring", "Analisis de riesgos y patrones", "AI Financial Assistance", "Herramientas inteligentes para usuarios", "AI Compliance", "Automatizacion de cumplimiento"],
    en: ["AI Security", "Anomalous transaction detection", "AI Risk Monitoring", "Risk and pattern analysis", "AI Financial Assistance", "Smart tools for users", "AI Compliance", "Compliance automation"],
  },
};

export function useT() {
  const { lang } = useLangStore();
  return (key: string): string => t[key]?.[lang] ?? key;
}

export function useTD() {
  const { lang } = useLangStore();
  return (key: string): string[] => td[key]?.[lang] ?? [];
}
