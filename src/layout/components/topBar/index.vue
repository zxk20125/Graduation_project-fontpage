<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <el-menu
       class="el-menu-vertical-demo"
      :class="{'aside-horizontal':mode==='horizontal'}"
      :mode="mode"
      text-color="#fff"
      :collapse="collapsed"
      :default-active="activeMenu"
      @select="selectMenu"
      :unique-opened="uniqueOpened"
      menu-trigger="hover"
       background-color="#192b32"
    >
      <top-bar-item v-for="item in menus" :key="item.path" :item="item"></top-bar-item>
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

import topBarItem from "./topBarItem";
export default {
  name: "sideBar",
  mixins:[mixins],
  components: {
    topBarItem,
    
  },
  props: {
    collapsed: false,
    mode:"",
    uniqueOpened:false
  },

  moutend(){
    console.log(123456)
    // this.selectMenu();
   
  },
  data() {
    return {
      //  collapse:this.collapsed
    };
  },
  computed: {
    menus() {
  
      return this.$store.state.user.menus;
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
    selectMenu(index,indexPath) {

        for (let i = 0; i < this.$store.state.user.menus.length; i++) {
          const clickItem = JSON.parse(index).name
          const name = this.$store.state.user.menus[i].name;
          
          if (clickItem == name) {
            const menusPath=this.$store.state.user.menus[i].path;
            this.$store.commit('user/SET_MENUS_PATH',menusPath)

            // this.$store.commit('user/SET_MENUS_PATH',this.$store.state.user.menus[0].path)
            this.$store.commit('user/SET_ITEM', i)
          }
        }
    
    }
  }
};
</script>