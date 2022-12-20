// every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
var arr = [1, 2, 3, 4, 5]
var arr1 = arr.every(function (item, index, a) {
    return item < 10
})
console.log(arr1)  // true
var arr2 = arr.every(item => item < 3)
console.log(arr2)  // false

