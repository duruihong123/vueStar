import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import jifenIndex from '@/page/jifenTest/index' //积分列表
import fankui from '@/page/fankui/index'
import start from '@/page/start/index' // 满天星
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/jifenIndex',
      name: 'jifenIndex',
      component: jifenIndex,
    },
    {
      path: '/fankui',
      name: 'fankui',
      component: fankui,
    },
    {
      path: '/start',
      name: 'start',
      component: start,
    }
  ]
})
