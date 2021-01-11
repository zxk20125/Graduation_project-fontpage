<template>
  <div class="aside-wrap" v-if="!item.hidden">
      <el-menu-item
      v-if="!item.children"
      :index="JSON.stringify({path:`${tPath}/${item.path}`,name:item.name})"
      :key="item.path"
    >
      <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
      <span v-if="item.meta && item.meta.title" class="admin-menu-title">{{item.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span v-if="item.meta && item.meta.title" class="admin-menu-title">{{item.meta.title}}</span>
      </template>
      <side-bar-item
        v-for="sub in item.children"
        :key="sub.path"
        :item="sub"
        :tPath="tPath+'/'+item.path"
      ></side-bar-item>
    </el-submenu>

  </div>
</template>
<style lang="scss">
.menu-expanded .aside-wrap {
  background: transparent;
  
}
.aside-wrap {
  background: #283b46;
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
    // onsole.log(123456456456)
    // console.log(this.item)
  },
  data() {
    return {};
  },
  method: {
   
  }
};
</script>