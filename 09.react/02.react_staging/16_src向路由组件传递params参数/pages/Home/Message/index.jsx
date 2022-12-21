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
                                    {/* 编写路由链接并且传递params参数的值 */}
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由并且声明params的变量，注意是对应的关系 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
            </div>
        )
    }
}
