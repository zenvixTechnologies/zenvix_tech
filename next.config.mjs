/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enables React <ViewTransition> for route + shared-element (project image) morphs.
    viewTransition: true,
  },
  images: {
    // AVIF first (typically 20-30% smaller than WebP), WebP fallback for older browsers.
    formats: ["image/avif", "image/webp"],
    // Optimised images are keyed by the source file's size + mtime, so replacing an
    // asset still produces a fresh variant; 30 days avoids needless re-encoding.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
