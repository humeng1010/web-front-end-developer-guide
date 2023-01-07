<template>
  <div class="container">
    <header>
      <h1>07_src_computed计算属性</h1>
    </header>
    <main>
      <input type="text" v-model="person.fullName" />
      <h2>姓:{{ person.firstName }}</h2>
      <h2>名:{{ person.lastName }}</h2>
      <h2>全名:{{ person.fullName }}</h2>
    </main>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/runtime-core";
export default {
  name: "Test2",
  setup() {
    const person = reactive({
      firstName: "张",
      lastName: "三",
    });
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(val) {
        const nameArr = val.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    return {
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
</style>