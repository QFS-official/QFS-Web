'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useThemeStore } from '@/store/theme-store';
import { useT, useTD } from '@/store/lang-store';
import { ExternalLink, Sparkles, Star, Shield, Crown, Globe2 } from 'lucide-react';

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

const ambassadors = [
  {
    name: 'Dr. Nilo Zelaya',
    role: 'Global Ambassador',
    region: 'USA',
    country: '\uD83C\uDDFA\uD83C\uDDF8',
    photo: '/ambassadors/nilo-zelaya.png',
    isChief: true,
    desc: 'Leading the global deployment and expansion of GCRM across international markets. Overseeing strategic partnerships, government relations, and the establishment of GCRM\u2019s presence in sovereign financial systems worldwide.',
  },
  {
    name: 'H.E. Rungrawee',
    role: 'Global Envoy Ambassador',
    region: 'Thailand',
    country: '\uD83C\uDDF9\uD83C\uDDED',
    photo: '/ambassadors/he-rungrawee.jpg',
    desc: 'Senior diplomatic representative for GCRM in the ASEAN region.',
  },
  {
    name: 'H.E. Gloria Amanda',
    role: 'QFS Ambassador',
    region: 'Mexico',
    country: '\uD83C\uDDF2\uD83C\uDDFD',
    photo: '/ambassadors/he-gloria-amanda.png',
    desc: 'Diplomatic envoy advancing GCRM adoption across Latin American markets.',
  },
  {
    name: 'H.E. Pedro Riera',
    role: 'QFS Ambassador',
    region: 'Spain',
    country: '\uD83C\uDDEA\uD83C\uDDF8',
    photo: '/ambassadors/he-pedro-riera.png',
    desc: 'European liaison for GCRM regulatory compliance and institutional partnerships.',
  },
  {
    name: 'Liliana Echeverry',
    role: 'QFS Ambassador',
    region: 'Colombia',
    country: '\uD83C\uDDE8\uD83C\uDDE4',
    photo: '/ambassadors/liliana-echeverry.png',
    desc: 'Regional coordinator for GCRM community building and strategic outreach.',
  },
  {
    name: 'Thanachot Sawasdee',
    role: 'QFS Ambassador',
    region: 'Thailand',
    country: '\uD83C\uDDF9\uD83C\uDDED',
    photo: '/ambassadors/thanachot-sawasdee.png',
    desc: 'Technology and blockchain integration specialist for the Thai market.',
  },
  {
    name: 'Busayaporn Rungruang',
    role: 'QFS Ambassador',
    region: 'Thailand',
    country: '\uD83C\uDDF9\uD83C\uDDED',
    photo: '/ambassadors/busayaporn-rungruang.png',
    desc: 'Community development and education lead for GCRM in Southeast Asia.',
  },
  {
    name: 'Monthiwa Krasang',
    role: 'QFS Ambassador',
    region: 'Thailand',
    country: '\uD83C\uDDF9\uD83C\uDDED',
    photo: '/ambassadors/monthiwa-krasang.jpg',
    desc: 'Public relations and brand ambassador for GCRM in the Thai market.',
  },
  {
    name: 'Kraisorn Prompitak',
    role: 'QFS Ambassador',
    region: 'Thailand',
    country: '\uD83C\uDDF9\uD83C\uDDED',
    photo: '/ambassadors/kraisorn-prompitak.png',
    desc: 'Operations and logistics coordinator for GCRM deployment in Thailand.',
  },
];

export function AmbassadorsPage() {
  const { theme } = useThemeStore();
  const t = useT();

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

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
            style={{
              background: goldText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(245,158,11,0.3))',
            }}
          >
            {t('amb.sectionTitle').split(' ').map((word, i) => (
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className={`text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {t('amb.sectionDesc')}
          </motion.p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-8" style={{ background: goldGradient }} />
            <Star className="w-3 h-3 text-amber-500" />
            <div className="h-px w-8" style={{ background: goldGradient }} />
          </div>
        </motion.div>

        {/* === GROUP BANNER IMAGE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24"
        >
          <div className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: isDark
                ? '0 0 60px rgba(245,158,11,0.15), 0 25px 60px -12px rgba(0,0,0,0.6)'
                : '0 0 60px rgba(245,158,11,0.1), 0 25px 60px -12px rgba(0,0,0,0.15)',
            }}
          >
            <Image
              src="/ambassadors/ambassadors-banner.jpg"
              alt="QFS Global Ambassadors"
              width={1600}
              height={900}
              className="w-full h-auto"
              unoptimized
              priority
            />
            <div className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.3)' }}
            />
          </div>
        </motion.div>

        {/* === CHIEF AMBASSADOR (Featured) === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-12"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow: isDark
                ? '0 0 60px rgba(245,158,11,0.12), 0 25px 60px -12px rgba(0,0,0,0.5)'
                : '0 0 60px rgba(245,158,11,0.08), 0 25px 60px -12px rgba(0,0,0,0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-20"
              style={{ boxShadow: 'inset 0 0 0 2px rgba(245,158,11,0.4), inset 0 0 20px rgba(245,158,11,0.05)' }}
            />
            <div
              className={`relative p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 ${isDark ? 'bg-slate-900' : 'bg-white'}`}
            >
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-amber-500/50"
                  style={{ boxShadow: '0 0 30px rgba(245,158,11,0.3)' }}
                >
                  <Image
                    src={ambassadors[0].photo}
                    alt={ambassadors[0].name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                  <Crown className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Info */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 bg-amber-500/15 text-amber-400 border border-amber-800/50">
                  <Crown className="w-3.5 h-3.5" />
                  CHIEF AMBASSADOR
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{
                    background: goldText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {ambassadors[0].name}
                </h2>
                <p className={`text-sm font-medium mb-1 ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>
                  {ambassadors[0].role}
                </p>
                <div className={`inline-flex items-center gap-1.5 text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{ambassadors[0].country}</span>
                  <span>{ambassadors[0].region}</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {ambassadors[0].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === AMBASSADOR CARDS GRID === */}
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
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {ambassadors.slice(1).map((amb, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`rounded-2xl overflow-hidden text-center border transition-all ${isDark
                    ? 'bg-slate-800/60 border-amber-900/30 hover:border-amber-700/50 hover:bg-slate-800/90'
                    : 'bg-white border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5'
                  }`}
                style={{
                  boxShadow: isDark ? '0 2px 12px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Photo */}
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0">
                    <Image
                      src={amb.photo}
                      alt={amb.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-slate-800 via-transparent to-transparent' : 'bg-gradient-to-t from-white/80 via-transparent to-transparent'}`} />
                  </div>
                </div>
                {/* Info */}
                <div className="px-4 pb-4 -mt-8 relative z-10">
                  <div className={`text-sm font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {amb.name}
                  </div>
                  <div className={`text-xs font-medium mb-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                    {amb.role}
                  </div>
                  <div className={`inline-flex items-center gap-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Globe2 className="w-3 h-3" />
                    <span>{amb.country}</span>
                    <span>{amb.region}</span>
                  </div>
                  {amb.desc && (
                    <p className={`text-[11px] leading-relaxed mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {amb.desc}
                    </p>
                  )}
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
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
              <Star className="w-4 h-4 text-amber-500" />
              <div className="h-px flex-1 max-w-[80px]" style={{ background: goldGradient }} />
            </div>

            <p className={`text-base mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('amb.cta.desc')}
            </p>

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

            {/* === HOTCOIN LINK WITH LOGO === */}
            <motion.a
              href="https://www.hotcoins1.com/es_ES/spot/qfs-usdt/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold cursor-pointer transition-all mt-6"
              style={{
                background: isDark ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)' : '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
                border: `1px solid ${isDark ? 'rgba(245,158,11,0.3)' : 'rgba(245,158,11,0.2)'}`,
              }}
            >
              {/* Hotcoin Logo */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                <Image
                  src="/hotcoin-logo.svg"
                  alt="Hotcoin"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <span className={isDark ? 'text-amber-400' : 'text-amber-700'}>Hotcoin</span>
              <span className={`text-sm font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>QFS/USDT</span>
              <ExternalLink className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            </motion.a>

            <p className={`mt-4 text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              {t('amb.cta.note')}
            </p>

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
