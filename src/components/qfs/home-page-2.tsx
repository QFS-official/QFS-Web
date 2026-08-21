'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Building2, Users, Handshake, Star, PieChart } from 'lucide-react';
import { QFSCoin } from './qfs-coin';
import { useThemeStore } from '@/store/theme-store';
import { useT, useLangStore } from '@/store/lang-store';

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

export function HomePagePart2() {
  const { theme } = useThemeStore();
  const t = useT();
  const { lang } = useLangStore();
  const isDark = theme === 'dark';

  const alliances = [
    {
      name: t('all.gcrm.name'),
      desc: t('all.gcrm.desc'),
      color: '#2563eb',
      tag: t('all.gcrm.tag'),
    },
    {
      name: t('all.arab.name'),
      desc: t('all.arab.desc'),
      color: '#d97706',
      tag: t('all.arab.tag'),
    },
    {
      name: t('all.gov.name'),
      desc: t('all.gov.desc'),
      color: '#7c3aed',
      tag: t('all.gov.tag'),
    },
  ];

  const whyQFS = [
    { title: t('why.security'), desc: t('why.security.desc'), icon: <Star className="w-6 h-6" />, color: '#2563eb' },
    { title: t('why.speed'), desc: t('why.speed.desc'), icon: <Globe className="w-6 h-6" />, color: '#0d9488' },
    { title: t('why.transparency'), desc: t('why.transparency.desc'), icon: <Building2 className="w-6 h-6" />, color: '#7c3aed' },
    { title: t('why.access'), desc: t('why.access.desc'), icon: <Users className="w-6 h-6" />, color: '#db2777' },
    { title: t('why.interop'), desc: t('why.interop.desc'), icon: <Handshake className="w-6 h-6" />, color: '#d97706' },
    { title: t('why.innovation'), desc: t('why.innovation.desc'), icon: <Star className="w-6 h-6" />, color: '#2563eb' },
  ];

  return (
    <>
      {/* ===== ALLIANCES ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#d97706]/50 sub-label-amber uppercase">
              {t('all.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">{t('all.title')}</span> {t('all.title2')}
            </motion.h2>
            <motion.p variants={fadeUp} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} max-w-2xl mx-auto`}>
              {t('all.desc')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {alliances.map((a, i) => (
              <motion.div
                key={a.name}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`${isDark ? 'bg-slate-800/90 border-slate-700/60 hover:border-blue-500/30' : 'bg-white border-gray-100 hover:border-blue-200/50'} rounded-3xl p-8 relative overflow-hidden group border transition-all duration-300`}
                style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.2), 0 4px 20px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.02)' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${a.color}, ${a.color}40)` }}
                />
                {/* Quantum shimmer on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${a.color}08, transparent 60%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${a.color}0d`, boxShadow: `0 4px 12px ${a.color}10` }}
                  >
                    <Handshake className="w-6 h-6" style={{ color: a.color }} />
                  </div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      color: a.color,
                      background: `${a.color}0a`,
                      border: `1px solid ${a.color}15`,
                    }}
                  >
                    {a.tag}
                  </span>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-3`}>{a.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed`}>{a.desc}</p>
                </div>
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

      {/* ===== QFS TOKEN ALLOCATION ===== */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              {lang === 'es' ? 'Distribucion de Tokens' : 'Token Distribution'}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">QFS Token</span>{' '}
              <span className={isDark ? 'text-white' : 'text-slate-900'}>{lang === 'es' ? 'Asignacion' : 'Allocation'}</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mt-2" style={{ color: '#7c3aed', background: isDark ? 'rgba(124,58,237,0.1)' : 'rgba(124,58,237,0.06)', border: `1px solid ${isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.12)'}` }}>
              <PieChart className="w-4 h-4" />
              <span className="font-bold">177.64B QFS</span>
              <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>— {lang === 'es' ? 'Suministro de Referencia*' : 'Reference Supply*'}</span>
            </motion.div>
          </motion.div>

          <TokenAllocationBars isDark={isDark} lang={lang} />
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="section-divider max-w-5xl mx-auto origin-left"
      />

      {/* ===== WHY QFS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              {t('why.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              {t('why.title').replace('?', '')} <span className="gradient-text">{t('why.title').includes('QFS') ? 'QFS' : 'QFS'}</span>?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whyQFS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#2563eb] group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-violet-50'}`}
                  style={{ boxShadow: `0 4px 12px ${item.color}10` }}
                >
                  {item.icon}
                </div>
                <h3 className={`font-semibold mb-2 text-sm uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
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

      {/* ===== CTA with QFS Coin ===== */}
      <section className="py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className={`relative ${isDark ? 'bg-slate-800/90' : 'bg-white'} rounded-3xl p-8 md:p-16 overflow-hidden`}
            style={{
              boxShadow: isDark
                ? '0 4px 32px rgba(37, 99, 235, 0.15), 0 2px 8px rgba(124, 58, 237, 0.12)'
                : '0 4px 32px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(124, 58, 237, 0.06)',
            }}
          >
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#db2777]" />
            {/* Subtle glow */}
            <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-2xl ${isDark ? 'bg-gradient-to-b from-blue-500/10 to-transparent' : 'bg-gradient-to-b from-blue-100/40 to-transparent'}`} />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Text side */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className={`w-16 h-16 rounded-2xl ${isDark ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-violet-50'} flex items-center justify-center mb-6`}
                  style={{ boxShadow: isDark ? '0 4px 16px rgba(37,99,235,0.2)' : '0 4px 16px rgba(37,99,235,0.1)' }}
                >
                  <AtomIcon className="w-8 h-8 text-[#2563eb]" />
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">{t('cta.title1')}</span>
                  <br />
                  <span className={isDark ? 'text-white' : 'text-slate-900'}>{t('cta.title2')}</span>
                </motion.h2>
                <motion.p variants={fadeUp} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} max-w-xl mb-10 leading-relaxed`}>
                  {t('cta.desc')}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(37,99,235,0.3), 0 4px 8px rgba(124,58,237,0.2)' }}
                    whileTap={{ y: 0 }}
                    className="quantum-btn-solid px-8 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer"
                  >
                    {t('hero.explore_btn')}
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium cursor-pointer"
                    style={{ borderColor: 'rgba(124,58,237,0.2)', color: '#7c3aed' }}
                  >
                    {lang === 'es' ? 'Unirse a la Comunidad' : 'Join Community'}
                  </motion.button>
                </motion.div>
              </div>

              {/* Coin side */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } },
                }}
                className="flex justify-center"
              >
                <QFSCoin size={240} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

function AtomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

/* ─── QFS Token Allocation Bars ─── */
const allocationData = [
  {
    emoji: '🌍',
    labelEs: 'Fondo Humanitario Global',
    labelEn: 'Global Humanitarian Fund',
    pct: 15.2,
    amount: '27B QFS',
    color: '#2563eb',
    colorEnd: '#60a5fa',
  },
  {
    emoji: '💱',
    labelEs: 'Reserva de Exchange & Liquidez',
    labelEn: 'Exchange & Liquidity Reserve',
    pct: 33.8,
    amount: '60B QFS',
    color: '#7c3aed',
    colorEnd: '#a78bfa',
  },
  {
    emoji: '⚛️',
    labelEs: 'Tecnologia & Ecosistema QFS',
    labelEn: 'QFS Technology & Ecosystem',
    pct: 16.9,
    amount: '30B QFS',
    color: '#0d9488',
    colorEnd: '#2dd4bf',
  },
  {
    emoji: '🌐',
    labelEs: 'Adopcion & Expansion Global',
    labelEn: 'Global Adoption & Expansion',
    pct: 11.3,
    amount: '20B QFS',
    color: '#d97706',
    colorEnd: '#fbbf24',
  },
  {
    emoji: '🛡️',
    labelEs: 'Reserva Institucional & Estabilidad',
    labelEn: 'Institutional & Stability Reserve',
    pct: 11.3,
    amount: '20B QFS',
    color: '#db2777',
    colorEnd: '#f472b6',
  },
  {
    emoji: '🔐',
    labelEs: 'Gobernanza Futura / Reserva No Asignada',
    labelEn: 'Future Governance / Unallocated Reserve',
    pct: 11.6,
    amount: '≈20.64B QFS',
    color: '#6366f1',
    colorEnd: '#818cf8',
  },
];

function TokenAllocationBars({ isDark, lang }: { isDark: boolean; lang: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="space-y-5">
      {allocationData.map((item, i) => {
        const barBg = 'linear-gradient(90deg, ' + item.color + ', ' + item.colorEnd + ')';
        const glowShadow = '0 0 8px ' + item.color + '80, 0 0 16px ' + item.color + '40';
        return (
          <motion.div
            key={item.labelEn}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
            className={"group rounded-2xl p-5 transition-all duration-300 " + (isDark ? 'bg-slate-800/80 border border-slate-700/50 hover:border-slate-600/60' : 'bg-white border border-gray-100 hover:border-blue-200/40')}
            style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.01)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.emoji}</span>
                <span className={"text-sm font-semibold " + (isDark ? 'text-white' : 'text-slate-800')}>
                  {lang === 'es' ? item.labelEs : item.labelEn}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className={"text-xs font-mono " + (isDark ? 'text-slate-500' : 'text-slate-400')}>{item.amount}</span>
                <span
                  className="text-sm font-bold tabular-nums min-w-[52px] text-right"
                  style={{ color: item.color }}
                >
                  {item.pct}%
                </span>
              </div>
            </div>

            <div className={"relative h-3 rounded-full overflow-hidden " + (isDark ? 'bg-slate-700/80' : 'bg-slate-100')}>
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: barBg }}
                initial={{ width: 0 }}
                animate={isInView ? { width: item.pct + '%' } : { width: 0 }}
                transition={{
                  delay: i * 0.12 + 0.3,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  }}
                  initial={{ x: '-100%' }}
                  animate={isInView ? { x: '200%' } : {}}
                  transition={{
                    delay: i * 0.12 + 0.5,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: item.color,
                  boxShadow: glowShadow,
                }}
                initial={{ left: '0%', opacity: 0 }}
                animate={isInView ? { left: item.pct + '%', opacity: [0, 1, 0.6, 1] } : {}}
                transition={{
                  left: { delay: i * 0.12 + 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { delay: i * 0.12 + 1.2, duration: 0.6 },
                }}
              />
            </div>
          </motion.div>
        );
      })}

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className={"text-[11px] text-center mt-6 " + (isDark ? 'text-slate-600' : 'text-slate-400')}
      >
        * {lang === 'es' ? 'Suministro de referencia sujeto a ajustes segun el desarrollo del ecosistema.' : 'Reference supply subject to adjustments based on ecosystem development.'}
      </motion.p>
    </div>
  );
}
