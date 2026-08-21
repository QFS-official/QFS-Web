'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Atom, Shield, Zap, Eye, Network, Cpu, CreditCard, Wallet,
  ArrowRightLeft, Landmark, Globe, Bot, ChevronRight, Lock,
} from 'lucide-react';
import { ecosystemCards, pillars, securityFeatures, walletFeatures, faqItems } from './home-data';
import { QFSCoin } from './qfs-coin';
import { useThemeStore } from '@/store/theme-store';
import { useT, useTD } from '@/store/lang-store';

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
  const { theme } = useThemeStore();
  const t = useT();
  const td = useTD();

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
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#2563eb] border ${theme === 'dark' ? 'border-blue-800/50 bg-blue-500/10' : 'border-blue-200 bg-blue-50/80'}`}
                style={{ boxShadow: '0 0 20px rgba(37,99,235,0.08)' }}
              >
                <Atom className="w-3.5 h-3.5 animate-pulse" />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="gradient-text-hero">{t('hero.title1')}</span>
              <br />
              <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('hero.title2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {t('hero.desc')}
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
                {t('hero.explore_btn')} <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                {t('hero.wallet')}
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium flex items-center gap-2 cursor-pointer"
                style={{ borderColor: 'rgba(124,58,237,0.2)', color: '#7c3aed' }}
              >
                {t('hero.qfspay')}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-mono ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}
            >
              {[
                t('hero.tags.technology'),
                t('hero.tags.finance'),
                t('hero.tags.security'),
                t('hero.tags.decentralization'),
                t('hero.tags.connectivity'),
              ].map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className={`px-3 py-1.5 rounded-full border ${theme === 'dark' ? 'border-slate-700 bg-slate-800/60 text-slate-400' : 'border-gray-200 bg-white/60 text-slate-400'}`}
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              {t('eco.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">{t('eco.title')}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('eco.desc')}
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
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 flex items-center gap-2`}>
                  {card.title}
                  <span className="text-sm opacity-60">{card.emoji}</span>
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{card.desc}</p>
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#7c3aed]/50 sub-label-purple uppercase">
              {t('pil.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              {t('pil.title1')} <span className="gradient-text">{t('pil.title2')}</span> {t('pil.title3')}
            </motion.h2>
            <motion.p variants={fadeUp} className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('pil.desc')}
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
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#2563eb] group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-violet-50'}`}
                  style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                >
                  {p.icon}
                </div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 text-sm uppercase tracking-wider`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
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
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-[#2563eb] ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'}`}
                style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
              >
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">{t('sec.subtitle')}</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t('sec.title')} <span className="gradient-text">Security</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={`max-w-2xl mb-10 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('sec.desc')}
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
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border transition-colors ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-gray-100'}`}
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
              >
                <Lock className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#0d9488]/50 sub-label-teal uppercase">
              {t('prod.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">{t('prod.title')}</span>
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
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-teal-50'}`}
                      style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                    >
                      <Wallet className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('prod.wallet.title')}</h3>
                      <p className="text-xs text-[#2563eb]/50 sub-label font-mono">{t('prod.wallet.subtitle')}</p>
                    </div>
                  </div>
                  <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {t('prod.wallet.desc')}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {walletFeatures.map((f, i) => (
                      <motion.div
                        key={f}
                        custom={i}
                        variants={fadeUp}
                        className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="gradient-border rounded-2xl p-6">
                  <div className={`rounded-xl p-6 space-y-4 border ${theme === 'dark' ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-100'}`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{t('prod.wallet.balance')}</span>
                      <Eye className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} />
                    </div>
                    <div className="text-3xl font-bold gradient-text">$47,892.35</div>
                    <div className="flex items-center gap-2 text-xs text-[#0d9488]">
                      <ArrowRightLeft className="w-3 h-3" /> +12.4% {t('prod.wallet.month')}
                    </div>
                    <div className="space-y-3 pt-2">
                      {[
                        { name: 'QFS Token', amount: '12,450 QFS', value: '$28,350', change: '+5.2%' },
                        { name: 'USDT', amount: '15,000 USDT', value: '$15,000', change: '+0.1%' },
                        { name: 'BTC', amount: '0.042 BTC', value: '$4,542', change: '+8.7%' },
                      ].map((asset) => (
                        <div key={asset.name} className={`flex items-center justify-between py-2 border-b last:border-0 ${theme === 'dark' ? 'border-slate-700' : 'border-gray-50'}`}>
                          <div>
                            <div className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{asset.name}</div>
                            <div className="text-xs text-slate-400">{asset.amount}</div>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{asset.value}</div>
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-violet-500/10' : 'bg-gradient-to-br from-violet-50 to-pink-50'}`}
                    style={{ boxShadow: '0 4px 12px rgba(124,58,237,0.08)' }}
                  >
                    <CreditCard className="w-6 h-6 text-[#7c3aed]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('prod.qfspay.title')}</h3>
                    <p className="text-xs text-[#7c3aed]/50 sub-label-purple font-mono">{t('prod.qfspay.subtitle')}</p>
                  </div>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t('prod.qfspay.desc')}
                </p>
                <div className="space-y-2">
                  {td('qfspay.features').map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-teal-500/10' : 'bg-gradient-to-br from-teal-50 to-blue-50'}`}
                    style={{ boxShadow: '0 4px 12px rgba(13,148,136,0.08)' }}
                  >
                    <ArrowRightLeft className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('prod.dex.title')}</h3>
                    <p className="text-xs text-[#0d9488]/50 sub-label-teal font-mono">{t('prod.dex.subtitle')}</p>
                  </div>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t('prod.dex.desc')}
                </p>
                <div className="space-y-2">
                  {td('dex.features').map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-amber-500/10' : 'bg-gradient-to-br from-amber-50 to-pink-50'}`}
                    style={{ boxShadow: '0 4px 12px rgba(217,119,6,0.08)' }}
                  >
                    <CreditCard className="w-6 h-6 text-[#d97706]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('prod.cards.title')}</h3>
                    <p className="text-xs text-[#d97706]/50 sub-label-amber font-mono">{t('prod.cards.subtitle')}</p>
                  </div>
                </div>
                <p className={`text-sm mb-4 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t('prod.cards.desc')}
                </p>
                <div className={`flex items-center gap-2 text-xs font-mono py-3 flex-wrap ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  <span className={`px-2.5 py-1 rounded-lg border text-[#2563eb] ${theme === 'dark' ? 'bg-blue-500/10 border-blue-800/50' : 'bg-blue-50 border-blue-100'}`}>Wallet</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className={`px-2.5 py-1 rounded-lg border text-[#7c3aed] ${theme === 'dark' ? 'bg-violet-500/10 border-violet-800/50' : 'bg-violet-50 border-violet-100'}`}>QFSPay</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className={`px-2.5 py-1 rounded-lg border text-[#d97706] ${theme === 'dark' ? 'bg-amber-500/10 border-amber-800/50' : 'bg-amber-50 border-amber-100'}`}>Cards</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className={`px-2.5 py-1 rounded-lg border text-[#0d9488] ${theme === 'dark' ? 'bg-teal-500/10 border-teal-800/50' : 'bg-teal-50 border-teal-100'}`}>Payments</span>
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-pink-500/10' : 'bg-gradient-to-br from-pink-50 to-violet-50'}`}
                    style={{ boxShadow: '0 4px 12px rgba(219,39,119,0.08)' }}
                  >
                    <Bot className="w-6 h-6 text-[#db2777]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('prod.ai.title')}</h3>
                    <p className="text-xs text-[#db2777]/50 sub-label-pink font-mono">{t('prod.ai.subtitle')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {(() => {
                    const aiItems = td('ai.items');
                    const pairs: { title: string; desc: string }[] = [];
                    for (let idx = 0; idx < aiItems.length; idx += 2) {
                      pairs.push({ title: aiItems[idx], desc: aiItems[idx + 1] || '' });
                    }
                    return pairs.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 py-2">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${theme === 'dark' ? 'bg-pink-500/10' : 'bg-pink-50'}`}
                          style={{ boxShadow: '0 2px 6px rgba(219,39,119,0.06)' }}
                        >
                          <Cpu className="w-4 h-4 text-[#db2777]" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</div>
                          <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</div>
                        </div>
                      </div>
                    ));
                  })()}
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              {t('faq.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              <span className="gradient-text">{t('faq.title')}</span>
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
                  className={`rounded-xl overflow-hidden border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-gray-100'}`}
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <AccordionItem value={`faq-${i}`} className="border-none">
                    <AccordionTrigger className={`px-6 py-4 text-left text-sm font-medium hover:no-underline hover:text-[#2563eb] transition-colors [&[data-state=open]]:text-[#2563eb] ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className={`px-6 pb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
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
