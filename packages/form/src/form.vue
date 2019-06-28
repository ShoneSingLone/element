<template>
  <form
    class="el-form"
    :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]"
  >
    <slot></slot>
  </form>
</template>
<script>
import objectAssign from 'element-ui/src/utils/merge';

export default {
  name: 'ElForm',

  componentName: 'ElForm',

  provide() {
    return {
      elForm: this
    };
  },

  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules() {
      // remove then add event listeners on form-item after form rules change
      this.fields.forEach(field => {
        field.removeValidateEvents();
        field.addValidateEvents();
      });

      if (this.validateOnRuleChange) {
        this.validate(() => {});
      }
    }
  },
  computed: {
    autoLabelWidth() {
      if (!this.potentialLabelWidthArr.length) return 0;
      const max = Math.max(...this.potentialLabelWidthArr);
      return max ? `${max}px` : '';
    }
  },
  data() {
    return {
      fields: [],
      potentialLabelWidthArr: [] // use this array to calculate auto width
    };
  },
  created() {
    /* Vue.js 的组件渲染顺序是由内而外的，
    所以 FormItem 要先于 Form 渲染，
    在 FormItem 的 mounted 触发时，
    我们向 Form 派发了事件 on-form-item-add，
    并将当前 FormItem 的实例（this）传递给了 Form，而此时，Form 的 mounted 尚未触发，
    因为 Form 在最外层，如果在 Form 的 mounted 里监听事件，是不可以的，所以要在其 created 内监听自定义事件，Form 的 created 要先于 FormItem 的 mounted。 */
    this.$on('el.form.addField', field => {
      if (field) {
        this.fields.push(field);
      }
    });
    /* istanbul ignore next */
    this.$on('el.form.removeField', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },
  methods: {
    resetFields() {
      if (!this.model) {
        console.warn(
          '[Element Warn][Form]model is required for resetFields to work.'
        );
        return;
      }
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    clearValidate(props = []) {
      const fields = props.length
        ? typeof props === 'string'
          ? this.fields.filter(field => props === field.prop)
          : this.fields.filter(field => props.indexOf(field.prop) > -1)
        : this.fields;
      fields.forEach(field => {
        field.clearValidate();
      });
    },
    validate(callback) {
      if (!this.model) {
        console.warn(
          '[Element Warn][Form]model is required for validate to work!'
        );
        return;
      }

      let promise;
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      let valid = true;
      let count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      let invalidFields = {};
      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          if (message) {
            valid = false;
          }
          invalidFields = objectAssign({}, invalidFields, field);
          if (
            typeof callback === 'function' &&
            ++count === this.fields.length
          ) {
            callback(valid, invalidFields);
          }
        });
      });

      if (promise) {
        return promise;
      }
    },
    validateField(props, cb) {
      props = [].concat(props);
      const fields = this.fields.filter(
        field => props.indexOf(field.prop) !== -1
      );
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!');
        return;
      }

      fields.forEach(field => {
        field.validate('', cb);
      });
    },
    getLabelWidthIndex(width) {
      const index = this.potentialLabelWidthArr.indexOf(width);
      // it's impossible
      if (index === -1) {
        throw new Error('[ElementForm]unpected width ', width);
      }
      return index;
    },
    registerLabelWidth(val, oldVal) {
      if (val && oldVal) {
        const index = this.getLabelWidthIndex(oldVal);
        this.potentialLabelWidthArr.splice(index, 1, val);
      } else if (val) {
        this.potentialLabelWidthArr.push(val);
      }
    },
    deregisterLabelWidth(val) {
      const index = this.getLabelWidthIndex(val);
      this.potentialLabelWidthArr.splice(index, 1);
    }
  }
};
</script>
