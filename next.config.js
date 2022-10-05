// 每个主应用的baseroute都是不同的，根据 BASE_ROUTE 动态设置baseroute的值
// 根据baseroute设置资源前缀
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/',
  distDir: process.env.DISTDIR || '.next',
};

module.exports = nextConfig;
