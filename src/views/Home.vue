<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="goAbout">跳转到about</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    goAbout() {
      this.$router.push({
        name: "About",
        params: {
          id: 1,
          msg: "from home",
        },
      });
    },
  },
};
</script>
