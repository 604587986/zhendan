import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/home/index";//首页
import Login from "./pages/login";
import ContactUs from "./pages/sinopinpai/contact_us";//联系我们
import Caibao from "./pages/zhubaoxilie/caibao";//彩宝

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact_us',
      name:'contact_us',
      component: ContactUs
    },
    {
      path: '/caibao',
      name:'caibao',
      component: Caibao
    },
  ]
})