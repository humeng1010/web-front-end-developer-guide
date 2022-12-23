import React, { Component } from 'react'

import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount() {
        console.log('Home componentDidMount');
        const test = sessionStorage.getItem('test')
        this.test.value = test
    }
    componentWillUnmount() {
        console.log('Home componentWillUnmount');
        const { value } = this.test
        sessionStorage.setItem('test', value)
    }
    render() {
        const { person } = this.props
        return (
            <div>
                <h2>好友展示</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {
                        person.map(p => <li style={{ borderBottom: '1px solid #000' }} key={p.id}>{p.name}</li>)
                    }
                </ul>
                <input ref={c => this.test = c} type="text" name="" id="" />
            </div>
        )
    }
}

export default connect(
    ({ person }) => ({ person })
)(Home)
