// map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组
const arr = [1, 2, 3, 4, 5]
// 对arr中每一个数进行2次幂运算
const newArr = arr.map(item => {
    return item * item
})
console.log(arr1)  // [1, 4, 9, 16, 25]
