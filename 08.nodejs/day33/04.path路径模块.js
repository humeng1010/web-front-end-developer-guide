const fs = require('fs');
const path = require('path');

const dirname = __dirname
console.log(dirname);

// path.join(...paths: string[])拼接路径
let src = path.join(dirname, "../", "/resource", "/01.md")
console.log(src);


fs.readFile(path.join(dirname, "../", "/resource", "/01.md"), (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data.toString());
})

// 获取完整文件名
const fname = path.basename(__filename)
console.log(fname);
//去除扩展名
console.log(path.basename(__filename, ".js"));
// 获取文件的扩展名
console.log(path.extname(__filename));