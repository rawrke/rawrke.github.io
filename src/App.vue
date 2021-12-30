<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: #737a81;
}
body {
  background-color: #1c2122;
}
p {
  margin-top: 0px;
  font-style: normal;
}
</style>
