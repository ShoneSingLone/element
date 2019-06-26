<template>
  <div style="margin: 20px;">
    <pre v-html="htmlTableData"></pre>
    <el-input v-model="tableData[0].test" placeholder="1：男；其他：女"></el-input>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="性别" width="180" prop="test" :options="{dictType:'GENDER'}"></el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
window.Vue = window.vue || {};
window.Vue.convertDict = function(row, property, dictType, value) {
  console.log(row, property, dictType, value);
  if (dictType === "GENDER") {
    return value === "1" ? "男" : "女";
  }
  return value;
};
let tableMixins2 = {
  methods: {
    handleCurrentChange(row, event, column) {
      console.log(row, event, column, event.currentTarget);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
let tableMixins = {
  data() {
    let tableData = [...new Array(5)].fill({
      date: "2016-05-02",
      test: "1",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    });
    console.log(tableData[0].test);

    return {
      tableData
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};

export default {
  mixins: [tableMixins, tableMixins2],
  data() {
    return {};
  },
  computed: {
    htmlTableData() {
      return JSON.stringify(this.tableData, null, 2);
    }
  },
  methods: {}
};
</script>


<style lang="scss">
.red {
  background-color: red;
}
</style>
