<template>
  <ul>
    <li v-for="m in messageList">
      <!-- path: `/home/message/detail`, -->
      <router-link
        :to="{
          name: 'detail',
          query: {
            id: m.id,
            title: m.title,
          },
        }"
        :key="m.id"
        >{{ m.title }}</router-link
      >&nbsp;&nbsp;
      <input type="text" />
    </li>
  </ul>
  <hr />
  <router-view></router-view>
</template>

<script>
import { reactive, onBeforeUnmount, onActivated, onDeactivated } from "vue";
export default {
  name: "Message",
  setup() {
    const messageList = reactive([
      { id: "001", title: "消息001" },
      { id: "002", title: "消息002" },
      { id: "003", title: "消息003" },
    ]);

    onBeforeUnmount(() => {
      //   console.log("---onBeforeUnmount---");
    });

    onActivated(() => {
      //   console.log("Message被激活了");
    });
    onDeactivated(() => {
      //   console.log("Message失活了");
    });

    return {
      messageList,
    };
  },
};
</script>

<style>
</style>