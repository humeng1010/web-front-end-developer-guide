<template>
  <div class="container">
    <Category title="游戏">
      <!-- scope接收到的是一个对象，对象中含有子组件插槽传递的数据，可以使用解构赋值简便获取数据 -->
      <template scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
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