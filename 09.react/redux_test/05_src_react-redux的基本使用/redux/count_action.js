/* 
为count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

//同步的action就是指action的值是一个对象 
export const createIncrementAction = (data) => ({ type: INCREMENT, data })

export const createDecrementAction = (data) => ({ type: DECREMENT, data })

// 异步action就是指action的值是一个函数，
// 然后我们引入redux-thunk中间件并且使用后，store就会帮我们调用这个函数
// 异步action中一般都会调用同步action

// 模拟一个场景，如果我们去饭店吃饭，点了饭没有说什么时候要(相当于action就是一个对象)，老板(store)就会直接让厨师(reducer)干活
// 如果老板这里有了VIP服务(store使用了thunk中间件)，那么老板(store)可以接收顾客的预约(action是一个函数)，
// 老板对这个预约计时(store会执行这个函数，等异步任务完成后，再通知厨师干活)
export const createIncrementAsyncAction = (data, delay) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, delay);
    }
}