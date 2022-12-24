import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
    state = { carName: '奔驰' }
    changeCar = () => {
        this.setState({ carName: '玛莎拉蒂' })
        // this.setState({})
    }
    /* shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props, this.state);
        // console.log(nextProps, nextState);
        return !(nextState.carName === this.state.carName)
    } */
    render() {
        console.log('Parent render');
        const { carName } = this.state
        return (
            <div>
                <h1>父亲的车:{carName}</h1>
                <button onClick={this.changeCar}>换车</button>
                <hr />
                <Child carName={'拖拉机'} />
            </div>
        )
    }
}



class Child extends PureComponent {

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);
        console.log(nextProps, nextState);
        return !(nextProps.carName === this.props.carName)
    } */
    render() {
        console.log('Child render');
        return (
            <div>
                <h2>父亲的车:{this.props.carName}</h2>

            </div>
        )
    }
}


/* export default function A() {
    const [carName, setCarName] = useState('奔驰')
    function changeCar() {
        setCarName('宝马')
    }
    console.log('A');
    return (
        <div>
            <h1>A的车:{carName}</h1>
            <button onClick={changeCar}>换车</button>
            <hr />
            <B carName={carName} />
        </div>
    )
}

function B(props) {
    console.log('B');
    return (
        <div>
            <h2>A传给B:{props.carName}</h2>

        </div>
    )
} */