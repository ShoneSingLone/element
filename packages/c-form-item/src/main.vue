<template>
  <el-col class="el-c-form-item" :sm="8" :md="6">
    <el-form-item v-if="options.type==='input'" label="活动名称">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item v-else-if="options.type==='select'" label="活动区域">
      <el-select v-model="input" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-col>
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
