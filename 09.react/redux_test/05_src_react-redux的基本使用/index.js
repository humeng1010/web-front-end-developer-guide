import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// 监测redux中的状态的改变，如果redux中的状态发生了改变，则会执行这个方法中的回调函数重新渲染App组件
store.subscribe(() => {
    root.render(<App />)
})