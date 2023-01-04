// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 引入混合
import { mixin, mixin2 } from './mixin'

// 全局混合，会导致全局的组件中都有混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
    render: h => h(App)
}).$mount('#app')