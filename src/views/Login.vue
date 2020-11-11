<template>
  <div>
    <h3>登录页面</h3>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      // 登录成功
      await this.$store.dispatch("submitLogin");
      if (this.$store.state.isLogin) {
        const { redirect } = this.$route.query;
        if (redirect) {
          this.$router.push(redirect);
        } else {
          this.$router.push("/");
        }
      } else {
        alert("登录失败！");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
