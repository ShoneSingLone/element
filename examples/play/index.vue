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