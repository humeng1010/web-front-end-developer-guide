<template>
  <!-- 组件的结构 -->
  <div>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="showName">点我提示姓名</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法)
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>
