import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// 引入路由组件
import Home from './pages/Home'
import About from './pages/About'

// 引入一般组件
import Header from './components/Header'
// 引入二次封装的NavLink
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header name={"a"} />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中靠a标签跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在react中靠路由链接切换组件 -- 编写路由链接 */}
                            <MyNavLink to="/home" children="Home" />
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
