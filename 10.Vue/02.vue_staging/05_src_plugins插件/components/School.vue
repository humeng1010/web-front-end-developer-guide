<template>
  <div>
    <h2>学校名称: {{ name | mySlice }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="test">点我测试hello</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    return {
      name: "尚硅谷啊啊啊啊啊啊",
      address: "北京",
    };
  },
  methods: {
    test() {
      // 顺着原型链去寻找 我们在插件中 Vue的原型对象上定义的hello方法
      this.hello();
    },
  },
};
</script>

