<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-cascader
        v-model="ruleForm.regionValue"
        clearable
        filterable
        :options="regionData"
        style="width:50%;"
      />
    </el-col>
    <el-col :span="24">
      <el-city
        v-model="ruleForm.regionValue"
        clearable
        filterable
        :options="regionData"
        style="width:60%;"
      />
    </el-col>
    <el-col :span="24">ruleForm.regionValue:{{ruleForm.regionValue}}</el-col>
  </el-row>
  <!-- <el-row :gutter="20">
    <el-col :span="24">&nbsp;{{ruleForm.regionValue}}</el-col>
    <el-col :span="24">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-input v-model="ruleForm.regionValue"></el-input>
        <el-form-item label="活动区域" prop="regionValue">
          <el-region
            ref="region"
            v-model="ruleForm.regionValue"
            clearable
            :options="regionData"
            style="width:100%;"
          ></el-region>
        </el-form-item>
        <div>
          {{ruleForm.region.toString()}}
        </div>
        <el-form-item label="活动区域" prop="region">
          <el-cascader :options="regionData" v-model="ruleForm.region" clearable></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>-->
</template>

<script>
import regionData from "../../assets/region";
export default {
  data() {
    return {
      regionData,
      ruleForm: {
        regionValue: "140726",
        // regionValue: ["140000", "140700", "140726"],
        name: "",
        region: "140726",
        // region: ["140000", "140700", "140726"],
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        regionValue: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style lang="scss">
.red {
  background-color: red;
}
</style>
