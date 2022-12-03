const fs = require('fs');

/* fs.readFile('./resource/1.md', (err, data1) => {
    fs.readFile('./resource/2.md', (err, data2) => {
        fs.readFile('./resource/3.md', (err, data3) => {
            let data = data1 + '\r\n' + data2 + '\r\n' + data3
            console.log(data.toString());
        })
    })
}) */

// 使用Promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/1.md', (err, data) => {
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resovle, reject) => {
        fs.readFile('./resource/2.md', (err, data) => {
            resovle([value, data])
        })
    })
}).then(value => {
    return new Promise((resovle, reject) => {
        fs.readFile('./resource/3.md', (err, data) => {
            value.push(data)
            resovle(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})