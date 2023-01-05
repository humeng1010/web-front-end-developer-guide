<template>
  <div>
    <slot></slot>
    <button @click="send">通知App组件</button>
    <hr />
    <Item />
    <hr />
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Category",
  components: { Item },
  methods: {
    send() {
      // 触发自身的自定义事件，并发送数据666
      this.$emit("demo", 666);
    },
  },
};
</script>

<style>
</style>