<template>
  <div id="app" name="layout">
  <router-view></router-view>
  </div>
</template>

<script>





export default {
    name: 'app',
    mounted(){
      const appearanceConfig = require('../config/appearance.json');
      if(appearanceConfig){
        this.$store.commit('project/SET_PROJECT_INFO',appearanceConfig)
      }

    }
}
</script>

<style lang="scss">
@import './scss/aweb.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: static !important;
}
*{
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: .5em;
  height: .5em;
  background-color: transparent;
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
