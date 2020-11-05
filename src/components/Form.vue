<template>
  <form action="#">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  created() {
    //   缓存需要校验的表单项
    this.fields = [];
    this.$on("formItemAdded", (item) => this.fields.push(item));
  },
  methods: {
    async validate(callback) {
      const tasks = this.fields.map((item) => item.validate());
      const result = await Promise.all(tasks);
      let validStatus = true;
      result.forEach((valid) => {
        if (!valid) {
          validStatus = false;
        }
      });
      callback(validStatus);
    },
  },
};
</script>

<style lang="scss" scoped></style>
