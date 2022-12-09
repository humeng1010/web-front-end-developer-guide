// 1.引入fs模块
const fs = require('fs')

// 2.使用readfile读取文件内容
fs.readFile("../resource/01.md", (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data.toString());
})
