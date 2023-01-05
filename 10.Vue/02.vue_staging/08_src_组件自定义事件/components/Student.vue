<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <h2>当前求和为 {{ number }}</h2>
    <button @click="add">点我number+1</button>
    <button @click="sendStudentName">把姓名传给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      gender: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      // 触发student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name);
      // this.$emit("demo");
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off("atguigu");
      // 解绑多个自定义事件
      // this.$off(["atguigu", "demo"]);
      // 解绑所有的自定义事件
      // this.$off();
    },
    death() {
      // 销毁了当前组件实例
      this.$destroy();
    },
    add() {
      console.log("add被调用了");
      this.number++;
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>

