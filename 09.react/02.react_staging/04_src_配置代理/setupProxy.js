// 现在需要这样写，内部使用了分别暴露，我们只需引入createProxyMiddleware
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {//遇到/api1的请求前缀，就会触发该代理配置
            target: 'http://localhost:5000',//请求转发给谁
            changeOrigin: true,//控制服务器收到请求头中的Host值
            pathRewrite: { '^/api1': '' }//重写请求路径(必须)
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )

}