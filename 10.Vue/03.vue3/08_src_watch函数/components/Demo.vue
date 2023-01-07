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
    let person = reactive({
      name: "张三",
      age: "18",
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 情况一:监视 ref 定义的一个响应式数据
    /* watch(
      sum,
      (value, oldValue) => {
        console.log("sum变了", value, oldValue);
      },
      { immediate: true }
    ); */

    // 情况二:监视 ref 定义的多个响应式数据
    /* watch(
      [sum, msg],
      (val, oldVal) => {
        if (val[0] !== oldVal[0])
          console.log(`sum 变为了:${val[0]},原本是:${oldVal[0]}`);
        if (val[1] !== oldVal[1])
          console.log(`msg 变为了:${val[1]},原本是:${oldVal[1]}`);
      },
      { immediate: true }
    ); */

    // 情况三:监视 reactive 定义的响应式对象 (一般写这个)
    // 1.注意此处无法获取正确的 oldValue
    // 2.注意此处强制开启了深度监视,因为响应式原理是通过 Proxy 进行监视的,set方法会自动对对象的每一层的变化检测
    /* watch(person, (val, oldVal) => {
      console.log("person变化了", val, oldVal);
    },{deep:false});//此处的 deep 配置无效 */

    // 情况四:监视reactive 定义的响应式数据中的某一个属性
    /* watch(
      () => person.age,
      (value, oldVal) => {
        console.log("age变化了", value, oldVal);
      }
    ); */

    // 情况五:监视reactive 定义的响应式数据中的某些属性
    /* watch([() => person.name, () => person.age], (value, oldVal) => {
      if (value[0] !== oldVal[0])
        console.log("name变化了", value[0], oldVal[0]);
      if (value[1] !== oldVal[1]) console.log("age变化了", value[1], oldVal[1]);
    }); */

    // 特殊情况
    /* watch(
      () => person.job,
      (value) => {
        console.log("job变了", value.j1.salary);
      },
      { deep: true } //此处配置有效是因为我们监视的是由 reactive 返回的对象中的某个对象属性,而不是 proxy,所以deep 配置有效
    ); */
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>


