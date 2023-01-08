<template>
  <div class="app">
    <h3>我是 App 组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child'

export default {
  name: "App",
  components: { Child },


}

</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>