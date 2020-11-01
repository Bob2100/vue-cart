<template>
  <div>
    <button @click="handleClick">自定义Button组件</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click", {msg: 'clicked!'});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>