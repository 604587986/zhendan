<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <banner></banner>
    <goods></goods>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/header'
import MyNav from './components/nav'
import Banner from './components/banner'
import Goods from './components/goods'
import MyFooter from './components/footer'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyNav,
    Banner,
    Goods,
    MyFooter
  }
}
</script>

<style lang="scss">
  #app{
    min-width: 1200px;
  }
</style>
