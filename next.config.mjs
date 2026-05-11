const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.stablecog.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freetogame.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig