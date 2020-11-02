<template>
  <div>
    <label :for="forId" v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="validCode == 1">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  props: ["label", "prop", "for"],
  data() {
    return {
      validCode: 0,
      errorMsg: "",
      forId: this.for,
    };
  },
};
</script>

<style lang="scss" scoped></style>
