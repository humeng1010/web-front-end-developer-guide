import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
class Header extends Component {
    back = () => {
        // console.log(this.props);
        this.props.history.goBack()
    }
    forWard = () => {
        this.props.history.goForward()
    }

    render() {
        // console.log("Header组件收到的props是", this.props);
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={this.back}>回退</button>
                        <button onClick={this.forWard}>前进</button>
                    </div>

                </div>
            </div>
        )
    }
}
// withRouter可以加工一般组件，让一般组件具备路由组件所持有的API
// withRouter的返回值是一个新组件，只不过身上有路由组件特有的api
export default withRouter(Header)
