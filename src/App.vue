<template>
  <div id="app">
    <HeaderComp/>
    <MainComp/>
  </div>
</template>

<script>
import HeaderComp from './components/Macro/HeaderComp.vue';
import MainComp from './components/Macro/MainComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
  },
  
}
</script>

<style lang="scss">
  @import url('./assets/Variables/Global.scss');
</style>
