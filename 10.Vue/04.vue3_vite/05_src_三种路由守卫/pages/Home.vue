<template>
  <div class="home">
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
      <router-view #default="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  position: absolute;
  background-color: #fff;
}
</style>