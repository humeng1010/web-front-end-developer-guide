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

    replaceShow = (id, title) => {
        // 编程式实现replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转实现query参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace跳转实现state参数
        this.props.history.replace(`/home/message/detail`, { id, title })


    }
    pushShow = (id, title) => {
        // 编程式实现push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转实现query参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push跳转实现state参数
        this.props.history.push(`/home/message/detail`, { id, title })

    }

    back = () => {
        this.props.history.goBack()
    }
    forWard = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
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
                                    <Link to={{
                                        pathname: `/home/message/detail`,
                                        state: {
                                            id: msg.id,
                                            title: msg.title
                                        }
                                    }}>{msg.title}</Link>
                                    &nbsp;<button onClick={() => this.pushShow(msg.id, msg.title)}>push查看</button>
                                    &nbsp;<button onClick={() => this.replaceShow(msg.id, msg.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
                <Route path="/home/message/detail" component={Detail}></Route>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forWard}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
