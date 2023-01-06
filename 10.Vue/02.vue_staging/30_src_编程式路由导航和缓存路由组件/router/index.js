// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 避免冗余导航到当前位置; 避免重复导航到同一个位置控制台出现报错
// 先临时保存一下原本的push方法
const originalPush = VueRouter.prototype.push
// 修改原型对象上的push方法
VueRouter.prototype.push = function push(loaction) {
    // push返回的是Promise对象，我们捕获错误信息并返回(不输出即可)
    return originalPush.call(this, loaction).catch(err => err)
}
// replace同理

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            // 命名路由
            name: "about",
            path: "/about",
            component: About,
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "detail",
                            // path: "detail/:id/:title",
                            path: "detail",
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props: { a: 1, b: 2 },
                            // props的第二种写法，值为布尔值，如果布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true,
                            // props的第三张写法，值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            // 重定向
            redirect: "/about",
        }
    ]
})