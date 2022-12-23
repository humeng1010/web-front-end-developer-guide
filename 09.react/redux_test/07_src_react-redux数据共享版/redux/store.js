/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store
 */
// 引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action(即action是一个函数)
import thunk from 'redux-thunk'
// 汇总所有的reducer变为一个总的reducers
const allReducers = combineReducers({
    count: countReducer,
    persons: personReducer
})
export default createStore(allReducers, applyMiddleware(thunk))