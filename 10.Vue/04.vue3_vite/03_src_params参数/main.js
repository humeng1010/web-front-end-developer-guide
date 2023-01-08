import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//确保 _use_ 路由实例使
//整个应用支持路由
/* 通过调用 app.use(router)，我们可以在任意组件中以 this.$router 的形式访问它，
并且以 this.$route 的形式访问当前路由 */
// 要在 setup 函数中访问路由，请调用 useRouter 或 useRoute 函数。
app.use(router)

app.mount('#app')
