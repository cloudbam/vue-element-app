import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from   '@/layout/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path:'/home',
      name: '主页' ,
      component:Home
    }
  ]
})
