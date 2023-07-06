<template>
  <div class="container">
    <div v-if="juegoActivo">

      <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>

      <div v-else>
        <h1>Juego Pokemon</h1>

        <Image :pokemon-id="pokemonCorrecto.id" :muestraPokemon="showPokemon"> </Image>
        <Option :opciones="arregloPokemon" v-on:seleccionado="revisarSeleccion($event)"></Option>


        <div class="puntajes">
          <p>Puntaje: {{ puntaje }}</p>
          <p>Intentos: {{ intentos }}</p>
        </div>



        <h2 v-if="ganador">Felicidades, Has Ganado!!!</h2>



        <h2 v-if="perdedor">Has perdido, suerte para la proxima</h2>



        <button v-if="mostrarSiguiente" @click="reiniciar">Reiniciar</button>


      </div>
    </div>
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
      arregloPokemon: [],
      pokemonCorrecto: null,
      showPokemon: false,

      puntaje: 0,
      intentos: 0,
      mostrarSiguiente: false,
      ganador: false,
      perdedor: false,
      juegoActivo: true
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
    async cargaJuegoInicial() {
      const arreglosPokemon = await obtenenerFachadaPokemon()
      console.log(this.arregloPokemon);
      this.arregloPokemon = arreglosPokemon
      const indicePokemon = Math.floor(Math.random() * 4)
      this.pokemonCorrecto = this.arregloPokemon[indicePokemon]
      this.showPokemon = false
      this.mostrarSiguiente = false
    },
    revisarSeleccion(idSeleccionado) {


      if (this.intentos == 2) {
        this.perdedor = true
        this.mostrarSiguiente = true
        this.intentos = this.intentos + 1
      } else {

        if (this.pokemonCorrecto.id == idSeleccionado) {
          if (this.intentos == 0) {
            this.puntaje = this.puntaje + 5
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.intentos = this.intentos + 1
            this.ganador = true

          } else if (this.intentos == 1) {
            this.puntaje = this.puntaje + 2
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.intentos = this.intentos + 1
            this.ganador = true
          } else if (this.intentos == 2) {
            this.puntaje = this.puntaje + 1
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.intentos = this.intentos + 1
            this.ganador = true

          }


        } else {

          this.intentos = this.intentos + 1

        }
      }




    },

    siguienteM() {
      this.cargaJuegoInicial()
    },

    reiniciar() {
      this.puntaje = 0
      this.intentos = 0
      this.ganador = false
      this.perdedor = false
      this.juegoActivo = true
      this.pokemonCorrecto = null
      this.cargaJuegoInicial()
    }

  },
};
</script>

<style>
h1,
h2,
.container {
  text-align: center;
}

.puntajes p {
  display: inline;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 20px;
}

.boton {
  text-align: center;
}

button {
  border-radius: 20px;
  font-size: 15px;
  background-color: none;
  padding: 15px;
  margin-top: 20px;
}
</style>
