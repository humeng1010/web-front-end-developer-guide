// 该文件用于创建vuex中核心的store
// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import count from './count'
import person from './person'

// 使用Vuex插件，必须在store对象创建之前使用
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        count,
        person
    }
})