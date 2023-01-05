<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://img95.699pic.com/photo/50164/1012.jpg_wh300.jpg"
        alt="烧烤"
      />
      <a href="" slot="footer">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <ul slot="center">
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
      <!-- v-slot:footer只能写在template标签上 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>