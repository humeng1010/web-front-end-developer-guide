<template>
  <ul>
    <li :style="{ opacity }">学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // 生命周期钩子
  // 激活的时候触发
  activated() {
    console.log("被激活");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  // 失活的时候触发
  deactivated() {
    console.log("失活了");
    clearInterval(this.timer);
  },
  /* mounted() {
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  beforeDestroy() {
    console.log("News组件即将被销毁");
  }, */
};
</script>

<style>
</style>