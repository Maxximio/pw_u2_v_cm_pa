<template>
  <h1>Juego Pokemon</h1>
  <Image :pokemon-id="aleatorio(1,650)" :muestraPokemon="false"> </Image>
  
  <Option></Option>
</template>

<script>
import Image from "../components/PokemonImg.vue";
import Option from "../components/PokemonOps.vue";

export default {
  components: {
    Image,
    Option,
  },
  methods: {
    aleatorio(min, max) {
      const alea = Math.floor(Math.random() * (max - min + 1) + min);
      return alea
    },
    
  },
};
</script>

<style>
h1{
  text-align: center;
}
</style>
