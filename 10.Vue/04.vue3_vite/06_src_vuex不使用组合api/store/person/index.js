export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的必须姓王')
            }
        },
        getRandomName(context) {
            let nameList = ['张三', 'jack', 'tom', 'mary', 'andy', 'jerry', 'pitter']
            let index = Math.floor(Math.random() * 7)
            const personObj = { id: Math.random(), name: nameList[index] }
            context.commit('ADD_PERSON', personObj)

        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {

    }
}