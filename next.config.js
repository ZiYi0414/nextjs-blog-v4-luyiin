const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const lessToJS = require('less-vars-to-js');
const isProduction = process.env.NODE_ENV === 'production';
// 每个主应用的baseroute都是不同的，根据 BASE_ROUTE 动态设置baseroute的值
const baseRoute = process.env.BASE_ROUTE || '';
// 根据baseroute设置资源前缀
const assetPrefix = isProduction
  ? `${baseRoute}`
  : `http://localhost:3001${baseRoute}`;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/',
  assetPrefix,
  // 添加 assetPrefix 地址到 publicRuntimeConfig
  publicRuntimeConfig: {
    assetPrefix
  },
  distDir: process.env.DISTDIR || '.next',

  webpack: config => {
    // 'filename' is specific to 'asset/resource' type only, but incompatible with 'asset/inline',
    // see https://webpack.js.org/guides/asset-modules/#custom-output-filename.
    // Here we rename generator['asset'] into generator['asset/resource'] to avoid conflicts with inline assets.
    if (config.module.generator?.asset?.filename) {
      if (!config.module.generator['asset/resource']) {
        config.module.generator['asset/resource'] =
          config.module.generator.asset;
      }
      delete config.module.generator.asset;
    }

    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/[name].css' // this is the secret sauce to play nice with the Next dev server
      })
    );

    // https://www.npmjs.com/package/css-loader
    config.module.rules.push(
      {
        test: /\.(css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(less)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: themeVariables,
                javascriptEnabled: true,
                math: 'always'
              }
            }
          }
        ]
      }
    );

    return config;
  },
  // If you want to use SWC despite the presence of a file you can force it in your file..babelrcnext.config.js
  // https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    forceSwcTransforms: true
  }
};

module.exports = nextConfig;
