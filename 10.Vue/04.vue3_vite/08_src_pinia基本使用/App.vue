<template>
  <div class="container">
    <div class="row">
      <h1>商品数量{{ counter.count }}</h1>
      <button @click="counter.increment()">加一</button>
      <button @click="handleClickAsync">获取人员列表</button>
      <ul>
        <li v-for="person in counter.person" :key="person.id">{{ person.id }}--{{ person.name }}</li>
      </ul>
    </div>
    <div class="row">
      <Demo />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import { useCounterStore } from './stores/counter'

import Demo from './components/Demo.vue'
export default {
  name: "App",
  components: { Demo },
  setup() {
    const counter = useCounterStore()

    const handleClickAsync = () => {
      counter.getData()
    }
    return {
      counter,
      handleClickAsync
    }
  },
}
</script>

<style lang="css" scoped>

</style>