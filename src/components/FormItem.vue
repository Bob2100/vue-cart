<template>
  <div>
    <label :for="forId" v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="validCode == 1">{{ errorMsg }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: ["label", "prop", "for"],
  data() {
    return {
      validCode: 0,
      errorMsg: "",
      forId: this.for,
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    //   挂载到form时，派发一个添加事件
    if (this.prop) {
      this.$parent.$emit("formItemAdded", this);
    }
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        //使用async-validate做校验
        const descriptor = { [this.prop]: this.form.rules[this.prop] };
        const validator = new Schema(descriptor);
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          (errors) => {
            if (errors) {
              this.validCode = 1;
              this.errorMsg = errors[0].message;
              resolve(false);
            } else {
              this.validCode = 0;
              this.errorMsg = "";
              resolve(true);
            }
          }
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
