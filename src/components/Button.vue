<template>
  <div>
    <button @click="handleClick" :type="type">自定义Button组件</button>
  </div>
</template>

<script>
export default {
  props: ["type"],
  methods: {
    handleClick() {
      this.$emit("click", { msg: "clicked!" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
