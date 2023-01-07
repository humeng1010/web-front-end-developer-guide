<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪水：{{ person.job.salary }}</h2>
  <h2>{{ person.job.a.b.c }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  // 此处只是测试setup，暂时不考虑响应式
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 50;
      person.job.type = "全栈";
      person.job.salary = "40k";
      person.job.a.b.c = 888;
      person.hobby[0] = "学习";
    }

    return {
      person,
      changeInfo,
    };
  },
};
</script>


