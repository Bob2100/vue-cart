<template>
  <input :type="type" :id="id" :value="inputValue" @input="inputHandler" />
</template>

<script>
export default {
  inject: ["description"],
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
      // 通知父组件值更新
      this.$emit("input", this.inputValue);
      // 通知FormItem做校验
      this.$parent.$emit("validate", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
