import {
  isEqual
} from 'element-ui/src/utils/util';
import {
  isUndefined
} from 'element-ui/src/utils/types';

export const cityMixin = {
  data() {
    return {
      cityData: [],
      cityOrder: ['省/直辖市级别', '市/地区级别', '区县'],
      cityTabName: '0',
      cityTabs: [this.options]
    };
  },
  methods: {
    cityHandleCheckedValueChange(val) {
      console.log('cityHandleCheckedValueChange', val);
      const {
        value,
        dropDownVisible
      } = this;
      const {
        checkStrictly,
        multiple
      } = this.config;

      if (!isEqual(val, value) || isUndefined(value)) {
        this.computePresentContent();
        console.log('isMultiple', checkStrictly, multiple);
        // hide dropdown when single mode
        if (!multiple && !checkStrictly && dropDownVisible) {
          this.toggleDropDownVisible(false);
        }

        let _val = JSON.parse(JSON.stringify(val));
        this.$emit('input', _val);
        this.$emit('change', _val);
        this.dispatch('ElFormItem', 'el.form.change', [_val]);
      }
    },
    cityClear() {
      this.cityTabs = [this.options];
      this.cityData = [];
      this.cityTabName = '0';
    },
    cityRadioClick(item, tabIndex) {
      console.log('cityRadioClick', item);
      this.cityTabs = this.cityTabs.slice(0, Number(this.cityTabName) + 1);
      this.checkedValue = item.value;
      this.toggleDropDownVisible(false);
    },
    /*  */
    cityRadioLableClick(item, tabIndex /* 当前tab级别 */) {
      console.table([
        ['cityRadioLableClick', this.checkedValue],
        ['item.value', item.value],
        ['tabIndex', tabIndex]
      ]);

      this.cityTabs = this.cityTabs.slice(0, Number(this.cityTabName) + 1);

      if (item.children && item.children.length > 0) {
        this.cityTabs.push(item.children);
        if (Array.isArray(this.checkedValue)) {
          this.checkedValue[tabIndex] = item.value;
          console.log('this.value', this.value);
        }
        this.cityTabName = String(this.cityTabs.length - 1);
      } else {
        if (Array.isArray(this.checkedValue)) {
          this.checkedValue[tabIndex] = item.value;
          this.checkedValue = JSON.parse(JSON.stringify(this.checkedValue));
        } else {
          this.checkedValue = item.value;
        }
        this.toggleDropDownVisible(false);
      }
    },
    cityHandleClick(tab) {
      console.log(tab);
    },
    cityCheckValue(value) {
      if (Array.isArray(this.checkedValue)) {
        return this.checkedValue[this.cityTabs.length - 1] === value;
      } else {
        return this.checkedValue === value;
      }
    }

  }
};
