const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出路径
    output: {
        filename: 'bundle.js',
        // 必须是绝对路径,使用到了nodejs的path内置api进行路径的拼接
        path: path.resolve(__dirname, './dist'),
        // 清理上次打包生成的文件
        clean: true
    },

    // 暂时先配置none,否则会出现警告
    mode: 'none',

    // 插件
    plugins: [
        // html打包插件:解决引入资源
        new HtmlWebpackPlugin({
            // 根据当前的index.html生成模板
            template: './index.html',
            // 打包后的html文件名
            filename: 'app.html',
            // 生成的script标签的位置
            inject: 'body'
        })
    ]

}