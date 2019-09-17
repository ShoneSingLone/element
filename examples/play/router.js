import Vue from 'vue';
import VueRouter from 'vue-router';

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
    redirect: '/form'
  }, {
    path: '/form',
    name: 'form',
    component: () => import( /* webpackChunkName: "Form" */ './pages/form/form.vue'),
    children: [{
      path: 'formItem',
      name: 'formItem',
      component: () => import( /* webpackChunkName:"PageFormItem" */ './pages/form/PageFormItem.vue')
    }, {
      path: 'Region',
      name: 'Region',
      component: () => import( /* webpackChunkName:"Region" */ './pages/form/region.vue')
    }, {
      path: 'transform',
      name: 'transform',
      component: () => import( /* webpackChunkName:"transform" */ './pages/form/transform.vue')
    }]

  }, {
    path: '/table',
    name: 'table',
    component: () => import( /* webpackChunkName:"Table" */ './pages/table/table.vue')
  }, {
    path: '/TableRender',
    name: 'TableRender',
    component: () => import( /* webpackChunkName:"TableRender" */ './pages/table/table-render/table.vue')
  }]
});

export default router;