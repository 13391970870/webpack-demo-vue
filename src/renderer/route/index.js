import Vue from 'vue'
import Router from 'vue-router'
//解决vue-router 两次进入同一个路由报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'mainPage',
    component: require('@/components/mainPage.vue').default,
    children: [{
      path: 'mainBox',
      name: 'mainBox',
      component: require('@/components/mainBox/mainBox.vue').default,
    }, {
      path: '/topBar',
      name: 'topBar',
      component: require('@/components/topBar/topBar.vue').default,
    }, {
      path: '/regionEnd',
      name: 'regionEnd',
      component: require('@/components/regionEnd/regionEnd.vue').default,
    }, {
      path: 'mainBox/regular',
      name: 'regular',
      component: require('@/components/productList/regular/regular.vue').default
    }, {
      path: 'mainBox/prototype',
      name: 'prototype',
      component: require('@/components/productList/prototype/prototype.vue').default
    }, {
      path: 'mainBox/testServer',
      name: 'testServer',
      component: require('@/components/productList/testServer/testServer.vue').default
    }, {
      path: 'mainBox/algorithm',
      name: 'algorithm',
      component: require('@/components/productList/algorithm/algorithm.vue').default
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})