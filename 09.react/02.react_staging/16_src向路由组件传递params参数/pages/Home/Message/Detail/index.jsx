import React, { Component } from 'react'

const detailData = [
    { id: 1, content: '你好001' },
    { id: 2, content: '你好002' },
    { id: 3, content: '你好003' },
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收params参数
        const { id, title } = this.props.match.params
        const findResult = detailData.find(detailObj => {
            return detailObj.id === parseInt(id)
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
