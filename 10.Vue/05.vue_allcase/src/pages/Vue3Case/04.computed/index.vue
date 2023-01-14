<script setup lang="ts">
import {
    ref, reactive, computed,
    watch, watchEffect,
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
    onActivated, onDeactivated,
} from 'vue'
import { usePerson } from '../../../hooks/usePerson'
import useMyRef from '../../../hooks/useMyRef'
const p = usePerson()
const d = useMyRef("666", 1000)
const person = reactive<{ firstName: string, lastName: string }>({
    firstName: '张',
    lastName: '三',
})
const computedName = computed({
    get() {
        return person.firstName + '-' + person.lastName
    },
    set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
    }
})
watch(person, (val) => {
    console.log(val)
})
watchEffect(() => {
    const p = person.firstName
    console.log(p)
})
onBeforeMount(() => {
    console.log('---onBeforeMount---')
})
onMounted(() => {
    console.log('---onMounted---')
})
onBeforeUpdate(() => {
    console.log('---onBeforeUpdate---')
})
onUpdated(() => {
    console.log('---onUpdated---')
})
onBeforeUnmount(() => {
    console.log('---onBeforeUnmount---')
})
onUnmounted(() => {
    console.log('---onUnmounted---')
})

/* 必须是keepAlive包裹的组件,才会触发这两个生命周期 */
onActivated(() => {
    console.log('被激活了')
})
onDeactivated(() => {
    console.log('被失活了')
})
const isShow = ref(false)


</script>

<template>
    <div class="04">
        姓:{{ person.firstName }}
        <br>
        名:{{ person.lastName }}
        <br>
        <input type="text" v-model="computedName">
        <h1>{{ p.name }}---{{ p.age }}---{{ p.gender }}</h1>
        <input type="text" v-model="d">
        <h1>{{ d }}</h1>
        <button @click="isShow = !isShow">open</button>
        <teleport to='body'>
            <div class="mask" v-if="isShow" @click.self="isShow = false">
                <div class="dialog">
                    <h3>我是弹窗</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="isShow = false">关闭弹窗</button>
                    <p>或者点击背景关闭弹窗</p>
                </div>
            </div>
        </teleport>
    </div>



</template>

<style scoped>
.dialog {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 400px;
    /* height: 300px; */
    background-color: skyblue;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 99;
}
</style>