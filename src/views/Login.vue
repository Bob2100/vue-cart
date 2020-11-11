<template>
  <div>
    <h3>登录页面</h3>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // 登录成功
      window.isLogin = true;
      const { redirect } = this.$route.query;
      if (redirect) {
        this.$router.push(redirect);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
