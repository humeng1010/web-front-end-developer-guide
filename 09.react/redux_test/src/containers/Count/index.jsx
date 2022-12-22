// 1.引入Count的UI组件
import CountUI from '../../components/Count'
// 2.引入store 注意这个地方不能这样引入 需要在外侧通过props传递
// import store from '../../redux/store'

// 3.引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// const CountContainer = connect()(CountUI)
// 使用connect()() 创建并暴露一个Count的容器组件
export default connect()(CountUI)
