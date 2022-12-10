// 1.导入http模块
const http = require('http');

// 2.创建web服务器实例
const server = http.createServer()

// 3.为服务绑定 request 事件 监听客户端的请求
server.on("request", (request, response) => {
    console.log("this server is running");
    const url = request.url
    const method = request.method
    const str = `你的请求路径为${url},请求方式为${method}`
    console.log(str);

    response.setHeader("Content-Type", "text/html;charset=utf-8")

    if (url === "/" || url === "/index.html") {
        response.end("<h1>首页</h1>")
    } else if (url === "/about.html") {
        response.end("<h1>关于页面</h1>")
    } else {
        response.statusCode = 404
        response.end("<h1>404NotFound</h1>")
    }


})

// 4.启动服务器
server.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})