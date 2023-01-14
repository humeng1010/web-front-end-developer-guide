const Koa = require('koa');//node只支持CommonJS,所以我们只可以使用require
const fs = require('fs');//fs是node内置的模块
const path = require('path');
const viteConfig = require('./vite.config')
const aliasResolve = require('./aliasResolve.js');

const app = new Koa();

app.use(async (ctx) => {
    if (ctx.request.url === '/') {
        const indexContent =
            await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
        ctx.response.set("Content-Type", "text/html")
        ctx.response.body = indexContent
    }
    if (ctx.request.url.endsWith('.js')) {
        // 读取请求的文件
        const mainContent =
            await fs.promises.readFile(path.resolve(__dirname, "." + ctx.request.url))
        // console.log(mainContent.toString())
        // 把文件中的路径别名替换为真实的路径
        const lastResult = aliasResolve(viteConfig.resolve.alias, mainContent.toString())
        ctx.response.body = lastResult
        ctx.response.set("Content-Type", "text/javascript")
    }
})
// 开启一个服务,端口号为5173
app.listen(5173, () => {
    console.log('vite dev server listen on 5173')
})