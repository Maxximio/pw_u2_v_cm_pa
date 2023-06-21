<template>
  <h3>{{ tituloComponente || "Valor por defecto" }}</h3>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <button v-on:click="aumentar1()">+</button>
  <button @click="disminuir1()">-</button>
</template>

<script>
export default {
  name: "Contador",

  props: {
    titulo: String,
    inicio: {
      type : Number,
      required: false,
      default: 100,
      validator(value){
        return value > 100
      }
    },
  },

  data() {
    return {
      numero: this.inicio,
      tituloComponente: this.titulo,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("entro al metodo cuadrado");
      return this.numero * this.numero;
    },
    aumentar1() {
      return (this.numero = this.numero + 1);
    },
    disminuir1() {
      return (this.numero = this.numero - 1);
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Entro a cuadrado computado");
      return this.numero * this.numero;
    },
    aumentar() {
      return this.numero + 1;
    },
    disminuir() {
      return this.numero - 1;
    },
    evaluarTitulo() {
      return this.tituloComponente || "Valor por defecto";
    },
  },
};
</script>

<style>
button {
  background-color: #64b697;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px;
  font-size: 20px;
  padding: 5px 15px;
}

button:hover {
  background-color: #5aa67b;
}
</style>
