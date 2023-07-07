<template>
    <div>
        <!-- <a href="/">Bienvenido</a>
        <a href="#/juego">Juego</a>
        <a href="#/premios">Premios</a>
        <a href="#/poke">Pokemon</a> -->

        <router-link to="/">Bienvenido</router-link>
        <router-link to="/juego">Juego</router-link>
        <router-link to="/premios">Premios</router-link>
        <router-link to="/poke">Pokemon</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div{
    padding: 0 30px;

}

div a{
    font-weight: bold;
    color: blue;
    margin: 0 10px;
}


</style>