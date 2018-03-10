<template>
    <footer class="footer">
        <div class="container">
            <div class="service">
                <h4 class="title">客服中心电话</h4>
                <p class="tel">400-888-8888</p>
                <p class="work-time">工作时间：周一至周日 9:00至18:00</p>
                <p class="email">总裁邮箱：ceo@jadeland.cn</p>
            </div>
            <div class="help">
                <div class="item">
                    <h4>下单与配送</h4>
                    <ul>
                        <li>购物流程</li>
                        <li>支付方式</li>
                        <li>配送方式</li>
                        <li>运费标准</li>
                    </ul>
                </div>
                <div class="item">
                    <h4>
                        售后服务
                    </h4>
                    <ul>
                        <li>购物流程</li>
                        <li>支付方式</li>
                        <li>配送方式</li>
                        <li>运费标准</li>
                    </ul>
                </div>
                <div class="item">
                    <h4>
                        联系方式
                    </h4>
                    <ul>
                        <li>购物流程</li>
                        <li>支付方式</li>
                        <li>配送方式</li>
                        <li>运费标准</li>
                    </ul>
                </div>
            </div>
            <div class="follow">
                <h4>关注我们</h4>
                <div class="content">
                    <div class="item">
                        <i class="iconfont icon-weibo1"></i>
                        <p>官方微博</p>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-weixin"></i>
                        <p>微信公众号</p>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  background: #605f5a;
  padding-bottom: 66px;;
  .container {
    padding: 66px 0;
    font-size: 0;
    .service {
      width: 347px;
      display: inline-block;
      vertical-align: top;
      .tel {
        font-size: 27px;
        color: #fff;
        margin-top: 17px;
      }
      .work-time {
        font-size: 14px;
        margin-top: 17px;
        color: #f7f7f7;
      }
      .email {
        margin-top: 53px;
        font-size: 14px;
        color: #e3e3e2;
      }
    }
    .help {
      width: 578px;
      display: inline-flex;
      flex-direction: row;
      vertical-align: top;
      .item {
        flex: 1;
        ul {
            margin-top: 38px;
          li {
            font-size: 14px;
            margin-bottom: 14px;
            color: #F7F7F7
          }
        }
      }
    }
    .follow {
      vertical-align: top;        
      display: inline-block;
      .content{
          display: flex;
          flex-direction: row;
          margin-top: 63px;
          .item{
              width: 95px;
              font-size: 14px;
              color: #f7f7f7;
              .iconfont{
                  font-size: 40px;
                  color: #ccc;
              }
              p{
                  margin-top: 20px;
              }
          }
      }
    }
    h4 {
      font-size: 19px;
      color: #d8966e;
    }
  }
  .line{
      background: #DE996F;
      height: 23px;
  }
}
</style>
