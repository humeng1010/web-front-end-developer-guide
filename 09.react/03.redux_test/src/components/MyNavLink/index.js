import { NavLink } from 'react-router-dom'

import React, { Component } from 'react'

export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink className={'btn btn-success'} activeStyle={{ color: '#6cf' }} {...this.props}>{this.props.children}</NavLink>
        )
    }
}
