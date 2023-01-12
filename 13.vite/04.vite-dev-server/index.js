const Koa = require('koa');//node只支持CommonJS,所以我们只可以使用require
const fs = require('fs');//fs是node内置的模块
const path = require('path');

const app = new Koa();// const vue = new Vue();

// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => {//ctx上下文
    console.log("ctx", ctx.request, ctx.response)
    if (ctx.request.url === '/') {
        // 向根目录请求内容,我使用fs模块读取文件内容
        const indexContent =
            await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
        console.log(indexContent.toString())
        // 设置响应头的内容类型格式为html格式
        ctx.response.set("Content-Type", "text/html")
        // 设置响应体
        ctx.response.body = indexContent
    }
    if (ctx.request.url === '/main.js') {
        const mainContent =
            await fs.promises.readFile(path.resolve(__dirname, "./main.js"))
        console.log('mainJS', mainContent.toString())
        // 设置响应头的内容类型格式为js格式,让浏览器使用js的格式去解析
        ctx.response.set("Content-Type", "text/javascript")
        // 设置响应体
        ctx.response.body = mainContent
    }
    if (ctx.request.url === '/App.vue') {
        const mainVueContent =
            await fs.promises.readFile(path.resolve(__dirname, "./App.vue"))
        // 如果是Vue文件,会做一个字符串替换: 如果匹配到了<template>直接进行全部的字符串的替换

        // 设置响应类型,告诉浏览器即使看到的是.vue的文件,也使用JS的方式去解析!!所以这就是浏览器能够识别.vue文件中js代码的原因
        // 浏览器并不会看文件的后缀,在浏览器眼里,所有的文件都是字符串,我们只有设置了响应类型,浏览器才会使用该类型解析
        ctx.response.set("Content-Type", "text/javascript")
        // 设置响应体
        ctx.response.body = mainVueContent
    }

})
// 开启一个服务,端口号为5173
app.listen(5173, () => {
    console.log('vite dev server listen on 5173')
})