'use client';

import { usePageStore } from '@/store/page-store';
import { AnimatePresence, motion } from 'framer-motion';
import { Atom, FileText, Map, Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

type PageType = 'home' | 'whitepaper' | 'roadmap' | 'portal';

const navItems: { id: PageType; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Inicio', icon: <Atom className="w-4 h-4" /> },
  { id: 'portal', label: 'Portal', icon: <Landmark className="w-4 h-4" /> },
  { id: 'whitepaper', label: 'Libro Blanco', icon: <FileText className="w-4 h-4" /> },
  { id: 'roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" /> },
];

export function Navigation() {
  const { currentPage, setCurrentPage } = usePageStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageType) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Animated light sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full w-48"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.06), rgba(255,255,255,0.4), rgba(37,99,235,0.06), transparent)',
          }}
          animate={{ x: ['-200px', '200vw'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />
      </motion.div>

      {/* Main nav background */}
      <div
        className="absolute inset-0 bg-white/85 backdrop-blur-2xl border-b border-blue-100/50"
        style={{
          boxShadow: '0 1px 0 0 rgba(37,99,235,0.08), 0 2px 8px rgba(37,99,235,0.06), 0 8px 32px -4px rgba(37,99,235,0.1), 0 16px 48px -8px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      />

      {/* Blue glow line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, rgba(37,99,235,0.4) 20%, rgba(96,165,250,0.6) 50%, rgba(37,99,235,0.4) 80%, transparent 95%)',
        }}
      />

      {/* White highlight line */}
      <div
        className="absolute bottom-[2px] left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 70%, transparent 90%)',
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo with glow */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow behind logo */}
            <div
              className="absolute -inset-1.5 rounded-xl blur-md opacity-60"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #60a5fa, #7c3aed)',
              }}
            />
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm overflow-hidden">
              <Image src="/qfs-coin.png" alt="QFS" width={28} height={28} className="rounded-lg object-cover" />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 leading-tight tracking-wide group-hover:text-[#2563eb] transition-colors">QFS OFFICIAL</span>
            <span className="text-[10px] text-[#2563eb]/70 font-mono tracking-widest">QUANTUM FINANCIAL SYSTEM</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNav(item.id)}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                currentPage === item.id
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 40%, #6366f1 100%)',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.3), 0 4px 16px rgba(37,99,235,0.2), 0 8px 24px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={() => handleNav('whitepaper')}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="quantum-btn px-4 py-2 rounded-xl text-sm font-medium cursor-pointer"
          >
            Explorar QFS
          </motion.button>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="quantum-btn-solid px-4 py-2 rounded-xl text-sm cursor-pointer"
          >
            Unirse a la Comunidad
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-slate-500 hover:text-[#2563eb] cursor-pointer transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden relative overflow-hidden border-b border-blue-100/50 bg-white/95 backdrop-blur-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(37,99,235,0.1), 0 16px 48px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-[#2563eb] to-[#6366f1]'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-blue-50/80'
                  }`}
                  style={currentPage === item.id ? {
                    boxShadow: '0 4px 16px rgba(37,99,235,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
                  } : {}}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-blue-50 flex flex-col gap-2">
                <button
                  onClick={() => handleNav('whitepaper')}
                  className="quantum-btn px-4 py-3 rounded-xl text-sm font-medium text-center cursor-pointer"
                >
                  Explorar QFS
                </button>
                <button className="quantum-btn-solid px-4 py-3 rounded-xl text-sm text-center cursor-pointer">
                  Unirse a la Comunidad
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
