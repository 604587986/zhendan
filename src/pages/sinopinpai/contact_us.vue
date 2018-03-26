<template>
  <div class="contact-us">
         <div class="banner">
            <img src="static/contact_us.png">
        </div>
        <div class="container">
        <div class="content">
            <!-- 面包屑 -->
            <crumb :crumb="crumb"></crumb>
            <div class="map-wrapper">
              <div class="map"></div>
              <div class="more"></div>
            </div>
        </div>
        </div>
  </div>
</template>
<script>
import Crumb from "@/components/crumb";

export default {
  data() {
    return {
      crumb: [
        {
          url: "",
          name: "首页"
        },
        {
          url: "",
          name: "sino品牌"
        },
        {
          url: "",
          name: "联系我们"
        },
      ]
    };
  },
  components: {
    Crumb
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
      .map-wrapper {
        font-size: 0;
        height: 528px;
        display: flex;
        .map {
          width: 770px;
        }
        .more {
          flex: 1;
        }
      }
    }
  }
}
</style>
