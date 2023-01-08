<template>
  <div class="child">
    <h3>我是 child 子组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Child",

  async setup() {
    let sum = ref(0)

    // 如果返回的是一个 Promise 对象或者使用了 async 关键字定义 setup ,
    // 那么组件使用的时候必须使用了 Suspense 标签包裹组件
    const p = new Promise((reslove, reject) => {
      setTimeout(() => {
        // 等待 3 秒后返回成功的结果对象 sum
        reslove({ sum })
      }, 3000);
    })
    // 使用了 await 关键字会等待上方 3 秒结束后得到结束后成功的结果对象 {sum} 进行返回
    return await p
  }


}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>