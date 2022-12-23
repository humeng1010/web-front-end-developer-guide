import { ADD_PERSON } from '../constant'

const initState = [
    { id: '001', name: '张三', age: 20 },
    { id: '002', name: '张三', age: 20 },
    { id: '003', name: '张三', age: 20 },
]

export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}