const path = require('path')
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出路径
    output: {
        filename: 'bundle.js',
        // 必须是绝对路径,使用到了nodejs的path内置api进行路径的拼接
        path: path.resolve(__dirname, './dist')
    },

    mode: 'none'

}