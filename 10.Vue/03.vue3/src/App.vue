<template>
  <div class="app">
    <h3>我是 App 组件</h3>
    <!-- 类似于骨架屏,但是可以处理组件的 setup 返回的是 Promise 对象 -->
    <!-- 让 Suspense 来管理这个组件的加载 -->
    <Suspense>
      <!-- 真正展示的内容 -->
      <template v-slot:default>
        <Child></Child>
      </template>
      <!-- 退路的展示 -->
      <template #fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//静态引入
// import Child from './components/Child'
// 异步引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue"));

export default {
  name: "App",
  components: { Child },
};
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>