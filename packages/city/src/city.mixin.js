export const cityMixin = {
  data() {
    return {
      cityOrder: ['省/直辖市级别', '市/地区级别', ''],
      cityTabName: 0,
      cityTabs: [this.options]
    };
  },
  methods: {
    cityHandleItemClick(item, tabIndex) {
      console.log(item, tabIndex);
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
