<template>
  <div id="app">
    <h1>This is EnvironmentSticker example page.</h1>
    <EnvironmentSticker/>
  </div>
</template>

<script>
import EnvironmentSticker from '../src/components/EnvironmentSticker.vue'

export default {
  name: 'App',
  components: {
    EnvironmentSticker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
