const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://localhost:8080',
  outputDir: '../backend/static/dist',
  indexPath: '../../templates/base-vue.html',

  devServer : {
    devMiddleware:{
      writeToDisk : filePath => filePath.endsWith("index.html"),
      headers: {"Acess-Control-Allow-Origin":"*"},
      publicPath: "http://localhost:8080",
    },
    hot: 'only',
  }
})
