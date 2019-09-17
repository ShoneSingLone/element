
<script>
import _merge from 'lodash/merge';
export default {
  functional: true,
  name: 'ElCFormItem',
  props: {
    options: {
      type: Object,
      required: require
    }
  },
  render: function(createElement, context) {
    let {
      data,
      props: { options }
    } = context;
    data = _merge(data, { attrs: options });
    function appropriateListComponent() {
      const { Vue } = window;
      if (!Vue) alert('未引入全局对象Vue');
      const component = Vue.component(options._type);
      if (!component.name) {
        alert(`未使用 Vue.component 全局注册组件${options._type}`);
        return Vue.component({});
      } else {
        return component;
      }
    }
    return createElement(appropriateListComponent(), data, context.children);
  }
};
</script>