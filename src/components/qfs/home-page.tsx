'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Atom, Shield, Zap, Eye, Network, Cpu, CreditCard, Wallet,
  ArrowRightLeft, Landmark, Globe, Bot, Link2, Boxes, Building2, Users,
  Handshake, ChevronRight, Lock, Gauge, BarChart3, Layers, Lightbulb,
  Star
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

export function HomePage() {
  return (
    <div className="relative z-10">
      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#00f0ff] border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.05)]">
              <Atom className="w-3.5 h-3.5 animate-pulse" />
              QUANTUM FINANCIAL SYSTEM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">El Futuro de las</span>
            <br />
            <span className="text-white">Finanzas Digitales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            QFS Official desarrolla una nueva infraestructura financiera digital que integra{' '}
            <span className="text-[#00f0ff]">blockchain</span>,{' '}
            <span className="text-[#8b5cf6]">inteligencia artificial</span>,{' '}
            <span className="text-[#14b8a6]">seguridad criptográfica avanzada</span>,{' '}
            pagos digitales y servicios financieros descentralizados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button className="quantum-btn-solid px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer">
              Explorar QFS <ChevronRight className="w-4 h-4" />
            </button>
            <button className="quantum-btn px-8 py-3.5 rounded-xl text-sm font-medium text-[#00f0ff] flex items-center gap-2 cursor-pointer">
              QFS Wallet
            </button>
            <button className="quantum-btn px-8 py-3.5 rounded-xl text-sm font-medium text-[#8b5cf6] flex items-center gap-2 cursor-pointer">
              QFSPay
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 text-xs text-slate-500 font-mono"
          >
            {['Technology', 'Digital Finance', 'Security', 'Decentralization', 'Global Connectivity'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== ECOSYSTEM ===== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#00f0ff]/60 uppercase">
              El Ecosistema
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">Ecosistema QFS</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto">
              Arquitectura financiera modular que integra diferentes servicios dentro de un mismo ecosistema digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {ecosystemCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  {card.title}
                  <span className="text-sm opacity-60">{card.emoji}</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== FIVE PILLARS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#8b5cf6]/60 uppercase">
              Arquitectura
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Cinco <span className="gradient-text">Pilares</span> Fundamentales
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto">
              QFS propone una nueva arquitectura financiera basada en principios que transformarán la economía digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[rgba(0,240,255,0.15)] to-[rgba(139,92,246,0.15)] text-[#00f0ff] group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== SECURITY ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00f0ff]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono tracking-widest text-[#00f0ff]/60 uppercase">Seguridad</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              QFS <span className="gradient-text">Security</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
              La seguridad constituye uno de los pilares fundamentales del ecosistema QFS. Diseñado para evolucionar
              conjuntamente con las nuevas amenazas digitales mediante una arquitectura de seguridad multicapa.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {securityFeatures.map((feat, i) => (
              <motion.div
                key={feat}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(0,240,255,0.03)] border border-[rgba(0,240,255,0.06)]"
              >
                <Lock className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span className="text-sm text-slate-300">{feat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== PRODUCTS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#14b8a6]/60 uppercase">
              Productos
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">Productos</span> QFS
            </motion.h2>
          </motion.div>

          {/* Wallet */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#14b8a6]/20 flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-[#00f0ff]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">QFS Wallet</h3>
                      <p className="text-xs text-[#00f0ff]/60 font-mono">Your Digital Financial Hub</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    El punto de acceso del usuario al ecosistema QFS. Gestione diferentes tipos de activos digitales
                    desde una única interfaz con seguridad avanzada.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {walletFeatures.map((f, i) => (
                      <motion.div
                        key={f}
                        custom={i}
                        variants={fadeUp}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="gradient-border rounded-2xl p-6">
                  <div className="glass-card rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Total Balance</span>
                      <Eye className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="text-3xl font-bold gradient-text">$47,892.35</div>
                    <div className="flex items-center gap-2 text-xs text-[#14b8a6]">
                      <ArrowRightLeft className="w-3 h-3" /> +12.4% este mes
                    </div>
                    <div className="space-y-3 pt-2">
                      {[
                        { name: 'QFS Token', amount: '12,450 QFS', value: '$28,350', change: '+5.2%' },
                        { name: 'USDT', amount: '15,000 USDT', value: '$15,000', change: '+0.1%' },
                        { name: 'BTC', amount: '0.042 BTC', value: '$4,542', change: '+8.7%' },
                      ].map((asset) => (
                        <div key={asset.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div>
                            <div className="text-sm font-medium text-white">{asset.name}</div>
                            <div className="text-xs text-slate-500">{asset.amount}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-white">{asset.value}</div>
                            <div className="text-xs text-[#14b8a6]">{asset.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* QFSPay & DEX side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* QFSPay */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="glass-card-hover rounded-3xl p-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#ec4899]/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">QFSPay</h3>
                  <p className="text-xs text-[#8b5cf6]/60 font-mono">Digital Payments</p>
                </div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6 leading-relaxed">
                Pagos digitales para una economía conectada. Facilita la utilización de activos digitales
                para operaciones cotidianas y comerciales.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-2">
                {['Pagos digitales', 'Transferencias P2P', 'Pagos comerciales', 'Conversión de activos', 'APIs para desarrolladores', 'Soluciones empresariales'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* DEX */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="glass-card-hover rounded-3xl p-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14b8a6]/20 to-[#00f0ff]/20 flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">QFS Exchange DEX</h3>
                  <p className="text-xs text-[#14b8a6]/60 font-mono">Decentralized Trading</p>
                </div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6 leading-relaxed">
                Plataforma descentralizada para el intercambio de activos digitales con acceso
                a mercados y liquidez del ecosistema.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-2">
                {['Swap de activos', 'Pools de liquidez', 'Interoperabilidad multicadena', 'Herramientas de mercado', 'Smart contracts', 'Gobernanza descentralizada'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Quantum Cards & AI */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quantum Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="glass-card-hover rounded-3xl p-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#ec4899]/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">QFS Quantum Cards</h3>
                  <p className="text-xs text-[#f59e0b]/60 font-mono">Digital-to-Physical</p>
                </div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-4 leading-relaxed">
                Conecta el ecosistema digital QFS con soluciones de pago físicas y digitales del mundo real.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs font-mono text-slate-500 py-3">
                <span className="px-2 py-1 rounded bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff]">Wallet</span>
                <ChevronRight className="w-3 h-3" />
                <span className="px-2 py-1 rounded bg-[rgba(139,92,246,0.05)] border border-[rgba(139,92,246,0.1)] text-[#8b5cf6]">QFSPay</span>
                <ChevronRight className="w-3 h-3" />
                <span className="px-2 py-1 rounded bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.1)] text-[#f59e0b]">Cards</span>
                <ChevronRight className="w-3 h-3" />
                <span className="px-2 py-1 rounded bg-[rgba(20,184,166,0.05)] border border-[rgba(20,184,166,0.1)] text-[#14b8a6]">Payments</span>
              </motion.div>
            </motion.div>

            {/* AI */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="glass-card-hover rounded-3xl p-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#ec4899]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">QFS + IA</h3>
                  <p className="text-xs text-[#ec4899]/60 font-mono">Intelligent Finance</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                {[
                  { title: 'AI Security', desc: 'Detección de transacciones anómalas' },
                  { title: 'AI Risk Monitoring', desc: 'Análisis de riesgos y patrones' },
                  { title: 'AI Financial Assistance', desc: 'Herramientas inteligentes para usuarios' },
                  { title: 'AI Compliance', desc: 'Automatización de cumplimiento' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 py-2">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(236,72,153,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4 text-[#ec4899]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />