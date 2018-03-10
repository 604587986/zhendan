<template>
    <nav class="nav">
        <div class="container">
            <div class="left">
                <a href="#" class="logo"></a>
            </div>
            <div class="right">
                <div class="search">
                    <input type="text" ref="search">
                    <i class="iconfont icon-search" @click="showInput(inputFlag)"></i>
                </div>
                <ul class="menu">
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">首页</li>
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">珠宝系列</li>
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">婚嫁系列</li>
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">匠心臻品</li>
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">客户服务</li>
                    <li @mouseover="showDropdown" @mouseout="hideDropdown">sino品牌</li>
                </ul>
            </div>
        </div>
        <div class="dropdown" ref="dropdown" @mouseover="showDropdown" @mouseout="hideDropdown"></div>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            inputFlag:false,

        }
    },
    methods:{
        showInput(flag){
            if(flag==false){
                this.$refs.search.style.width = '135px',
                this.$refs.search.style.paddingLeft = '10px',
                this.inputFlag = true;
            }else{
                this.$refs.search.style.width = 0,
                this.$refs.search.style.paddingLeft = 0,                
                this.inputFlag = false;
            }
        },
        showDropdown(){
            this.$refs.dropdown.style.height = '810px'
        },
        hideDropdown(){
            this.$refs.dropdown.style.height = 0
        }
    }
};
</script>
<style lang="scss">
@import "../css/base.scss";
.nav {
    position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 70px;
  background: #8f8c8b;
  height: 70px;
  width: 100%;
  .container {
    @include clearfix;
    .left {
      float: left;
      .logo {
        width: 137px;
        height: 39px;
        display: block;
        margin-top: 15px;
        background: url(../../static/logo.png) no-repeat 0 0;
      }
    }
    .right {
      float: right;
      .menu {
        width: 484px;
        float: right;
        @include list(row);
        li {
          text-align: center;
          transition: all 0.5s;
          flex: 1;
          &:hover {
            background: #de996f;
          }
        }
      }
      .search {
        float: right;
        margin-left: 33px;
        input {
          width: 0;
          height: 21px;
        //   padding-left: 10px;
          box-sizing: border-box;
          font-family: 微软雅黑;
          font-size: 12px;
          border-width: 0;
          border-radius: 12.5px;
          color: rgb(84, 84, 84);
          outline: none;
          transition: all .5s;
        }
        .icon-search {
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
  }
  .dropdown{
      position: absolute;
      width: 100%;
      height: 0;
      background: #fff;
      z-index: 99;
      transition: all .5s;
  }
}
</style>
