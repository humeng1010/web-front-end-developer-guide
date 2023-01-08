<template>
  <ul>
    <li>消息编号：{{ route.query.id }}</li>
    <li>消息标题：{{ route.query.title }}</li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Detail",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<style>
</style>