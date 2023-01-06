import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Recommend from '@/pages/Home/Recommend'
import Hot from '@/pages/Home/Hot'
import Study from '@/pages/Home/Study'
import Sport from '@/pages/Home/Sport'
import Shop from '@/pages/Shop'
import Find from '@/pages/Find'
import Me from '@/pages/Me'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home/recommend'
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: "recommend",
                    path: 'recommend',
                    component: Recommend
                },
                {
                    name: 'hot',
                    path: 'hot',
                    component: Hot
                },
                {
                    name: "study",
                    path: 'study',
                    component: Study
                },
                {
                    name: "sport",
                    path: 'sport',
                    component: Sport
                }
            ],
        },
        {
            name: 'shop',
            path: '/shop',
            component: Shop
        },
        {
            name: 'find',
            path: '/find',
            component: Find
        },
        {
            name: 'me',
            path: '/me',
            component: Me
        }
    ]

})

router.beforeEach((to, from, next) => {
    // console.log(to, from)
    next()
})
export default router