'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePageStore } from '@/store/page-store';
import { useThemeStore } from '@/store/theme-store';
import { QuantumBackground } from '@/components/qfs/quantum-bg';
import { Navigation } from '@/components/qfs/navigation';
import { HomePage } from '@/components/qfs/home-page';
import { HomePagePart2 } from '@/components/qfs/home-page-2';
import { WhitePaperPage } from '@/components/qfs/whitepaper-page';
import { RoadmapPage } from '@/components/qfs/roadmap-page';
import { PortalPage } from '@/components/qfs/portal-page';
import { Footer } from '@/components/qfs/footer';
import { useEffect } from 'react';

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(6px)', scale: 0.98 },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, y: -20, filter: 'blur(6px)', scale: 1.01,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Home() {
  const { currentPage } = usePageStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.style.background = theme === 'dark' ? '#0a0f1a' : '#f8fafc';
  }, [theme]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0f1a] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      <QuantumBackground />
      <Navigation />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
              <HomePagePart2 />
            </motion.div>
          )}
          {currentPage === 'whitepaper' && (
            <motion.div
              key="whitepaper"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <WhitePaperPage />
            </motion.div>
          )}
          {currentPage === 'roadmap' && (
            <motion.div
              key="roadmap"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RoadmapPage />
            </motion.div>
          )}
          {currentPage === 'portal' && (
            <motion.div
              key="portal"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PortalPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
