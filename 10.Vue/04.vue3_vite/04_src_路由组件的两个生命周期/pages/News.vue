<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script setup>
import { onActivated, onDeactivated } from "vue";
onActivated(() => {
  console.log("News被激活了");
});
onDeactivated(() => {
  console.log("News失活了");
});
</script>

<style>
</style>