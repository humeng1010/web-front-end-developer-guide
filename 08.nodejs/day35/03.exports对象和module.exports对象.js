const { username } = require("./01.模块作用域");

console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);//true

// so we can use 'exports' object to replace 'module.exports' object to be esay

exports.username = '张三'

exports.sayHello = function () {
    console.log(`你好${username}`);
}