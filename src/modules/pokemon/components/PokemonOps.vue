<template>
  <div class="container">


    <div class="items">
      <ul>
        
          <li v-for="pokemon in opciones" :key="pokemon.id" @click="$emit('seleccionado',pokemon.id)">{{pokemon.nombre}}</li>
  
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    opciones:{
      type: Array,
      required: true
    }
  },
  methods:{
    pruebaDeEvento(){
      console.log('probando evento')
    }
  },

};

</script>

<style scoped>
.container {
    display: grid;
    justify-content: center;
    margin-right: 60px;
}

ul {
  list-style-type: none;
}

li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
  text-align: center;
}

li:hover {
  background-color: red;
}
</style>
