<template>
  <div class="cowWrap">
    <pre v-on:click="motivate">{{ speak }}</pre>
    <span class="author">{{ author }}</span>
  </div>
</template>

<script>
import {
  say,
  HEAD_IN,
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
  WWW
} from "cowsay"

const quotes = require("motivation/lib/quotes")

// const eyes = ["-0", "oo", "/\\", "Oo", "XX", "xx"]
// const tonges = ["  ", "U ", ";;", "  ", "  ", "  "]

function getRandom(a) {
  return a[Math.floor(Math.random() * a.length - 1 + 0)]
}

const modes = ["b", "d", "g", "p", "s", "t", "w", "y"]
const cows = {
  HEAD_IN,
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
  WWW
}

export default {
  name: "cow",
  props: ["mode"],
  computed: {
    speak() {
      return say({
        text: this.cowMotivationMsg,
        cow:
          this.$props.mode === "random"
            ? cows[getRandom(Object.keys(cows))]
            : cows[this.$props.mode],
        mode: getRandom(modes)
      })
    }
  },
  data() {
    return {
      cowMotivationMsg: "Click me and I motivate you",
      author: ""
    }
  },
  methods: {
    motivate() {
      const cowMotivation = getRandom(quotes)
      this.cowMotivationMsg = cowMotivation.text
      this.cowSays = say({
        text: this.cowMotivationMsg,
        cow:
          this.$props.mode === "random"
            ? cows[getRandom(Object.keys(cows))]
            : cows[this.$props.mode],
        mode: getRandom(modes)
      })
      this.author = cowMotivation.author
    }
  }
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
