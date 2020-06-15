const merge = require('webpack-merge')
const baseConfig = require('./webpack.common.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path');

module.exports = merge(baseConfig, {
  entry: 'src/entry-client.js',
  output: {
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'client_bundle'),
    publicPath:"/"
  },
   // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
  optimization:{
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
        automaticNameDelimiter: '~',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
  },
  plugins: [
   

    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
  ]
})