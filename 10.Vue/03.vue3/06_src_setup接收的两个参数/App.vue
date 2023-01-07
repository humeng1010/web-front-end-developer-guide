<template>
  <Demo msg="你好呀" school="尚硅谷" @hello="showHelloMsg">
    <template #center="{ data: { person } }">
      <span>中间:{{ person }}</span>
    </template>
    <template #footer>
      <span>下面</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(data) {
      alert("你触发了 hello 事件,我收到的参数是:" + data);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>


