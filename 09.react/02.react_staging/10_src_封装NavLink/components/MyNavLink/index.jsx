import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
    console.log(props);
    /* return (
        <NavLink
            to={props.to}
            // activeClassName="active"//默认就是active
            className='list-group-item'
        // style={{ color: 'red' }}
        >
            {props.children}
        </NavLink>
    ) */
    // 或者直接这样简写 使用jsx的展开运算符把对象的属性展开为属性
    return (
        <NavLink {...props} className='list-group-item' />
    )
}
