<template>
  <div class="tabs">
    <van-tabs v-model="active" animated swipeable>
      <van-tab title="推荐" name="recommend" to="/home/recommend">
        <!-- <router-view></router-view> -->
      </van-tab>
      <van-tab title="热门" name="hot" to="/home/hot">
        <!-- <router-view></router-view> -->
      </van-tab>
      <van-tab title="学习" name="study" to="/home/study">
        <!-- <router-view></router-view> -->
      </van-tab>
      <van-tab title="运动" name="sport" to="/home/sport">
        <!-- <router-view></router-view> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      active: "recommend",
    };
  },
};
</script>

<style>
</style>