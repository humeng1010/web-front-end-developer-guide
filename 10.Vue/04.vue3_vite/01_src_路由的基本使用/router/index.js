import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'



// 创建路由对象 发生了改变 从(new Router())变为了使用 createRouter() 创建
const router = createRouter({
    // 由原本的 mode 变为了history配置,下面是创建一个 history模式的路由
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})


export default router