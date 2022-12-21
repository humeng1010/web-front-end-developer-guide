import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

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
                            <MyNavLink to="/home/a/b" children="Home" />
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* Switch可以提高匹配效率(单一匹配)，当匹配到一个与路由相对应的组件的时候就不向下匹配了 */}
                                <Switch>
                                    {/* 严格匹配，注意如果没有问题尽量不要开启，可能导致无法访问二级路由 */}
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/about" component={About} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
