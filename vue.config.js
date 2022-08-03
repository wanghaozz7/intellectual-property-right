// const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
const path = require('path')

// const name = '知识产权'

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

const port = process.env.port || process.env.npm_config_port || 8080 // dev port
// module.exports = defineConfig({
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    devServer: {
      port: port,
      open: true,
      // overlay: {
      //   warnings: false,
      //   errors: true
      // },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      }),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名
        deleteOriginalAssets: false, // 不删除源文件
        threshold: 10240, // 对超过10k的进行压缩
        minRatio: 0.8 // 压缩比
      })
    ]
  }
}
