<template>
  <div>
    <h3>Dashboard</h3>
    <!-- 父组件路由出口，负责显示子路由内容 -->
    <router-view></router-view>
    <button @click="inc">Increase</button>
    <button @click="incAsync">incAsync</button>
    <p>state.count: {{ count }}</p>
    <p>金额: {{ money }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["money"]),
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["increaseAsync"]),
    ...mapMutations(["increase"]),
    inc() {
      this.increase();
    },
    incAsync() {
      this.increaseAsync();
    },
  },
};
</script>

<style lang="scss" scoped></style>
