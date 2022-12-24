import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state = {
        msg: 'App',
        hasError: ''
    }
    // 当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息，而且需要返回一个对象
    static getDerivedStateFromError(error) {
        return { hasError: error }
    }
    componentDidCatch() {
        console.log('通知服务器当前组件的子组件接收到的数据有误');
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {this.state.hasError ? <h4 className='text-muted'>当前网络不稳定</h4> : <Child />}
                <div className="row">

                    <p style={{ position: 'fixed', bottom: '0px', margin: '0', padding: '0' }} className='bg-info text-danger'>演示错误边界的案例,如果list组件中的请求回来的数据不符合规定，会引发map函数的调用错误,会引起整个App出现报错Error,所以我们需要在父组件上添加错误边界的代码</p>
                </div>
            </div>
        )
    }
}
