import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from './pages/form/form.vue';
import Table from './pages/table/table.vue';
import TableRender from './pages/table/table-render/table.vue';
import Region from './pages/form/region.vue';
import transform from './pages/form/transform.vue';

Vue.use(VueRouter);
window.console.oldLog = window.console.log;
window.console.l = ((log) => {
  return (...args) => {
    try {
      throw new Error(args);
    } catch (error) {
      window.console.oldLog(error.stack.split("\n")[2].match(/\((.*)\)/ig)[0]);
    }

    function Color({
      color = 'red',
      bg = 'green' /* background */
    }) {
      this.color = color;
      this.bg = bg;
    }
    let obj = new Color({});
    return window.console.oldLog.apply(log, [...['%c colored', `background:${obj.bg};color:${obj.color}`, 'this is not colored'], ...args]);

  }
})(console.log)
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