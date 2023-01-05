<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCar">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudent() {
      axios({
        method: "GET",
        url: "http://localhost:8080/api1/students",
      }).then(
        (res) => {
          console.log("请求成功了", res.data);
        },
        (err) => {
          console.log("请求失败了", err.message);
        }
      );
    },
    getCar() {
      axios.get("http://localhost:8080/api2/cars").then(
        (res) => {
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>
