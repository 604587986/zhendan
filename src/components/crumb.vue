<template>
  <div class="crumb">
      <div class="crumb-item" v-for="(item,index) in crumb" :key="index">
        <router-link :to="{ path: item.url }">{{item.name}}</router-link>
        <i class="arrow" v-show="crumb.length-1!=index"></i>
      </div>
   </div>
</template>
<script>
export default {
  props: {
    crumb: {
      type: Array,
      default() {
        return [];
      }
    }
  },
};
</script>
<style lang="scss">
.crumb {
  .crumb-item {
    display: inline-block;
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
      line-height: 12px;
      background: url(../../static/arrow.png) no-repeat 0 0;
      background-size: 100% 100%;
    }
  }
}
</style>
