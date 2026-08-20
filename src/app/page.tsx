'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePageStore } from '@/store/page-store';
import { QuantumBackground } from '@/components/qfs/quantum-bg';
import { Navigation } from '@/components/qfs/navigation';
import { HomePage } from '@/components/qfs/home-page';
import { HomePagePart2 } from '@/components/qfs/home-page-2';
import { WhitePaperPage } from '@/components/qfs/whitepaper-page';
import { RoadmapPage } from '@/components/qfs/roadmap-page';
import { Footer } from '@/components/qfs/footer';

export default function Home() {
  const { currentPage } = usePageStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#030712]">
      <QuantumBackground />
      <Navigation />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage />
              <HomePagePart2 />
            </motion.div>
          )}
          {currentPage === 'whitepaper' && (
            <motion.div
              key="whitepaper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WhitePaperPage />
            </motion.div>
          )}
          {currentPage === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RoadmapPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
