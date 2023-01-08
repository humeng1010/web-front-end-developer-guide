<template>
  <div class="son">
    <h3>我是 son 孙组件，{{ car.name }}--{{ car.price }}</h3>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Son",
  setup() {
    let car = inject('car')
    console.log('son', car)

    return {
      car
    }
  }
}
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>