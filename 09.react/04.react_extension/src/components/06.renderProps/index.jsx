import React, { Component } from 'react'
import './index.css'
export default class A extends Component {
    render() {
        return (
            <div className='one'>
                <h2>
                    AAAAAAA
                </h2>
                {/* 在A组件中建立B组件和C组件的联系 */}
                <B render={(msg) => <C msg={msg} />} >BBBBBBBBB</B>
            </div>
        )
    }
}


class B extends Component {
    state = {
        msg: 'CCCCCCC'
    }
    render() {
        return (
            <div className='tow'>
                <h2>
                    {/* BBBBBBBBB */}
                    {this.props.children}
                </h2>
                {/* <C /> */}
                {/* 这就相当于插槽，预留一个位置，让C组件插入其中 */}
                {this.props.render(this.state.msg)}
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div className='three'>
                <h2>
                    {this.props.msg}
                </h2>
            </div>
        )
    }
}

