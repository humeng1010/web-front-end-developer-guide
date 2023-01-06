<template>
  <div class="home">
    <SearchInput />
    <Tabs />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import Tabs from "@/components/Tabs";
export default {
  name: "Home",
  components: { SearchInput, Tabs },
  data() {
    return {
      active: "recommend",
    };
  },
  activated() {
    // Home被激活的时候，保证还是上次打开的tab
    this.$router.push({ name: this.active });
  },
  // 通过路由离开之前保存当前的路由名称
  beforeRouteLeave(to, from, next) {
    this.active = from.name;
    next();
  },
};
</script>

<style scoped>
.tabs {
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: #fff;
}
</style>