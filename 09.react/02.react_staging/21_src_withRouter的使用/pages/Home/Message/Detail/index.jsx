import React, { Component } from 'react'
// import qs from 'qs'

const detailData = [
    { id: 1, content: '你好001' },
    { id: 2, content: '你好002' },
    { id: 3, content: '你好003' },
]
export default class Detail extends Component {
    render() {
        // console.log(this.props);
        // 连续解构赋值获取 后面的或空对象是指如果没有了缓存和历史记录那么location对象上就没有state对象
        // 则state对象为undefined 从undefined身上解构赋值取不到值 则会报错
        // const { id, title } = this.props.match.params || {}
        // 或空对象 一样也是防止 not find 报错
        const { id, title } = this.props.location.state
        // const { id, title } = qs.parse(search.slice(1))
        const findResult = detailData.find(detailObj => detailObj.id === parseInt(id))
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult?.content}</li>
            </ul>
        )
    }
}
