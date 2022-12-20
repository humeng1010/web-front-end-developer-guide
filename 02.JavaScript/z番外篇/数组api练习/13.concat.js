// concat(value)：将数组和(或)值连接成新数组，返回新数组(不改变原数组)
// Base
let a = [1, 2], b = [3, 4], c = 5
let result = a.concat(b, c)
console.log(result)  // [1, 2, 3, 4, 5]
console.log(a)  // [1, 2]

// More
b = [3, [4]]
result = a.concat(b, c)
console.log(result)  // [1, 2, 3, [4], 5]  concat对于嵌套数组无法拉平
console.log(a)  // [1, 2]

// ES6的展开运算符合并数组
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]
// 合并arr1和arr2并新增且排序
console.log([...arr1, ...arr2, 7, 8, 9].sort((a, b) => a - b))
