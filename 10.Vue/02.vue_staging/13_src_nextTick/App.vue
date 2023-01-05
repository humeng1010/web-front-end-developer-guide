<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter ref="footer" :todos="todos" @checkAllTodo="checkAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 使用ref获取组件实例对象MyFooter的方式调用$on绑定自定义事件
    this.$refs.footer.$on("clearAllTodo", this.clearAllTodo);
    // 向全局事件总线上绑定事件
    // this.$bus.$on("checkTodo", this.checkTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    // 消息订阅
    this.pubId1 = PubSub.subscribe("checkTodo", this.checkTodo);
    this.pubId2 = PubSub.subscribe("deleteTodo", this.deleteTodo);

    // 全局事件总线
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    // this.$bus.$off(["checkTodo", "deleteTodo"]);
    PubSub.unsubscribe(this.pubId1);
    PubSub.unsubscribe(this.pubId2);

    this.$bus.$off("updateTodo");
  },
  methods: {
    // 添加todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选or取消勾选todo
    checkTodo(_, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 更新todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(96, 148, 169);
  margin-right: 5px;
}

.btn-edit:hover {
  background-color: rgb(113, 174, 199);
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>