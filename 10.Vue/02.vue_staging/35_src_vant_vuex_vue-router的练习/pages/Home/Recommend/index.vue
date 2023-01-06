<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="recommend">
      <p>刷新次数: {{ count }}</p>
    </div>
  </van-pull-refresh>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Recommend",
  data() {
    return {
      count: 0,
      isLoading: false,
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

<style scoped>
.recommend {
  height: 1000px;
}
</style>