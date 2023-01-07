<template>
  <h1>我是 Test 组件</h1>
  <h2>当前点击时鼠标的坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import usePonit from "../hooks/usePonit";
export default {
  name: "Test",
  setup() {
    const point = usePonit();

    return {
      point,
    };
  },
};
</script>

<style>
</style>