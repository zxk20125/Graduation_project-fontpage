<template>
  <aside :class="collapsed ? 'menu-collapsed' : 'menu-expanded'">
    <el-menu
      class="el-menu-vertical-demo"
      :class="{ 'aside-horizontal': mode === 'horizontal' }"
      :mode="mode"
      text-color="#fff"
      :collapse="collapsed"
      :default-active="activeMenu"
      @select="handleSelectMenu"
      :unique-opened="uniqueOpened"
      menu-trigger="hover"
      background-color="#192b32"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/getCustomerInfo">客户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">地址管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/404">客户地址</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">配送员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/404">配送员信息</el-menu-item>
          <el-menu-item index="/404">添加配送员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">网点管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/404">网点管理</el-menu-item>
          <el-menu-item index="/404">添加网点</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">定价管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/404">运送地址定价(镇/区/县)</el-menu-item>
          <el-menu-item index="/404">物件类别定价</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/404">
        <i class="el-icon-setting"></i>
        <span slot="title">订单信息</span>
      </el-menu-item>
      <el-menu-item index="/404"
        ><i class="el-icon-setting"></i>
        <span slot="title">运单信息</span></el-menu-item
      >
      <el-menu-item index="/404"
        ><i class="el-icon-setting"></i>
        <span slot="title">反馈建议</span></el-menu-item
      >
    </el-menu>
  </aside>
</template>

<style lang="scss">
.el-menu--collapse
  > .aside-wrap
  > .el-submenu
  > .el-submenu__title
  .el-submenu__icon-arrow {
  display: none;
}
.el-menu {
  &.aside-horizontal {
    display: flex;
    background-color: #192b32;
    border: none;

    .el-menu-item {
      height: 64px;
      line-height: 64px;
    }
    .el-submenu {
      > ul {
        position: absolute;
        z-index: 3;
        background-color: #192b32;
      }
    }
    .el-submenu__title {
      height: 64px;
      line-height: 64px;
    }
  }
  li.el-submenu {
    .el-submenu__title:hover {
      background-color: #334149 !important;
    }
  }
  li.el-menu-item:not(.is-active) {
    &:hover {
      background-color: #334149 !important;
    }
  }
  li.el-menu-item.is-active {
    background-color: $--color-primary !important;

    i,
    span {
      color: #fff !important;
    }
  }
}
</style>
<script>
import { mixins } from "@v2-lib/vue.spa.plugin";

import sideBarItem from "./sideBarItem";
export default {
  name: "sideBar",
  mixins: [mixins],
  components: {
    sideBarItem,
  },
  props: {
    collapsed: false,
    mode: "",
    uniqueOpened: false,
  },
  data() {
    return {
      menus: [
        {
          title: "abc",
          path: "abc",
        },
      ],
    };
  },
  computed: {
    // menus() {
    //   // return this.$store.state.user.menus;
    // },
    activeMenu: {
      get() {
        const activeTab = this.$store.state.tabs.openedTabs.filter((item) => {
          return item.path === this.$store.state.tabs.activeTab;
        });
        return activeTab[0]
          ? JSON.stringify({ path: activeTab[0].path, name: activeTab[0].name })
          : "";
      },
      set(newValue) {},
    },
  },
  methods: {
    handleSelectMenu(index, indexPath) {
      if (index) {
        let info = JSON.parse(index);
        this.open({ path: info.path });
      }
    },
  },
};
</script>