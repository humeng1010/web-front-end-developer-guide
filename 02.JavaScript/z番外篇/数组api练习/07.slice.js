//slice(start, end)：获取子数组，包含原数组索引start的值到索引end的值，不包含end，返回获取的子数组(不改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.slice(2, 4)
console.log(result)  // [3, 4]
console.log(a)       // [1, 2, 3, 4, 5]

// More
console.log(a.slice(1))       // [2, 3, 4, 5]  只有一个参数且不小于0时，则从此索引开始截取到数组的末尾
console.log(a.slice(-1))      // [5]  只有一个参数且小于0时，则从倒数|start|位截取到数组的末尾
console.log(a.slice(-1, 1))   // []   反向截取，不合法，返回空数组
console.log(a.slice(1, -1))   // [2, 3, 4]  从第1位截取到倒数第1位
console.log(a.slice(-1, -2))  // []   反向截取，不合法，返回空数组
console.log(a.slice(-2, -1))  // [4]  倒数第2位截取到倒数第1位
