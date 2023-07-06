<template>

  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
  <Image :pokemon-id="pokemonCorrecto.id" :muestraPokemon="showPokemon"> </Image>
  <Option :opciones="arregloPokemon" v-on:seleccionado="revisarSeleccion($event)" ></Option>
  </div>

  <div>
    <p>Puntaje: {{puntaje}}</p>
    <p>Equivocaciones: {{equivocaciones}}</p>
    <button v-if="mostrarSiguiente" @click="siguienteM">Siguiente</button>
  </div>

  
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
      arregloPokemon:[],
      pokemonCorrecto: null,
      showPokemon: false,

      puntaje:0,
      equivocaciones:0,
      mostrarSiguiente:false
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
      const arreglosPokemon =await obtenenerFachadaPokemon()
      console.log(this.arregloPokemon);
      this.arregloPokemon=arreglosPokemon
      const indicePokemon=Math.floor(Math.random()*4)
      this.pokemonCorrecto=this.arregloPokemon[indicePokemon]
      this.showPokemon=false
      this.mostrarSiguiente=false
    },
    revisarSeleccion(idSeleccionado){
      console.log('evento en el padre')

      console.log(idSeleccionado);

      if(this.pokemonCorrecto.id==idSeleccionado){
        this.puntaje=this.puntaje+1
        this.showPokemon=true
        this.mostrarSiguiente=true
      }else{
        this.equivocaciones=this.equivocaciones+1
      }
    },
    siguienteM(){
      this.cargaJuegoInicial()
    }

  },
};
</script>

<style>
h1{
  text-align: center;
}
</style>
