<template>
  <test-5></test-5>
  <test-4></test-4>
  <test-3></test-3>
  <Test2 />
  <Test1
    name="张三"
    :age="18"
    other="这个属性没有使用 props 接收则会被 attrs 接收到(捡漏)"
    @hello="helloCallback"
  >
    <template v-slot:default> 默认插槽 </template>
    <template #top>具名插槽</template>
    <template #scope="data">
      <p>作用域插槽:内部数据data 遍历</p>
      <ul>
        <li v-for="i in data.data" :key="i.id">{{ i.name }}</li>
      </ul>
    </template>
  </Test1>
</template>

<script>
import Test1 from "./components/Test1.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";
import Test4 from "./components/Test4.vue";
import Test5 from "./components/Test5.vue";
export default {
  name: "App",
  components: { Test1, Test2, Test3, Test4, Test5 },
  setup() {
    function helloCallback(data) {
      console.log("hello", data);
    }
    return {
      helloCallback,
    };
  },
};
</script>


