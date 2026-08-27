import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's2.coinmarketcap.com' },
      { protocol: 'https', hostname: 'nesgswap.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'static.coingecko.com' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'kyberswap.com' },
      { protocol: 'https', hostname: 'encrypted-tbn.gstatic.com' },
      { protocol: 'https', hostname: 'coinmarketcap.com' },
      { protocol: 'https', hostname: 'static.coinpaprika.com' },
      { protocol: 'https', hostname: 'cryptologos.cc' },
      { protocol: 'https', hostname: 'defillama.com' },
    ],
  },
};
export default nextConfig;