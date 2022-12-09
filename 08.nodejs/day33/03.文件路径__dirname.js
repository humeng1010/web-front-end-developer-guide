console.log(__dirname);
// /Users/humeng / Github / mycode / 08.nodejs / day33
console.log(__filename);
// / Users / humeng / Github / mycode / 08.nodejs / day33 / 03.文件路径__dirname.js

const fs = require('fs');

fs.readFile(__dirname + "/../resource/01.md", (err, data) => {
    if (err) {
        console.log(err.message);
        return
    }
    console.log(data.toString());
})