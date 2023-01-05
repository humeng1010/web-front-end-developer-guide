<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
</style>