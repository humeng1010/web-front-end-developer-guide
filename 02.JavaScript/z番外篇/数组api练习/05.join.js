//join(value)：将数组用value连接为字符串，返回被连接后的字符串(不改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.join()
console.log(result)// 1,2,3,4,5

result = a.join('')
console.log(result)//12345

result = a.join(',')
console.log(result)//1,2,3,4,5

result = a.join('&')
console.log(result)//1&2&3&4&5

// More
const obj = {
    // 重写toString
    toString() {
        console.log('调用了对象的toString方法')
        return 'a'
    },
    toValue() {
        console.log('调用了toValue()方法！')
        return 'b'
    }
}

result = a.join(obj)//使用对象时会调用对象自身的toString方法，我们这里重写了toString使其返回a
console.log(result)//1a2a3a4a5a
console.log(a)//[ 1, 2, 3, 4, 5 ]

// 数组中的join()方法相对的一个方法是字符串的split()方法
let arr = result.split('a')
console.log(arr)//['1', '2', '3', '4', '5']