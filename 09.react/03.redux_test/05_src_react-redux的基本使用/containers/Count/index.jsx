// 1.引入Count的UI组件
import CountUI from '../../components/Count'
// 2.引入store 注意这个地方不能这样引入 需要在外侧通过props传递
// import store from '../../redux/store'

// 3.引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 引入create_action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 1.mapStateToProps函数的返回的对象;
// 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
// 3.mapStateToProps用于传递状态
function mapStateToProps(state) {
    return { count: state }
}

// 1.mapDispatchToProps函数的返回的对象;
// 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
// 3.mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
    // console.log(dispatch, store);
    return {
        add: data => dispatch(createIncrementAction(data)),
        sub: data => dispatch(createDecrementAction(data)),
        addAsync: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
    }
}
// const CountContainer = connect()(CountUI)
// 使用connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
