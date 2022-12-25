import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const navigate = useNavigate()
    const [messages] = useState([
        { id: '001', title: '消息1', content: '你好' },
        { id: '002', title: '消息2', content: '我不好' },
        { id: '003', title: '消息3', content: '不，你好得很' },
    ])
    function showDetail(message) {
        navigate('detail', {
            replace: false,
            state: {
                id: message.id,
                title: message.title,
                content: message.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    // 生成路由链接
                    messages.map(message => (
                        <li key={message.id}>
                            <Link to={'detail'} state={
                                {
                                    id: message.id,
                                    title: message.title,
                                    content: message.content
                                }
                            }>{message.title}</Link>
                            <button onClick={() => showDetail(message)}>查看详情</button>
                        </li>
                    ))
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
