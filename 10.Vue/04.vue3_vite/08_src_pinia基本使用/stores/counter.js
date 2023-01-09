// stores/counter.js
// 定义仓库
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
    // 定义集中管理的状态
    state: () => {
        return {
            count: 2,
            list: [
                { name: 'iphone13', price: 5880 },
                { name: '华为', price: 6880 }
            ],
            person: [
                { id: '001', name: '张三' },
            ]
        }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    // 定义操作状态的 actions 多个地方使用,同步异步都可以
    actions: {
        // 同步
        increment() {
            this.count++
        },
        // 这里不可以写成箭头函数,否则会丢失 pinia 修改好的 this 指向
        getData() {
            const personList = [
                { id: '001', name: '张三' },
                { id: '002', name: '王五' },
                { id: '003', name: '赵六' }
            ]
            // 这个里面的 this 就是当前的store 对象
            // console.log(this)
            setTimeout(() => {
                // 直接进行修改
                this.person = personList
            }, 1000);
        }

    },
    getters: {
        sumPrice: (state) => {
            return state.list.reduce((preVal, current) => {
                return preVal + (current.price * state.count)
            }, 0)
        }
    }
})