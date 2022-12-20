// filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 获取arr中偶数
const arr = arrays.filter(array => {
    return array % 2 === 0
})
console.log(arr)//[ 2, 4, 6, 8 ]
console.log(arrays)//[1, 2, 3, 4, 5, 6, 7, 8, 9]