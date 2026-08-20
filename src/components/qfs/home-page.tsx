'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Atom, Shield, Zap, Eye, Network, Cpu, CreditCard, Wallet,
  ArrowRightLeft, Landmark, Globe, Bot, ChevronRight, Lock,
} from 'lucide-react';
import { ecosystemCards, pillars, securityFeatures, walletFeatures, faqItems } from './home-data';
import { QFSCoin } from './qfs-coin';

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

const quantumFade = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, scale: 1.02, filter: 'blur(8px)' },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HomePage() {
  return (
    <div className="relative z-10">
      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center pt-16 px-4">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#2563eb] border border-blue-200 bg-blue-50/80"
                style={{ boxShadow: '0 0 20px rgba(37,99,235,0.08)' }}
              >
                <Atom className="w-3.5 h-3.5 animate-pulse" />
                QUANTUM FINANCIAL SYSTEM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="gradient-text-hero">El Futuro de las</span>
              <br />
              <span className="text-slate-900">Finanzas Digitales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              QFS Official desarrolla una nueva infraestructura financiera digital que integra{' '}
              <span className="text-[#2563eb] font-medium">blockchain</span>,{' '}
              <span className="text-[#7c3aed] font-medium">inteligencia artificial</span>,{' '}
              <span className="text-[#0d9488] font-medium">seguridad criptografica avanzada</span>,{' '}
              pagos digitales y servicios financieros descentralizados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(37,99,235,0.3), 0 4px 8px rgba(124,58,237,0.2)' }}
                whileTap={{ y: 0 }}
                className="quantum-btn-solid px-8 py-3.5 rounded-2xl text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                Explorar QFS <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                QFS Wallet
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium flex items-center gap-2 cursor-pointer"
                style={{ borderColor: 'rgba(124,58,237,0.2)', color: '#7c3aed' }}
              >
                QFSPay
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs text-slate-400 font-mono"
            >
              {['Technology', 'Digital Finance', 'Security', 'Decentralization', 'Global Connectivity'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-white/60"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: QFS Coin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <QFSCoin size={300} />
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 uppercase">
              El Ecosistema
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">Ecosistema QFS</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">
              Arquitectura financiera modular que integra diferentes servicios dentro de un mismo ecosistema digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {ecosystemCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                >
                  {card.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-2 flex items-center gap-2">
                  {card.title}
                  <span className="text-sm opacity-60">{card.emoji}</span>
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#7c3aed]/50 uppercase">
              Arquitectura
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Cinco <span className="gradient-text">Pilares</span> Fundamentales
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">
              QFS propone una nueva arquitectura financiera basada en principios que transformaran la economia digital.
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
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-violet-50 text-[#2563eb] group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                >
                  {p.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-2 text-sm uppercase tracking-wider">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

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
              <div
                className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb]"
                style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
              >
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono tracking-widest text-[#2563eb]/50 uppercase">Seguridad</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              QFS <span className="gradient-text">Security</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mb-10 leading-relaxed">
              La seguridad constituye uno de los pilares fundamentales del ecosistema QFS. Disenado para evolucionar
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
                whileHover={{ x: 4, borderColor: 'rgba(37,99,235,0.3)', transition: { duration: 0.2 } }}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-gray-100 transition-colors"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
              >
                <Lock className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span className="text-sm text-slate-600">{feat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#0d9488]/50 uppercase">
              Productos
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">Productos</span> QFS
            </motion.h2>
          </motion.div>

          {/* Wallet - Featured Product */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center"
                      style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                    >
                      <Wallet className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">QFS Wallet</h3>
                      <p className="text-xs text-[#2563eb]/50 font-mono">Your Digital Financial Hub</p>
                    </div>
                  </div>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    El punto de acceso del usuario al ecosistema QFS. Gestione diferentes tipos de activos digitales
                    desde una unica interfaz con seguridad avanzada.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {walletFeatures.map((f, i) => (
                      <motion.div
                        key={f}
                        custom={i}
                        variants={fadeUp}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="gradient-border rounded-2xl p-6">
                  <div className="bg-white rounded-xl p-6 space-y-4 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Total Balance</span>
                      <Eye className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="text-3xl font-bold gradient-text">$47,892.35</div>
                    <div className="flex items-center gap-2 text-xs text-[#0d9488]">
                      <ArrowRightLeft className="w-3 h-3" /> +12.4% este mes
                    </div>
                    <div className="space-y-3 pt-2">
                      {[
                        { name: 'QFS Token', amount: '12,450 QFS', value: '$28,350', change: '+5.2%' },
                        { name: 'USDT', amount: '15,000 USDT', value: '$15,000', change: '+0.1%' },
                        { name: 'BTC', amount: '0.042 BTC', value: '$4,542', change: '+8.7%' },
                      ].map((asset) => (
                        <div key={asset.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                          <div>
                            <div className="text-sm font-medium text-slate-800">{asset.name}</div>
                            <div className="text-xs text-slate-400">{asset.amount}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-slate-800">{asset.value}</div>
                            <div className="text-xs text-[#0d9488]">{asset.change}</div>
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
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
                hidden: {},
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-3xl p-8 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-50 to-pink-50 flex items-center justify-center"
                    style={{ boxShadow: '0 4px 12px rgba(124,58,237,0.08)' }}
                  >
                    <CreditCard className="w-6 h-6 text-[#7c3aed]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">QFSPay</h3>
                    <p className="text-xs text-[#7c3aed]/50 font-mono">Digital Payments</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Pagos digitales para una economia conectada. Facilita la utilizacion de activos digitales
                  para operaciones cotidianas y comerciales.
                </p>
                <div className="space-y-2">
                  {['Pagos digitales', 'Transferencias P2P', 'Pagos comerciales', 'Conversion de activos', 'APIs para desarrolladores', 'Soluciones empresariales'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* DEX */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
                hidden: {},
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-3xl p-8 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center"
                    style={{ boxShadow: '0 4px 12px rgba(13,148,136,0.08)' }}
                  >
                    <ArrowRightLeft className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">QFS Exchange DEX</h3>
                    <p className="text-xs text-[#0d9488]/50 font-mono">Decentralized Trading</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Plataforma descentralizada para el intercambio de activos digitales con acceso
                  a mercados y liquidez del ecosistema.
                </p>
                <div className="space-y-2">
                  {['Swap de activos', 'Pools de liquidez', 'Interoperabilidad multicadena', 'Herramientas de mercado', 'Smart contracts', 'Gobernanza descentralizada'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0d9488]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Quantum Cards & AI */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30, rotateY: -3 },
                  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-pink-50 flex items-center justify-center"
                    style={{ boxShadow: '0 4px 12px rgba(217,119,6,0.08)' }}
                  >
                    <CreditCard className="w-6 h-6 text-[#d97706]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">QFS Quantum Cards</h3>
                    <p className="text-xs text-[#d97706]/50 font-mono">Digital-to-Physical</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Conecta el ecosistema digital QFS con soluciones de pago fisicas y digitales del mundo real.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 py-3 flex-wrap">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#2563eb]">Wallet</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="px-2.5 py-1 rounded-lg bg-violet-50 border border-violet-100 text-[#7c3aed]">QFSPay</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-100 text-[#d97706]">Cards</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-100 text-[#0d9488]">Payments</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 30, rotateY: 3 },
                  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-violet-50 flex items-center justify-center"
                    style={{ boxShadow: '0 4px 12px rgba(219,39,119,0.08)' }}
                  >
                    <Bot className="w-6 h-6 text-[#db2777]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">QFS + IA</h3>
                    <p className="text-xs text-[#db2777]/50 font-mono">Intelligent Finance</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'AI Security', desc: 'Deteccion de transacciones anomalas' },
                    { title: 'AI Risk Monitoring', desc: 'Analisis de riesgos y patrones' },
                    { title: 'AI Financial Assistance', desc: 'Herramientas inteligentes para usuarios' },
                    { title: 'AI Compliance', desc: 'Automatizacion de cumplimiento' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 py-2">
                      <div
                        className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center shrink-0 mt-0.5"
                        style={{ boxShadow: '0 2px 6px rgba(219,39,119,0.06)' }}
                      >
                        <Cpu className="w-4 h-4 text-[#db2777]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

      {/* ===== FAQ ===== */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 uppercase">
              Preguntas Frecuentes
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              <span className="gradient-text">FAQ</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <AccordionItem value={`faq-${i}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 text-left text-sm font-medium text-slate-800 hover:no-underline hover:text-[#2563eb] transition-colors [&[data-state=open]]:text-[#2563eb]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
