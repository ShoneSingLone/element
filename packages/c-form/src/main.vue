  <template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row>
      <slot></slot>
    </el-row>
  </el-form>
</template>


<script>
import { getValueByPath } from 'element-ui/src/utils/util';

export default {
  name: 'ElCForm',
  // functional: true,
  props: { options: Object },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    console.log('mounted', this);
  },
  /* render: function(h, ctx) {
    console.log('ctx', ctx);
    console.log('ctx.slots().default', ctx.slots().default);

    return h('el-form', ctx.slots().default);
  }, */
  created() {
    let obj = { a: { b: { c: { d: { e: 'f' } } } } };
    let prop = 'a.b.c.d';
    console.log('ElCForm', getValueByPath(obj, prop));
  }
};
</script>