<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发Demo 组件的hello 事件</button>
  <slot name="center" :data="{ person }"></slot>
  <slot name="footer"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  //   必须先接收,之后才可以在 setup 函数中取到 props
  props: ["msg", "school"],
  //   接收 emit 否则有警告
  emits: ["hello"],
  setup(props, context) {
    // console.log("---setup---", props);
    // console.log("---setup---", context);
    // console.log("---setup---", context.attrs); //相当于Vue2 中的$attrs
    // console.log("---setup---", context.emit); //触发自定义事件的
    console.log("---setup---", context.slots); //插槽
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    function test() {
      context.emit("hello", 666);
    }
    return {
      person,
      test,
    };
  },
};
</script>


