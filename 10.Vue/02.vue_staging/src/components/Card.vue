<template>
  <div class="card">
    <h4>这是{{ title }}分类</h4>
    <slot :data="88"></slot>
    <slot name="center" :data="{ foods, films, games }"></slot>
    <slot name="foot"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
      //   default: "美食",
    },
  },
  data() {
    return {
      foods: ["甜甜圈", "爆米花", "苹果", "烤肠"],
      films: ["钢铁侠", "蝙蝠侠", "美国队长", "毒液"],
      games: ["原神", "王者荣耀", "刺激战场", "狼人杀"],
    };
  },
};
</script>

<style scoped lang="less">
.card {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  h4 {
    text-align: center;
  }
}
</style>