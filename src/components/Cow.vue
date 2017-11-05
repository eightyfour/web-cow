<template>
    <div class="cowWrap">
      <pre v-on:click="motivate">{{ cowSays }}</pre>
      <span class="author">{{ author }}</span>
    </div>
</template>

<script>

    import { say, HEAD_IN, BUD_FROGS, SQUIRREL, BUNNY, COWER, ELEPHANT, KOALA, SHEEP, SMALL, STEGOSAURUS, SURGERY, TELEBEARS, TUX, WHALE, WWW } from 'cowsay';

    const quotes = require('motivation/lib/quotes');

    const eyes = ['-0', 'oo', '/\\', 'Oo', 'XX', 'xx'];
    const tonges = ['  ', 'U ', ';;', '  ', '  ', '  '];
    let selectedCow;

    function getRandom(a) {
        return a[Math.floor((Math.random() * a.length - 1) + 0)]
    }

    const modes = ["b", "d", "g", "p", "s", "t", "w", "y"];
    const cows = {HEAD_IN, BUD_FROGS, SQUIRREL, BUNNY, COWER, ELEPHANT, KOALA, SHEEP, SMALL, STEGOSAURUS, SURGERY, TELEBEARS, TUX, WHALE, WWW};

    export default {
        name: 'cow',
        watch: {
            '$route' (to, from) {
                selectedCow = (to.params.cow && to.params.cow !== 'random') ? to.params.cow.toUpperCase() : 'random';
                this.cowSays = say({
                    text: this.cowMotivationMsg,
                    cow: cows[selectedCow],
                    mode : getRandom(modes)
                })
            }
        },
        created () {
            console.log('Cow:created', this.$route.params.cow);
            selectedCow = (this.$route.params.cow && this.$route.params.cow.toUpperCase()) || 'random';
        },
        data () {
            return {
                cowMotivationMsg : 'You are the best!',
                cowSays: say({ text: "Click me and I motivate you" }),
                author: ''
            }
        },
        methods : {
            motivate() {
                const cowMotivation = getRandom(quotes);
                this.cowMotivationMsg = cowMotivation.text;
                this.cowSays = say({
                    text: this.cowMotivationMsg,
                    cow: selectedCow === 'random' ? cows[getRandom(Object.keys(cows))] : cows[selectedCow],
                    mode : getRandom(modes)
                })
                this.author = cowMotivation.author;
            }
        }
    }
</script>

<style>

  .cowWrap{
    top: -5em;
    position: relative;
  }
  .author{
    float:right;
    font-size: small;
  }

</style>
