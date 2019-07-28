<template>
  <div id="app">
    <tab-bar></tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabBar from './components/tabBar'
export default {
  components: { tabBar }
}
</script>


<style lang="scss">
  html, body, #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    font-size: 0.16rem;
    .page{
      position: absolute;
      top: 0;
      left: 0;
      bottom: .49rem;
      width: 100%;
    }
  }
</style>
