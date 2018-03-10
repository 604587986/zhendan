<template>
  <section class="goods">
      <div class="item"><img src="static/pic1.jpg" alt="珠宝"></div>
      <div class="item"><img src="static/pic2.jpg" alt="婚嫁系列"></div>
      <div class="item"><img src="static/pic3.jpg" alt="匠心臻品"></div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
    .goods{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        min-width: 1200px;
        background: #fff;
        .item{
            flex:1;
            text-align: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
