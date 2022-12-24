import React, { Component } from 'react'
import Demo from './components/07.ErrorBoundary/Parent'
export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Demo {...this.props} />
            </div>
        )
    }
}
