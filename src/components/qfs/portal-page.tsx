'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme-store';
import {
  Landmark, Shield, Globe, Zap, Lock, GitBranch, CreditCard,
  Coins, Handshake, ArrowRight, ExternalLink, ShieldCheck,
  Building2, Cpu, Network, Download, Key, Flag
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const currencies = [
  {
    name: 'QFS Digital Currency',
    subtitle: 'Quantum Financial System Standard',
    desc: 'The primary quantum digital currency of the new financial system, backed by sovereign assets and integrated with all national currencies. Fully compatible with QFSpay.',
    logo: 'https://nesgswap.com/wp-content/uploads/2025/06/Big-Size-PNG.png',
    color: '#2563eb',
  },
  {
    name: 'GCRM',
    subtitle: 'Global Currency Reset → GCRM',
    desc: 'Migrated from GCR to GCRM. The official currency of the Global Currency Reset, backed by gold and natural resources. Supported by G20 nations as a new international standard. Available on QFSpay.',
    logo: 'https://gcr.social/images/logo-s2-white.png',
    logo2: '/gcrm-logo.png',
    color: '#d97706',
  },
  {
    name: 'Al Arab',
    subtitle: 'Official Arab Currency',
    desc: 'The first gold-backed Arab currency, established as a benchmark for sovereign trade between Middle East, Africa and Asia markets.',
    logo: 'https://alarab.io/images/logo.png',
    color: '#7c3aed',
  },
  {
    name: 'Sovereign Currencies',
    subtitle: 'National Digital Currencies',
    desc: 'All G20 national digital currencies including Digital Dollar, Digital Yuan, Digital Euro and others, fully interoperable through QFS and QFSpay.',
    logo: '',
    color: '#0d9488',
  },
];

const partners = [
  { name: 'United States', org: 'Department of the Treasury', desc: 'Leader in quantum encryption protocols', flag: '🇺🇸' },
  { name: 'China', org: "People's Bank of China", desc: 'Leader in Digital Yuan integration', flag: '🇨🇳' },
  { name: 'European Union', org: 'European Central Bank', desc: 'Digital Euro development', flag: '🇪🇺' },
  { name: 'UAE', org: 'Central Bank of the UAE', desc: 'Middle East implementation leader', flag: '🇦🇪' },
  { name: 'IBM', org: 'Quantum Computing', desc: 'Quantum hardware provider', flag: '' },
  { name: 'OpenAI', org: 'AI Security', desc: 'AI-powered threat detection', flag: '' },
];

export function PortalPage() {
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
            className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? 'text-amber-300 border-amber-700/50 bg-amber-500/10' : 'text-[#d97706] border-amber-200 bg-amber-50/80'}`}
          >
            <Landmark className="w-3.5 h-3.5" />
            GOVERNMENT PORTAL
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Quantum Financial System</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            The official government portal for the next-generation financial infrastructure and QFSpay.
          </motion.p>
        </div>
      </section>

      {/* Government Vision */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d97706] via-[#2563eb] to-[#7c3aed]" />
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"
                style={{ boxShadow: '0 2px 8px rgba(217,119,6,0.08)' }}
              >
                <Flag className="w-5 h-5" style={{ color: '#d97706' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                <span style={{ color: '#d97706' }}>Government Vision</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
              The Quantum Financial System (QFS) represents a revolutionary leap in financial technology,
              providing a secure, transparent, and efficient platform for global transactions. As part of
              the NESARA/GESARA economic reforms, QFS establishes a new standard for financial sovereignty
              and integrity, with QFSpay as its official payment solution.
            </motion.p>
            <motion.div variants={fadeUp} className="bg-amber-50/50 rounded-xl p-5 border border-amber-100/50">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-slate-800" style={{ color: '#d97706' }}>
                <Key className="w-4 h-4" /> Key Features:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Quantum-secured financial transactions',
                  'QFSpay - Official government payment solution',
                  'Instant settlement across borders',
                  'Complete transparency and auditability',
                  'Integration with sovereign digital currencies',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#d97706' }} />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
              <button className="quantum-btn-solid px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer">
                <ShieldCheck className="w-4 h-4" /> Learn More
              </button>
              <button className="quantum-btn px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer" style={{ color: '#7c3aed', borderColor: 'rgba(124,58,237,0.2)' }}>
                <CreditCard className="w-4 h-4" /> QFSpay
              </button>
              <button className="quantum-btn px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer">
                <Cpu className="w-4 h-4" /> Technology
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* G20 Banner */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="bg-white rounded-2xl p-8 md:p-10 text-center border border-gray-100"
            style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.06)' }}
          >
            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Official Financial Infrastructure of the G20 Nations
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500">
              Supporting the transition to a new era of financial transparency and sovereignty with QFSpay integration
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About QFS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb]"
                style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
              >
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label">ABOUT</span>
                <h2 className="text-xl font-bold text-slate-900">A New Digital Infrastructure for Global Finance</h2>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8">
              Aligned with the vision of NESARA/GESARA economic transformation, the Quantum Financial System (QFS)
              is presented as a next-generation financial infrastructure designed to support secure, transparent
              and efficient digital transactions.
            </motion.p>

            {/* QFS Core Capabilities */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 md:p-8 border border-blue-100/50" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-slate-900" style={{ color: '#2563eb' }}>QFS Core Capabilities</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Quantum-Resistant Security', desc: 'Advanced cryptographic architecture designed for the evolving threat landscape.', color: '#2563eb' },
                  { title: 'QFSPay Integration', desc: 'Digital payment solutions designed for fast and seamless transactions.', color: '#7c3aed' },
                  { title: 'Real-Time Settlement', desc: 'Enabling direct digital settlement with reduced dependence on traditional intermediaries.', color: '#0d9488' },
                  { title: 'Transparency & Privacy', desc: 'Designed to combine transaction traceability with strong protection of financial information.', color: '#d97706' },
                  { title: 'Asset-Backed Digital Economy', desc: 'Built to support the integration of digital assets and asset-backed financial instruments.', color: '#db2777' },
                  { title: 'Global Interoperability', desc: 'A vision for connecting digital payments, wallets, exchanges and sovereign financial ecosystems.', color: '#2563eb' },
                ].map((cap) => (
                  <div key={cap.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: cap.color }} />
                    <div>
                      <span className="text-sm font-semibold text-slate-800">{cap.title}</span>
                      <span className="text-sm text-slate-500">: {cap.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  QFS is designed to support the transition toward a more secure, efficient and digitally
                  connected financial ecosystem.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* QFSpay Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center"
                style={{ boxShadow: '0 2px 8px rgba(124,58,237,0.08)' }}
              >
                <CreditCard className="w-5 h-5 text-[#7c3aed]" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#7c3aed]/50 sub-label-purple">PAYMENT SOLUTION</span>
                <h2 className="text-xl font-bold text-slate-900">QFSpay</h2>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="gradient-border rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">The Official Payment Solution</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      of the Quantum Financial System
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: <Shield className="w-5 h-5" />, title: 'Quantum Security', desc: 'Military-grade quantum encryption protects every transaction from hacking and fraud.', color: '#2563eb' },
                      { icon: <Globe className="w-5 h-5" />, title: 'Global Acceptance', desc: 'Accepted by all G20 nations and participating merchants worldwide.', color: '#7c3aed' },
                      { icon: <Zap className="w-5 h-5" />, title: 'Instant Settlement', desc: 'Transactions complete in quantum time with no banking delays.', color: '#d97706' },
                      { icon: <ArrowRight className="w-5 h-5" />, title: 'Multi-Currency', desc: 'Supports all QFS-backed currencies with automatic conversion.', color: '#0d9488' },
                    ].map((feat) => (
                      <div key={feat.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center" style={{ background: `${feat.color}0d`, color: feat.color, boxShadow: `0 2px 6px ${feat.color}10` }}>
                          {feat.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{feat.title}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{feat.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="quantum-btn-solid px-6 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer">
                    <Download className="w-4 h-4" /> Download QFSpay App
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: '0 4px 24px rgba(124,58,237,0.08)' }}>
                      <img
                        src="https://nesgswap.com/wp-content/uploads/2025/06/Tarjeta-QFSpay.png"
                        alt="QFSpay Card"
                        className="rounded-xl max-w-full h-auto"
                        style={{ maxHeight: '360px' }}
                      />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-violet-100/30 to-transparent rounded-3xl -z-10 blur-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Technology Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              Technology
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-4">
              <span className="gradient-text">QFS Technology</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">
              The QFS combines cutting-edge quantum computing with advanced blockchain technology to create
              a financial system that is secure, efficient, and transparent, with QFSpay as its consumer-facing
              payment solution.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: <Lock className="w-6 h-6" />, title: 'Quantum Encryption', desc: 'Unbreakable quantum key distribution ensures complete security for all transactions', color: '#2563eb', btn: 'Technical Details' },
              { icon: <GitBranch className="w-6 h-6" />, title: 'Decentralized Network', desc: 'Distributed across government nodes worldwide with no single point of failure', color: '#7c3aed', btn: 'Network Map' },
              { icon: <Zap className="w-6 h-6" />, title: 'Instant Settlement', desc: 'Transactions settle in quantum time without traditional banking delays', color: '#d97706', btn: 'Performance Data' },
              { icon: <Shield className="w-6 h-6" />, title: 'Sovereign Security', desc: 'Government-controlled access with military-grade protection', color: '#0d9488', btn: 'Security Protocols' },
            ].map((tech, i) => (
              <motion.div
                key={tech.title}
                custom={i}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-6 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${tech.color}0d`, color: tech.color, boxShadow: `0 4px 12px ${tech.color}10` }}
                >
                  {tech.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{tech.desc}</p>
                <button
                  className="quantum-btn px-4 py-2 rounded-lg text-xs cursor-pointer"
                  style={{ color: tech.color, borderColor: `${tech.color}25` }}
                >
                  {tech.btn}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Supported Sovereign Currencies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"
                style={{ boxShadow: '0 2px 8px rgba(217,119,6,0.08)' }}
              >
                <Coins className="w-5 h-5" style={{ color: '#d97706' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#d97706]/50 sub-label-amber">
                  CURRENCIES
                </span>
                <h2 className="text-xl font-bold text-slate-900">Supported Sovereign Currencies</h2>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-500 mb-8 max-w-3xl leading-relaxed">
              QFS provides the infrastructure for the following institutional currencies backed by tangible
              assets and sovereign agreements, all compatible with QFSpay.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {currencies.map((curr, i) => (
                <motion.div
                  key={curr.name}
                  custom={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-gray-100 hover:border-blue-200/50 transition-colors"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.02)' }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${curr.color}, transparent)` }}
                  />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      {curr.logo ? (
                        <img src={curr.logo} alt={curr.name} className="h-10 rounded-lg object-contain bg-slate-50 p-1" />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${curr.color}0d`, color: curr.color }}
                        >
                          <Coins className="w-5 h-5" />
                        </div>
                      )}
                      {'logo2' in curr && curr.logo2 && (
                        <img src={curr.logo2} alt={curr.name + ' new'} className="h-10 rounded-lg object-contain bg-slate-50 p-1" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800" style={{ color: curr.color }}>{curr.name}</h3>
                      <span className="text-xs text-slate-400">{curr.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{curr.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Government Partners */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb]"
                style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
              >
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label">PARTNERS</span>
                <h2 className="text-xl font-bold text-slate-900">Government Partners</h2>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-500 mb-8 max-w-3xl leading-relaxed">
              QFS and QFSpay are developed and maintained through international cooperation between
              sovereign governments and leading technology institutions.
            </motion.p>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  custom={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-4 text-center group border border-gray-100 hover:border-blue-200/50 transition-colors"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <div className="text-3xl mb-2">{p.flag || '🏢'}</div>
                  <h3 className="text-xs font-bold text-slate-800 mb-0.5">{p.name}</h3>
                  <p className="text-[10px] text-slate-400 mb-1.5">{p.org}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="relative bg-white rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            style={{ boxShadow: '0 4px 32px rgba(37, 99, 235, 0.08)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#db2777]" />
            <motion.div variants={fadeUp} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.1)' }}>
              <Landmark className="w-7 h-7 text-[#2563eb]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="gradient-text">QFS & QFSpay</span>{' '}
              <span className="text-slate-900">are the future of sovereign finance</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
              Secure, transparent, and efficient financial infrastructure for governments
              and citizens worldwide.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <button className="quantum-btn-solid px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer">
                <ShieldCheck className="w-4 h-4" /> Government Portal Login
              </button>
              <button className="quantum-btn px-8 py-3.5 rounded-xl text-sm font-medium flex items-center gap-2 cursor-pointer" style={{ color: '#7c3aed', borderColor: 'rgba(124,58,237,0.2)' }}>
                <Download className="w-4 h-4" /> Get QFSpay App
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}