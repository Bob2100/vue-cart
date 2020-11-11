<template>
  <div>
    <h3>Dashboard</h3>
    <!-- 父组件路由出口，负责显示子路由内容 -->
    <router-view></router-view>
    <button @click="inc">Increase</button>
    <p>state.count: {{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    inc() {
      this.$store.commit("increase");
    },
  },
};
</script>

<style lang="scss" scoped></style>
