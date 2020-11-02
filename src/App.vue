<template>
  <div id="app">
    <p>商品列表</p>
    <table border="1px solid black" cellspacing="0">
      <tr v-for="(good, index) in goods" :key="good.id">
        <td>{{ good.text }}</td>
        <td>¥{{ good.price }}</td>
        <td>
          <button @click="addToCart(index)">加入购物车</button>
        </td>
      </tr>
    </table>

    <!-- 使用组件 -->
    <cart :name="name"></cart>

    <form-test title="element ui 表单"></form-test>

    <s-button @click="handleClick"></s-button>

    <s-input v-model="inputValue"></s-input>
    <h1>{{ inputValue }}</h1>

    <s-window>
      <template slot="head">
        <h1>页面头</h1>
      </template>
      <h1>插槽的使用</h1>
      <template slot="foot">
        <h1>页面尾</h1>
      </template>
    </s-window>
  </div>
</template>

<script>
// 导入组件
import Cart from "./components/Cart";
import axios from "axios";
import FormTest from "./components/FormTest";
import SButton from "./components/Button";
import SInput from "./components/Input";
import SWindow from "./components/Window";

export default {
  name: "App",
  // 注册组件
  components: {
    Cart,
    FormTest,
    SButton,
    SInput,
    SWindow,
  },
  data() {
    return {
      isShow: false,
      text: "",
      price: "",
      goods: [],
      name: "我的购物车",
      cart: [],
      inputValue: "",
    };
  },
  async created() {
    const res = await axios.get("/api/goods");
    this.goods = res.data.list;
  },
  methods: {
    handleClick(obj) {
      alert(obj.msg);
    },
    addToCart(index) {
      this.$bus.$emit("addToCart", this.goods[index]);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
.cart-good,
table {
  width: 500px;
  margin: 0 auto;
}
.cart-good {
  padding: 10px;
  display: flex;
}
</style>
