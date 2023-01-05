<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
// 引入的顺序导致样式类名冲突后来者覆盖前面的
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好呀",
      studentName: "",
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>