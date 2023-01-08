<template>
  <div class="son">
    <h3>我是 son 孙组件</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: "Son",
  components: { Dialog }
}
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>