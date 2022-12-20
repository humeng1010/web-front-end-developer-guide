import React, { Component } from 'react'

import Search from './components/Search'

import List from './components/List'


export default class App extends Component {
    state = {
        items: [],
        isFirst: true,//是否为第一次打开页面
        isLoading: false,//是否处于加载中
        err: '',//存储请求相关的错误信息
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
