<template>
  <div>
    <van-search
      v-model="value"
      background="pink"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <van-icon name="scan" size="20" />
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>