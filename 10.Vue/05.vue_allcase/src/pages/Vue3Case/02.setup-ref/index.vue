<script setup lang="ts">
import { ref } from 'vue';

const name = ref("张三")
const age = ref(18)
const job = ref({
    type: "前端工程师",
    salary: "30K"
})
const changeInfo = () => {
    console.log(name, age, job)
    name.value = "李四"
    age.value = 28
    job.value.type = "后端工程师"
    job.value.salary = "33K"
}
</script>

<template>
    <div class="02">
        <h1>一个人的信息</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>工作种类：{{ job.type }}</h2>
        <h2>工作薪水：{{ job.salary }}</h2>
        <button @click="changeInfo">修改人的信息</button>
    </div>
</template>

<style scoped>

</style>