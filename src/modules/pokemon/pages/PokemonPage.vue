<template>
  <h1>Juego Pokemon</h1>
  <Image :pokemon-id=8 :muestraPokemon="false"> </Image>
  
  <Option :opciones="arregloPokemon"></Option>
  
</template>

<script>
import Image from "../components/PokemonImg.vue";
import Option from "../components/PokemonOps.vue";

import obtenenerFachadaPokemon from "../helpers/clientePokemonApi"

console.log(obtenenerFachadaPokemon());
//nombre del metodo quye quiero utilizar
export default {

  data() {
    return {
      arregloPokemon:[]
    }
  },
  components: {
    Image,
    Option,
  },
  mounted() {
    this.cargaJuegoInicial()
  },
  methods: {
    async cargaJuegoInicial (){
       this.arregloPokemon =await obtenenerFachadaPokemon()
      console.log(this.arregloPokemon);
      return this.arregloPokemon
    }
  },
};
</script>

<style>
h1{
  text-align: center;
}
</style>
