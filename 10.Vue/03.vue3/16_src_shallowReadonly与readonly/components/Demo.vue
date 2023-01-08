<template>
  <h2>当前为{{ x }}</h2>
  <button @click="x++">点我加一</button>
  <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, toRefs, ref, readonly, watch, shallowReadonly} from "vue";

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
    //readonly是一个函数可以接收一个响应式的数据，返回不允许修改的对象
    // person = readonly(person)
    //shallowReadonly和readonly类似，只不过是浅层次的只读，深层次还是可以修改的
    // person = shallowReadonly(person)
    // console.log(person)
    // x = readonly(x)
    x = shallowReadonly(x)
    watch(person, (value) => {
      console.log('person变了', value)
    })

    return {
      x,
      ...toRefs(person)
    };
  },
};
</script>


