<template>
  <header class="header">
    <div class="container">
      <div class="left">
        <div class="login" v-if="isLogin">
          <span class="welcome">欢迎光临，</span>
          <span class="username">夜客2017</span>
          <span class="quit">退出</span>
        </div>
        <div class="login" v-else>
          <router-link class="welcome" :to="{name:'login'}">登录</router-link>
          <router-link class="quit" :to="{name:'login'}">注册</router-link>
        </div>
      </div>
      <div class="right">
        <div class="cart">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车(0)</span>
    
        </div>
        <ul class="info">
          <li class="item">
            <a href="">我的订单</a>
          </li>
          <li class="item">
            <a href="">关注我们</a>
          </li>
          <li class="item">
            <a href="">帮助中心</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return { isLogin: false };
  }
};
</script>
<style lang="scss">
@import "../css/base.scss";
.header {
  color: #9e9d9d;
  font-size: 12px;
  .container {
    height: 38px;
    line-height: 38px;
    @include clearfix;
    .left {
      float: left;
      .login {
        .welcome {
          cursor: pointer;
          color: #9e9d9d;
          text-decoration: none;
        }
        .username {
          cursor: pointer;
          color: #9e9d9d;
          text-decoration: none;
        }
        .quit {
          position: relative;
          margin-left: 32px;
          cursor: pointer;
          @include sep;
          color: #9e9d9d;
          text-decoration: none;
        }
      }
    }
    .right {
      float: right;
      height: 100%;
      .info {
        @include list(row);
        width: 230px;
        text-align: center;
        float: right;
        height: 100%;
        .item {
          flex: 1;
          a {
            color: #9e9d9d;
            text-decoration: none;
            position: relative;
            @include sep;
          }
          &:first-child a::before {
            display: none;
          }
        }
      }
      .cart {
        margin-left: 40px;
        float: right;
        height: 100%;
        cursor: pointer;
        span{
          line-height: 40px;
          vertical-align: top;
        }
        .icon-gouwuche {
          font-size: 20px;
          line-height: 38px;;
        }
      }
    }
  }
}
</style>
