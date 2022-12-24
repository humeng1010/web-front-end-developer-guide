import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // 模拟后端发送的正确的数据
        /* data: [
            { id: 1, name: '张三', age: 23 },
            { id: 2, name: '张四', age: 24 },
            { id: 3, name: '张五', age: 25 },
            { id: 4, name: '张六', age: 26 },
        ] */

        // 错误的数据
        data: 'abc'
    }
    render() {
        return (
            <div>
                <h2>list</h2>
                <ul>
                    {
                        this.state.data.map(p => <li key={p.id}>{p.name}----{p.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}
