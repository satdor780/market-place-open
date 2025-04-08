import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.kwcdn.com',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: { icon: true } }],
        })
        return config;
    },
    devIndicators: false
};

export default nextConfig;
