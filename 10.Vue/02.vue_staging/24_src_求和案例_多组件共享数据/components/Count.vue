<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大十倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法会调用commit方法联系mutations(对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    // 借助mapActions生成对应的方法，方法会调用dispatch方法联系actions(对象写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>