import Vue from 'vue';
window.Vue = Vue;
import Element from 'main/index.js';
import 'packages/theme-chalk/src/index.scss';
Vue.use(Element);

import App from './play/index.vue';
import router from './play/router';

new Vue({ // eslint-disable-line
  router,
  render: h => h(App)
}).$mount('#app');
