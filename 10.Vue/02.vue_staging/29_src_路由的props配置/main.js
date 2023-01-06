import Vue from 'vue'
import App from './App'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

Vue.config.productionTip = false
// 使用VueRouter插件
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')