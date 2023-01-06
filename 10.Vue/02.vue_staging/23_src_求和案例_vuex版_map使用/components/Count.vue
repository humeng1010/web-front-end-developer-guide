<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大十倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
    // 靠程序员自己写计算属性得到state
    /* sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */
    // 借助mapSatte生成计算属性，从state中读取数据(对象写法)
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法
    ...mapState(["sum", "school", "subject"]),

    /* bigSum() {
      return this.$store.getters.bigSum;
    }, */
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    /* increment() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      // this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    }, */
    // 借助mapMutations生成对应的方法，方法会调用commit方法联系mutations(对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 数组写法
    // ...mapMutations(["JIA", "JIAN"]),
    // **************************************** //
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */
    // 借助mapActions生成对应的方法，方法会调用dispatch方法联系actions(对象写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    // 数组写法
    // ...mapActions(["jiaOdd", "jiaWait"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>