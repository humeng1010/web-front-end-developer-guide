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

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // 命名路由
            name: "about",
            path: "/about",
            component: About,
            meta: { title: '关于', isAuth: true },
            beforeEnter: (to, from, next) => {
                console.log('独享路由守卫', to, from)
                // 判断每一个路由中的meta里的isAuth是否需要判断权限
                if (to.meta.isAuth) {
                    if (localStorage.getItem('root') === 'vue') {
                        next()
                    } else {
                        alert('您没有权限')
                    }
                } else {
                    next()
                }
            }
        },
        {
            name: 'home',
            path: "/home",
            component: Home,
            meta: { title: '首页' },
            children: [
                {
                    name: "news",
                    path: "news",
                    component: News,
                    // 元数据，控制是否需要拦截
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫
                    /* beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from)
                        // 判断每一个路由中的meta里的isAuth是否需要判断权限
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('root') === 'vue') {
                                next()
                            } else {
                                alert('您没有权限')
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name: "message",
                    path: "message",
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: "detail",
                            // path: "detail/:id/:title",
                            path: "detail",
                            component: Detail,
                            meta: { title: '详情' },
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
// 全局 前置 路由守卫 —— 每次路由切换之前和初始化的时候 被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    // 判断每一个路由中的meta里的isAuth是否需要判断权限
    if (to.meta.isAuth) {
        if (localStorage.getItem('root') === 'vue') {
            next()
        } else {
            alert('您没有权限')
        }
    } else {
        next()
    }
})

// 全局 后置 路由守卫 —— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'router'
})

export default router