import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue'
const Basics = () => import('../pages/Basics/Basics.vue')
const BasicsJS = () => import('../pages/BasicsJS/BasicsJS.vue')
const Vue3Case_setup = () => import('../pages/Vue3Case/01.setup/index.vue')
const Vue3Case_setup_ref = () => import('../pages/Vue3Case/02.setup-ref/index.vue')
const Vue3Case_reactive = () => import('../pages/Vue3Case/03.reactive/index.vue')
const Vue3Case_computed = () => import('../pages/Vue3Case/04.computed/index.vue')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/basics',
            component: Basics,
            meta: {
                showMenu: true
            }
        },
        {
            path: '/basics-js',
            component: BasicsJS,
            meta: {
                showMenu: true
            }
        },
        {
            path: '/vue3-case/01.setup',
            component: Vue3Case_setup,
            meta: {
                showMenu: true
            }
        },
        {
            path: '/vue3-case/02.setup-ref',
            component: Vue3Case_setup_ref,
            meta: {
                showMenu: true
            }
        },
        {
            path: '/vue3-case/03.reactive',
            component: Vue3Case_reactive,
            meta: {
                showMenu: true
            }
        },
        {
            path: '/vue3-case/04.computed',
            component: Vue3Case_computed,
            meta: {
                showMenu: true
            }
        },
    ]
})

export default router