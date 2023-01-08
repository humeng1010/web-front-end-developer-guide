<template>
  <h1>hello</h1>
  <h1>{{ a }}</h1>
  <h1>{{ b }}</h1>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "TEST",
  setup() {
    const data = reactive({
      a: 1,
      b: 2
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>

</style>