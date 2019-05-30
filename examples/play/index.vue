<template>
  <el-container id="app">
    <el-aside width="200px">
      <el-tree
        :data="routes"
        :props="{
      children: 'children',
      label: 'name'
      }"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import router from "./router";
let { options } = router;
let { routes } = options;
export default {
  name: "PlayApp",
  data() {
    return {
      routes: [].filter.call(routes, _ => _.name)
    };
  },
  methods: {
    handleNodeClick(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-tree-node__content {
  background-color: transparent;
}
.el-aside {
  background-color: transparent;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
