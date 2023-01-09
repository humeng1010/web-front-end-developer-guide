<template>
  <div class="app">
    <NavBar></NavBar>
    <main>
      <router-view #default="{ Component, route }">
        <transition name="fade" v-if="route.path !== '/'">
          <component :is="Component" :class="{ position: route.path !== '/' }"></component>
        </transition>
        <transition v-else="route.path == '/'">
          <component :is="Component" :class="{ position: route.path !== '/' }"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import LeftMenu from './components/common/LeftMenu.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    LeftMenu
  },

}
</script>

<style>
.position {
  position: absolute;
  top: 3.75rem;
  left: 20rem;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
