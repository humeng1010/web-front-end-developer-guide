<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img95.699pic.com/photo/50164/1012.jpg_wh300.jpg"
        alt="烧烤"
      />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <ul>
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "KFC", "海底捞", "牛排"],
      games: ["原神", "穿越火线", "英雄联盟", "超级玛丽"],
      films: ["肖申克的救赎", "放牛班的春天", "功夫", "三体"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>