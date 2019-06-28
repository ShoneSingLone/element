<template>
  <el-row :gutter="20">
    <el-col :span="24">&nbsp;{{value}}</el-col>
    <el-col :span="24">
      <el-form v-model="form">
        <el-form-item
          label="行政区划"
          prop="value"
          :rules="[{ required: true, message: '必填项', trigger: ['change','blur'] }]"
        >
          <el-region
            ref="region"
            v-model="form.value"
            clearable
            style="width:100%;"
            :region-data="regionData"
          ></el-region>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>

<script>
import regionData from "../../assets/region";
export default {
  data() {
    return {
      regionData,
      form: {
        value: ["140000", "140700", "140726"]
      }
    };
  },
  mounted() {
    window.vm = this;
  },
  computed: {},
  methods: {}
};
</script>


<style lang="scss">
.red {
  background-color: red;
}
</style>
