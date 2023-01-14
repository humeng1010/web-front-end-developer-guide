import { reactive } from 'vue'
export const usePerson = () => {
    const person = reactive({
        name: '张三',
        age: 19,
        gender: '男'
    })

    return person
}