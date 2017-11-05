<template>
  <div id="app">
    <section class="cow">
      <router-view></router-view>
    </section>
    <select-cow></select-cow>
  </div>
</template>

<script>
import Vue from 'vue'
import SelectCow from './components/SelectCowFlowerMenu.vue'

Vue.component('select-cow', SelectCow);

export default {
  name: 'app'
}
</script>

<style>
  * {box-sizing: border-box;}
  body{
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
