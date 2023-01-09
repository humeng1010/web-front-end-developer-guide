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
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const name = ref("");
    const store = useStore();
    return {
      name,
      // store.state.count.xx
      sum: store.state.count.sum,
      // store.getters["count/bigSum"]
      bigSum: store.getters["count/bigSum"],
      // store.state.person.personList
      personList: store.state.person.personList,
      // store.commit('person/ADD_PERSON',name)
      add: (name) => {
        const personObj = { id: Math.random, name };
        store.commit("person/ADD_PERSON", personObj);
      },
      // store.dispatch('person/addPersonWang',name)
      addPersonWang: (name) => {
        const personObj = { id: Math.random, name };
        store.dispatch("person/addPersonWang", personObj);
      },
      // store.dispatch('person/getRandomName')
      getRandomName: () => {
        store.dispatch("person/getRandomName");
      },
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