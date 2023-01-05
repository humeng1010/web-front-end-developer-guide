<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props，实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定自定义事件，实现：子给父传递数据(第一种写法使用@或者v-on:) -->
    <!-- <Student @atguigu="getStudentName" /> -->
    <!-- 通过父组件给子组件绑定自定义事件，实现：子给父传递数据(第二种写法使用ref) -->
    <Student ref="student" @demo="m1" @click.native="show" />
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
  mounted() {
    // 通过给组件定义ref属性，通过$refs获取组件实例对象，使用$on绑定自定义事件
    // 绑定自定义事件
    this.$refs.student.$on("atguigu", this.getStudentName);
    // 绑定自定义事件(一次性)
    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名", name);
      this.studentName = name;
    },
    m1() {
      console.log("m1被调用");
    },
    show() {
      alert(1);
    },
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>