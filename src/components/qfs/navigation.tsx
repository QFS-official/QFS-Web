'use client';

import { usePageStore } from '@/store/page-store';
import { motion } from 'framer-motion';
import { Atom, FileText, Map, Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';

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
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        style={{
          boxShadow: '0 1px 0 0 rgba(37, 99, 235, 0.06), 0 4px 24px -2px rgba(37, 99, 235, 0.08), 0 8px 32px -4px rgba(124, 58, 237, 0.04)',
        }}
      />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
            QFS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 leading-tight tracking-wide">QFS OFFICIAL</span>
            <span className="text-[10px] text-[#2563eb]/60 font-mono tracking-widest">QUANTUM FINANCIAL SYSTEM</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                currentPage === item.id
                  ? 'text-[#2563eb]'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {currentPage === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl bg-blue-50 border border-blue-100"
                  style={{ boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav('whitepaper')}
            className="quantum-btn px-4 py-2 rounded-xl text-sm font-medium"
          >
            Explorar QFS
          </button>
          <button className="quantum-btn-solid px-4 py-2 rounded-xl text-sm">
            Unirse a la Comunidad
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden relative border-b border-gray-100 bg-white/95 backdrop-blur-xl"
          style={{
            boxShadow: '0 8px 32px rgba(37, 99, 235, 0.08)',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#2563eb] bg-blue-50'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
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
    </header>
  );
}
