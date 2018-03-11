<template>
  <div class="login-page">
    <my-header></my-header>
    <my-nav></my-nav>
    <login></login>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "../components/header";
import MyNav from "../components/nav";
import Login from "../components/login";
import MyFooter from "../components/footer";
export default {
  components: {
    MyHeader,
    MyFooter,
    MyNav,
    Login
  }
};
</script>
<style lang="scss">

</style>

