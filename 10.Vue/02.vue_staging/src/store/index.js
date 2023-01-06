import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './Home/recommend'
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        recommend
    }
})