<template>
  <div>
    <!-- 相关文档 https://cn.vuejs.org/v2/guide/syntax.html -->

    <!-- https://www.aui2.cn/webide/user-guide/advance/component/readme.html -->

    <!-- html内容start-->

    <!-- props双向绑定 -->
    <input type="text" v-model="value" />

    <!-- computed 计算属性判断空指针 -->
    <span>{{configText}}</span>

    <!-- html内容end-->
  </div>
</template>

<script>
export default {
  //props 对应package.json的 option属性
  props: {
    /**属性1*/
    value: {
      default: () => {
        return "默认值";
      }
    },
    /**属性2*/
    config: {
      default: () => {
        return {};
      }
    }
  },

  //组件名字
  name: "v2-component-template",

  //数据
  data() {
    return {};
  },

  //计算属性
  computed: {
    // props 双向绑定 .sync
    value_c: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("update:value", v);
      }
    },
    //  compouted 判断空指针
    configText() {
      return this.config && this.config.text;
    }
  },
  //监听
  watch: {},

  //生命周期-初始化
  created() {},

  //生命周期-挂载
  mounted() {},

  //生命周期-销毁之前
  beforeDestroy() {},

  //生命周期-销毁
  destroyed() {}
};
</script>

<style lang="scss" scoped>
/* 样式内容 start*/

/* 样式内容 end*/
</style>
