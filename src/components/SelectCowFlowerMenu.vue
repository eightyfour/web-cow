<template>
  <div ref="root" class="flowerMenu">
    <global-events @click="closeMenu" />
    <button v-show="!active" v-on:click="open">{{ label || 'choose' }}</button>
    <div ref="menu" class="menu" :class="active? 'show' : ''">
      <div ref="animate" class="menu--item-wrap">
        <div v-for="cow in cowsToSelect" v-on:click="cowChange(cow)" :key="cow" class="menu--item"><span>{{ cow }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { show, hide } from "../lib/navSun"
import GlobalEvents from "vue-global-events"

const cowsToSelect = [
  "random",
  "HEAD_IN",
  "BUD_FROGS",
  "SQUIRREL",
  "BUNNY",
  "COWER",
  "ELEPHANT",
  "KOALA",
  "SHEEP",
  "SMALL",
  "STEGOSAURUS",
  "SURGERY",
  "TELEBEARS",
  "TUX",
  "WHALE",
  "WWW"
]

export default {
  name: "cow",
  components: {
    GlobalEvents
  },
  props: ["label"],
  /**
   * Triggered after template is rendered
   */
  mounted() {
    // stop propagation otherwise the click button doesn't count
    this.$refs.root.addEventListener("click", function(e) {
      e.stopPropagation()
    })
  },
  data() {
    return {
      active: false,
      cowsToSelect
    }
  },
  methods: {
    closeMenu() {
      hide(this.$refs.animate)
      this.active = false
    },
    open() {
      this.active = true
      show(this.$refs.animate)
    },
    cowChange(cow) {
      this.active = false
      this.$emit("selected", cow)
      hide(this.$refs.animate)
    }
  }
}
</script>

<style>
.flowerMenu {
  text-align: center;
  position: absolute;
  bottom: 1em;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  left: 0;
}
.menu {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  position: absolute;
  bottom: 2em;
  display: block;
  transition: opacity 500ms 500ms, box-shadow 500ms;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.9);
}
.show.menu {
  box-shadow: 0 0 4em 15em rgba(255, 255, 255, 0.9);
  transition: opacity 0ms 0ms, box-shadow 500ms;
  opacity: 1;
}
.menu--item-wrap {
  font-size: small;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: auto;
  top: 0;
  left: -10px;
}
.menu--item {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  transition: all 1s;
  text-align: center;
  line-height: 30px;
}
.menu--item span {
  /* center the text span*/
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: font-size 200ms;
}
.menu--item span:hover {
  font-size: 1.5em;
}
button {
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  min-width: 10em;
  padding: 0.3em;
  border-color: white;
  color: #aaa;
  position: absolute;
  bottom: 3em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
button:hover,
button:focus {
  border-color: #ddd;
  color: #333;
}
</style>
