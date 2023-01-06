import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import { Button, PullRefresh, Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(PullRefresh)
Vue.use(Tabbar);
Vue.use(TabbarItem);
new Vue({
    render: h => h(App),
    router
}).$mount('#app')