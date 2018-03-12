<template>
  <div class="contact-us">
    <my-nav></my-nav>
         <div class="banner">
            <img src="static/contact_us.png">
        </div>
        <div class="container">
        <div class="content">
            <div class="crumb">
              <router-link :to="{name:'home'}">首页</router-link>
              <i class="arrow"></i>
              <span>sino品牌</span>
              <i class="arrow"></i>
              <span>联系我们</span>
            </div>
            <div class="map-wrapper">
              <div class="map"></div>
              <div class="more"></div>
            </div>
        </div>
        </div>
  </div>
</template>
<script>
import MyNav from "../components/nav";

export default {
  components: {
    MyNav
  },
  props: {
    banner: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.contact-us {
  .banner {
    min-width: 1200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .container {
    .content {
      .crumb {
        font-size: 14px;
        color: rgb(87, 86, 81);
        height: 54px;
        line-height: 54px;
        a {
          text-decoration: none;
          color: rgb(87, 86, 81);
        }
        .arrow {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url(../../static/arrow.png) no-repeat 0 0;
          background-size: 100% 100%;
        }
      }
      .map-wrapper{
        font-size: 0;
        height: 528px;
        display: flex;
        .map{
          width: 770px;
        }
        .more{
          flex: 1;
        }
      }
    }
  }
}
</style>
