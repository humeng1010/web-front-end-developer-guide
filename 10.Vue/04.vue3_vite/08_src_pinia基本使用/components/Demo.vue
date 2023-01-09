<template>
    <div>
        <h2>Demo 组件中,获取的商品数量{{ counter.count }}</h2>
        <button @click="handleClick">减1</button>
        <button @click="patchClick">使用$patch修改+5</button>
        <button @click="toggleState">使用$state 替换整个 state</button>
        <button @click="reset">重置状态</button>
        <h2>need total price{{ counter.sumPrice }}</h2>
        <ul>
            <li v-for="l in counter.list">{{ l.name }}---{{ l.price }}</li>
        </ul>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'
export default {
    name: 'Demo',
    setup() {
        const counter = useCounterStore()
        const handleClick = () => {
            // 修改多次,渲染多次
            counter.count--
            counter.list.push({ name: 'redmi', price: 3000 })
        }
        const patchClick = () => {
            // 修改多个数据,进行统一渲染,提升效率
            // 第一种方式
            /* counter.$patch({
                count: counter.count + 5,
                list: [...counter.list, { name: 'vivo', price: 3000 }]
            }) */
            // 第二种方式
            counter.$patch((state) => {
                state.count += 5
                state.list.push({ name: 'vivo', price: 3000 })
            })
        }

        const toggleState = () => {
            // 你不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是，你可以 patch 它。
            // 这实际上并没有替换`$state`
            counter.$state = {
                count: 100,
                list: [
                    { name: 'iphone18', price: 8880 },
                    { name: '华为pro', price: 9880 }
                ]
            }
            // 在它内部调用 `$patch()`：
            /* counter.$patch({
                count: 100,
                list: [
                    { name: 'iphone18', price: 8880 },
                    { name: '华为pro', price: 9880 }
                ]
            }) */
        }
        const reset = () => {
            // 重置状态
            counter.$reset()
        }
        // 监听整个仓库变化
        /* counter.$subscribe((mutation, state) => {
            console.log('mutation', mutation)
            console.log('state', state)
        }) */
        return {
            counter,
            handleClick,
            patchClick,
            toggleState,
            reset
        }
    }
}

</script>

<style lang="css" scoped>

</style>