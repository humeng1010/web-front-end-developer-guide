<template>
  <div>
    <h2 @click="showName">学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>{{ x }}--{{ y }}</h2>
  </div>
</template>

<script>
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "Student",

  // props是不可以进行修改的,但是props优先级高于data，即在data中可以获取到props的数据
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // mixins: [mixin, mixin2],
};
</script>

