<script setup lang="ts">
// 直接在script setup里面定义变量和函数,在模板中就可以直接使用
// 这就是setup的语法糖!!!
// 但是这些数据不是响应式的
let name = '张三'
let age = 18
const sayHello = () => {
    alert(`你好,我叫${name},今年${age}`)
}
</script>

<template>
    <div class="01.setup">
        <h1>一个人的信息</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="sayHello">说话</button>
    </div>
</template>

<style scoped>

</style>