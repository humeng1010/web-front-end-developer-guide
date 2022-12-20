// shift()：删除数组中第一个元素，返回被删除的元素(改变原数组)
// Base
let a = [5]
let result = a.shift()
console.log(result)// 5
console.log(a)// []

// More
result = a.shift()// 数组为空数组后，执行shift()方法，返回undefined
console.log(result)// undefined
console.log(a)// []