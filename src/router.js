import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/index";
import Login from "./pages/login";

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
    }
  ]
})