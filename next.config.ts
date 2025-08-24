import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },images: {
  dangerouslyAllowSVG: true,  // 👈 add this
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/**',
    },
  ],
},
};

export default nextConfig;
