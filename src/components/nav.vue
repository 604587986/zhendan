<template>
    <nav class="nav">
        <div class="container">
            <div class="left">
                <router-link :to="{name:'home'}" class="logo"></router-link>
            </div>
            <div class="right">
                <div class="search">
                    <input type="text" ref="search" @keydown.enter="search" @mouseover="showInput">
                    <i class="iconfont icon-search" @mouseover="showInput" @mouseout="hideInput" @click="search"></i>
                </div>
                <ul class="menu">
                    <li @mouseover="showDropdown(1)" @mouseout="hideDropdown">首页
                        <div class="dropdown" :ref="currentDropdown==1?'dropdown':''" @mouseover="showDropdown(1)" @mouseout="hideDropdown">
                          <ul>
                            <li>栏目导航</li>
                            <li>商品列表页</li>
                            <li>商品详情页</li>
                          </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown(2)" @mouseout="hideDropdown">珠宝系列
                        <div class="dropdown" :ref="currentDropdown==2?'dropdown':''" @mouseover="showDropdown(2)" @mouseout="hideDropdown">
                          <ul>
                            <li>钻石</li>
                            <li>彩钻</li>
                            <li @click="jump('caibao')">彩宝</li>
                            <li>玉石</li>
                            <li>其他</li>
                          </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown(3)" @mouseout="hideDropdown">婚嫁系列
                        <div class="dropdown" :ref="currentDropdown==3?'dropdown':''" @mouseover="showDropdown(3)" @mouseout="hideDropdown">
                          <ul>
                            <li>钻石婚戒</li>
                            <li>钻石项链</li>
                            <li>裸钻定制</li>
                          </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown(4)" @mouseout="hideDropdown">匠心臻品
                        <div class="dropdown" :ref="currentDropdown==4?'dropdown':''" @mouseover="showDropdown(4)" @mouseout="hideDropdown">
                          <ul>
                            <li>裸钻定制</li>
                            <li>彩钻定制</li>
                            <li>彩宝定制</li>
                            <li>玉石定制</li>
                            <li>款式</li>
                          </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown(5)" @mouseout="hideDropdown">客户服务
                        <div class="dropdown" :ref="currentDropdown==5?'dropdown':''" @mouseover="showDropdown(5)" @mouseout="hideDropdown">
                          <ul>
                            <li>珠宝知识</li>
                            <li>影像学习</li>
                            <li>珠宝保养</li>
                            <li>让宝贝回家</li>
                          </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown(6)" @mouseout="hideDropdown">sino品牌
                        <div class="dropdown" :ref="currentDropdown==6?'dropdown':''" @mouseover="showDropdown(6)" @mouseout="hideDropdown">
                          <ul>
                            <li>震旦文化</li>
                            <li>专家团队</li>
                            <li>设计团队</li>
                            <li @click="jump('contact_us')">联系我们</li>
                          </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      currentDropdown: 0,
      dropdownHeight: "602px"
    };
  },
  methods: {
    showInput() {
      this.$refs.search.style.width = "135px";
      this.$refs.search.style.paddingLeft = "10px";
    },
    hideInput() {
      this.$refs.search.style.width = 0;
      this.$refs.search.style.paddingLeft = 0;
    },
    showDropdown(i) {
      this.currentDropdown = i;
      this.$nextTick(function() {
        this.$refs.dropdown.style.opacity = 1;
        this.$refs.dropdown.style.height = this.dropdownHeight;
      });
    },
    hideDropdown() {
      this.$refs.dropdown.style.opacity = 0;
      this.$refs.dropdown.style.height = 0;
    },
    search() {
      alert("搜索到：\n" + this.$refs.search.value);
    },
    jump(url){
      this.hideDropdown();
      this.$router.push({name:url})
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
        >li {
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          flex: 1;
          &:hover {
            background: #de996f;
          }
        }
      }
      .search {
        float: right;
        margin-left: 33px;
        font-size: 0;
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
          transition: all 0.5s;
          vertical-align: middle;
        }
        .icon-search {
          font-size: 20px;
          vertical-align: middle;
          line-height: 69px;
        }
      }
    }
  }
  .dropdown {
    position: absolute;
    width: 100%;
    height: 0;
    background: #fff;
    z-index: 99;
    transition: all 0.5s;
    transition-delay: 0.2s;
    left: 0;
    top: 100%;
    font-size: 20px;
    color: #000;
    overflow: hidden;
  }
}
</style>
