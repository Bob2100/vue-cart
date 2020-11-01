<template>
  <input type="text" :value="value" @input="inputHandler" />
</template>

<script>
export default {
  props: {
    param: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.param,
    };
  },
  methods: {
    inputHandler(e) {
      this.value = e.target.value;
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>