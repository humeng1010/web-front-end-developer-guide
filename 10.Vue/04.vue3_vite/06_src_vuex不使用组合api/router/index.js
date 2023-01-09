import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/about'
        },
        {
            path: '/about',
            component: About,

        },
        {
            path: '/home',
            component: Home,

        }
    ]
})



export default router