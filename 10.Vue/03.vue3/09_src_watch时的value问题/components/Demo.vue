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
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    // 使用 ref 获取响应式对象本质还是使用了 reactive 函数,只是 ref 返回的是 RefImpl,而 reactive 返回的是 Proxy
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    watch(sum, (val, oldVal) => {
      console.log("sum变了", val, oldVal);
    });
    // 写法一,监视的是 Proxy ,修改的是里面的属性,默认就能够检测到属性的变化
    watch(person.value, (val) => {
      console.log("person变了", val);
    });
    // 写法二,监视的是 RefImpl ,修改的是里面的 value 对象,开启深度监视
    watch(
      person,
      (val) => {
        console.log("person变了", val);
      },
      { deep: true }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>


