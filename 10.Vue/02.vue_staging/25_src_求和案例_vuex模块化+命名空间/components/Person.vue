<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为{{ sum }},十倍后:{{ bigSum }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的</button>
    <button @click="getRandomName">获取随机姓名</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.person.personList;
    },
    sum() {
      return this.$store.state.count.sum;
    },
    bigSum() {
      return this.$store.getters["count/bigSum"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("person/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonWang() {
      this.$store.dispatch("person/addPersonWang", {
        id: nanoid(),
        name: this.name,
      });
      this.name = "";
    },
    getRandomName() {
      this.$store.dispatch("person/getRandomName");
    },
  },
};
</script>

<style>
</style>