<template>
  <h1>hooks</h1>
  <p>当前鼠标位置:{x:{{ point.x }},y:{{ point.y }} }</p>
</template>

<script>
import usePonit from "../hooks/usePonit";
export default {
  name: "Test5",
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