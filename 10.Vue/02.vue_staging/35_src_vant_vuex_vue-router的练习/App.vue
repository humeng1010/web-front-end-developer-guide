<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar
      v-model="active"
      route
      fixed
      active-color="#333"
      inactive-color="#aaa"
    >
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/shop">商品</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/find">探索</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/me">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>