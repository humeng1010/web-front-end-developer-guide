import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 对象式的setState
        /* const { count } = this.state
        // setState是一个异步的更新，第二个参数是一个回调函数，当react改完了状态并且调用了render后才会调用
        this.setState({ count: count + 1 }, () => {
            console.log('2@@', this.state.count);
        })
        console.log('1@@', this.state.count) */

        // 函数式的setState
        /* this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1 }
        }) */
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
}
