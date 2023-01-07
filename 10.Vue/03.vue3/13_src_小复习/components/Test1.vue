<template>
  <div class="container">
    <header>
      <h1>06_src_setup接收的两个参数</h1>
    </header>
    <main>
      <p>
        setup 是组合 api 的大舞台,该函数可以接收到两个参数,分别是:props 和
        context,<br />作用如下:
      </p>
      <hr />
      <p>
        props 可以接收组件外部传递的属性;注意属性需要在该组件内使用 props
        配置项进行接收,否则会出现警告⚠️
      </p>
      <p>
        context 顾名思义为上下文对象,该对象中包含了在 setup
        中可能使用到或者组件使用的时候传递的一些配置: 
        <ul>
          <li>
            例如attrs(没有被接收的props)
          </li>
          <li>emit(这个是一个函数类似于 vue2 中的 this.$emit() 用于触发绑定的自定义事件,触发某个自定义事件之前注意也需要使用 emits 配置项进行接收)</li>
          <li>slots(插槽)</li>
        </ul>        
      </p>
    <hr>
    </main>
    <footer>
      <p>插槽位置</p>
      <p>
        <slot></slot>
      </p>
      <p>
        <slot name="top"></slot>
      </p>
      <p>
        <slot name="scope" :data="data"></slot>
      </p>
    </footer>
    
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Test1",
  props: ["name", "age"],
  emits: ["hello"],
  setup(props, context) {
    // console.log(props, context);
    console.log("props", props);
    console.log("attrs", context.attrs);
    // console.log("emit", context.emit);
    context.emit("hello", 666);
    console.log("slots", context.slots);

    const data = reactive([
      { id: "001", name: "张三" },
      { id: "002", name: "李四" },
      { id: "003", name: "王五" },
    ]);
    return {
      data,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>