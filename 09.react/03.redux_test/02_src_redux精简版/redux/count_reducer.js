/* 
    1.该文件是为了创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接收到两个参数，分别为：preState之前的状态，action动作对象
*/

// 初始化的值
const initState = 0
export default function countReducer(preState = initState, action) {
    // console.log(preState)
    // 从action对象中获取：type、data
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        // +
        case 'increment':
            return preState + data
        // -
        case 'decrement':
            return preState - data
        // 初始化
        default:
            return preState
    }

}