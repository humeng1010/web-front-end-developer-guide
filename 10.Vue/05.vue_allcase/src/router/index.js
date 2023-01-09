import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('../pages/Home/Home.vue')
const Basics = () => import('../pages/Basics/Basics.vue')
const BasicsJS = () => import('../pages/BasicsJS/BasicsJS.vue')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/basics',
            component: Basics
        },
        {
            path: '/basics-js',
            component: BasicsJS,
        }
    ]
})

export default router