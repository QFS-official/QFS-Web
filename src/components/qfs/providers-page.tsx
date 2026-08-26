'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme-store';
import { useT } from '@/store/lang-store';
import {
  Shield, Globe, Zap, AlertTriangle, Wallet,
  ArrowRight, ExternalLink, Copy, Check,
  BarChart3, Building2
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const ETH_CONTRACT = '0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E';
const BSC_CONTRACT = '0x6aa6514d5cB9595Df69E081657B68eEFC0568Cc0';

const wallets = [
  { name: 'NESGswap Wallet', descKey: 'prov.wallet.nesgswap.desc', url: 'https://exchange.nesgswap.org/', logo: 'https://nesgswap.com/wp-content/uploads/2024/04/grok-image-7699e9e9-94b6-47fe-8e36-bde997dc7bd5-removebg-preview-e1773258879156.png', color: '#2563eb' },
  { name: 'QFSMaster Wallet', descKey: 'prov.wallet.qfsmaster.desc', url: '#', logo: 'https://nesgswap.com/wp-content/uploads/2025/06/Big-Size-PNG.png', color: '#7c3aed' },
  { name: 'Binance Web3 Wallet', descKey: 'prov.wallet.binance.desc', url: 'https://web3.binance.com/es/token/bsc/0x6aa6514d5cB9595Df69E081657B68eEFC0568Cc0', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png', color: '#f0b90b' },
  { name: 'OKX Wallet', descKey: 'prov.wallet.okx.desc', url: 'https://web3.okx.com/es-la/dex-swap?chain=ethereum,ethereum&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee,0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png', color: '#000' },
  { name: 'Trust Wallet', descKey: 'prov.wallet.trust.desc', url: 'https://trustwallet.com/', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png', color: '#3375bb' },
  { name: 'Bitget Wallet', descKey: 'prov.wallet.bitget.desc', url: 'https://web3.bitget.com/es/swap/eth/0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6444.png', color: '#00f0ff' },
  { name: 'MetaMask', descKey: 'prov.wallet.metamask.desc', url: 'https://metamask.io/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png', color: '#f6851b' },
  { name: 'Coinbase Wallet', descKey: 'prov.wallet.coinbase.desc', url: 'https://cloud.coinbase.com/wallet', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6531.png', color: '#0052ff' },
];

const dexEth = [
  { name: 'Uniswap', descKey: 'prov.dex.uniswap.desc', url: 'https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png', color: '#ff007a' },
  { name: '1inch', descKey: 'prov.dex.1inch.desc', url: 'https://app.1inch.io/swap?src=1:USDT&dst=1:QFS', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6706.png', color: '#0ebbff' },
  { name: 'SushiSwap', descKey: 'prov.dex.sushi.desc', url: 'https://www.sushi.com/ethereum/swap?token0=0xdac17f958d2ee523a2206206994597c13d831ec7&token1=0x7c670a7eba354e0d22f0ecbbe7a36bf10dce305e', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/1337.png', color: '#fa52a0' },
  { name: 'Balancer', descKey: 'prov.dex.balancer.desc', url: 'https://balancer.fi/', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/1336.png', color: '#1e1e1e' },
  { name: 'Curve Finance', descKey: 'prov.dex.curve.desc', url: 'https://curve.fi/', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5964.png', color: '#000' },
  { name: 'KyberSwap', descKey: 'prov.dex.kyber.desc', url: 'https://kyberswap.com/swap/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7-to-0x7c670a7eba354e0d22f0ecbbe7a36bf10dce305e', logo: 'https://kyberswap.com/logo-dark.svg', color: '#6147ff' },
];

const dexBsc = [
  { name: 'PancakeSwap', descKey: 'prov.dex.pancake.desc', url: 'https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x6aa6514d5cB9595Df69E081657B68eEFC0568Cc0', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png', color: '#d1884f' },
  { name: 'BiSwap', descKey: 'prov.dex.biswap.desc', url: 'https://biswap.org/es/swap?inputCurrency=0x6aa6514d5cB9595Df69E081657B68eEFC0568Cc0&outputCurrency=0x55d398326f99059fF775485246999027B3197955', logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6444.png', color: '#00f0ff' },
  { name: 'ApeSwap', descKey: 'prov.dex.apeswap.desc', url: 'https://apeswap.finance/', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14965.png', color: '#6fcf97' },
  { name: 'MDEX', descKey: 'prov.dex.mdex.desc', url: 'https://mdex.com/', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21636.png', color: '#1e5eff' },
  { name: 'BabySwap', descKey: 'prov.dex.babyswap.desc', url: 'https://babyswap.finance/', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png', color: '#ff6b6b' },
];

const cexList = [
  { name: 'Binance', progress: 65, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png', url: 'https://www.binance.com/' },
  { name: 'Coinbase', progress: 45, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6531.png', url: 'https://www.coinbase.com/' },
  { name: 'Kraken', progress: 40, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png', url: 'https://www.kraken.com/' },
  { name: 'KuCoin', progress: 55, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png', url: 'https://www.kucoin.com/' },
  { name: 'Bybit', progress: 35, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/4157.png', url: 'https://www.bybit.com/' },
  { name: 'Gate.io', progress: 50, logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/6985.png', url: 'https://www.gate.io/' },
];

const analyticsList = [
  { name: 'CoinMarketCap', desc: 'prov.analytics.cmc.desc', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', url: 'https://coinmarketcap.com/' },
  { name: 'CoinGecko', desc: 'prov.analytics.gecko.desc', logo: 'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png', url: 'https://www.coingecko.com/' },
  { name: 'DexTools', desc: 'prov.analytics.dextools.desc', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12233.png', url: 'https://www.dextools.io/' },
  { name: 'DexScreener', desc: 'prov.analytics.dexscreener.desc', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png', url: 'https://dexscreener.com/' },
  { name: 'DeFiLlama', desc: 'prov.analytics.defillama.desc', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png', url: 'https://defillama.com/' },
  { name: 'Coinpaprika', desc: 'prov.analytics.coinpaprika.desc', logo: 'https://static.wixstatic.com/media/1f3f2b_614e05b6d3e84630b377c85d7ed33137~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cm%20c.png', url: 'https://coinpaprika.com/' },
];

function CopyButton({ text, isDark }: { text: string; isDark: boolean }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`ml-2 p-1.5 rounded-lg transition-all cursor-pointer ${
        isDark ? 'hover:bg-slate-700 text-slate-400 hover:text-white' : 'hover:bg-blue-50 text-slate-400 hover:text-[#2563eb]'
      }`}
      title="Copy address"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function ProviderCard({ item, index, isDark, t }: {
  item: { name: string; descKey: string; url: string; logo: string; color: string };
  index: number; isDark: boolean; t: (k: string) => string;
}) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative rounded-2xl p-5 border transition-all duration-300 block ${
        isDark
          ? 'bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/80'
          : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5'
      }`}
      style={{ boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 8px rgba(37,99,235,0.04)' }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white"
          style={{ boxShadow: `0 2px 12px ${item.color}22` }}
        >
          <Image src={item.logo} alt={item.name} width={40} height={40} className="object-contain" unoptimized />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</h3>
            <ExternalLink className={`w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
          </div>
          <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t(item.descKey)}</p>
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium transition-colors" style={{ color: item.color }}>
            {t('prov.visit')} <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function ProgressBadge({ progress, isDark }: { progress: number; isDark: boolean }) {
  const color = progress >= 60 ? '#22c55e' : progress >= 45 ? '#f59e0b' : '#ef4444';
  return (
    <div className="flex items-center gap-2">
      <div className={`w-16 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        />
      </div>
      <span className="text-[10px] font-mono font-bold" style={{ color }}>{progress}%</span>
    </div>
  );
}

export function ProvidersPage() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const t = useT();

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 pt-8 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/60 sub-label">QFS ECOSYSTEM</motion.span>
            <motion.h1 variants={fadeUp} className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('prov.hero.title')}
            </motion.h1>
            <motion.p variants={fadeUp} className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('prov.hero.desc')}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: <Shield className="w-4 h-4" />, label: t('prov.feature.quantum'), color: '#2563eb' },
                { icon: <Globe className="w-4 h-4" />, label: t('prov.feature.nations'), color: '#7c3aed' },
                { icon: <Zap className="w-4 h-4" />, label: t('prov.feature.integrity'), color: '#d97706' },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
                    isDark ? 'bg-slate-800/80 border-slate-700/50 text-slate-300' : 'bg-white border-gray-100 text-slate-600'
                  }`}
                  style={{ boxShadow: `0 2px 8px ${f.color}08` }}
                >
                  <span style={{ color: f.color }}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contract Addresses */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className={`rounded-3xl p-6 sm:p-8 relative overflow-hidden border ${
              isDark ? 'bg-slate-800/60 border-amber-500/20' : 'bg-amber-50/40 border-amber-200/30'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-purple-500" />
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)' }}>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.contracts.title')}</h2>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-amber-400/70' : 'text-amber-600/70'}`}>{t('prov.contracts.warning')}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { label: 'Ethereum (ERC-20)', addr: ETH_CONTRACT, color: '#627eea' },
                { label: 'BSC (BEP-20)', addr: BSC_CONTRACT, color: '#f0b90b' },
              ].map((c) => (
                <div key={c.label} className={`rounded-xl p-4 border ${isDark ? 'bg-slate-900/60 border-slate-700/40' : 'bg-white border-gray-100'}`}>
                  <span className="text-xs font-semibold flex items-center gap-2" style={{ color: c.color }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                    {c.label}
                  </span>
                  <div className={`flex items-center mt-2 font-mono text-xs sm:text-sm break-all ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="flex-1">{c.addr}</span>
                    <CopyButton text={c.addr} isDark={isDark} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Web3 Wallets */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
                <Wallet className="w-5 h-5" style={{ color: '#2563eb' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#2563eb]/50 sub-label">WEB3</span>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.wallets.title')}</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className={`text-sm mb-6 ml-[52px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('prov.wallets.desc')}</motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {wallets.map((w, i) => <ProviderCard key={w.name} item={w} index={i} isDark={isDark} t={t} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEX Ethereum */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(98,126,234,0.15)' : 'rgba(98,126,234,0.08)', boxShadow: '0 2px 8px rgba(98,126,234,0.08)' }}>
                <Zap className="w-5 h-5" style={{ color: '#627eea' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest sub-label" style={{ color: 'rgba(98,126,234,0.5)' }}>ETHEREUM</span>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.dex.eth.title')}</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className={`text-sm mb-6 ml-[52px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('prov.dex.eth.desc')}</motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dexEth.map((d, i) => <ProviderCard key={d.name} item={d} index={i} isDark={isDark} t={t} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEX BSC */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(240,185,11,0.15)' : 'rgba(240,185,11,0.08)', boxShadow: '0 2px 8px rgba(240,185,11,0.08)' }}>
                <Zap className="w-5 h-5" style={{ color: '#f0b90b' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest sub-label" style={{ color: 'rgba(240,185,11,0.5)' }}>BSC</span>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.dex.bsc.title')}</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className={`text-sm mb-6 ml-[52px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('prov.dex.bsc.desc')}</motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dexBsc.map((d, i) => <ProviderCard key={d.name} item={d} index={i} isDark={isDark} t={t} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEX Registration */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#d97706]" />
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.08)', boxShadow: '0 2px 8px rgba(124,58,237,0.08)' }}>
                <Building2 className="w-5 h-5" style={{ color: '#7c3aed' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest sub-label" style={{ color: 'rgba(124,58,237,0.5)' }}>CEX</span>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.cex.title')}</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className={`text-sm mb-6 ml-[52px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('prov.cex.desc')}</motion.p>
            <motion.div variants={fadeUp} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium mb-6 ${isDark ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-700 border border-amber-200/50'}`}>
              <Zap className="w-3.5 h-3.5" />{t('prov.cex.status')}
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cexList.map((cex, i) => (
                <motion.a key={cex.name} href={cex.url} target="_blank" rel="noopener noreferrer" custom={i} variants={fadeUp} whileHover={{ y: -3 }}
                  className={`group rounded-2xl p-5 border transition-all duration-300 block ${isDark ? 'bg-slate-900/60 border-slate-700/40 hover:border-purple-500/30' : 'bg-white border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <Image src={cex.logo} alt={cex.name} width={32} height={32} className="object-contain" unoptimized />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{cex.name}</h3>
                        <ExternalLink className={`w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity ${isDark ? 'text-slate-500' : 'text-slate-300'}`} />
                      </div>
                      <div className="mt-1.5"><ProgressBadge progress={cex.progress} isDark={isDark} /></div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics */}
      <section className="px-4 py-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: isDark ? 'rgba(16,185,129,0.15)' : 'rgba(16,185,129,0.08)', boxShadow: '0 2px 8px rgba(16,185,129,0.08)' }}>
                <BarChart3 className="w-5 h-5" style={{ color: '#10b981' }} />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest sub-label" style={{ color: 'rgba(16,185,129,0.5)' }}>DATA</span>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('prov.analytics.title')}</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className={`text-sm mb-6 ml-[52px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t('prov.analytics.desc')}</motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {analyticsList.map((a, i) => (
                <motion.a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" custom={i} variants={fadeUp} whileHover={{ y: -3 }}
                  className={`group rounded-2xl p-5 border transition-all duration-300 block ${isDark ? 'bg-slate-800/60 border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/80' : 'bg-white border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5'}`}
                  style={{ boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 8px rgba(37,99,235,0.04)' }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white shrink-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <Image src={a.logo} alt={a.name} width={32} height={32} className="object-contain" unoptimized />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{a.name}</h3>
                        <ExternalLink className={`w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity ${isDark ? 'text-slate-500' : 'text-slate-300'}`} />
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t(a.desc)}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}