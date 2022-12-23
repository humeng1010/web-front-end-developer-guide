import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'

import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const { value: name } = this.nameNode
        const { value: age } = this.ageNode
        // console.log(name, age);
        const personObj = { id: nanoid(), name, age }
        console.log(personObj);
        this.props.add(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        console.log(this.props);
        const { persons } = this.props
        return (
            <div>
                <h2>我是Person组件,Count组件总和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" name="name" placeholder='输入姓名' />
                <input ref={c => this.ageNode = c} type="text" name="age" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        persons.map(person => <li key={person.id}>{person.name}---{person.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    // 参数一，函数，可以接收到state参数，从state中解构赋值出来person和count的状态
    // 并作为函数对象的key和value返回到PersonUI组件的props中
    ({ persons, count }) => ({ persons, count }),
    {
        add: createAddPersonAction
    }
)(Person)