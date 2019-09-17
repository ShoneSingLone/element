<template>
  <div class="table-example">
    <el-c-form-item :options="inputOptions" v-model="inputOptions.value"></el-c-form-item>
    <el-c-form-item :options="textareaOptions" v-model="textareaOptions.value"></el-c-form-item>
  </div>
</template>

<script>
export default {
  provide() {
    return {};
  },
  mounted() {
    window.thisvm = this;
  },
  data() {
    const _this = this;
    return {
      show: false,
      inputOptions: {
        _type: "ElInput",
        disabled: false,
        placeholder: "请选择日期",
        "suffix-icon": "el-icon-date",
        on: {
          blur: _this.showText
        }
      },
      textareaOptions: {
        _type: "ElInput",
        type: "textarea",
        "show-word-limit": true,
        disabled: false,
        maxlength: "100",
        placeholder: "请选择日期",
        "suffix-icon": "el-icon-date"
      }
    };
  },
  methods: {
    showText() {
      console.log("showText", arguments);
    },
    toggle() {
      this.show = !this.show;
    }
  },
  watch: {},
  components: {}
};
</script>


<style lang="scss">
</style>
