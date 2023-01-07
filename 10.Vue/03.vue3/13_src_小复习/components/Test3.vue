<template>
  <div class="container">
    <header>
      <h1>08_src_watch函数</h1>
    </header>
    <main>
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
    </main>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  name: "Test3",
  setup() {
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
    // 情况一:监视 ref 定义的一个响应式数据
    /* watch(sum, (val, oldVal) => {
      console.log("sum变了", val, oldVal);
    }); */
    // 情况二:监视 ref 定义的多个响应式数据
    /* watch([sum, msg], (val, oldVal) => {
      console.log("sum或者msg变了", val, oldVal);
    }); */
    // 情况三:监视 reactive 定义的响应式对象 (一般写这个)
    /* watch(person, (val) => {
      console.log("person变了", val);
    }); */
    // 情况四:监视reactive 定义的响应式数据中的某一个属性
    /* watch(
      () => person.name,
      (val, oldVal) => {
        console.log("person的name变了", val, oldVal);
      }
    ); */
    // 情况五:监视reactive 定义的响应式数据中的某些属性
    /* watch([() => person.name, () => person.age], (val, oldVal) => {
      console.log("person的name或者age变了", val, oldVal);
    }); */
    // 特殊情况
    /* watch(
      () => person.job,
      (val) => {
        console.log("person 的 job 变了", val);
      },
      { deep: true }
    ); */

    // 使用 ref 创建的 person
    // person.value本质是监视的 Proxy 对象
    /* watch(person.value, (val) => {
      console.log("person变了", val);
    }); */
    // 监视的是 RefImpl 对象内的 value 对象,所以需要开启深度监视
    /* watch(
      person,
      (val) => {
        console.log("person变了", val);
      },
      { deep: true }
    ); */

    // 调用时机:第一次和 watchEffect 中所依赖的数据发生变化,就会被重新调用该回调
    /* watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log("watchEffect指定的回调执行了");
    }); */

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container main {
  width: 100%;
}
</style>