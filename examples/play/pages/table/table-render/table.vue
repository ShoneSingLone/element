<template>
  <div style="margin: 20px;">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>王小明</td>
          <td>18</td>
        </tr>
        <tr>
          <td>张小刚</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
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
