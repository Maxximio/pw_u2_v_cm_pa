<template>
    <div class="container">
        <div class="menu">
        <!-- <a href="/">Bienvenido</a>
        <a href="#/juego">Juego</a>
        <a href="#/premios">Premios</a>
        <a href="#/poke">Pokemon</a> -->

        <router-link to="/">Bienvenido</router-link>
        <router-link to="/juego">Reglas</router-link>
        <router-link to="/premios">Premios</router-link>
        <router-link to="/poke">Juega ya!</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    display: flex;
    justify-content: center;
}
.menu{
    background-color: white;
    border-style: groove;
    border-radius: 20px;
    border-color: black;
    padding: 10px;
}

div a{
    font-weight: bold;
    color:cornflowerblue;
    margin-left: 10px;
    margin-right: 10px;
}


</style>