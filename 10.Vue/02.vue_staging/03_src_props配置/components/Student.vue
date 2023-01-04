<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <h2>学生年龄: {{ myAge + 1 }}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  // 简单声明接收
  // props: ["name", "gender", "age"],

  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
    gender: String,
  }, */

  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      // type配置类型
      type: String,
      // required配置该属性是否必须的
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      // default配置默认值
      default: 99,
    },
  },
  // props是不可以进行修改的,但是props优先级高于data，即在data中可以获取到props的数据
  data() {
    return {
      msg: "我是一位学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
};
</script>

