import React, { Component, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Count from './containers/Count'
import Person from './containers/Person'
import Home from './pages/Home'
import Recommend from './pages/Recommend'

import app from './App.module.css'
import Message from './pages/Message'
import Me from './pages/Me'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Count />
                <hr />
                <Person />
                <hr />
                <div className={app.nav}>
                    <MyNavLink to={{ pathname: '/home' }} >首页</MyNavLink>
                    <MyNavLink to={'/recommend'}>推荐</MyNavLink>
                    <MyNavLink to={'/message'}>信息</MyNavLink>
                    <MyNavLink to={'/me'}>我的</MyNavLink>

                </div>

                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>

                        <Route path='/home' component={Home} />
                        <Route path={'/recommend'} component={Recommend} />
                        <Route path={'/message'} component={Message} />
                        <Route path={'/me'} component={Me} />
                        <Redirect to={'/home'} />
                    </Suspense>
                </Switch>

            </div >
        )
    }
}


