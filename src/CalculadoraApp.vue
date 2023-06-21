<template>
  <CalculadoraComp></CalculadoraComp>
</template>

<script>
import CalculadoraComp from './components/CalculadoraComp.vue';

export default {
  name: 'CalculadoraApp',
  components: {
    CalculadoraComp
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
