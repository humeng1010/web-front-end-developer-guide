import React, { Component } from 'react'

import './index.css'
export default class List extends Component {
    render() {
        const { items, isFirst, isLoading, err } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2 style={{ color: '#666' }}>输入关键字，搜索用户</h2> :
                        isLoading ? <h2 style={{ color: 'green' }}>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                items.length === 0 ? <h2 style={{ color: 'orange' }}>没有搜索到耶</h2> :
                                    items.map(item => {
                                        return (
                                            <div className="card" key={item.id}>
                                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                                    <img alt='avatar' src={item.avatar_url} style={{ width: '100px' }} />
                                                </a>
                                                <p className="card-text">{item.login}</p>
                                            </div>
                                        )
                                    })
                }
            </div>
        )
    }
}
