<template>
  <div class="app">
    <h3>我是 App 组件,{{ name }}---{{ price }}</h3>
    <Child :name="name" :price="price"></Child>
  </div>
</template>

<script>
import Child from './components/Child'
import {provide, reactive, toRefs} from "vue";

export default {
  name: "App",
  components: {Child},
  setup() {
    const car = reactive({
      name: '奔驰',
      price: '40W'
    })
    //给自己的后代组件传递数据
    provide('car', car)

    return {
      ...toRefs(car),
    }
  }

}

</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>