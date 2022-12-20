// lastIndexOf(value)：从最后的索引开始，检查数组找那个是否包含value，有则返回匹配到的第一个索引，没有返回-1(不改变原数组)
// Base
let a = [1, 2, 3, 2, 5]
let result = a.lastIndexOf(2)
console.log(result)  // 3
console.log(a)  // [1, 2, 3, 4, 5]

result = a.lastIndexOf(6)
console.log(result)  // -1
console.log(a)  // [1, 2, 3, 4, 5]

