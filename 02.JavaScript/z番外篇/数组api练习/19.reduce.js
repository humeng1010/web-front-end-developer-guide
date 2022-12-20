// reduce():接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
// 语法：
// array.reduce(function (previousValue, currentValue, currentIndex, arr), initialValue)

// 如果initialValue省略，则previousValue和currentValue分别为数组中的第一项元素和第二项元素；
// 如果initialValue存在，则previousValue为initialValue，而currentValue为数组中的第一项

// 注意: reduce() 对于空数组是不会执行回调函数的

var arr = [1, 2, 3, 4, 5]

var result1 = arr.reduce((previousValue, currentValue, index, arr) => {
    return previousValue + currentValue
}, 10)

// 10+1+2+3+4+5=25
console.log('result1:', result1) // 25

var result2 = arr.reduce((previousValue, currentValue, index, arr) => {
    return previousValue + currentValue
})
// 1+2+3+4+5
console.log('result2:', result2) // 15
