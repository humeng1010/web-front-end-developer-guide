<template>
  <div>
    <div class="t1">
      <h1>插槽练习</h1>
      <div class="cards">
        <Card title="美食">
          <!-- 不配置名称和作用域会默认显示到默认插槽中 -->
          不配置名称和作用域会默认显示到默认插槽中,如果默认插槽配置了，则外面的不会显示了
          <template #default="{ data }">
            这是默认插槽，默认名称为:default <br />
            接收的prop：{{ data }}
          </template>

          <template #center="{ data: { foods } }">
            <ul>
              <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
            </ul>
          </template>

          <template v-slot:foot>
            <a href="">更多美食</a>
            <a href="">点我</a>
          </template>
        </Card>
        <Card title="电影🎬">
          <template v-slot:center="{ data: { films } }">
            <ol>
              <li v-for="(film, index) in films" :key="index">{{ film }}</li>
            </ol>
          </template>
          <template v-slot:foot>
            <div class="foot">
              <a href="">经典</a>
              <a href="">热门</a>
              <a href="">推荐</a>
            </div>
            <h4>欢迎前来观影</h4>
          </template>
        </Card>
        <Card title="游戏">
          <template v-slot:center="{ data: { games } }">
            <h4 v-for="(game, index) in games" :key="index">
              {{ game }}
            </h4>
          </template>
          <template v-slot:foot>
            <a href="">麻花疼</a>
          </template>
        </Card>
      </div>
      <br /><br />
      <hr />
    </div>

    <div class="t2">
      <h1>动画的过渡练习</h1>
      <button @click="isShow = !isShow">显示或隐藏</button>
      <transition appear name="red">
        <h2 v-show="isShow" class="bar">Vue</h2>
      </transition>

      <br /><br />
      <hr />
    </div>

    <div class="t3">
      <h1>练习组件自定义事件</h1>
      <p>适用于子给父传递数据</p>
      <p>app中接收到的数据:{{ data }}</p>
      <button @click="sendData">给Item组件传递数据</button>
      <!-- 使用v-on:绑定自定义事件 -->
      <!-- <Category @demo="demo">
      <h2>使用v-on:绑定自定义事件</h2>
    </Category> -->
      <!-- 使用refs获取组件的实例对象绑定自定义事件 -->
      <Category ref="category">
        <h2>使用refs获取组件的实例对象绑定自定义事件</h2>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: { Category, Card },
  data() {
    return {
      data: "",
      isShow: true,
    };
  },
  mounted() {
    this.$refs.category.$on("demo", (data) => {
      console.log("这是App组件", data);
      this.data = data;
    });
  },
  methods: {
    demo(data) {
      console.log("这是App组件", data);
      this.data = data;
    },
    sendData() {
      this.$bus.$emit("getAppData", 888);
    },
  },
};
</script>

<style scoped lang="less">
.bar {
  background-color: skyblue;
}
.cards {
  display: flex;
  justify-content: space-around;
  img {
    width: 100%;
  }
}
/* 第一种 */
/* .red-enter-active {
  animation: show 1s;
}
.red-leave-active {
  animation: show 1s reverse;
} */

@keyframes show {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
/* 第二种 */
.red-enter,
.red-leave-to {
  transform: translateX(-100%);
}
.red-enter-to,
.red-leave {
  transform: translateX(0);
}
.red-enter-active,
.red-leave-active {
  transition: all 1s;
}
</style>