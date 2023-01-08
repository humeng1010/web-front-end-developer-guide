<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import {customRef} from "vue";

export default {
  name: "App",
  setup() {

    //自定义 Ref——myRef
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer = null
        return {
          get() {
            console.log(`有人从 myRef 这个容器中读取数据了，我把${value}给它了`)
            //通知 vue 追踪返回的数据的变化(提前和 getter 商量好，让它认为 value 是有用的)
            track()//追踪
            return value
          },
          set(newValue) {
            console.log(`有人把 myRef 这个容器中的数据改为了${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              //通知 vue 重新解析模板
              trigger()//触发
            }, delay)
          }
        }
      })
    }

    let keyWord = myRef('hello', 500)

    //使用 vue 提供的 ref
    // let keyWord = ref('hello')
    //使用程序员自定义的 ref
    return {
      keyWord
    }
  }

};
</script>


