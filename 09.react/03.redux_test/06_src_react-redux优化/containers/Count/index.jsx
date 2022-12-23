// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 引入create_action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

import React, { Component } from 'react'

class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.add(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.sub(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.add(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.addAsync(value * 1, 500)


    }
    render() {
        return (
            <div>
                <h2>当前求和为:{this.props.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前是奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

export default connect(
    // mapStateToProps
    state => ({ count: state }),
    // mapDispatchToProps的一般写法
    /* dispatch => (
        {
            add: data => dispatch(createIncrementAction(data)),
            sub: data => dispatch(createDecrementAction(data)),
            addAsync: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
        }
    ) */
    // mapDispatchToProps的简写方式——>直接写成对象 内部会自动调用dispatch，无序我们手动调用
    {
        add: createIncrementAction,
        sub: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)
