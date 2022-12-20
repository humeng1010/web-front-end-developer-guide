import React, { Component } from 'react'

import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = async () => {
        // 获取用户的输入，连续解构赋值+重命名
        const { keyWordElement: { value: keyWord } } = this
        if (!keyWord.trim()) return alert('请输入内容')
        // 发送请求前通知List更新状态
        // this.props.updateAppState({ isFirst: false, isLoading: true })
        PubSub.publish('updateState', { isFirst: false, isLoading: true })
        try {
            // 发送网络请求
            const res = await axios({
                method: 'GET',
                url: '/api1/search/users',
                params: {
                    q: keyWord
                }
            })
            // 请求成功更新List状态
            // this.props.updateAppState({ isLoading: false, items: res.data.items })
            PubSub.publish('updateState', { isLoading: false, items: res.data.items })
        } catch (err) {
            // 请求失败后通知List更新状态
            // this.props.updateAppState({ isLoading: false, err: err.message })
            PubSub.publish('updateState', { isLoading: false, err: err.message })
        }
    }
    search2 = (e) => {
        if (e.keyCode === 13) {
            this.search()
            this.keyWordElement.value = ''
            // this.keyWordElement.attributes.placeholder.value = '继续'
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input autoFocus={true} onKeyUp={this.search2} ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <div onClick={this.search} className="btn btn-success">Search</div>
                </div>
            </section>
        )
    }
}
