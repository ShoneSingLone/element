import City from './src/city';

/* istanbul ignore next */
City.install = function(Vue) {
  Vue.component(City.name, City);
};

export default City;
