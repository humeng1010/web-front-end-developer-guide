<template>
  <div class="child">
    <h3>我是 child 子组件</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son'
// import {inject} from "vue";

export default {
  name: "Child",
  components: {
    Son
  },
  props: ['name', 'price'],
  setup(props, context) {
    /*let car = inject('car')
    console.log('child', car)*/
    console.log(props)
    console.log(context.attrs)
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>