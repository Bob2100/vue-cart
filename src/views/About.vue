<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 获取路由路径参数 -->
    <h3>msg:{{ msg }}</h3>
    <h3>id-params:{{ idParam }}</h3>
    <h3>id-query:{{ idQuery }}</h3>
    <h3>来自prop: {{ foo }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    foo: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "",
    },
    idParam: {
      type: String,
      default: "",
    },
    idQuery: {
      type: String,
      default: "",
    },
  },
  beforeRouteEnter(to, from, next) {
    if (window.isLogin) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  },
};
</script>
