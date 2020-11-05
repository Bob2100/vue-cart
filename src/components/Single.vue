<template>
  <div>
    <button @click="next">next</button>
    <p>{{ person }}</p>
    <p>{{ done }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: "",
      done: false,
      personGenerator: null,
    };
  },
  methods: {
    next() {
      if (!this.personGenerator) {
        this.personGenerator = new this.PersonGenerator();
      }
      const result = this.personGenerator.next();
      this.person = result.value;
      this.done = result.done;
    },
    *PersonGenerator() {
      yield "Bob";
      yield "Tom";
      yield "Jack";
    },
  },
};
</script>

<style lang="scss" scoped></style>
