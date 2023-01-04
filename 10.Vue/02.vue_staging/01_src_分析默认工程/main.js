/**
 * 该文件是整个项目的入口文件
 */
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---vm
new Vue({
  // 将App组件渲染到页面上，因为引入的vue没有模板解析器，所以需要使用render函数
  render: h => h(App),
  // 完整写法
  /* render: function (createElement) {
    return createElement(App)
  } */
}).$mount('#app')
