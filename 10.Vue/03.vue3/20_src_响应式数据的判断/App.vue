<template>
  <div class="app">
    <h3>我是 App 组件</h3>
  </div>
</template>

<script>
import {isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs, isProxy} from "vue";

export default {
  name: "App",
  setup() {
    const car = reactive({
      name: '奔驰',
      price: '40W'
    })
    const sum = ref(0)

    const car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2))


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