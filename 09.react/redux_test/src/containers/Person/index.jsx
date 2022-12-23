import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const { value: name } = this.name
        const { value: age } = this.age
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)

    }
    render() {
        return (
            <div>
                <input type="text" ref={c => this.name = c} placeholder='请输入姓名' />
                <input type="text" ref={c => this.age = c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map(
                            p => <li key={p.id}>{p.name}---{p.age}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    ({ person }) => ({ person }),
    {
        addPerson
    }
)(Person)