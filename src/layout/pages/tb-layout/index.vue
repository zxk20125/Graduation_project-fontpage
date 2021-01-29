<template>
  <div class="aweb-container" ref="layout" name="layout">
    <div class="aweb-header">
      <el-row>
        <el-col
          :span="3"
          class="aweb-logo"
          :class="collapsed?'logo-collapse-width':'logo-width'"
        >{{collapsed?'':sysName}}
            <img class="logo-img" :src='logoSrc'>
        </el-col>
        <!-- <el-col :span="10">
           
          <div class="aweb-tools" @click.prevent="collapsed=!collapsed">
            <i class="el-icon-menu toggle-collapse"></i>
          </div>
        </el-col> -->
         <el-col :span="19">
              <side-bar  mode="horizontal"></side-bar>
        </el-col>

        <el-col :span="2" class="aweb-userinfo">
            
          <!-- <el-tooltip
            effect="dark"
            placement="top"
            v-for="item in caseList"
            :key="item.name"
            :content="item.tip"
          >
            <el-button
              :icon="item.icon"
              circle
              class="aweb-download-btn"
              @click="openMarket(item.doc)"
            ></el-button>
          </el-tooltip> -->

         

          <el-dropdown trigger="hover">
            <span class="el-dropdown-link aweb-userinfo-inner">
              <img :src="sysUserAvatar" />
              {{sysUserName}}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div class="aweb-body">
      <!-- 侧边导航 -->
    
      <tabs-view class="aweb-ctt"></tabs-view>
    </div>
  </div>
</template>
<script>
import { mixins } from "@v2-lib/vue.spa.plugin";
import { getToken } from "@/utils/user";
import sideBar from "../../components/sideBar";
import tabsView from "../../components/tabsView";
export default {
  name: "layout",
  components: {
    sideBar,
    tabsView
  },
  data() {
    return {
     
      collapsed: false
    };
  },

  mixins: [mixins],

  methods: {
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          _this.$store
            .dispatch("user/logout", { ctoken: getToken() })
            .then(() => {
              _this.$router.push("/login");
            })
            .catch(error => {
              _this.$notify.error({
                title: "退出登录失败"
              });
            });
        })
        .catch(() => {});
    },
    openMarket(arg) {
      arg && window.open(arg)
     
    }
  },

  mounted() {},
  computed: {
    sysUserName() {
      console.log(this.$store.state.user.userName);
      return this.$store.state.user.userName;
    },
    sysName(){
      console.log(this.$store.getters.title);
      return this.$store.getters.title;
    },
    sysUserAvatar() {
      console.log(this.$store.state.user.avatar);
      return this.$store.state.user.avatar;
    },
    logoSrc(){
      return this.$store.getters.logo||"../img/agree-logo.png"
    }
  },
  watch: {}
};
</script>

<style  lang="scss">
.aweb-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  background-color: #f0f2f5;
  .el-dropdown {
    vertical-align: middle;
  }
  .aweb-toolsaweb-tools {
    padding-left: 10px;
    .toggle-collapse {
      cursor: pointer;
      padding: 0 20px;
      font-weight: 400;
      font-size: 18px;
    }
  }
  .aweb-header {
    line-height: 64px;

    height: 64px;
    border-right: none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background: #182932;
    color: #bbb;
    // >.el-row{
    //     background: #182932;
    //     color:#bbb;
    // }
    .aweb-userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;

      .el-badge mark {
        color: #ccc;
      }
      .aweb-userinfo-inner {
        cursor: pointer;
        color:#fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
      .aweb-download-btn {
        margin-right: 1em;
      }
    }

    .aweb-logo {
      height: 64px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      .logo-img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 10px;
      }
    }
    .logo-width {
      background-color: #182932;
    }
    .logo-collapse-width {
      color: #fff;
      transition: width 0.28s;
    }
    .logo-collapse-width {
      width: 64px;
    }
    // .logo-width {
    //   width: 230px;
    // }
    .aweb-tools {
      padding: 0px 23px;
      width: 14px;
      height: 64px;
      line-height: 64px;
      cursor: pointer;
    }
  }
  .aweb-body {
    position: absolute;
    width: 100%;
    top: 64px;
    bottom: 0px;
    overflow: hidden;
    // aside {
    //   width: 230px;
    //   transition: width 0.28s;
    //   height: 100%;
    //   // .el-menu-vertical-demo{
    //   //   background: #20323c!important;
    //   //   background: -webkit-gradient(linear,left top,left bottom,from(#283b46),to(#182932))!important;
    //   //   background: -o-gradient(linear,left top,left bottom,from(#283b46),to(#182932))!important;
    //   //   background: -ms-gradient(linear,left top,left bottom,from(#283b46),to(#182932))!important;
    //   //   background: -moz-gradient(linear,left top,left bottom,from(#283b46),to(#182932))!important;
    //   //   background: linear-gradient(#283b46,#182932)!important;
    //   // }
    //   >ul.el-menu{
    //     overflow:auto;
    //   }
    //   .el-menu {
    //     height: 100%;
    //     border-right: 0;
    //     background: linear-gradient(#283b46, #182932);
    //   }
    //   .el-submenu .el-menu {
    //     background: transparent;
    //   }
    //   a.router-link-exact-active.router-link-active {
    //     text-decoration: none;
    //   }
    //   .el-menu-item {
    //     &:hover,
    //     &:focus {
    //       background: #334149;

    //       i {
    //         color: #fff;
    //       }
    //     }
    //     &.is-active {
    //       background: $--color-primary;
    //       color: #fff;
    //     }
    //     &.is-active:hover {
    //       color: #fff !important;
    //     }
    //   }
    //   .el-submenu {
    //     [class*="fa "] {
    //       margin-right: 9px;
    //       font-size: 18px;
    //       margin-left: 4px;
    //     }
    //     &:hover {
    //       .el-submenu__title i {
    //         color: #fff;
    //       }
    //     }
    //   }
    // }
    .menu-collapsed {
      width: 64px;
      transition: all 0.28s;
      & + .aweb-ctt {
        margin-left: 64px;
        transition: margin-left 0.5s;
      }
    }
    .menu-expanded {
      width: 230px;
      transition: all 0.5s;
      & + .aweb-ctt {
        margin-left: 230px;
        transition: margin-left 0.28s;
      }
    }
  }
  .aweb-ctt {
    overflow: hidden;
    padding: 10px;
    // margin-left: 0;
    box-sizing: border-box;
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.el-tooltip__popper{
  background:#747577!important;
  color:#fff!important;
}
</style>