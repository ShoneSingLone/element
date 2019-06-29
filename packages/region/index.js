import Region from './src/region';

/* istanbul ignore next */
Region.install = function(Vue) {
  Vue.component(Region.name, Region);
};

export default Region;
