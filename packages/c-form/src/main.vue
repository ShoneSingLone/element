<template>
  <el-form ref="form" :model="form" label-width="80px">
    <slot></slot>
  </el-form>
</template>

<script>
import { getValueByPath } from 'element-ui/src/utils/util';

export default {
  name: 'ElCForm',
  created() {
    let obj = { a: { b: { c: { d: { e: 'f' } } } } };
    let prop = 'a.b.c.d';
    console.log('ElCForm');
    getValueByPath(obj, prop);
  }
};
</script>
