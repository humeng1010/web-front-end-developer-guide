<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            to="/home/news"
            active-class="active"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            to="/home/message"
            active-class="active"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    // console.log(this);
    // console.log("Home组件挂载完毕");
  },
  beforeDestroy() {
    // console.log("Home组件即将被销毁");
  },
};
</script>

<style>
</style>