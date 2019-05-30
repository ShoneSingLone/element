<template>
  <div style="margin: 20px;">
    <el-c-form :options="formOptions" class="panel">
      <el-c-form-item :options="formItemOptions1"></el-c-form-item>
      <el-c-form-item :options="formItemOptions2"></el-c-form-item>
      <el-c-form-item :options="formItemOptions3"></el-c-form-item>
      <el-c-form-item :options="formItemOptions4"></el-c-form-item>
      <el-c-form-item :options="formItemOptions1"></el-c-form-item>
      <el-c-form-item :options="formItemOptions2"></el-c-form-item>
      <el-c-form-item :options="formItemOptions3"></el-c-form-item>
      <el-c-form-item :options="formItemOptions4"></el-c-form-item>
      <el-c-form-item :options="formItemOptions1"></el-c-form-item>
      <el-c-form-item :options="formItemOptions2"></el-c-form-item>
      <el-c-form-item :options="formItemOptions3"></el-c-form-item>
      <el-c-form-item :options="formItemOptions4"></el-c-form-item>
    </el-c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "Hello Element UI!",
      formOptions: { ref: "form", model: "form", "label-width": "80px" },
      formItemOptions1: { type: "select", label: "hehe", model: "form.name" },
      formItemOptions2: {
        type: "input",
        label: "活动名称",
        model: "form.name"
      },
      formItemOptions3: { type: "input", label: "hehe", model: "form.name" },
      formItemOptions4: { type: "input", label: "hehe", model: "form.name" },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    change() {},
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>


<style lang="scss">
.red {
  background-color: red;
}
</style>
