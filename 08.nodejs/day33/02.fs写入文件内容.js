const fs = require('fs');

// 使用readFile写入内容
// 参数一路径
// 参数二写入的内容
// 参数三编码 默认utf-8
// 参数四回调函数
fs.writeFile("../resource/02.md", "我是第二个文件222", "utf-8", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("文件写入成功");
})

fs.appendFile("../resource/01.md", "111", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("追加数据成功");
})