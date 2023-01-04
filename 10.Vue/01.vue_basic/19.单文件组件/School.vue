<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称:{{ school.name }}</h2>
    <h2>学校地址:{{ school.address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法)
export default {
  name: "School",
  data() {
    return {
      school: {
        name: "尚硅谷",
        address: "南京",
      },
    };
  },
  methods: {
    showName() {
      alert(this.school.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>