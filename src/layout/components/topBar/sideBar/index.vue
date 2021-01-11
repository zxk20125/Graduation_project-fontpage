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
    >

      
      <side-bar-item v-for="item in menus[menusIndex].children" :key="item.path" :item="item"></side-bar-item>

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
  moutend(){
    console.log('菜单')
    // console.log( this.menus)
  },
  data() {
    return {
      //  collapse:this.collapsed
    };
  },
  computed: {
    menus() {
      console.log('菜单管理')
     console.log(this.$store.state.user.menus)
      return this.$store.state.user.menus;
    },
    menusIndex(){

    return this.$store.state.user.item
    },
    menusPath(){
    return this.$store.state.user.menusPath
    },
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
          // this.open({path:info.path})
        //  未兼容
             this.open({path:`${this.menusPath}/${info.path}`})
          
         
        }
    
    }
  }
};
</script>