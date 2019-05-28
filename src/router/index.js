import Vue from 'vue'
import Router from 'vue-router'
import platformRoute from './platform'
import homeRoute from './home'
import shopRoute from './shop'
import dealRoute from './deal'
import storeRoute from './store'
import statisticsRoute from './statistics'
import websiteRoute from './website'
import distributionRoute from './distribution'
import systemRoute from './system'
import marketingRoute from './marketing'
import microMallRoute from './microMall'
import appRoute from './app'
import yjyshopRoute from './yjyshop'
import loginRoute from './login'

Vue.use(Router)
const routes =[
  platformRoute,
  homeRoute,
  shopRoute,
  dealRoute,
  storeRoute,
  statisticsRoute,
  websiteRoute,
  distributionRoute,
  systemRoute,
  marketingRoute,
  microMallRoute,
  appRoute,
  yjyshopRoute,
  loginRoute,
  {
    path:"/shop/classify",
    component:()=>import('../pages/shop/root1')
  },
  {
    path:"/shop/brand",
    component:()=>import('../pages/shop/root2')
  },
  {
    path:"/shop/advisory",
    component:()=>import('../pages/shop/root3')
  },
  {
    path:"/shop/discuss",
    component:()=>import('../pages/shop/root4')
    
  },
  {
    path:"/shop/add",
    component:()=>import('../pages/shop/add')
    
  }


]
export default new Router({
  mode:'history',
  base:process.env.BASE_URL,  //路径以什么为基础
  routes
})
