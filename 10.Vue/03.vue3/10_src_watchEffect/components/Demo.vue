<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg += 6">变</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪水:{{ person.job.j1.salary }}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪水</button>
</template> 

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    /* watch(
      sum,
      (val, oldVal) => {
        console.log("sum变了", val, oldVal);
      },
      { immediate: true }
    ); */

    // 只要 watchEffect 函数的回调内的所依赖的数据改变了就会重新执行这个函数
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log("watchEffect指定的回调执行了");
    });

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>


