<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import EventService from '@/services/EventService.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data()  {
    return {
      news:[]
    }
  },
  created() {
    this.getNewsData()
  },
  methods: {
    async getNewsData() {
      EventService.getNews()
      .then(
        (news => {
          this.$set(this, "news", news);
        }).bind(this)
      )
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
