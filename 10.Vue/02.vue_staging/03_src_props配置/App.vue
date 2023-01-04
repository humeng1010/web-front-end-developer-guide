<template>
  <div>
    <Student name="李四" gender="女" :age="18" />
    <Student name="王五" gender="男" :age="30" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style>
</style>