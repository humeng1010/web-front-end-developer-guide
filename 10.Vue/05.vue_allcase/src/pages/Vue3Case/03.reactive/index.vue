<script setup lang="ts">
import { reactive, toRefs } from 'vue'
interface IPerson {
    name: string,
    age: number,
    gender: string
}
const person = reactive<IPerson>({ name: '张三', age: 19, gender: '男' })
const { name, age, gender } = toRefs(person)

</script>

<template>
    <div class="03">
        <h1>{{ name }}--{{ age }}--{{ gender }}</h1>
    </div>

</template>

<style scoped>

</style>