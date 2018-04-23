import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/backend/login/login';
import Index from '@/components/backend/index/index';
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name:'Login',
    component: Login
  },{
    path:'/:index',
    name:'Index',
    component:Index
  }],
  beforeEach(to, from, next){
    console.log('webhook init success ')
    return 
  }
});
