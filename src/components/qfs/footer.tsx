'use client';

import { Atom } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/15">
                QFS
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">QFS OFFICIAL</div>
                <div className="text-[9px] text-[#2563eb]/40 font-mono tracking-wider">QUANTUM FINANCIAL SYSTEM</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Next Generation of Digital Finance. Technology, Security, Decentralization, Innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Productos</h4>
            <div className="space-y-2.5">
              {['QFS Wallet', 'QFSPay', 'QFS Exchange DEX', 'QFS Quantum Cards', 'QFS AI'].map((item) => (
                <div key={item} className="text-xs text-slate-400 hover:text-[#2563eb] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Recursos</h4>
            <div className="space-y-2.5">
              {['Libro Blanco', 'Roadmap', 'Documentación Técnica', 'APIs', 'Comunidad NESG'].map((item) => (
                <div key={item} className="text-xs text-slate-400 hover:text-[#2563eb] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Alliances */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Alianzas</h4>
            <div className="space-y-2.5">
              {['Alianza GCRM', 'Al Arab', 'Monedas Gubernamentales', 'CBDCs', 'Global Network'].map((item) => (
                <div key={item} className="text-xs text-slate-400 hover:text-[#2563eb] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Atom className="w-3 h-3 text-[#2563eb]/40" />
            <span>QFS Official {new Date().getFullYear()}. Quantum Financial System.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Technology</span>
            <span className="text-gray-200">|</span>
            <span>Finance</span>
            <span className="text-gray-200">|</span>
            <span>Security</span>
            <span className="text-gray-200">|</span>
            <span>Decentralization</span>
            <span className="text-gray-200">|</span>
            <span>Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
