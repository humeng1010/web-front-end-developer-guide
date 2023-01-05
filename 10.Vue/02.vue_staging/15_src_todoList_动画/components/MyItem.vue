<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInLeft"
    leave-active-class="animate__backOutRight"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur($event, todo)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import "animate.css";
import PubSub from "pubsub-js";
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todo"],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      // this.$bus.$emit("checkTodo", id);
      // 消息发布
      PubSub.publish("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗"))
        // this.$bus.$emit("deleteTodo", id);
        PubSub.publish("deleteTodo", id);
    },
    // 编辑
    handleEdit(todo) {
      // 如果todo身上有isEdit 防止多次添加
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        // 给todo新增一个响应式的属性 isEdit
        this.$set(todo, "isEdit", true);
      }
      // 由于在调用focus方法的时候isEdit还没有开始修改，所以输入框是隐藏的不能获得焦点
      // 所以使用nextTick方法使得回调在下一次DOM完成更新后立即执行回调函数
      // 在下一次DOM更新完毕后执行回调函数
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 执行修改
    handleBlur(e, todo) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

.todo-enter-active {
  animation: todo 0.5s;
}
.todo-leave-active {
  animation: todo 0.5s reverse;
}

@keyframes todo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>