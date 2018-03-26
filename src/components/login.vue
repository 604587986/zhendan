<template>
    <div class="login-base">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <div class="item" @click="toogleTitle('denglu')" :class="{active:contentType=='denglu'}">会员登录
                    </div>
                    <div class="item" @click="toogleTitle('zhuce')" :class="{active:contentType=='zhuce'}">会员注册
                    </div>
                </div>
                <div class="content">
                    <div class="item denglu" v-show="contentType=='denglu'">
                        <form>
                            <div class="form-group">
                                <label for="">手机号码</label>
                                <input type="text" placeholder="请输入手机号码">
                                <div class="help-block">手机格式错误</div>
                            </div>
                            <div class="form-group verification">
                                <label for="">图形验证码</label>
                                <input type="text" placeholder="请输入图形验证码">
                                <div class="help-block"></div>
                                <div class="pic">YYH6
                                    <div class="change">点击图片更换验证码</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">输入密码</label>
                                <input type="text" placeholder="6-16位大小写英文字母、数字或符号的组合">
                                <div class="help-block"></div>
                            </div>
                            <div class="form-group">
                                <input type="button" value="登录">
                            </div>
                            <div class="help">
                                <div class="zhaohuimima">
                                    <a>找回密码？</a>
                                </div>
                                <div class="zhucezhanghao">
                                    <a @click="toogleTitle('zhuce')">注册账号</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="item zhuce" v-show="contentType=='zhuce'">
                        <div class="more">
                            已经注册
                            <a @click="toogleTitle('denglu')">马上登录>></a>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="">手机号码</label>
                                <input type="text" placeholder="请输入手机号码">
                                <div class="help-block"></div>
                            </div>
                            <div class="form-group verification">
                                <label for="">图形验证码</label>
                                <input type="text" placeholder="请输入图形验证码">
                                <div class="help-block"></div>
                                <div class="pic">YYH6
                                    <div class="change">点击图片更换验证码</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">设置密码</label>
                                <input type="text" placeholder="6-16位大小写英文字母、数字或符号的组合">
                                <div class="help-block"></div>
                            </div>
                            <div class="form-group">
                                <input type="button" value="同意协议并注册">
                            </div>
                            <div class="help">
                                <div class="zhaohuimima">
                                    <a>注册并遵守震旦&nbsp;
                                        <i style="color:#000">用户协议</i>和&nbsp;
                                        <i style="color:#000">隐私政策</i>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return { contentType: "denglu" };
  },
  methods: {
    toogleTitle(name) {
      this.contentType = name;
    }
  }
};
</script>
<style lang="scss">
@import "../css/base.scss";
.login-base {
  margin-top: 55px;
  .container {
    .wrapper {
      position: relative;
      .title {
        height: 36px;
        line-height: 36px;
        @include clearfix;
        .item {
          float: left;
          width: 168px;
          text-align: center;
          background: #cccac0;
          margin-right: 7px;
          color: #fff;
          cursor: default;
          &.active {
            background: #de996f;
          }
        }
      }
      .content {
        height: 509px;
        width: 100%;
        background: #fff;
        position: relative;
        .item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          form {
            margin: 57px auto;
            width: 387px;
            .form-group {
              border: 1px solid #ccc;
              box-sizing: border-box;
              margin-bottom: 32px;
              height: 40px;
              line-height: 40px;
              position: relative;
              font-size: 0;
              &.verification {
                width: 246px;
                position: relative;
                input {
                  width: 128px;
                }
                .pic {
                  width: 124px;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  right: -142px;
                  background: #f3fbfe;
                  font-size: 15px;
                  border: 1px solid #ccc;
                  margin-top: -1px;
                  .change {
                    font-size: 12px;
                    height: 32px;
                    line-height: 20px;
                    color: #d3d2c9;
                  }
                }
              }
              &:last-child {
                border: 0;
              }
              label {
                display: inline-block;
                color: #7c7b77;
                width: 100px;
                margin-left: 16px;
                font-size: 16px;
              }
              input {
                border: 0;
                outline: none;
                width: 254px;
                &::placeholder {
                  color: #d3d2c9;
                }
                &[type="button"] {
                  width: 100%;
                  height: 100%;
                  background: #de996f;
                  color: #fff;
                  font-size: 16px;
                  font-weight: 550;
                }
              }
              .help-block {
                position: absolute;
                left: 0;
                top: 100%;
                color: #de996f;
                height: 32px;
                line-height: 20px;
                font-size: 13px;
              }
            }
            .help {
              @include clearfix;
              .zhaohuimima {
                float: left;
                a {
                  text-decoration: none;
                  color: #605f5a;
                  cursor: pointer;
                }
              }
              .zhucezhanghao {
                float: right;
                a {
                  text-decoration: none;
                  color: #605f5a;
                  cursor: pointer;
                }
              }
            }
          }
          .more{
              position: absolute;
              top: -30px;
              right: 0;
              color: #909189;
              a{
                  color: #DE9A6E;
                  margin-left: 24px;
                  cursor: pointer;
              }
          }
        }
      }
    }
  }
}
</style>
