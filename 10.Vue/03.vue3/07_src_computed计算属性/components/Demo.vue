<template>
  <h1>一个人的信息</h1>
  姓: <input type="text" v-model="person.firstName" /> <br /><br />
  名:<input type="text" v-model="person.lastName" />
  <h2>全名:{{ person.fullName }}</h2>
  <input type="text" v-model="person.fullName" />
</template> 

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 简写
    // let fullName = computed(() => person.firstName + "-" + person.lastName);

    // 完整
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const data = value.split("-");
        person.firstName = data[0];
        person.lastName = data[1];
      },
    });
    return {
      person,
    };
  },
};
</script>


