<template>
  <div>
    <input type="text" v-model="be" />
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
      be: "",
    };
  },
  methods: {
    next() {
      if (!this.personGenerator) {
        this.personGenerator = this.PersonGenerator("Jump");
      }
      const result = this.personGenerator.next(this.be);
      this.person = result.value;
      this.done = result.done;
    },
    *PersonGenerator(action) {
      const p1 = yield "Bob " + action;
      console.log(`p1: ${p1}`);
      const p2 = yield "Jack " + action;
      console.log(`p2: ${p2}`);
      yield `Tom(${p1})` + action;
    },
    *ToolGenerator() {
      yield "刀子";
      yield "叉子";
    },
  },
};
</script>

<style lang="scss" scoped></style>
