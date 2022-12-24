import React, { useState, useEffect, useRef } from 'react'
// 类式组件
/* class Demo extends React.Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
} */

function Demo(props) {
    const [count, setCount] = useState(0)
    // 专人专用
    const myRef = useRef()

    // useEffect这个函数可以使函数式组件也可以使用生命周期函数
    // 第一个参数是函数，第一次会被调用一次，之后如果参数二中有某个数据的state则该state改变还会再次调用(相当于didMount和didUpdate)
    // 该函数的返回值是willUnmount生命周期钩子函数
    // 第二个参数是数组，数组中可以传递state，用于监测该state是否改变则调用第一个函数
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('@');
            setCount(count => count + 1)
        }, 1000);
        // 
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count => count + 1)
    }
    function unmount() {
        // 已经会报错了
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        props.root.unmount()
    }
    function show() {
        console.log(myRef);
        const { current } = myRef
        alert(current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为:{count}</h2>
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo
