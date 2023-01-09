import { createStore } from 'vuex'
import count from './count'
import person from './person'

export default createStore({
    modules: {
        count,
        person
    }
})