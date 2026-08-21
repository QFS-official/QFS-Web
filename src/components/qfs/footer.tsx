'use client';

import { Atom } from 'lucide-react';
import { useThemeStore } from '@/store/theme-store';
import { useLangStore } from '@/store/lang-store';

export function Footer() {
  const { theme } = useThemeStore();
  const { lang } = useLangStore();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative z-10 border-t backdrop-blur-xl ${isDark ? 'border-slate-800 bg-slate-900/80' : 'border-gray-100 bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/15">
                QFS
              </div>
              <div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>QFS OFICIAL</div>
                <div className="text-[9px] text-[#2563eb]/40 font-mono tracking-wider">QUANTUM FINANCIAL SYSTEM</div>
              </div>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {lang === 'es'
                ? 'La proxima generacion de finanzas digitales. Tecnologia, Seguridad, Descentralizacion, Innovacion.'
                : 'The Next Generation of Digital Finance. Technology, Security, Decentralization, Innovation.'}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {lang === 'es' ? 'Productos' : 'Products'}
            </h4>
            <div className="space-y-2.5">
              {['QFS Wallet', 'QFSPay', 'QFS Exchange DEX', 'QFS Quantum Cards', 'QFS AI'].map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {lang === 'es' ? 'Recursos' : 'Resources'}
            </h4>
            <div className="space-y-2.5">
              {(lang === 'es'
                ? ['Libro Blanco', 'Roadmap', 'Documentacion Tecnica', 'APIs', 'Comunidad NESG']
                : ['White Paper', 'Roadmap', 'Technical Documentation', 'APIs', 'NESG Community']
              ).map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Alliances */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {lang === 'es' ? 'Alianzas' : 'Alliances'}
            </h4>
            <div className="space-y-2.5">
              {(lang === 'es'
                ? ['Alianza GCRM', 'Al Arab', 'Monedas Gubernamentales', 'CBDCs', 'Global Network']
                : ['GCRM Alliance', 'Al Arab', 'Government Currencies', 'CBDCs', 'Global Network']
              ).map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <Atom className="w-3 h-3 text-[#2563eb]/40" />
            <span>QFS Oficial {new Date().getFullYear()}. Quantum Financial System.</span>
          </div>
          <div className={`flex items-center gap-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <span>Technology</span>
            <span className={isDark ? 'text-slate-700' : 'text-gray-200'}>|</span>
            <span>Finance</span>
            <span className={isDark ? 'text-slate-700' : 'text-gray-200'}>|</span>
            <span>Security</span>
            <span className={isDark ? 'text-slate-700' : 'text-gray-200'}>|</span>
            <span>Decentralization</span>
            <span className={isDark ? 'text-slate-700' : 'text-gray-200'}>|</span>
            <span>Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
