'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme-store';
import {
  FileText, Atom, Shield, Wallet, CreditCard, ArrowRightLeft,
  Bot, Globe, Network, Landmark, Users, Cpu, Layers, Link2,
  BookOpen, Target, Lightbulb, CheckCircle2
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const tocItems = [
  { num: '01', title: 'Executive Summary', id: 'exec-summary' },
  { num: '02', title: 'Vision & Architecture', id: 'vision' },
  { num: '03', title: 'Ecosystem Components', id: 'components' },
  { num: '04', title: 'Security & Cryptography', id: 'security' },
  { num: '05', title: 'Multichain Infrastructure', id: 'multichain' },
  { num: '06', title: 'Artificial Intelligence', id: 'ai' },
  { num: '07', title: 'Digital Asset Economy', id: 'digital-economy' },
  { num: '08', title: 'Institutional Solutions', id: 'institutional' },
  { num: '09', title: 'Strategic Alliances', id: 'alliances' },
  { num: '10', title: 'NESG Community', id: 'nesg' },
];

export function WhitePaperPage() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? 'text-violet-300 border-violet-700/50 bg-violet-500/10' : 'text-[#7c3aed] border-violet-200 bg-violet-50/80'}`}
          >
            <FileText className="w-3.5 h-3.5" />
            WHITE PAPER
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">QFS White Paper</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={`max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            Technical document describing the vision, architecture and progressive development
            of the Quantum Financial System.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className={`flex items-center justify-center gap-4 mt-6 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
          >
            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> v1.0</span>
            <span className="text-gray-200">|</span>
            <span>August 2026</span>
            <span className="text-gray-200">|</span>
            <span>Confidential</span>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Table of Contents */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-xl font-bold mb-8 flex items-center gap-3"
          >
            <motion.span variants={fadeUp} className="text-[#2563eb]">
              <Target className="w-5 h-5" />
            </motion.span>
            <motion.span variants={fadeUp}>Contents</motion.span>
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-2"
          >
            {tocItems.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={fadeUp}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors cursor-default group ${isDark ? 'bg-slate-800/90 border-slate-700/60 hover:border-blue-500/30' : 'bg-white border-gray-100 hover:border-blue-200/50'}`}
                style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.03)' }}
              >
                <span className="text-xs font-mono text-[#2563eb]/50 sub-label w-6">{item.num}</span>
                <span className={`text-sm transition-colors ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* 01 - Executive Summary */}
      <WhitePaperSection
        num="01"
        title="Executive Summary"
        icon={<Lightbulb className="w-5 h-5" />}
        color="#2563eb"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            The global financial system is undergoing a fundamental transformation. Accelerated
            digitalization, the evolution of blockchain technologies, the emergence of digital assets and the growing
            demand for transparency and accessibility are redefining the expectations of users, enterprises and
            institutions regarding financial services.
          </p>
          <p>
            In this context, <span className="text-[#2563eb] font-medium">QFS Official</span> presents an
            initiative focused on developing a new digital financial infrastructure that integrates multiple
            convergent technologies: blockchain, artificial intelligence, advanced cryptography, digital payments and
            decentralized financial services.
          </p>
          <p>
            QFS does not seek to replace existing systems, but to complement the evolution of the global financial
            ecosystem by providing modular, secure and accessible infrastructure that can adapt to the
            needs of different users and jurisdictions. The approach is based on progressive construction,
            where each component of the ecosystem is developed and integrated incrementally.
          </p>
          <div className="bg-blue-50/50 rounded-xl p-4 mt-6 border border-blue-100/50">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-slate-800 mb-1">Core Proposal</div>
                <div className="text-sm text-slate-500">
                  Build an integrated digital financial ecosystem where Wallet, Payments, Exchange, Cards, AI,
                  Blockchain and Multichain operate within a unified, progressive and verifiable architecture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </WhitePaperSection>

      {/* 02 - Vision */}
      <WhitePaperSection
        num="02"
        title="Vision & Architecture"
        icon={<Atom className="w-5 h-5" />}
        color="#7c3aed"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            The QFS vision is built on five pillars: <span className="text-[#2563eb] font-medium">Security</span>,
            <span className="text-[#7c3aed] font-medium"> Transparency</span>,
            <span className="text-[#0d9488] font-medium"> Interoperability</span>,
            <span className="text-[#db2777] font-medium"> Decentralization</span> and
            <span className="text-[#d97706] font-medium"> Innovation</span>. Each of these principles guides the design
            and development of every component within the ecosystem.
          </p>
          <p>
            The QFS architecture is designed as a modular system where each component operates
            independently but can integrate with the others. This modularity enables progressive development,
            where functionality is built and deployed in phases, reducing risks and allowing continuous
            adaptation.
          </p>
          <p>
            The long-term vision encompasses a global digital financial infrastructure that connects users,
            enterprises, institutions and governments, facilitating the management and transfer of digital assets
            in a secure, transparent and efficient manner. This vision includes progressive participation in the
            digital asset economy, including crypto assets, stablecoins, tokenized assets and Real World Assets (RWA).
          </p>
        </div>
      </WhitePaperSection>

      {/* 03 - Components */}
      <WhitePaperSection
        num="03"
        title="Ecosystem Components"
        icon={<Layers className="w-5 h-5" />}
        color="#0d9488"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            The QFS ecosystem is composed of several integrated components, each designed to fulfill a
            specific function within the digital financial architecture:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 my-6">
            {[
              { name: 'QFS Core', desc: 'Base infrastructure connecting all ecosystem components.' },
              { name: 'QFS Wallet', desc: 'Multi-asset and multi-chain digital wallet for comprehensive management.' },
              { name: 'QFSPay', desc: 'Digital payment and transfer system integrated with the ecosystem.' },
              { name: 'QFS Exchange DEX', desc: 'Decentralized digital asset exchange platform.' },
              { name: 'QFS Quantum Cards', desc: 'Cards connecting digital assets with the real world.' },
              { name: 'QFS Financial Services', desc: 'Suite of financial services for users and institutions.' },
            ].map((comp) => (
              <div key={comp.name} className="bg-white rounded-xl p-4 border border-gray-100" style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.03)' }}>
                <div className="text-sm font-semibold text-slate-800 mb-1">{comp.name}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{comp.desc}</div>
              </div>
            ))}
          </div>
          <p>
            Each component is developed progressively, with integrations activated as the
            base infrastructure becomes ready and the corresponding regulatory frameworks are clarified.
          </p>
        </div>
      </WhitePaperSection>

      {/* 04 - Security */}
      <WhitePaperSection
        num="04"
        title="Security & Cryptography"
        icon={<Shield className="w-5 h-5" />}
        color="#2563eb"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            Security is the most critical pillar of the QFS ecosystem. The architecture contemplates multiple layers
            of protection that continuously evolve to address emerging threats. This includes
            quantum-computing-resistant cryptography, advanced multi-factor authentication, secure
            cryptographic key management, and AI-powered anomaly detection systems.
          </p>
          <p>
            The QFS security approach is not static: it is designed to evolve alongside
            new digital threats. This implies periodic smart contract audits, continuous
            transaction monitoring, and the incorporation of new cryptographic protocols as technology advances.
          </p>
        </div>
      </WhitePaperSection>

      {/* 05 - Multichain */}
      <WhitePaperSection
        num="05"
        title="Multichain Infrastructure"
        icon={<Network className="w-5 h-5" />}
        color="#d97706"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            QFS is oriented toward an interoperable architecture not limited to a single blockchain network.
            The multichain vision allows progressively connecting different networks and protocols, creating
            a more flexible, resilient and scalable ecosystem.
          </p>
          <p>
            The multichain infrastructure is implemented through bridges and interoperability protocols
            that enable the seamless transfer of assets between different networks. This means a user
            could manage assets on multiple chains from a single QFS Wallet interface, with QFSPay
            facilitating payments regardless of the underlying network.
          </p>
        </div>
      </WhitePaperSection>

      {/* 06 - AI */}
      <WhitePaperSection
        num="06"
        title="Artificial Intelligence"
        icon={<Bot className="w-5 h-5" />}
        color="#db2777"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            Artificial intelligence is integrated as a cross-cutting layer of the QFS ecosystem, applied across
            multiple areas: security (anomalous transaction detection), risk monitoring, personalized
            financial assistance, compliance automation and infrastructure optimization.
          </p>
          <p>
            The vision for AI in QFS is not to replace human judgment, but to amplify the capabilities of the
            ecosystem by providing real-time analysis, early alerts and tools that help
            users make informed financial decisions.
          </p>
        </div>
      </WhitePaperSection>

      {/* 07 - Digital Economy */}
      <WhitePaperSection
        num="07"
        title="Digital Asset Economy"
        icon={<Globe className="w-5 h-5" />}
        color="#0d9488"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            QFS is oriented toward participating in the evolution toward an economy where different types of assets
            can be represented and managed digitally. This includes crypto assets, stablecoins, tokenized
            assets, tokenized commodities, digital financial assets and Real World Assets (RWA).
          </p>
          <p>
            The incorporation of assets backed by physical goods requires verifiable custody,
            auditing and regulatory compliance mechanisms. QFS contemplates the development of these capabilities
            progressively, prioritizing transparency and verifiability at every stage.
          </p>
        </div>
      </WhitePaperSection>

      {/* 08 - Institutional */}
      <WhitePaperSection
        num="08"
        title="Institutional Solutions"
        icon={<Landmark className="w-5 h-5" />}
        color="#7c3aed"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            QFS also contemplates specific solutions for enterprises and institutions, including large-scale
            digital asset management, treasury management, enterprise payments, international transfers,
            financial APIs, institutional custody, asset tokenization and compliance tools.
          </p>
          <p>
            These solutions will be developed in later phases of the roadmap, once the base infrastructure
            and consumer-oriented products are operational and verified.
          </p>
        </div>
      </WhitePaperSection>

      {/* 09 - Alliances */}
      <WhitePaperSection
        num="09"
        title="Strategic Alliances"
        icon={<Link2 className="w-5 h-5" />}
        color="#d97706"
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            QFS builds its vision on strategic alliances that strengthen the infrastructure and expand
            the reach of the ecosystem:
          </p>
          <div className="space-y-3 my-4">
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#2563eb] border border-gray-100" style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">GCRM Alliance</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Integration of digital financial services to connect regional economies with QFS,
                facilitating cross-border payments and transfers.
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#d97706] border border-gray-100" style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">Al Arab</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Expansion in Middle East and North Africa markets, integrating digital assets
                with existing regional financial systems.
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#7c3aed] border border-gray-100" style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">Government Currencies</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Progressive integration with CBDCs and government digital assets to establish
                bridges between traditional finance and the decentralized ecosystem.
              </div>
            </div>
          </div>
        </div>
      </WhitePaperSection>

      {/* 10 - NESG */}
      <WhitePaperSection
        num="10"
        title="NESG Community"
        icon={<Users className="w-5 h-5" />}
        color="#db2777"
        isLast
      >
        <div className="space-y-4 leading-relaxed text-slate-600">
          <p>
            QFS develops its vision within a technological and financial community linked to the NESG ecosystem.
            The community drives initiatives related to digital finance, blockchain, DeFi, financial inclusion,
            technological innovation, development projects, digital economy and international cooperation.
          </p>
          <p>
            Community participation is fundamental to the development of QFS, providing feedback,
            use case validation and support in the progressive adoption of the platform.
          </p>
          <div className="bg-pink-50/50 rounded-xl p-4 mt-4 border border-pink-100/50">
            <div className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">Note:</strong> The reference to NESARA-GESARA is presented as
              part of the community vision and narrative; any claims regarding government recognition,
              official adoption or international implementation must be supported by verifiable documentation.
            </div>
          </div>
        </div>
      </WhitePaperSection>
    </div>
  );
}

function WhitePaperSection({
  num, title, icon, color, children, isLast = false,
}: {
  num: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${color}0d`, color, boxShadow: `0 4px 12px ${color}10` }}
              >
                {icon}
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest" style={{ color: isDark ? color : (color + '80') }}>
                  SECTION {num}
                </span>
                <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              {children}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {!isLast && <div className="section-divider max-w-5xl mx-auto" />}
    </>
  );
}