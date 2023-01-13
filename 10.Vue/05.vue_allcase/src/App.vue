<template>
  <div class="app">
    <NavBar></NavBar>
    <aside v-if="$route.meta.showMenu">
      <LeftMenu></LeftMenu>
    </aside>
    <main>
      <router-view #default="{ Component, route }">
        <transition name="fade" v-if="route.path !== '/'">
          <component :is="Component" :class="{ main: route.path !== '/' }"></component>
        </transition>
        <!-- 首页不采用过渡 -->
        <transition v-else="route.path == '/'">
          <component :is="Component" :class="{ main: route.path !== '/' }"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/common/NavBar.vue'
import LeftMenu from './components/common/LeftMenu.vue'

</script>

<style>
.main {
  position: absolute;
  top: 3.75rem;
  padding: 20px;
  /* left: 20rem; */
  transition: all .3s;
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
