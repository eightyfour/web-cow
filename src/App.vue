<template>
  <div id="app">
    <section class="cow">
      <router-view />
    </section>
    <select-cow :label="mode" @selected="cowChange"></select-cow>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SelectCow from './components/SelectCowFlowerMenu.vue'

const mode = ref('random')
const route = useRoute()
const router = useRouter()

function cowChange(cow: string) {
  router.push({ path: `/${cow}` })
}

watch(
  () => route.params.cow,
  (newCow) => {
    mode.value = newCow && newCow !== 'random' ? String(newCow).toUpperCase() : 'random'
  },
)

onMounted(() => {
  mode.value = (route.params.cow || 'random') as string
})
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
  font-size: clamp(0.4em, 2.5vw, 0.7em);
}
</style>
