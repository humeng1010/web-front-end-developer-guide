
const obj2 = [
    { id: 1, detail: '详情1' },
    { id: 2, detail: '详情2' },
    { id: 3, detail: '详情3' },
]

// 从obj2中查找id等于1的对象
const res = obj2.find(obj => {
    return obj.id === 1
})

console.log(res)