// some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
var arr = [1, 2, 3, 4, 5]
var arr1 = arr.some(function (item, index, a) {
    return item < 3
})
console.log(arr1)  // true
var arr2 = arr.some(function (item, index, a) {
    return item < 1
})
console.log(arr2)  // false

