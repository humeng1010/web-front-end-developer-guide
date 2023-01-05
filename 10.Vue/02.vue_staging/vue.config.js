const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* pages: {
    index: {
      // 配置入口文件
      entry: 'src/main.js'
    }
  } */
  // 关闭语法检查
  lintOnSave: false,
  // 方式一
  /* devServer: {
    proxy: "http://localhost:5000"
  } */
  // 方式二
  devServer: {
    proxy: {
      '/api1': {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api1': '' }
      },
      '/api2': {
        target: "http://localhost:5001",
        pathRewrite: { '^/api2': '' }
      }
    }
  }
})
