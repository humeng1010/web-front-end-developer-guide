import Vue from 'vue'
import App from './App'
// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')