import CForm from './src/main';

/* istanbul ignore next */
CForm.install = function(Vue) {
  Vue.component(CForm.name, CForm);
};

export default CForm;
