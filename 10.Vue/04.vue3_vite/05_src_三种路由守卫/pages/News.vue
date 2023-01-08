<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script setup>
import { onActivated, onDeactivated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
onActivated(() => {
  // console.log("News被激活了");
});
onDeactivated(() => {
  // console.log("News失活了");
});
onBeforeRouteLeave((to, from, next) => {
  console.log("News组件内离开路由守卫", to, from);
  next();
});
</script>

<style>
</style>