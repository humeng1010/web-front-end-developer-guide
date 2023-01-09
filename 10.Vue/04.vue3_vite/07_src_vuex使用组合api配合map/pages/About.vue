<template>
  <div class="about">
    <h2>我是求和案例的内容</h2>
    <div>
      <h1>当前求和为:{{ sum() }}</h1>
      <h3>当前求和放大十倍为:{{ bigSum() }}</h3>
      <h3>我在{{ school() }}，学习{{ subject() }}</h3>
      <h3 style="color: red">Person组件的总人数是{{ personList().length }}</h3>
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
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "About",
  setup() {
    const n = ref(1);
    return {
      n,
      // 由于mapState 和 mapGetters 返回的都是对象中函数,通过解构后得到的是函数,所以页面上使用的时候需要加小括号调用
      ...mapState("count", ["sum", "school", "subject"]),
      ...mapState("person", ["personList"]),
      ...mapGetters("count", ["bigSum"]),
      ...mapMutations("count", {
        increment: "INCREMENT",
        decrement: "DECREMENT",
      }),
      ...mapActions("count", ["incrementOdd", "incrementWait"]),
    };
  },
};
</script>

<style scoped>
.about {
  position: absolute;
  background-color: #fff;
}
</style>