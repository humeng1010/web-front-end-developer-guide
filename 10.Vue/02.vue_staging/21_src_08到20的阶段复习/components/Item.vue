<template>
  <div>
    <h1>全局事件总线</h1>
    <p>适用于全局组件的通信</p>
    接收到App中的数据为:{{ data }}
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.$bus.$on("getAppData", (data) => {
      this.data = data;
    });
  },
};
</script>

<style>
</style>