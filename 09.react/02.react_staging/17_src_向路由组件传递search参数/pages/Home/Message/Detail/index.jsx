import React, { Component } from 'react'
// import qs from 'qs'

const detailData = [
    { id: 1, content: '你好001' },
    { id: 2, content: '你好002' },
    { id: 3, content: '你好003' },
]
export default class Detail extends Component {
    render() {
        // 获取search字符串
        let { search } = this.props.location
        // console.log(search);
        // 第三方库 qs
        // const r = qs.parse(search)
        // console.log(r);

        const res = {}
        // 自己截取
        search.substring(1).split('&').map(item => item.split('=')).forEach(i => res[i[0]] = i[1])
        // console.log(res);
        // 从res对象中取出search参数
        const { id, title } = res
        // 接收search参数

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
