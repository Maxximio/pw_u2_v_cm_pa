<template>
  <header class="cabeza">
      <h1>La mejor calculadora del mundo sin anuncios</h1>
    </header>
    <nav class="cuadroResultado"></nav>
    <section class="numeros">

      <div class="container" id="calculadora" >
       
        <div class="calculadora" >
          
          <label id="idLabelResultado" class="result">{{resultado}}</label>
          <!-- <h1>{{resultado}}</h1> -->
          <button v-on:click="agregar(1)">1</button>
          <button v-on:click="agregar(2)">2</button>
          <button v-on:click="agregar(3)">3</button>

          <button v-on:click="agregar('+')" class="mas">+</button>

          <button v-on:click="agregar(4)">4</button>
          <button v-on:click="agregar(5)">5</button>
          <button v-on:click="agregar(6)">6</button>

          <button v-on:click="agregar('-')">-</button>

          <button v-on:click="agregar(7)">7</button>
          <button v-on:click="agregar(8)">8</button>
          <button v-on:click="agregar(9)">9</button>

          <button v-on:click="agregar('÷')">÷</button>

          
          <button v-on:click="agregar(0)" class="cero">0</button>
          <button @click="resultado=calcular">=</button>
          <button v-on:click="agregar('x')">x</button>
          
        </div>
        
        <div>

            <button @click="resultado=eliminarElemento">Limpiar</button>
        </div>
        

      </div>
    </section>
    <footer class="limpieza">
    </footer>
</template>

<script>
export default {
  name: "CalculadoraComp",
  
  data() {
    return {
      resultado: "",
    }
  },
  methods: {
    agregar(valor) {
      if(this.resultado==null){
        this.resultado=valor
      }else{
        this.resultado = this.resultado + valor
      }
    },

  },
  computed: {
    
    calcular() {
      let cadena = this.resultado;
      let numeros = [];
      let operador = "+";
      let numeroActual = "";
      let resultado = 0;

      for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (!isNaN(caracter) || caracter === ".") {
          numeroActual += caracter;
        } else {
          let numero = parseFloat(numeroActual);
          numeros.push(numero);
          numeroActual = "";

          if (operador === "+") {
            resultado += numero;
          } else if (operador === "-") {
            resultado -= numero;
          } else if (operador === "x") {
            resultado *= numero;
          } else if (operador === "÷") {
            resultado /= numero;
          }

          operador = caracter;
        }
      }

      // Calcular la última operación
      let ultimoNumero = parseFloat(numeroActual);
      if (!isNaN(ultimoNumero)) {
        numeros.push(ultimoNumero);

        if (operador === "+") {
          resultado += ultimoNumero;
        } else if (operador === "-") {
          resultado -= ultimoNumero;
        } else if (operador === "x") {
          resultado *= ultimoNumero;
        } else if (operador === "÷") {
          resultado /= ultimoNumero;
        }
      }
      return resultado;
    },

    eliminarElemento() {
      this.resultado=''
    },
  }
};
</script>

<style>
  
  .container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora{
  display: grid;
  grid-template-columns: repeat(4,75px);
  background-color: salmon;
  padding: 20px;
  border-radius: 35px;
  /* box-shadow: 15px 20px 10px 0px grey; */
  box-shadow: -15px -15px 10px 5px grey;
}

.calculadora button{
  padding:10px;
  margin: 2px;
  border-color: chocolate;
  border-radius: 5px;
  background-color: darkslateblue;
  color: aliceblue;
  font-size: 20px;
  
}

/* .mas{
  grid-row: span 2; vertical
} */

.result{
  background-color: aliceblue;
  border:2px  solid black;
  height: 25px;
  grid-column: span 4;
  margin-bottom: 10px;
  font-size: 25px;
  padding-left: 5px;
}

 .cero{/*boton grande horizontal*/
  grid-column: span 2;
}

</style>
