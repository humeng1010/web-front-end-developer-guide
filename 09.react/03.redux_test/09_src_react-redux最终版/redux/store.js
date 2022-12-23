// 该文件专门用于暴露一个store对象，整个应用只有一个store
// 引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 引入redux-thunk，用于支持异步action(即action是一个函数)
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入汇总之后的reducers
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))