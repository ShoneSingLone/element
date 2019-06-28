import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from './pages/form/form.vue';
import Table from './pages/table/table.vue';
import TableRender from './pages/table/table-render/table.vue';
import Region from './pages/form/region.vue';
import transform from './pages/form/transform.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Form,
    children: [{
      path: 'Region',
      name: 'Region',
      component: Region
    }, {
      path: 'transform',
      name: 'transform',
      component: transform
    }]

  }, {
    path: '/table',
    name: 'table',
    component: Table
  }, {
    path: '/TableRender',
    name: 'TableRender',
    component: TableRender
  }]
});

export default router;