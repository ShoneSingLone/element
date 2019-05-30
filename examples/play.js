import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
import router from './play/router';
import 'packages/theme-chalk/src/index.scss';

Vue.use(Element);

new Vue({ // eslint-disable-line
  router,
  render: h => h(App)
}).$mount('#app');
