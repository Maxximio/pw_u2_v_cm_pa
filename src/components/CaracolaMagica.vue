<template>
  
    <h1>Tres veces si</h1>
    <img v-if="imagen"
      :src="imagen"
      alt="No se puede presentar"
    />


    <div class="bg-dark">
    </div>
  <div class="container">
    <!-- <input v-model="pregunta" placeholder="Ingrese su pregunta" /> -->
    <button @click="consumirApi">Suerte</button>
    <p>Presione el boton y si obtiene si 3 veces "si", usted gana!!!</p>
    <div>
      <!-- <h2>{{pregunta}}</h2> -->
      <h3>{{respuesta}}</h3>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      // pregunta: "",
      imagen: null,
      respuesta: "",
      contadorSi: 0,
      contadorNo: 0,
      respuestaAnterior: '',
    };
  },

  watch: {

    respuesta(value) {
      if(this.respuestaAnterior==='yes' && value===yes ){
          this.contadorSi++;
        }else{

      if (value === "yes") {
        this.respuestaAnterior==='yes'
        this.contadorSi++;
        console.log(this.contadorSi);
        if (this.contadorSi === 3) {
          this.respuesta='Felicidades Usted ha Ganado!!!'
          this.contadorNo=null
          this.contadorSi=null
          console.log(this.contadorSi);
        }
      }else{
        this.contadorNo++;
        if(this.contadorNo===3){
        this.respuesta="Mejor Suerte para la proxima :("
        this.contadorNo=null
        this.contadorSi=null
      }
      }

    }

    },

    // pregunta(value, oldValue) {
    //   console.log(value);
    //   console.log(oldValue);
    //   if (value.includes("?")) {
    //     console.log("consumio el Api");
    //     this.consumirApi()
    //   }
    // },
  },

  methods: {
    async consumirApi() {
      const {answer, image} = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
        this.imagen = image;
        this.respuesta = answer;
    },
  },

  perdedor(){
    this.respuesta='Mejor Suerte para la proxima :('
  },

  ganador(){
    this.respuesta='Felicidades Usted ha Ganado!!!'
  }
};
</script>

<style>
/* .container {
  align-items: center;
  justify-content: center;
  text-align: center;
  display: grid;
} */

img, .bg-dark{
  height: 100vh;
  width: 100vw;

  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark{

  background-color: rgba(0, 0, 0, 0.4);

}

.container{
  position: relative;
  color: aliceblue;
}

h3,h2{
  font-size: 100px;
  margin-top: 0px;
}

button{
  padding: 15px;
  font-size: xx-large;
  border-radius: 25px;
}

/*input{
  width: 250px;
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
}*/

p{
  font-size: 20px;
  margin-top: 10px;
}

</style>
