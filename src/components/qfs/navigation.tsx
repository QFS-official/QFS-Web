'use client';

import { usePageStore } from '@/store/page-store';
import { useThemeStore } from '@/store/theme-store';
import { useLangStore } from '@/store/lang-store';
import { AnimatePresence, motion } from 'framer-motion';
import { Atom, FileText, Map, Menu, X, Landmark, Sun, Moon, Globe } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

type PageType = 'home' | 'whitepaper' | 'roadmap' | 'portal';

export function Navigation() {
  const { currentPage, setCurrentPage } = usePageStore();
  const { theme, toggleTheme } = useThemeStore();
  const { lang, setLang } = useLangStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const handleNav = (page: PageType) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Atom className="w-4 h-4" /> },
    { id: 'portal', label: 'Portal', icon: <Landmark className="w-4 h-4" /> },
    { id: 'whitepaper', label: 'White Paper', icon: <FileText className="w-4 h-4" /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" /> },
  ];

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
          className={`absolute top-0 left-0 h-full w-48 ${theme === 'dark' ? 'opacity-30' : ''}`}
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(96,165,250,0.08), rgba(255,255,255,0.15), rgba(96,165,250,0.08), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(37,99,235,0.06), rgba(255,255,255,0.4), rgba(37,99,235,0.06), transparent)',
          }}
          animate={{ x: ['-200px', '200vw'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />
      </motion.div>

      {/* Main nav background */}
      <div
        className={`absolute inset-0 backdrop-blur-2xl border-b ${theme === 'dark' ? 'bg-slate-900/85 border-slate-700/50' : 'bg-white/85 border-blue-100/50'}`}
        style={{
          boxShadow: theme === 'dark'
            ? '0 1px 0 0 rgba(96,165,250,0.1), 0 2px 8px rgba(0,0,0,0.3), 0 8px 32px -4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 1px 0 0 rgba(37,99,235,0.08), 0 2px 8px rgba(37,99,235,0.06), 0 8px 32px -4px rgba(37,99,235,0.1), 0 16px 48px -8px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      />

      {/* Glow line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(90deg, transparent 5%, rgba(96,165,250,0.5) 20%, rgba(139,92,246,0.6) 50%, rgba(96,165,250,0.5) 80%, transparent 95%)'
            : 'linear-gradient(90deg, transparent 5%, rgba(37,99,235,0.4) 20%, rgba(96,165,250,0.6) 50%, rgba(37,99,235,0.4) 80%, transparent 95%)',
        }}
      />
      <div
        className="absolute bottom-[2px] left-0 right-0 h-[1px]"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 70%, transparent 90%)'
            : 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 70%, transparent 90%)',
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden">
              <Image src="/qfs-coin.png" alt="QFS" width={36} height={36} className="object-contain" />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold leading-tight tracking-wide transition-colors ${theme === 'dark' ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-[#2563eb]'}`}>QFS OFFICIAL</span>
            <span className={`text-[10px] font-mono tracking-widest ${theme === 'dark' ? 'text-blue-400/70' : 'text-[#2563eb]/70'}`}>QUANTUM FINANCIAL SYSTEM</span>
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
                  : theme === 'dark'
                    ? 'text-slate-400 hover:text-white'
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

        {/* Right side: Theme, Lang, CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-2 rounded-xl cursor-pointer transition-all duration-300 ${
              theme === 'dark'
                ? 'text-amber-400 hover:bg-amber-400/10'
                : 'text-slate-500 hover:text-[#2563eb] hover:bg-blue-50'
            }`}
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Language Selector */}
          <div className="relative">
            <motion.button
              onClick={() => setLangOpen(!langOpen)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-blue-50'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs font-bold tracking-wider">{lang}</span>
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={() => setLangOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-50 border min-w-[140px] ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 shadow-2xl shadow-black/50'
                        : 'bg-white border-gray-100 shadow-xl shadow-blue-500/5'
                    }`}
                  >
                    {(['es', 'en'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          lang === l
                            ? theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-[#2563eb]'
                            : theme === 'dark' ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`text-base ${l === 'es' ? '' : ''}`}>{l === 'es' ? '🇪🇸' : '🇺🇸'}</span>
                        <span className="font-medium">{l === 'es' ? 'Español' : 'English'}</span>
                        {lang === l && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.button
            onClick={() => handleNav('whitepaper')}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className={`quantum-btn px-4 py-2 rounded-xl text-sm font-medium cursor-pointer ${theme === 'dark' ? 'quantum-btn-dark' : ''}`}
          >
            Explore QFS
          </motion.button>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="quantum-btn-solid px-4 py-2 rounded-xl text-sm cursor-pointer"
          >
            Join Community
          </motion.button>
        </div>

        {/* Mobile: Theme + Lang + Hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg cursor-pointer ${theme === 'dark' ? 'text-amber-400' : 'text-slate-500'}`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg cursor-pointer flex items-center gap-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">{lang}</span>
          </motion.button>
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className={`p-2 cursor-pointer transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#2563eb]'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`md:hidden relative overflow-hidden border-b backdrop-blur-2xl ${
              theme === 'dark'
                ? 'bg-slate-900/95 border-slate-700/50'
                : 'bg-white/95 border-blue-100/50'
            }`}
            style={{
              boxShadow: theme === 'dark'
                ? '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                : '0 8px 32px rgba(37,99,235,0.1), 0 16px 48px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
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
                      : theme === 'dark'
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800'
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
              <div className={`pt-2 border-t flex flex-col gap-2 ${theme === 'dark' ? 'border-slate-700' : 'border-blue-50'}`}>
                <button
                  onClick={() => handleNav('whitepaper')}
                  className={`quantum-btn px-4 py-3 rounded-xl text-sm font-medium text-center cursor-pointer ${theme === 'dark' ? 'quantum-btn-dark' : ''}`}
                >
                  Explore QFS
                </button>
                <button className="quantum-btn-solid px-4 py-3 rounded-xl text-sm text-center cursor-pointer">
                  Join Community
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
