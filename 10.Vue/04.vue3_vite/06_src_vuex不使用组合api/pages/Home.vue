<template>
  <div class="home">
    <h2>我是人员信息的内容</h2>
    <div>
      <h1>人员列表</h1>
      <h3 style="color: red">Count组件求和为{{ sum }},十倍后:{{ bigSum }}</h3>
      <input type="text" placeholder="请输入姓名" v-model="name" />
      <button @click="add(name)">添加</button>
      <button @click="addPersonWang(name)">添加一个姓王的</button>
      <button @click="getRandomName(name)">获取随机姓名</button>
      <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  computed: {
    personList() {
      return this.$store.state.person.personList;
    },
    sum() {
      console.log(this);
      return this.$store.state.count.sum;
    },
    bigSum() {
      return this.$store.getters["count/bigSum"];
    },
  },
  methods: {
    add(name) {
      const personObj = { id: Math.random, name };
      this.$store.commit("person/ADD_PERSON", personObj);
    },
    addPersonWang(name) {
      const personObj = { id: Math.random, name };
      this.$store.dispatch("person/addPersonWang", personObj);
    },
    getRandomName() {
      this.$store.dispatch("person/getRandomName");
    },
  },
  setup() {
    const name = ref("");
    return {
      name,
    };
  },
};
</script>

<style scoped>
.home {
  position: absolute;
  background-color: #fff;
}
</style>