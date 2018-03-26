<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <router-view>
    </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";
import MyNav from "./components/nav";
export default {
  name: "App",
  components:{
    MyHeader,
    MyFooter,
    MyNav
  }
};
</script>

<style lang="scss">
#app {
  min-width: 1200px;
}
</style>
