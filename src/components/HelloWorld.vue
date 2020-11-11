<template>
  <div>
    <h3>{{ msg }}</h3>
    <p>state.count: {{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style lang="scss" scoped></style>
