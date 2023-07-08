<template>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import NavBar from "./modules/pokemon/components/NavBar.vue";
import Footer from "./modules/pokemon/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
