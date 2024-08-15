/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        if (options.nextRuntime === 'edge') {
          config.resolve.fallback = {
            ...config.resolve.fallback,
            crypto: 'crypto-browserify',
            stream: 'stream-browserify',
          };
        }
        return config;
    },
  };
  
export default nextConfig;
