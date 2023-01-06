<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // console.log(this);
    // console.log("About组件挂载完毕");
  },
  beforeDestroy() {
    // console.log("About组件即将被销毁");
  },
  // 通过路由规则，进入该组件时会调用
  beforeRouteEnter(to, from, next) {
    console.log("组件内路由守卫——进入时", to, from);
    // 判断每一个路由中的meta里的isAuth是否需要判断权限
    if (to.meta.isAuth) {
      if (localStorage.getItem("root") === "vue") {
        next();
      } else {
        alert("您没有权限");
      }
    } else {
      next();
    }
  },
  // 通过路由规则，离开该组件时会调用
  beforeRouteLeave(to, from, next) {
    console.log("组件内路由守卫—-离开时", to, from);
    next();
  },
};
</script>

<style>
</style>