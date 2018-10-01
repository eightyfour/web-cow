<template>
  <div id="app">
    <section class="cow">
      <cow :mode="mode"></cow>
    </section>
    <select-cow @selected="cowChange"></select-cow>
  </div>
</template>

<script>
import Vue from "vue"
import SelectCow from "./components/SelectCowFlowerMenu.vue"
import Cow from "./components/Cow.vue"

export default {
  name: "app",
  components: {
    Cow,
    SelectCow
  },
  watch: {
    $route(to, from) {
      const selectedCow =
        to.params.cow && to.params.cow !== "random"
          ? to.params.cow.toUpperCase()
          : "random"
      this.mode = selectedCow
    }
  },
  methods: {
    cowChange(cow) {
      this.$router.push({ path: `/${cow}` })
    }
  },
  mounted() {
    this.mode = this.$route.params.cow || "random"
  },
  data() {
    return {
      mode: "random"
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  font-size: 150%;
  user-select: none;
}
.cow {
  cursor: pointer;
  margin: auto;
  max-width: 60%;
}
</style>
