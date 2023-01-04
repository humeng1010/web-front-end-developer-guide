<template>
  <div>
    <School />
    <hr />
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
};
</script>

<style>
.title {
  color: red;
}
</style>