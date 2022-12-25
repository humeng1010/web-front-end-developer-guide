import React from 'react'

import { NavLink } from 'react-router-dom'
import Header from './components/Header'

import element from './routes'

export default function App() {
    // 路由表
    // const element = useRoutes(routes)

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                        <NavLink className={'list-group-item'} to={'/about'}>About</NavLink>
                        <NavLink className={'list-group-item'} to={'/home'}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* useRoutes 使用路由表快速生成并且集中管理 */}
                            {element()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
