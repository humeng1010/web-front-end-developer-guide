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
    /* sum() {
      return this.$store.state.count.sum;
    }, */
    ...mapState("count", ["sum", "school", "subject"]),

    ...mapState("person", ["personList"]),

    ...mapGetters("count", ["bigSum"]),
  },
  methods: {
    ...mapMutations("count", { increment: "JIA", decrement: "JIAN" }),

    ...mapActions("count", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>