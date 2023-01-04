// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 引入插件
import plugins from './plugins'
// 关闭生产提示
Vue.config.productionTip = false
// 应用创建
Vue.use(plugins)
// 创建vm
new Vue({
    render: h => h(App)
}).$mount('#app')