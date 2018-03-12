<template>
    <div class="home-page">
        <my-nav></my-nav>
        <banner></banner>
        <goods></goods>
    </div>
</template>
<script>
import Banner from "../components/banner";
import Goods from "../components/goods";
import MyNav from "../components/nav";

export default {
  components: {
    Banner,
    Goods,
    MyNav
  }
};
</script>
<style lang="scss">

</style>
