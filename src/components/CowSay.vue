<template>
  <div class="cowWrap">
    <pre @click="motivate">{{ speak }}</pre>
    <span class="author">{{ author }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import {
  say,
  BUD_FROGS,
  SQUIRREL,
  BUNNY,
  COWER,
  ELEPHANT,
  KOALA,
  SHEEP,
  SMALL,
  STEGOSAURUS,
  SURGERY,
  TELEBEARS,
  TUX,
  WHALE,
  WWW,
} from 'cowsay'

import * as quotes from 'motivation/lib/quotes'
import { useRoute } from 'vue-router'

// const eyes = ["-0", "oo", "/\\", "Oo", "XX", "xx"]
// const tonges = ["  ", "U ", ";;", "  ", "  ", "  "]

function getRandom(a: Record<string, any>): string {
  return a[Math.floor(Math.random() * a.length - 1 + 0)]
}

const modes = ['b', 'd', 'g', 'p', 's', 't', 'w', 'y']
const cows = {
  BUD_FROGS,
  SQUIRREL,
  BUNNY,
  COWER,
  ELEPHANT,
  KOALA,
  SHEEP,
  SMALL,
  STEGOSAURUS,
  SURGERY,
  TELEBEARS,
  TUX,
  WHALE,
  WWW,
}
const route = useRoute()
const mode = ref(route.params.cow)
const cowMotivationMsg = ref('Click me and I motivate you')
const author = ref('')

const speak = computed(() => {
  const cowType =
    mode.value === 'random'
      ? cows[getRandom(Object.keys(cows))] as any
      : cows[mode.value as any]
  return say({
    text: cowMotivationMsg.value,
    cow: cowType,
    mode: getRandom(modes),
  })
})

watch(
  () => route.params.cow,
  (newCow) => {
    mode.value = newCow && newCow !== 'random' ? String(newCow).toUpperCase() : 'random'
  },
)

function motivate() {
  const cowMotivation = getRandom(quotes.default)
  cowMotivationMsg.value = cowMotivation.text
  author.value = cowMotivation.author
}
</script>

<style>
.cowWrap {
  top: -5em;
  position: relative;
}
.author {
  float: right;
  font-size: small;
}
</style>
