<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <el-menu
       class="el-menu-vertical-demo"
      :class="{'aside-horizontal':mode==='horizontal'}"
      :mode="mode"
      text-color="#fff"
      :collapse="collapsed"
      :default-active="activeMenu"
      @select="handleSelectMenu"
      :unique-opened="uniqueOpened"
      menu-trigger="hover"
       background-color="#192b32"
      router>
       <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="/404">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
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
 .el-menu{

  &.aside-horizontal{
     display: flex;
     background-color:#192b32;
     border:none;

      .el-menu-item{
        height:64px;
        line-height:64px;
       
     }
     .el-submenu{
        >ul{
            position:absolute;
            z-index: 3;
            background-color: #192b32;
          }
     }
      .el-submenu__title{
           height:64px;
          line-height:64px;

         
        }
  }
  li.el-submenu{
    .el-submenu__title:hover{
       background-color: #334149!important;
    }
  }
  li.el-menu-item:not(.is-active){
    &:hover{
      background-color:#334149!important;
    }
  }
  li.el-menu-item.is-active{
    background-color:$--color-primary!important;

    i,span{
      
      color:#fff!important;
    }

  }
}
</style>
<script>
import {mixins} from '@v2-lib/vue.spa.plugin'

import sideBarItem from "./sideBarItem";
export default {
  name: "sideBar",
  mixins:[mixins],
  components: {
    sideBarItem
  },
  props: {
    collapsed: false,
    mode:"",
    uniqueOpened:false
  },
  data() {
    return {
      menus:[
        {
        title:"abc",
        path:"abc"
      }
      ]
    };
  },
  computed: {
    // menus() {
    //   // return this.$store.state.user.menus;
    // },
    activeMenu:{
       get() {
        const activeTab = this.$store.state.tabs.openedTabs.filter(item=>{
          return item.path===this.$store.state.tabs.activeTab;
        })
        return activeTab[0]?JSON.stringify({path:activeTab[0].path,name:activeTab[0].name}):"";
        
      },
      set(newValue) {
        
      }
    }
  },
  methods: {
    handleSelectMenu(index,indexPath) {
        if (index) {
          let info = JSON.parse(index);
          this.open({path:info.path})
        }
    
    }
  }
};
</script>