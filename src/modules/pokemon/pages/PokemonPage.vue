<template>
  <div class="container">
    <div v-if="juegoActivo">

      <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>

      <div v-else>
        <h1>Juego Pokemon</h1>

        <Image :pokemon-id="pokemonCorrecto.id" :muestraPokemon="showPokemon"> </Image>
        <Option :opciones="arregloPokemon" v-on:seleccionado="revisarSeleccion($event)"></Option>

        <h2>Ascierta 10 veces el pokemon correcto y gana</h2>

        <div class="puntajes">
          <p>Puntaje: {{ puntaje }}</p>
          <p>Intentos: {{ intentos }}</p>
        </div>

        <div>
          <button v-if="mostrarSiguiente" @click="siguienteM">Siguiente</button>
        </div>

      </div>

    </div>

    <div v-if="ganador">
      <h2>Felicidades, Has Ganado!!!</h2>
      <p>tu codigo: {{ sorteo }}</p>
      <p>Tómale captura a esta pantalla y envíalo a nuestro correo</p>
      <p>Más info en la página de Premios</p>
    </div>

    <div v-if="perdedor">
      <h2>Has perdido, suerte para la proxima</h2>
      <p>No te desanimes, vuelve a intentarlo con el botón de reinicio </p>
    </div>

    <div class="boton" v-if="pokemonCorrecto">
      <button @click="reiniciar">Reiniciar</button>
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
      juegoActivo: true,

      sorteo:''
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
      console.log('evento en el padre')

      console.log(idSeleccionado);

      if (this.pokemonCorrecto.id == idSeleccionado) {
        this.puntaje = this.puntaje + 1
        this.showPokemon = true
        this.mostrarSiguiente = true
      } else {
        this.intentos = this.intentos + 1
      }

      this.comprobar()

    },
    comprobar() {
      if (this.intentos >= 10) {
        this.manejaPerdedor()
        this.juegoActivo = false
      }
      if (this.puntaje >= 10) {
        this.manejaGanador()
        this.juegoActivo = false
      }
    },
    siguienteM() {
      this.cargaJuegoInicial()
    },
    manejaGanador() {
      this.ganador = true
      this.generarCodigo()
    },
    manejaPerdedor() {
      this.perdedor = true
    },
    reiniciar() {
      this.puntaje = 0
      this.intentos = 0
      this.ganador = false
      this.perdedor = false
      this.juegoActivo = true
      this.pokemonCorrecto = null
      this.cargaJuegoInicial()
    },

    generarCodigo() {//metodo para generar un codigo alfanumerico para sorteo de premios
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var longitud=12;//longitud del codigo
    this.sorteo=''
  
    for (var i = 0; i < longitud; i++) {
      var indice = Math.floor(Math.random() * caracteres.length);
      this.sorteo= this.sorteo+ caracteres.charAt(indice);
    }

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