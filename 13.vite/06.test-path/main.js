/**
 * 一定会去读文件
 * 我们如果写的是相对路径 那么他会尝试去拼接成绝对路径
 * 
 */
const fs = require('fs')//读文件,修改文件,等一系列操作
const path = require('path');

const res = fs.readFileSync(path.resolve(__dirname, "./variable.css"))

console.log("res", res.toString())
// process.cwd()获取当前node执行目录
// __dirname可以获取当前main.js文件处于的路径
console.log('process.cwd()', process.cwd(), '\ndirname', __dirname, '\npath.resolve(__dirname, "./variable.css")', path.resolve(__dirname, "./variable.css"))