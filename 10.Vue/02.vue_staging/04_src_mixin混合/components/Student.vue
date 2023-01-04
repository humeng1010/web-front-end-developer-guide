<template>
  <div>
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <h2>{{ x }}--{{ y }}</h2>
  </div>
</template>

<script>
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "Student",

  // props是不可以进行修改的,但是props优先级高于data，即在data中可以获取到props的数据
  data() {
    return {
      name: "张三",
      gender: "男",
    };
  },
  // mixins: [mixin, mixin2],
};
</script>

