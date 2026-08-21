'use client';

import { motion } from 'framer-motion';
import { Globe, Building2, Users, Handshake, Star } from 'lucide-react';
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#d97706]/50 uppercase">
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
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 uppercase">
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
