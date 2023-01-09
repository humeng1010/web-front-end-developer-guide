<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button class="btn btn-primary" @click="forward">前进</button>
      <button class="btn btn-warning" @click="back">后退</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "TopTitle",
  //   传统写法
  //#region
  /* methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
  }, */
  //#endregion

  //   在 setup 函数中使用 router 或者 route
  setup() {
    const router = useRouter();

    const forward = () => {
      router.forward();
    };
    const back = () => {
      router.back();
    };

    return {
      forward,
      back,
    };
  },
};
</script>

<style>
</style>