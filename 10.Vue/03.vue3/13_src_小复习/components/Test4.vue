<template>
  <div class="container">
    <header>
      <h1>11_src_生命周期</h1>
    </header>
    <main></main>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "@vue/runtime-core";
export default {
  name: "Test4",
  setup() {
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>