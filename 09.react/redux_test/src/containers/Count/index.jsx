import React, { Component } from 'react'

import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'
class Count extends Component {
    increment = () => {
        this.props.increment(1)
    }
    decrement = () => {
        this.props.decrement(1)
    }
    incrementAsync = () => {
        this.props.incrementAsync(1, 1000)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
                <button onClick={this.increment}>点我+1</button>
                <button onClick={this.decrement}>点我-1</button>
                <button onClick={this.incrementAsync}>点我等1秒再+1</button>
            </div>
        )
    }
}

export default connect(
    ({ count }) => ({ count }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)