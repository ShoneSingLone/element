# CForm c-form

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

```html
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
}
</script>
```

:::