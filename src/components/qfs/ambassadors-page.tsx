'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useThemeStore } from '@/store/theme-store';
import { useT, useTD } from '@/store/lang-store';
import { ExternalLink, Calendar, Clock, MapPin, Users, Sparkles, Star, Shield } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export function AmbassadorsPage() {
  const { theme } = useThemeStore();
  const t = useT();
  const td = useTD();

  const goldGradient = 'linear-gradient(135deg, #f59e0b, #d97706, #b45309, #f59e0b)';
  const goldText = 'linear-gradient(90deg, #fcd34d, #f59e0b, #d97706, #fbbf24)';
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* === HERO: BIG TITLE === */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: goldGradient }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
            </motion.div>
            <div className="h-px flex-1 max-w-[120px]" style={{ background: goldGradient }} />
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
            style={{
              background: goldText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(245,158,11,0.3))',
            }}
          >
            {t('amb.title').split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className={`text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {t('amb.subtitle')}
          </motion.p>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-8" style={{ background: goldGradient }} />
            <Star className="w-3 h-3 text-amber-500" />
            <div className="h-px w-8" style={{ background: goldGradient }} />
          </div>
        </motion.div>

        {/* === INVITATION CARD === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow: isDark
                ? '0 0 60px rgba(245,158,11,0.12), 0 0 120px rgba(245,158,11,0.06), 0 25px 60px -12px rgba(0,0,0,0.5)'
                : '0 0 60px rgba(245,158,11,0.08), 0 25px 60px -12px rgba(0,0,0,0.1)',
            }}
          >
            {/* Gold border frame */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none z-20"
              style={{
                border: '2px solid transparent',
                borderImage: goldGradient + ' 1',
                borderRadius: '1.5rem',
              }}
            />
            {/* Fallback border with box-shadow approach */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none z-20"
              style={{
                boxShadow: 'inset 0 0 0 2px rgba(245,158,11,0.4), inset 0 0 20px rgba(245,158,11,0.05)',
              }}
            />

            <div
              className={`relative p-1 sm:p-2 ${isDark ? 'bg-slate-900/80' : 'bg-white/90'}`}
              style={{
                background: isDark
                  ? 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
              }}
            >
              {/* Inner content with padding for border effect */}
              <div
                className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
              >
                {/* Invitation Image */}
                <div className="relative w-full">
                  <Image
                    src="/qfs-global-invitation.png"
                    alt="QFS Global Invitation"
                    width={1200}
                    height={1800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Event Info Bar */}
                <div
                  className={`px-6 py-5 border-t ${isDark ? 'border-amber-900/30 bg-slate-800/50' : 'border-amber-200 bg-amber-50/50'}`}
                >
                  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm">
                    <div className={`flex items-center gap-2 ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{t('amb.date')}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{t('amb.time')}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">{t('amb.venue')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === AMBASSADOR HIGHLIGHT SECTION === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border mb-4 ${isDark ? 'text-amber-400 border-amber-800/50 bg-amber-500/10' : 'text-amber-700 border-amber-200 bg-amber-50'}`}>
              <Shield className="w-3.5 h-3.5" />
              {t('amb.badge')}
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
              style={{
                background: goldText,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('amb.sectionTitle')}
            </h2>
            <p className={`text-base max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('amb.sectionDesc')}
            </p>
          </motion.div>

          {/* Ambassador Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {td('amb.ambassadors').map((amb: string, i: number) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`rounded-2xl p-4 text-center border transition-all ${isDark
                    ? 'bg-slate-800/60 border-amber-900/30 hover:border-amber-700/50 hover:bg-slate-800/90'
                    : 'bg-white border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5'
                  }`}
                style={{
                  boxShadow: isDark ? '0 2px 12px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold ${isDark ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-50 text-amber-600'}`}
                  style={{ boxShadow: '0 2px 8px rgba(245,158,11,0.15)' }}
                >
                  <Users className="w-6 h-6" />
                </div>
                <div className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {amb}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === CTA: JOIN THE EVENT === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
              <Star className="w-4 h-4 text-amber-500" />
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
            </div>

            <p className={`text-base mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('amb.cta.desc')}
            </p>

            {/* Main CTA Button */}
            <motion.a
              href={t('amb.cta.link')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white cursor-pointer transition-all"
              style={{
                background: goldGradient,
                boxShadow: '0 4px 24px rgba(245,158,11,0.35), 0 8px 40px rgba(245,158,11,0.2), 0 16px 60px rgba(245,158,11,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <ExternalLink className="w-5 h-5" />
              {t('amb.cta.button')}
            </motion.a>

            <p className={`mt-4 text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              {t('amb.cta.note')}
            </p>

            {/* Bottom decorative line */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
              <Star className="w-4 h-4 text-amber-500" />
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}