<template>
  <div class="caibao">
      <div class="banner">
          <img src="../../../static/jewellery_series.png" alt="珠宝系列">
      </div>
      <div class="container">
      <!-- 面包屑 -->
        <crumb :crumb="crumb"></crumb>
        <div class="main">
            <div class="siderbar">
                <div class="type">
                    <div class="title">规格（克拉）
                    <i class="iconfont icon-jiantouxiangxia" @click="guige=!guige"></i>                        
                    </div>
                    <div class="items" v-show="guige">
                        <div class="item">10分以下</div>
                        <div class="item">10分-30分</div>
                        <div class="item">30分-50分</div>
                        <div class="item">50分-1克拉</div>
                        <div class="item">1克拉以上</div>
                    </div>
                </div>
                <div class="type">
                    <div class="title">彩宝分类
                        <i class="iconfont icon-jiantouxiangxia" @click="caibao=!caibao"></i>
                        </div>                                     
                    <div class="items" v-show="caibao">
                        <div class="item">戒指</div>
                        <div class="item">项链/吊坠</div>
                        <div class="item">手镯/手链</div>
                        <div class="item">耳环/耳钉</div>
                        <div class="item">胸针</div>
                        <div class="item">其他</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="sort">
                    <span class="sort-item">综合</span>
                    <span class="sort-item">价格</span>
                    <span class="sort-item">喜欢</span>
                </div>
                <div class="goods-wrapper">
                    <div class="goods" v-for="good in goodsList" :key="good.id">
                        <a :href="good.url">
                        <div class="goods-item">
                            <img :src="good.img" :alt="good.title">
                            <p class="intr">{{good.intr}}</p>
                            <p class="title">{{good.title}}</p>
                            <p class="price">￥{{good.price}}</p>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="pagination">
                    <i class="iconfont icon-sanjiaoxing-left"></i>
                    <i>1</i>
                    <i>2</i>
                    <i>3</i>
                    <i class="iconfont icon-sanjiaoxing-right"></i>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import crumb from "@/components/crumb";
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
          name: "珠宝系列"
        },
        {
          url: "",
          name: "彩宝"
        }
      ],
      guige: true,
      caibao: true,
      //商品列表
      goodsList: [
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        },
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        },
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        },
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        },
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        },
        {
          url: "#",
          img: "../../../static/good.png",
          intr: "sino loving",
          title: "猫眼戒指",
          price: "244500"
        }
      ]
    };
  },
  methods: {},
  components: { crumb }
};
</script>
<style lang="scss">
.caibao {
  background: #fff;
  padding-bottom: 50px;
  .banner {
    width: 100%;
    height: 144px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .container {
    .main {
      font-size: 0;
      .siderbar {
        width: 244px;
        font-size: 14px;
        display: inline-block;
        .type {
          .title {
            border-bottom: 1px solid #9e9d9d;
            line-height: 36px;
            height: 36px;
            position: relative;
            > .iconfont {
              position: absolute;
              top: 0;
              right: 0;
              color: #9e9d9d;
            }
          }
          .items {
            padding-top: 22px;
            overflow: hidden;
            .item {
              height: 44px;
              line-height: 44px;
              font-size: 12px;
              color: #9e9d9d;
              cursor: pointer;
              padding-left: 10px;
              &:hover {
                background: rgb(255, 172, 19);
                color: #fff;
              }
            }
          }
        }
      }
      .content {
        vertical-align: top;
        width: 940px;
        font-size: 14px;
        display: inline-block;
        padding-left: 100px;
        box-sizing: border-box;
        .sort {
          .sort-item {
            margin-right: 20px;
          }
        }
        .goods-wrapper {
          display: flex;
          flex-wrap: wrap;
          .goods {
            width: 33%;
            text-align: center;
            > a {
              display: block;
              text-decoration: none;
              color: rgb(87, 86, 61);
              .goods-item {
                img {
                }
                .intr {

                }
                .title {
                    margin-top: 10px;
                }
                .price {
                    margin-top: 10px;
                }
              }
            }
          }
        }
        .pagination{
            text-align: center;
            margin-top: 50px;
        }
      }
    }
  }
}
</style>
