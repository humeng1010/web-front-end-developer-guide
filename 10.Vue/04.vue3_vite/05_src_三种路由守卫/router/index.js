import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'



// 创建路由对象 发生了改变 从(new Router())变为了使用 createRouter() 创建
const router = createRouter({
    // 由原本的 mode 变为了history配置,下面是创建一个 history模式的路由
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '首页'
            },
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: {
                        title: '新闻'
                    },
                    beforeEnter(to, from, next) {
                        console.log('News独享路由前置守卫', to, from)
                        next()
                    }
                },
                {
                    path: 'message',
                    component: Message,
                    meta: {
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id?/:title?',
                            component: Detail,
                            meta: {
                                title: '详情'
                            },
                            // props: true
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
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    next()
})

router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'router'
})

export default router