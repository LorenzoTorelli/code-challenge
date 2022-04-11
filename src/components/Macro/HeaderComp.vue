<template>
  <div id="header-bar">
    <h2 class="my-logo">NewsFeed</h2>
  </div>
</template>

<script>
export default {
    name:'HeaderComp'
}
</script>

<style lang="scss" scoped>
#header-bar {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 60px;
  background-color: rgb(19, 20, 23);
  border-bottom: 1px solid black;
  .my-logo {
    color: white;
    font-style: italic;
    text-align: center;
    margin: 10px 20px;
    font-size: 2rem;

  }  
}
</style>