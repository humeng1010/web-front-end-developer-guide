<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      gender: "男",
    };
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit("hello", this.name);
      PubSub.publish("hello", this.name);
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>

