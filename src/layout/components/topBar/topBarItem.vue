<template>
  <div class="aside-wrap" v-if="!item.hidden">

    <el-menu-item  :index="JSON.stringify({path:`${tPath}/${item.path}`,name:item.name})">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span v-if="item.meta && item.meta.title" class="admin-menu-title">{{item.meta.title}}</span>
    </el-menu-item>

  </div>
</template>
<style lang="scss">
.menu-expanded .aside-wrap {
  background: transparent;
  outline: none;
}
.aside-wrap {
  background: #283b46;
  outline: none;
  .el-menu-item {
    &:hover,
    &:focus {
      background: #334149;

      i {
        color: #fff;
      }
    }
    &.is-active {
      background: $--color-primary;
      color: #fff;
    }
    &.is-active:hover {
      color: #fff !important;
    }
  }
}
.el-menu--collapse {
  .admin-menu-title {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
}
.admin-menu-title {
  color: #bbb;
}
</style>
<script>
export default {
  name: "sideBarItem",
  props: {
    item: {
      type: Object,
      default: {}
    },
    tPath: {
      type: String,
      default: ""
    }
  },
  mounted(){

  },
  data() {
    return {};
  },
  method: {
   
  }
};
</script>