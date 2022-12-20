// push()：将value添加到数组的最后，返回新数组的长度(改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.push(1)
console.log(result)    // 6
console.log(a)         // [1, 2, 3, 4, 5, 1]

// More
result = a.push('a', 'b')      // 可一次添加多个值
console.log(result)            // 8
console.log(a)                 // [1, 2, 3, 4, 5, 1, 'a', 'b']
