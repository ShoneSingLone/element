<template>
  <div class="el-c-form-item" v-if="options.type==='input'">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  name: 'ElCFormItem',
  created() {
    console.log(this.options);
  },
  props: {
    options: Object
  },
  data() {
    return {
      input: 'ElCFormItem'
    };
  }
};
</script>
