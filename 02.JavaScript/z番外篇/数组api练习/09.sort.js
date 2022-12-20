// sort()：对数组元素进行排序，返回排序后的新数组(改变原数组)
// Base
let a = [31, 22, 27, 1, 9]
let result = a.sort()
console.log(result)  // [1, 22, 27, 31, 9]
console.log(a)  // [1, 22, 27, 31, 9]

// More
a = ['c', 'ac', 'ab', 'A1', '1c', 13, 12, '13', '12', '3', '2', '1b', '1a', 1, 'aa', 'a', 3, 'b', 2]
a.sort()
console.log(a) // [1, 12, "12", 13, "13", "1a", "1b", "1c", "2", 2, "3", 3, "A1", "a", "aa", "ab", "ac", "b", "c"]
// 可以看出sort排序是根据每个字符对应的ASCII码值进行排序的，而非值的大小。
// 先比较第一位的ASCII码值，如果第一位的ASCII码值相同，则开始比较第二位的ASCII码值，以此类推
// ASCII码表(http://tool.oschina.net/commons?type=4 + K)
a = [31, 22, 27, 1, 9]
a.sort((a, b) => {
    return a - b
})
console.log(a)  // [1, 9, 22, 27, 31]  按数值大小正序排列

a = [31, 22, 27, 1, 9]
a.sort((a, b) => {
    return b - a
})
console.log(a)  // [31, 27, 22, 9, 1]  按数值大小倒序排列
