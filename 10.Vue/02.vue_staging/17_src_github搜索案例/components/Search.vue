<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
        @keydown.enter="searchUsers"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      if (!this.keyWord.trim()) return alert("请输入");
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });

      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          // 请求成功后
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        },
        (err) => {
          // 请求失败后
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: err.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>