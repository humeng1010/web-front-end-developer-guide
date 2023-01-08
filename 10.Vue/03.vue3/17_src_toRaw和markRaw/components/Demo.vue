<template>
  <h2>当前为{{ x }}</h2>
  <button @click="x++">点我加一</button>
  <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}K</h2>
  <h2 v-show="person.car">车:{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪水</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车</button>
</template>

<script>
import {reactive, toRefs, ref, toRaw, markRaw} from "vue";

export default {
  name: "Demo",

  setup() {
    let x = ref(0)

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      //还原响应式对象，只能处理 reactive 缔造的响应式对象
      const p = toRaw(person)
      console.log(p)
    }

    function addCar() {
      let car = {name: '奔驰', price: '40W'}
      person.car = markRaw(car)
    }

    return {
      x,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  },
};
</script>


