<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      gender: "男",
    };
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: orange;
  h2 {
    font-size: 16px;
  }
  &:hover {
    background-color: skyblue;
  }
}
</style>

