<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, toRef, toRefs, watch} from "vue";

export default {
  name: "Demo",

  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //监听原数据是否改变了
    watch(person, (value) => {
      console.log('person 被改变了', value)
    })

    let name1 = person.name
    console.log('ooo', name1)

    let name2 = toRef(person, 'name')
    console.log('rrr', name2)

    //其value值指向另一个对象中的某个属性。
    let p = toRefs(person)
    console.log('toRefs', p)


    return {
      /*name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary')*/

      //展开 toRefs 生成的对象
      ...toRefs(person)
    };
  },
};
</script>


