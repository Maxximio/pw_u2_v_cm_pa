<template>
  <h3>{{tituloComponente}}</h3>
  <h3>{{titulo}}</h3>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}} </p>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}} </p>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}} </p>
  <button v-on:click="aumentar1()">+</button>
  <button v-on:click="disminuir1()">-</button>
</template>

<script>
export default {
  name: "Contador",
  
  props:['titulo','valor2'],
  
  data() {
    return {
        numero: 5,
        tituloComponente: this.titulo
    }
  },
  methods: {
    obtenerCuadrado(){
      console.log('entro al metodo cuadrado')
      return this.numero*this.numero
    },
    aumentar1(){
      return this.numero=this.numero+1
    },
    disminuir1(){
      return this.numero=this.numero-1
    },
  },
  computed: {
    obtenerCuadradoComputado(){
      console.log('Entro a cuadrado computado');
      return this.numero*this.numero
    },
    aumentar(){
      this.numero=this.numero+1
    },
    disminuir(){
      this.numero=this.numero-1
    },
  }
};
</script>

<style>
  button{
    background-color: #64B697;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
margin:0px;
font-size: 20px;
padding: 5px 15px;
  }

  button:hover{
    background-color: #5aa67b;
  }

</style>
