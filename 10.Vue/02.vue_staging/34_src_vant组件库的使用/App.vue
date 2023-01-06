<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="h">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <p>刷新次数: {{ count }}</p>
      <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/home" :badge="99"
          >标签</van-tabbar-item
        >
        <van-tabbar-item icon="search" to="/me">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
      <span>nih </span>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "App",
  data() {
    return {
      count: 0,
      isLoading: false,
      active: 0,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style>
.h {
  height: 100vh;
}
</style>