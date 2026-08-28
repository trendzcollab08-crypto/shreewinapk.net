import type { NextConfig } from 'next';

const staticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  output: staticExport ? 'export' : undefined,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: staticExport,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
