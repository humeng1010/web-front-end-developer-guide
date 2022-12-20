// indexOf(value)：从索引为0开始，检查数组中是否包含有value，有则返回匹配到的第一个索引，没有则返回-1(不改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.indexOf(2)
console.log(result)  // 1
console.log(a)  // [1, 2, 3, 4, 5]

result = a.indexOf(6)
console.log(result)  // -1
console.log(a)  // [1, 2, 3, 4, 5]

