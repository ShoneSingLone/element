import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from './pages/form/form.vue';
import Table from './pages/table/table.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Form
  }, {
    path: '/form',
    name: 'form',
    component: Form
  },{
    path: '/table',
    name: 'table',
    component: Table
  }]
});

export default router;