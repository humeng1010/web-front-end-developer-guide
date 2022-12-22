import React, { Component } from 'react'

export default class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
    }
    decrement = () => {
        const { value } = this.selectNumber
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber

    }
    incrementAsync = () => {
        const { value } = this.selectNumber


    }
    render() {
        return (
            <div>
                <h2>当前求和为:???</h2>
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
