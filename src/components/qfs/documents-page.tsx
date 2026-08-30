'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme-store';
import { useT } from '@/store/lang-store';
import {
  BookOpen, Shield, FileText, ArrowRight, ChevronDown,
  Database, Layers, Lock, Unlock, GitBranch, Bot, CreditCard,
  Wallet, Globe, Building2, Eye, Zap, Link2, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
};

const ETH_CONTRACT = '0x7c670a7eba354e0d22f0ecbbe7a36bf10dCE305E';
const BSC_CONTRACT = '0x6aa6514d5cB9595Df69E081657B68eEFC0568Cc0';

interface SectionProps {
  num: string;
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function DocSection({ num, id, title, icon, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <motion.div
      id={id}
      custom={parseInt(num)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
          : 'border-gray-100 bg-white/60 hover:border-blue-200/60'
      } ${open ? (isDark ? 'shadow-lg shadow-blue-500/5' : 'shadow-lg shadow-blue-500/10') : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer transition-colors ${
          isDark ? 'hover:bg-slate-700/30' : 'hover:bg-blue-50/50'
        }`}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
          isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-[#2563eb]'
        }`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-mono tracking-widest ${isDark ? 'text-blue-400/60' : 'text-blue-400'}`}>{num}</span>
            <h3 className={`text-base font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className={`px-6 pb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          <div className={`h-px mb-5 ${isDark ? 'bg-slate-700/50' : 'bg-gray-100'}`} />
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export function DocumentsPage() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const t = useT();

  const allocationData = [
    { key: 'humanitarian', amount: '27B', pct: '15.2%' },
    { key: 'liquidity', amount: '60B', pct: '33.8%' },
    { key: 'tech', amount: '30B', pct: '16.9%' },
    { key: 'adoption', amount: '20B', pct: '11.3%' },
    { key: 'institutional', amount: '20B', pct: '11.3%' },
    { key: 'governance', amount: '20.64B', pct: '11.6%' },
  ];

  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? 'text-blue-300 border-blue-700/50 bg-blue-500/10' : 'text-[#2563eb] border-blue-200 bg-blue-50/80'}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            {t('doc.badge')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">{t('doc.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={`max-w-2xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {t('doc.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-4">

          {/* 01 - Executive Summary */}
          <DocSection num="01" id="doc-exec" title={t('doc.sec01.title')} icon={<FileText className="w-5 h-5" />} defaultOpen>
            <p className="leading-relaxed text-sm">{t('doc.sec01.text')}</p>
          </DocSection>

          {/* 02 - Token Master Data */}
          <DocSection num="02" id="doc-master-data" title={t('doc.sec02.title')} icon={<Database className="w-5 h-5" />}>
            <div className={`rounded-xl border overflow-hidden ${isDark ? 'border-slate-700/50' : 'border-gray-100'}`}>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Token Name', 'QFSpay'],
                    ['Symbol', 'QFS'],
                    ['BSC Standard', 'BEP-20'],
                    ['Ethereum Standard', 'ERC-20'],
                    ['Decimals', '18'],
                    ['BSC Contract', BSC_CONTRACT],
                    ['Ethereum Contract', ETH_CONTRACT],
                  ].map(([param, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? (isDark ? 'bg-slate-800/30' : 'bg-gray-50/50') : ''}>
                      <td className={`px-4 py-3 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{param}</td>
                      <td className={`px-4 py-3 font-mono text-xs ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DocSection>

          {/* 03 - BSC Contract */}
          <DocSection num="03" id="doc-bsc" title={t('doc.sec03.title')} icon={<Layers className="w-5 h-5" />}>
            <div className="space-y-4">
              <div className={`rounded-xl p-4 border ${isDark ? 'border-amber-500/20 bg-amber-500/5' : 'border-amber-200 bg-amber-50/50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-amber-500" />
                  <span className={`text-xs font-bold ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>{t('doc.sec03.bsc.title')}</span>
                </div>
                <p className={`text-xs font-mono mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{BSC_CONTRACT}</p>
                <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('doc.sec03.bsc.supply')}</p>
              </div>
              <p className="leading-relaxed text-sm">{t('doc.sec03.bsc.desc')}</p>
            </div>
          </DocSection>

          {/* 04 - Ethereum Bridge */}
          <DocSection num="04" id="doc-eth" title={t('doc.sec04.title')} icon={<Link2 className="w-5 h-5" />}>
            <div className="space-y-4">
              <div className={`rounded-xl p-4 border ${isDark ? 'border-violet-500/20 bg-violet-500/5' : 'border-violet-200 bg-violet-50/50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Link2 className="w-4 h-4 text-violet-500" />
                  <span className={`text-xs font-bold ${isDark ? 'text-violet-300' : 'text-violet-700'}`}>ERC-20</span>
                </div>
                <p className={`text-xs font-mono mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{ETH_CONTRACT}</p>
                <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('doc.sec04.supply')}</p>
              </div>
              <p className="leading-relaxed text-sm">{t('doc.sec04.desc')}</p>
            </div>
          </DocSection>

          {/* 05 - Supply Accounting */}
          <DocSection num="05" id="doc-accounting" title={t('doc.sec05.title')} icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="space-y-4">
              <p className="leading-relaxed text-sm">{t('doc.sec05.text')}</p>
              <div className={`rounded-xl p-4 border-l-4 ${isDark ? 'border-l-red-500 bg-red-500/5 border border-red-500/20' : 'border-l-red-500 bg-red-50/50 border border-red-200'}`}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span className={`text-sm font-bold ${isDark ? 'text-red-300' : 'text-red-700'}`}>{t('doc.sec05.warning')}</span>
                </div>
              </div>
            </div>
          </DocSection>

          {/* 06 - Supply Policy */}
          <DocSection num="06" id="doc-policy" title={t('doc.sec06.title')} icon={<Lock className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec06.text')}</p>
          </DocSection>

          {/* 07 - BSC Reserve */}
          <DocSection num="07" id="doc-bsc-reserve" title={t('doc.sec07.title')} icon={<Shield className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec07.purposes')}</p>
          </DocSection>

          {/* 08 - Humanitarian Reserve */}
          <DocSection num="08" id="doc-humanitarian" title={t('doc.sec08.title')} icon={<Building2 className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec08.text')}</p>
          </DocSection>

          {/* 09 - Future Commercial Liquidity */}
          <DocSection num="09" id="doc-liquidity" title={t('doc.sec09.title')} icon={<Zap className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec09.text')}</p>
          </DocSection>

          {/* 10 - Ethereum Exchange Release */}
          <DocSection num="10" id="doc-exchange" title={t('doc.sec10.title')} icon={<Unlock className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec10.text')}</p>
          </DocSection>

          {/* 11 - GESARA Governance */}
          <DocSection num="11" id="doc-gesara" title={t('doc.sec11.title')} icon={<Globe className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec11.text')}</p>
          </DocSection>

          {/* 12 - Strategic Value Framework */}
          <DocSection num="12" id="doc-value" title={t('doc.sec12.title')} icon={<GitBranch className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec12.text')}</p>
          </DocSection>

          {/* 13 - Backing Disclosure */}
          <DocSection num="13" id="doc-backing" title={t('doc.sec13.title')} icon={<Eye className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec13.text')}</p>
          </DocSection>

          {/* 15 - Token Allocation */}
          <DocSection num="14" id="doc-allocation" title={t('doc.sec15.title')} icon={<Layers className="w-5 h-5" />} defaultOpen>
            <div className="space-y-4">
              <div className={`rounded-xl border overflow-hidden ${isDark ? 'border-slate-700/50' : 'border-gray-100'}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={isDark ? 'bg-slate-800/50' : 'bg-gray-50'}>
                      <th className={`text-left px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.allocation')}</th>
                      <th className={`text-right px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.amount')}</th>
                      <th className={`text-right px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.pct')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allocationData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? (isDark ? 'bg-slate-800/30' : 'bg-gray-50/50') : ''}>
                        <td className={`px-4 py-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t(`doc.alloc.${row.key}`)}</td>
                        <td className={`px-4 py-2.5 text-right font-mono text-xs ${isDark ? 'text-white' : 'text-slate-900'}`}>{row.amount}</td>
                        <td className={`px-4 py-2.5 text-right font-mono text-xs ${isDark ? 'text-blue-400' : 'text-[#2563eb]'}`}>{row.pct}</td>
                      </tr>
                    ))}
                    <tr className={`border-t font-bold ${isDark ? 'border-slate-700 bg-slate-800/50' : 'border-gray-200 bg-blue-50/30'}`}>
                      <td className={`px-4 py-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Total</td>
                      <td className={`px-4 py-3 text-right font-mono text-xs ${isDark ? 'text-white' : 'text-slate-900'}`}>177.64B</td>
                      <td className={`px-4 py-3 text-right font-mono text-xs ${isDark ? 'text-blue-400' : 'text-[#2563eb]'}`}>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={`rounded-xl p-4 border-l-4 ${isDark ? 'border-l-amber-500 bg-amber-500/5 border border-amber-500/20' : 'border-l-amber-500 bg-amber-50/50 border border-amber-200'}`}>
                <p className="text-xs leading-relaxed">{t('doc.sec15.note')}</p>
              </div>
            </div>
          </DocSection>

          {/* 16 - Three Supply Levels */}
          <DocSection num="15" id="doc-supply-levels" title={t('doc.sec16.title')} icon={<Database className="w-5 h-5" />}>
            <div className="space-y-3">
              {[
                { label: t('doc.sec16.max'), value: '999,000,000,000,000,000,000,000,000 QFS', sub: 'BSC Contract' },
                { label: t('doc.sec16.network'), value: `BSC: 999S | ETH: 178.3B`, sub: t('doc.sec16.network') },
                { label: t('doc.sec16.circulating'), value: 'TBD', sub: t('doc.sec16.circulating') },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-4 border ${isDark ? 'border-slate-700/50 bg-slate-800/30' : 'border-gray-100 bg-gray-50/50'}`}>
                  <div className={`text-xs font-bold mb-1 ${isDark ? 'text-blue-400' : 'text-[#2563eb]'}`}>{item.label}</div>
                  <div className={`text-sm font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.sub}</div>
                </div>
              ))}
            </div>
          </DocSection>

          {/* 17 - Release Model */}
          <DocSection num="16" id="doc-release" title={t('doc.sec17.title')} icon={<Unlock className="w-5 h-5" />}>
            <div className={`rounded-xl p-6 border ${isDark ? 'border-slate-700/50 bg-slate-800/30' : 'border-gray-100 bg-gray-50/50'}`}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-[#2563eb]'}`}>MASTER SUPPLY</div>
                <div className={`text-lg ${isDark ? 'text-slate-500' : 'text-slate-300'}`}>|</div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-700'}`}>CONTROLLED RESERVE</div>
                <div className={`text-lg ${isDark ? 'text-slate-500' : 'text-slate-300'}`}>|</div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>PROGRAMMED RELEASE</div>
                <div className={`text-lg ${isDark ? 'text-slate-500' : 'text-slate-300'}`}>|</div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-violet-500/20 text-violet-300' : 'bg-violet-100 text-violet-700'}`}>CIRCULATING QFS</div>
              </div>
            </div>
          </DocSection>

          {/* 18 - Bridge Architecture */}
          <DocSection num="17" id="doc-bridge" title={t('doc.sec18.title')} icon={<GitBranch className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec18.text')}</p>
          </DocSection>

          {/* 19 - DEX Liquidity */}
          <DocSection num="18" id="doc-dex" title={t('doc.sec19.title')} icon={<Zap className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec19.text')}</p>
          </DocSection>

          {/* 20 - CEX Future */}
          <DocSection num="19" id="doc-cex" title={t('doc.sec20.title')} icon={<Building2 className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec20.text')}</p>
          </DocSection>

          {/* Ecosystem Components */}
          <DocSection num="20" id="doc-qfspay" title={t('doc.sec21.title')} icon={<CreditCard className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec21.text')}</p>
          </DocSection>

          <DocSection num="21" id="doc-wallet" title={t('doc.sec22.title')} icon={<Wallet className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec22.text')}</p>
          </DocSection>

          <DocSection num="22" id="doc-dex-exchange" title={t('doc.sec23.title')} icon={<Globe className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec23.text')}</p>
          </DocSection>

          <DocSection num="23" id="doc-cards" title={t('doc.sec24.title')} icon={<CreditCard className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec24.text')}</p>
          </DocSection>

          <DocSection num="24" id="doc-ai" title={t('doc.sec25.title')} icon={<Bot className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec25.text')}</p>
          </DocSection>

          {/* Security */}
          <DocSection num="25" id="doc-security" title={t('doc.sec26.title')} icon={<Shield className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec26.text')}</p>
          </DocSection>

          {/* Transparency */}
          <DocSection num="26" id="doc-transparency" title={t('doc.sec27.title')} icon={<Eye className="w-5 h-5" />}>
            <p className="leading-relaxed text-sm">{t('doc.sec27.text')}</p>
          </DocSection>

          {/* Contract Register */}
          <DocSection num="27" id="doc-register" title={t('doc.sec28.title')} icon={<Database className="w-5 h-5" />}>
            <div className={`rounded-xl border overflow-hidden ${isDark ? 'border-slate-700/50' : 'border-gray-100'}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={isDark ? 'bg-slate-800/50' : 'bg-gray-50'}>
                    <th className={`text-left px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.network')}</th>
                    <th className={`text-left px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.standard')}</th>
                    <th className={`text-left px-4 py-3 text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('doc.th.supply')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`px-4 py-3 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>BNB Smart Chain</td>
                    <td className={`px-4 py-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>BEP-20</td>
                    <td className={`px-4 py-3 font-mono text-xs font-bold ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>999S QFS</td>
                  </tr>
                  <tr className={isDark ? 'bg-slate-800/30' : 'bg-gray-50/50'}>
                    <td className={`px-4 py-3 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Ethereum</td>
                    <td className={`px-4 py-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ERC-20</td>
                    <td className={`px-4 py-3 font-mono text-xs font-bold ${isDark ? 'text-violet-300' : 'text-violet-700'}`}>178.3B QFS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DocSection>

          {/* Official Supply Statement */}
          <DocSection num="28" id="doc-statement" title={t('doc.sec29.title')} icon={<FileText className="w-5 h-5" />} defaultOpen>
            <div className={`rounded-xl p-5 border ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50/50'}`}>
              <p className="leading-relaxed text-sm italic">{t('doc.sec29.text')}</p>
            </div>
          </DocSection>

          {/* Ecosystem Positioning */}
          <DocSection num="29" id="doc-positioning" title={t('doc.sec32.title')} icon={<Globe className="w-5 h-5" />} defaultOpen>
            <p className="leading-relaxed text-sm">{t('doc.sec32.text')}</p>
          </DocSection>

        </div>
      </section>
    </div>
  );
}
