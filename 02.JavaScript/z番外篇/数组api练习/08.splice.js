// splice(index, count, value1, value2....)：从索引位index处删除count个元素，插入value1, value2等元素，返回被删除的元素组成的新数组(改变原数组)
// Base
let a = [1, 2, 3, 4, 5]
let result = a.splice(1, 2, 0)
console.log(result)  // [2, 3]
console.log(a)  // [1, 0, 4, 5]

// More
a = [1, 2, 3, 4, 5]
console.log(a.splice(-2))  // [4, 5]  当参数为单个且小于0时，将截取从倒数|index|位到数组的末尾
console.log(a)             // [1, 2, 3]

a = [1, 2, 3, 4, 5]
console.log(a.splice(-1))  // [5]  当参数为单个且小于0时，将截取从倒数|index|位到数组的末尾
console.log(a)             // [1, 2, 3, 4]

a = [1, 2, 3, 4, 5]
console.log(a.splice(0))  // [1, 2, 3, 4, 5] 当参数为单个且不小于0时，将截取从index位到数组的末尾
console.log(a)            // []

a = [1, 2, 3, 4, 5]
console.log(a.splice(1))  // [2, 3, 4, 5]  当参数为单个且不小于0时，将截取从index位到数组的末尾
console.log(a)            // [1]

a = [1, 2, 3, 4, 5]
console.log(a.splice(-1, 2))   // [5]  从倒数第1位开始截取两个元素
console.log(a)                 // [1, 2, 3, 4]

a = [1, 2, 3, 4, 5]
console.log(a.splice(0, 2, 'a', 'b', 'c'))  // [1, 2]
console.log(a)  // ['a', 'b', 'c', 3, 4, 5]  截取后将value值依次填充到截取位置处，旧值被向后顺移
