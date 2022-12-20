//reverse()：反转数组，返回反转后的新数组(改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.reverse()
console.log(result)
console.log(a)

// More
a = [1, [2, 3], [4, 5]]
result = a.reverse()
console.log(result)   // [[4, 5], [2, 3], 1]
console.log(a)        // [[4, 5], [2, 3], 1]
// 可以看到这里的反转只是基于数组的第一层，属于浅反转

// 一个简单的深反转需要使用递归实现
const deepReverse = (array) => {
    let temp = array.reverse()
    temp.forEach(v => {
        if (Object.prototype.toString.call(v) === '[object Array]') {
            deepReverse(v)
        }
    })
    return temp
}
a = [1, [2, 3], [4, 5]]
result = deepReverse(a)
console.log(result)  // [[5, 4], [3, 2], 1]
