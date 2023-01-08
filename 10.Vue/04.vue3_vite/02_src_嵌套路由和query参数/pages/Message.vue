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
    </li>
  </ul>
  <hr />
  <router-view></router-view>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Message",
  setup() {
    const messageList = reactive([
      { id: "001", title: "消息001" },
      { id: "002", title: "消息002" },
      { id: "003", title: "消息003" },
    ]);

    return {
      messageList,
    };
  },
};
</script>

<style>
</style>