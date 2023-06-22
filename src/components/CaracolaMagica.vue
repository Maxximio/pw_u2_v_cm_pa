<template>
  <div class="container">
    <h1>Caracola Magica</h1>

    <label></label>

    <img
      src="https://play-lh.googleusercontent.com/0mgvhYfhG4Qm7UsE8uW4P2SUBw-ujHOTAgcP8DpXUafktzlUza2MRzLDK02AUK4cYZxT"
      alt="No se puede presentar"
    />
    <input v-model="pregunta" placeholder="Ingrese su pregunta" />
    <p>Recuerda presionar Enter para obtener tu respuesta</p>
    <div>
      <h2>Voy a pasar de año ?</h2>
      <h1>Si, No</h1>
    </div>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      pregunta: 'Hola Mundo',
      
    }
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  text-align: center;
  display: grid;
}
</style>
