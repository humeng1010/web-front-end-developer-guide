<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是school的组件，收到了数据", data);
    // });
    this.pubId = PubSub.subscribe("hello", (_, data) => {
      console.log(this);
      console.log("有人发布了hello消息，hello的回调执行了", data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    PubSub.unsubscribe(this.pubId);
  },
};
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

