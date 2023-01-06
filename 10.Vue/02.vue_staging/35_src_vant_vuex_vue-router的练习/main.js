import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

// 引入UI插件配置文件
import plugin from './plugin'
Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')