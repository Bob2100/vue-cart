<template>
  <div>
    {{ description }}
    <input :type="type" :id="id" :value="inputValue" @input="inputHandler" />
  </div>
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
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
