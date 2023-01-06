import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// 引入elementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Row } from 'element-ui'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
// Vue.use(ElementUI)
new Vue({
    render: h => h(App),
}).$mount('#app')