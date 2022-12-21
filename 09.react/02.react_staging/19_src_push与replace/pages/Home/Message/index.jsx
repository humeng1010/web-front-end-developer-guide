import React, { Component } from 'react'

import { Link, Route } from 'react-router-dom'

import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: 1, title: 'message01' },
            { id: 2, title: 'message02' },
            { id: 3, title: 'message03' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    {/* 编写路由链接并且传递state参数(注意这个state就是个属性，根组件的state没有任何关系) */}
                                    <Link replace to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 注意 state参数无需声明接收 */}
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}
