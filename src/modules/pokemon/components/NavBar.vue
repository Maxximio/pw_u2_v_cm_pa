<template>
  <div>
    <!-- <a href="/">Bienvenido</a>
        <a href="#/juego">Juego</a>
        <a href="#/premios">Premios</a>
        <a href="#/poke">Pokemon</a> -->



    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/juego">Juego</router-link></li>
      <li><router-link to="/premios">Premios</router-link></li>
      <li><router-link to="/poke">Pokemon</router-link></li>
    </ul>

    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

li a {
  display: block;
  
  color : white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
