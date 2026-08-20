'use client';

import { Atom } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,240,255,0.08)] bg-[rgba(3,7,18,0.9)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] flex items-center justify-center text-[#030712] font-bold text-xs">
                QFS
              </div>
              <div>
                <div className="text-sm font-semibold text-white">QFS OFFICIAL</div>
                <div className="text-[9px] text-[#00f0ff]/50 font-mono tracking-wider">QUANTUM FINANCIAL SYSTEM</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              The Next Generation of Digital Finance. Technology, Security, Decentralization, Innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Productos</h4>
            <div className="space-y-2">
              {['QFS Wallet', 'QFSPay', 'QFS Exchange DEX', 'QFS Quantum Cards', 'QFS AI'].map((item) => (
                <div key={item} className="text-xs text-slate-500 hover:text-[#00f0ff] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Recursos</h4>
            <div className="space-y-2">
              {['Libro Blanco', 'Roadmap', 'Documentación Técnica', 'APIs', 'Comunidad NESG'].map((item) => (
                <div key={item} className="text-xs text-slate-500 hover:text-[#00f0ff] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Alliances */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Alianzas</h4>
            <div className="space-y-2">
              {['Alianza GCRM', 'Al Arab', 'Monedas Gubernamentales', 'CBDCs', 'Global Network'].map((item) => (
                <div key={item} className="text-xs text-slate-500 hover:text-[#00f0ff] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Atom className="w-3 h-3" />
            <span>QFS Official {new Date().getFullYear()}. Quantum Financial System.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>Technology</span>
            <span className="text-white/10">|</span>
            <span>Finance</span>
            <span className="text-white/10">|</span>
            <span>Security</span>
            <span className="text-white/10">|</span>
            <span>Decentralization</span>
            <span className="text-white/10">|</span>
            <span>Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
