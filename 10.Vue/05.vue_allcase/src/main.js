import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(VueFullPage)
app.mount('#app')
