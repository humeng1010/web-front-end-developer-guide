<template>
  <h2>当前为{{ x.y }}</h2>
  <button @click="x.y++">点我加一</button>
  <hr>
  <h2>{{ person }}</h2>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, toRefs, shallowRef, shallowReactive, ref} from "vue";

export default {
  name: "Demo",

  setup() {
    //shallowReactive是浅层次的响应式即只考虑对象的第一层
    // let person = shallowReactive({
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //shallowRef只处理基本类型的数据,不进行对象的响应式
    const x = shallowRef({
      y: 0
    })
    console.log(x)


    return {
      person,
      x,
      ...toRefs(person)
    };
  },
};
</script>


