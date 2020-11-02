<template>
  <input :id="idValue" type="text" :value="inputValue" @input="inputHandler" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
      idValue: this.id,
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
