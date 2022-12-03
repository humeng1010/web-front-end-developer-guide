// 1.引入fs模块
const fs = require('fs')

// 2.调用方法读取文件
/* fs.readFile('./resource/木兰诗.md', (err, data) => {
    // 如果失败则抛出错误
    if (err) throw err
    // 如果没有出错 则输出内容
    console.log(data.toString());
}) */

// 使用Promise封装

const p = new Promise(function (resolve, reject) {
    fs.readFile('./resource/木兰诗.md', (err, data) => {
        // 如果读取失败 则调用reject 改变为Promise状态为onrejected
        if (err) reject(err)
        // 如果成功则调用resolve 改变为Promise状态为onfulfilled
        resolve(data)
    })
})

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败');
})
