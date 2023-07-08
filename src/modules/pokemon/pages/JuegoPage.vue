<template>
    <div>
        <h1>Estas listo para el juego?</h1>

        <div class="texto">
            <h2>Reglas: </h2>
            <p>-> En este juego de adivinanza tendrás 2 puntuaciones, tus intentos y tus aciertos, intenta tener 10 aciertos
                para ganaer el juego, pero si fallas 10 veces, perderás.</p>
            <p>-> Cada vez que aciertes un pokemon, presiona el boton "siguiente" para adivinar la siguiente silueta.</p>
            <p>-> Si ganas el juego podras participar por fabulosos premios.</p>
            <p>-> Recuerda que puedes presionar el botón de reinicio en cualquier momento para volver a intentarlo desde el
                principio.</p>

        </div>

        <div class="alerta">
            <p>Y lo más importante: No olvides divertirnte!!</p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.texto{
    text-align: justify;
    margin-left: 20%;
    margin-right: 20%;
}
.alerta{
    margin-top: 40px;
    font-size: x-large;
    color: red;
}

</style>