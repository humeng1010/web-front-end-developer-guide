<template>
  <div class="row">
    <TopTitle />
  </div>
  <div class="row">
    <div class="col-xs-2 col-xs-offset-2">
      <div class="list-group">
        <router-link class="list-group-item" to="/about" active-class="active"
          >About</router-link
        >
        <router-link class="list-group-item" to="/home" active-class="active"
          >Home</router-link
        >
      </div>
    </div>
    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body re">
          <router-view v-slot="{ Component }">
            <transition name="router">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./components/TopTitle.vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
  components: { TopTitle },
};
</script>

<style scoped>
.re {
  position: relative;
}
.router-enter-from,
.router-leave-to {
  transform: translateX(300%);
}
.router-enter-active,
.router-leave-active {
  transition: all 1s;
}
.router-enter-to,
.router-leave-from {
  transform: translate(0);
}
</style>
