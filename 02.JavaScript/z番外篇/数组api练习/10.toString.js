// toString()：将数组中的元素用逗号拼接成字符串，返回拼接后的字符串(不改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.toString()
console.log(result)  // 1,2,3,4,5
console.log(a)  // [1, 2, 3, 4, 5]

// 除了toString()方法之外，String()方法也可以将数组转换成字符串
result = String(a)
console.log(result)  // 1,2,3,4,5
