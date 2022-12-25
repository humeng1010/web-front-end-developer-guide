import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [search, setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')
    return (
        <ul>
            <li>
                <button className='btn btn-success' onClick={() => setSearch('id=008&title=哈哈&content=hello')}>点我更新收到的search参数</button>
            </li>
            <li>消息编号: {id}</li>
            <li>消息标题: {title}</li>
            <li>消息内容: {content}</li>
        </ul>
    )
}
