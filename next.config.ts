import type { NextConfig } from 'next';
const nextConfig: NextConfig = { output: 'standalone', typescript: { ignoreBuildErrors: true }, serverExternalRuntime: false, }; export default nextConfig;