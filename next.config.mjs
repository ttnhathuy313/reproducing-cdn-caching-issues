import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
		return [
		  {
			source: '/product/:path*',
			headers: [
			  {
				key: 'Netlify-CDN-Cache-Control',
				value: 'public, durable, max-age=86400, stale-while-revalidate=120',
			  },
			],
		  },
		];
	  },
};

export default nextConfig;
