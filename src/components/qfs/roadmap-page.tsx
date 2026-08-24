'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme-store';
import { useT } from '@/store/lang-store';
import { Map, CheckCircle2, Circle, ArrowRight, Rocket, Globe, Cpu, Sparkles } from 'lucide-react';

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

export function RoadmapPage() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const t = useT();

  const phases = [
    {
      year: '2026',
      phase: t('road.p1.phase'),
      title: t('road.p1.title'),
      color: '#2563eb',
      icon: <Rocket className="w-5 h-5" />,
      status: 'active' as const,
      description: t('road.p1.desc'),
      items: [
        'QFS Core infrastructure development',
        'QFS Wallet launch and evolution',
        'QFSPay system development',
        'QFS Exchange DEX architecture design',
        'Multi-layered security implementation',
        'Initial ecosystem integration',
        'Initial security audits',
        'Technical community establishment',
      ],
    },
    {
      year: '2027-2028',
      phase: t('road.p2.phase'),
      title: t('road.p2.title'),
      color: '#7c3aed',
      icon: <Globe className="w-5 h-5" />,
      status: 'upcoming' as const,
      description: t('road.p2.desc'),
      items: [
        'Expansion to multiple blockchains',
        'Integration of new digital assets',
        'QFS Quantum Cards development',
        'APIs for enterprises and developers',
        'Institutional tools (treasury, compliance)',
        'Initial international expansion',
        'GCRM Alliance integration',
        'Collaboration with Al Arab for MENA markets',
      ],
    },
    {
      year: '2029-2030',
      phase: t('road.p3.phase'),
      title: t('road.p3.title'),
      color: '#0d9488',
      icon: <Cpu className="w-5 h-5" />,
      status: 'upcoming' as const,
      description: t('road.p3.desc'),
      items: [
        'Advanced blockchain network integration',
        'Real World Asset (RWA) tokenization',
        'Complete digital financial services',
        'Mature institutional infrastructure',
        'CBDC and government currency integration',
        'QFS ecosystem expansion',
        'Operational decentralized governance',
      ],
    },
    {
      year: '2030+',
      phase: t('road.p4.phase'),
      title: t('road.p4.title'),
      color: '#db2777',
      icon: <Sparkles className="w-5 h-5" />,
      status: 'future' as const,
      description: t('road.p4.desc'),
      items: [
        'Global digital financial infrastructure',
        'Full connectivity between networks and assets',
        'Massive adoption of QFS services',
        'Fully integrated digital economy',
        'Continuous innovation with emerging technologies',
      ],
    },
  ];

  const ecoNodes = [
    { name: t('road.node.core'), sub: t('road.node.infra'), color: '#2563eb' },
    { name: t('road.node.wallet'), sub: t('road.node.asset'), color: '#0d9488' },
    { name: t('road.node.pay'), sub: t('road.node.payments'), color: '#7c3aed' },
    { name: t('road.node.dex'), sub: t('road.node.trading'), color: '#db2777' },
    { name: t('road.node.cards'), sub: t('road.node.d2p'), color: '#d97706' },
    { name: t('road.node.ai'), sub: t('road.node.ai'), color: '#db2777' },
    { name: t('road.node.multi'), sub: t('road.node.interop'), color: '#7c3aed' },
    { name: t('road.node.services'), sub: t('road.node.economy'), color: '#2563eb' },
  ];

  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? 'text-teal-300 border-teal-700/50 bg-teal-500/10' : 'text-[#0d9488] border-teal-200 bg-teal-50/80'}`}
          >
            <Map className="w-3.5 h-3.5" />
            {t('road.badge')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">{t('road.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t('road.desc')}
          </motion.p>
        </div>
      </section>

      {/* Ecosystem Map */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#7c3aed]/50 sub-label-purple uppercase">
              {t('road.eco.subtitle')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mt-3">
              {t('road.eco.title1')} <span className="gradient-text">{t('road.eco.title2')}</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="flex flex-col items-center gap-3"
          >
            {ecoNodes.map((node, i) => (
              <motion.div key={node.name} custom={i} variants={fadeUp} className="flex flex-col items-center">
                <div
                  className="bg-white rounded-xl px-6 py-3 text-center min-w-[220px] border border-gray-100 hover:border-blue-200/50 transition-colors"
                  style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.02)' }}
                >
                  <div className="text-sm font-semibold text-slate-800">{node.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: `${node.color}80` }}>{node.sub}</div>
                </div>
                {i < 7 && (
                  <div className="flex flex-col items-center py-1">
                    <ArrowRight className="w-4 h-4 text-gray-200 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label uppercase">
              {t('road.timeline')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3">
              {t('road.phases')}
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-violet-200 to-pink-200" />

            <div className="space-y-12">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={stagger}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: phase.color,
                        background: phase.status === 'active' ? `${phase.color}10` : (isDark ? '#1e293b' : '#f8fafc'),
                        boxShadow: phase.status === 'active' ? `0 0 12px ${phase.color}20` : 'none',
                      }}
                    >
                      {phase.status === 'active' ? (
                        <CheckCircle2 className="w-4 h-4" style={{ color: phase.color }} />
                      ) : (
                        <Circle className="w-4 h-4" style={{ color: `${phase.color}40` }} />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    custom={i}
                    variants={fadeUp}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] bg-white rounded-2xl p-6 relative overflow-hidden border border-gray-100 ${
                      phase.status === 'active' ? 'quantum-glow' : ''
                    }`}
                    style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.02)' }}
                  >
                    {phase.status === 'active' && (
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5"
                        style={{ background: `linear-gradient(90deg, ${phase.color}, ${phase.color}40)` }}
                      />
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${phase.color}0d`, color: phase.color, boxShadow: `0 2px 8px ${phase.color}10` }}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <div className="text-xs font-mono" style={{ color: `${phase.color}80` }}>
                          {phase.phase} — {phase.year}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: phase.color }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
