(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1951be"],{"07a5":function(e,t,a){var i=a("5fdc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("499e").default;n("3cb17793",i,!0,{sourceMap:!1,shadowMode:!1})},"09e5":function(e,t,a){"use strict";a("5780")},"0bfb3":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".menu-expanded .aside-wrap{background:rgba(0,0,0,0);outline:none}.aside-wrap{background:#283b46;outline:none}.aside-wrap .el-menu-item:focus,.aside-wrap .el-menu-item:hover{background:#334149}.aside-wrap .el-menu-item:focus i,.aside-wrap .el-menu-item:hover i{color:#fff}.aside-wrap .el-menu-item.is-active{background:#457ce2;color:#fff}.aside-wrap .el-menu-item.is-active:hover{color:#fff!important}.el-menu--collapse .admin-menu-title{opacity:0;height:0;width:0;overflow:hidden;visibility:hidden;display:inline-block}.admin-menu-title{color:#bbb}",""])},"39bf":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".aweb-tabs{height:100%}.aweb-tabs .el-tabs__content{height:calc(100% - 40px);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.aweb-tabs .aweb-ctt-wrap{position:absolute;left:0;right:0;bottom:0;top:0;height:100%;overflow:auto;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.aweb-contextmenu{margin:0;background:#545c64;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;font-size:12px;font-weight:400;color:#fff;border-radius:4px}.aweb-contextmenu li{margin:0;padding:7px 16px;cursor:pointer}.aweb-contextmenu li:hover{background:#434a50}",""])},5031:function(e,t,a){"use strict";a("d6b5")},5780:function(e,t,a){var i=a("0bfb3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("499e").default;n("1c6035cd",i,!0,{sourceMap:!1,shadowMode:!1})},"5d6a":function(e,t,a){"use strict";a("b73e")},"5fdc":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".el-menu--collapse>.aside-wrap>.el-submenu>.el-submenu__title .el-submenu__icon-arrow{display:none}.el-menu.aside-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#192b32;border:none}.el-menu.aside-horizontal .el-menu-item{height:64px;line-height:64px}.el-menu.aside-horizontal .el-submenu>ul{position:absolute;z-index:3;background-color:#192b32}.el-menu.aside-horizontal .el-submenu__title{height:64px;line-height:64px}.el-menu li.el-menu-item:not(.is-active):hover,.el-menu li.el-submenu .el-submenu__title:hover{background-color:#334149!important}.el-menu li.el-menu-item.is-active{background-color:#457ce2!important}.el-menu li.el-menu-item.is-active i,.el-menu li.el-menu-item.is-active span{color:#fff!important}",""])},8636:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.openedTabs.length?a("el-tabs",{staticClass:"aweb-tabs",attrs:{type:"border-card"},on:{"tab-click":e.tabClick,"tab-remove":e.tabRemove},nativeOn:{contextmenu:function(t){return e.openRightMenu(e.openedTabs,t)}},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.openedTabs,(function(t){return a("el-tab-pane",{key:t.name,staticClass:"aweb-tab-pane",attrs:{label:t.path===e.meta.__path&&e.meta.title||t.meta&&t.meta.title,name:t.path,route:t.path,closable:!(t.meta&&t.meta.fixed)}},[a("div",{staticClass:"aweb-ctt-wrap"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isRouterAlive?a("keep-alive",[a("router-view",{directives:[{name:"show",rawName:"v-show",value:e.activeTab===t.path,expression:"activeTab===item.path"}]})],1):[t.meta&&t.meta.keepAlive?a("keep-alive",[e.activeTab===t.path?a("router-view"):e._e()],1):e._e(),e.activeTab!==t.path||t.meta&&t.meta.keepAlive?e._e():a("router-view")]],2)],1)])})),1):e._e(),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"aweb-contextmenu",style:{left:e.left+"px",top:e.top+"px"}},[e._l(e.rightMenuData,(function(t){return[e.currentMenu&&e.currentMenu.meta&&e.currentMenu.meta.fixed&&"close"===t.key?e._e():a("li",{key:t.key,on:{click:function(a){return e.rightMenuClick(t.key)}}},[e._v(e._s(t.name))])]}))],2)],1)},n=[],o=(a("8e6e"),a("456d"),a("ac6a"),a("a481"),a("ade3")),r=a("25f3");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={mixins:[r["d"]],data:function(){return{meta:{},visible:!1,left:0,top:25,isRouterAlive:!1,rightMenuData:[{name:"刷新此窗口",key:"refresh"},{name:"关闭此窗口",key:"close"},{name:"关闭左侧窗口",key:"closeLeft"},{name:"关闭右侧窗口",key:"closeRight"},{name:"关闭全部窗口",key:"closeAll"}],currentMenu:null}},watch:{$route:{immediate:!0,handler:function(e,t){var a={};a.path=e.path,a.meta=e.meta,a.query=e.query,a.params=e.params;var i=sessionStorage.getItem("meta");if(this.meta=i&&JSON.parse(i)||{},this.meta.__path===a.path&&(a.meta=l(l({},a.meta),this.meta)),!/^\/redirect/.test(e.path)){var n=this.openedTabs.some((function(t){return t.path===e.path}));if(n){var o=this.openedTabs.map((function(e){return e.path===a.path&&(e.meta=a.meta),e}));return this.$store.commit("tabs/SET_TABS",o),void this.$store.commit("tabs/SET_ACTIVE_TAB",a.path)}"SELF"===e.meta.type?this.$store.commit("tabs/ADD_SELF_TABS",a):this.$store.commit("tabs/ADD_TABS",a)}}},visible:function(e){e?document.body.addEventListener("click",this.closeRightMenu):document.body.removeEventListener("click",this.closeRightMenu)},activeTab:{immediate:!0,handler:function(e,t){if(e!==t&&e!==this.$route.path){var a=this.openedTabs.filter((function(t){return t.path===e}));a.length&&(a=a[0],this.open({path:a.path,params:a.query||{}}))}}}},computed:{activeTab:{get:function(){return this.$store.state.tabs.activeTab},set:function(e){this.$store.commit("tabs/SET_ACTIVE_TAB",e)}},openedTabs:function(){return this.$store.state.tabs.openedTabs}},mounted:function(){},methods:{rightMenuClick:function(e){switch(e){case"refresh":this.$router.replace({path:"/redirect"+this.currentMenu.path,query:this.currentMenu.query});break;case"close":this.$store.commit("tabs/DELETE_TABS",this.currentMenu.path);break;case"closeLeft":this.$store.commit("tabs/DELETE_LEFT_TABS",this.currentMenu.path);break;case"closeRight":this.$store.commit("tabs/DELETE_RIGHT_TABS",this.currentMenu.path);break;case"closeAll":this.$store.commit("tabs/DELETE_ALL_TABS");break}},tabClick:function(e){var t=this.openedTabs.filter((function(t){return t.path===e.$attrs.route}));t&&t.length&&(t=t[0],this.$router.replace({path:t.path,query:t.query||{}}))},tabRemove:function(e){this.$store.commit("tabs/DELETE_TABS",e)},openRightMenu:function(e,t){var a=this,i=t.target.closest(".el-tabs__item"),n=i.getAttribute("id"),o=n.replace("tab-","pane-"),r=document.getElementById(o).getAttribute("route");if(r){t.stopPropagation(),t.preventDefault();var s=105,l=this.$el.getBoundingClientRect().left,c=this.$el.offsetWidth,u=c-s,d=t.clientX-l;this.left=d>u?u:d,e.forEach((function(e){e.path===r&&(a.currentMenu=e)})),this.visible=!0}},closeRightMenu:function(){this.visible=!1}}},u=c,d=(a("5031"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,null,null);t["a"]=p.exports},a05e:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[a("el-menu",{staticClass:"el-menu-vertical-demo",class:{"aside-horizontal":"horizontal"===e.mode},attrs:{mode:e.mode,"text-color":"#fff",collapse:e.collapsed,"default-active":e.activeMenu,"unique-opened":e.uniqueOpened,"menu-trigger":"hover","background-color":"#192b32"},on:{select:e.handleSelectMenu}},e._l(e.menus,(function(e){return a("side-bar-item",{key:e.path,attrs:{item:e}})})),1)],1)},n=[],o=(a("7f7f"),a("25f3")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item.hidden?e._e():a("div",{staticClass:"aside-wrap"},[e.item.children?a("el-submenu",{attrs:{index:e.item.path}},[a("template",{slot:"title"},[e.item.meta&&e.item.meta.icon?a("i",{class:e.item.meta.icon}):e._e(),e.item.meta&&e.item.meta.title?a("span",{staticClass:"admin-menu-title"},[e._v(e._s(e.item.meta.title))]):e._e()]),e._l(e.item.children,(function(t){return a("side-bar-item",{key:t.path,attrs:{item:t,tPath:e.tPath+"/"+e.item.path}})}))],2):a("el-menu-item",{key:e.item.path,attrs:{index:JSON.stringify({path:e.tPath+"/"+e.item.path,name:e.item.name})}},[e.item.meta&&e.item.meta.icon?a("i",{class:e.item.meta.icon}):e._e(),e.item.meta&&e.item.meta.title?a("span",{staticClass:"admin-menu-title"},[e._v(e._s(e.item.meta.title))]):e._e()])],1)},s=[],l={name:"sideBarItem",props:{item:{type:Object,default:{}},tPath:{type:String,default:""}},data:function(){return{}}},c=l,u=(a("09e5"),a("2877")),d=Object(u["a"])(c,r,s,!1,null,null,null),p=d.exports,b={name:"sideBar",mixins:[o["d"]],components:{sideBarItem:p},props:{collapsed:!1,mode:"",uniqueOpened:!1},data:function(){return{}},computed:{menus:function(){return this.$store.state.user.menus},activeMenu:{get:function(){var e=this,t=this.$store.state.tabs.openedTabs.filter((function(t){return t.path===e.$store.state.tabs.activeTab}));return t[0]?JSON.stringify({path:t[0].path,name:t[0].name}):""},set:function(e){}}},methods:{handleSelectMenu:function(e,t){if(e){var a=JSON.parse(e);this.open({path:a.path})}}}},m=b,h=(a("bb12"),Object(u["a"])(m,i,n,!1,null,null,null));t["a"]=h.exports},b73e:function(e,t,a){var i=a("d54a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("499e").default;n("3586d9a4",i,!0,{sourceMap:!1,shadowMode:!1})},bb12:function(e,t,a){"use strict";a("07a5")},d54a:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".aweb-container{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;background-color:#f0f2f5}.aweb-container .el-dropdown{vertical-align:middle}.aweb-container .aweb-toolsaweb-tools{padding-left:10px}.aweb-container .aweb-toolsaweb-tools .toggle-collapse{cursor:pointer;padding:0 20px;font-weight:400;font-size:18px}.aweb-container .aweb-header{line-height:64px;height:64px;border-right:none;list-style:none;position:relative;margin:0;padding-left:0;background:#182932;color:#bbb}.aweb-container .aweb-header .aweb-userinfo{text-align:right;padding-right:35px;float:right}.aweb-container .aweb-header .aweb-userinfo .el-badge mark{color:#ccc}.aweb-container .aweb-header .aweb-userinfo .aweb-userinfo-inner{cursor:pointer;color:#fff}.aweb-container .aweb-header .aweb-userinfo .aweb-userinfo-inner img{width:40px;height:40px;border-radius:20px;margin:10px 0 10px 10px;float:right}.aweb-container .aweb-header .aweb-userinfo .aweb-download-btn{margin-right:1em}.aweb-container .aweb-header .aweb-logo{height:64px;font-size:22px;padding-left:20px;padding-right:20px}.aweb-container .aweb-header .aweb-logo .logo-img{width:40px;float:left;margin:10px 10px 10px 10px}.aweb-container .aweb-header .logo-width{background-color:#182932}.aweb-container .aweb-header .logo-collapse-width{color:#fff;-webkit-transition:width .28s;-o-transition:width .28s;transition:width .28s;width:64px}.aweb-container .aweb-header .aweb-tools{padding:0 23px;width:14px;height:64px;line-height:64px;cursor:pointer}.aweb-container .aweb-body{position:absolute;width:100%;top:64px;bottom:0;overflow:hidden}.aweb-container .aweb-body .menu-collapsed{width:64px;-webkit-transition:all .28s;-o-transition:all .28s;transition:all .28s}.aweb-container .aweb-body .menu-collapsed+.aweb-ctt{margin-left:64px;-webkit-transition:margin-left .5s;-o-transition:margin-left .5s;transition:margin-left .5s}.aweb-container .aweb-body .menu-expanded{width:230px;-webkit-transition:all .5s;-o-transition:all .5s;transition:all .5s}.aweb-container .aweb-body .menu-expanded+.aweb-ctt{margin-left:230px;-webkit-transition:margin-left .28s;-o-transition:margin-left .28s;transition:margin-left .28s}.aweb-container .aweb-ctt{overflow:hidden;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:0;right:0;top:0;bottom:0}.el-tooltip__popper{background:#747577!important;color:#fff!important}",""])},d6b5:function(e,t,a){var i=a("39bf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("499e").default;n("3c706381",i,!0,{sourceMap:!1,shadowMode:!1})},fbc5:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"layout",staticClass:"aweb-container",attrs:{name:"layout"}},[a("div",{staticClass:"aweb-header"},[a("el-row",[a("el-col",{staticClass:"aweb-logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:3}},[e._v(e._s(e.collapsed?"":e.sysName)+"\n          "),a("img",{staticClass:"logo-img",attrs:{src:e.logoSrc}})]),a("el-col",{attrs:{span:19}},[a("side-bar",{attrs:{mode:"horizontal"}})],1),a("el-col",{staticClass:"aweb-userinfo",attrs:{span:2}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link aweb-userinfo-inner"},[a("img",{attrs:{src:e.sysUserAvatar}}),e._v("\n            "+e._s(e.sysUserName)+"\n          ")]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("我的消息")]),a("el-dropdown-item",[e._v("设置")]),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1)],1),a("div",{staticClass:"aweb-body"},[a("tabs-view",{staticClass:"aweb-ctt"})],1)])},n=[],o=a("25f3"),r=a("fa20"),s=a("a05e"),l=a("8636"),c={name:"layout",components:{sideBar:s["a"],tabsView:l["a"]},data:function(){return{caseList:[{tip:"下载后端案例",icon:"el-icon-sold-out",name:"end",doc:"https://git.awebide.com/awebfe/backend/AWEB_Spring_7.0/"},{tip:"下载前端案例",icon:"el-icon-sold-out",name:"font",doc:"https://git.awebide.com/template-admin/vue-admin"},{tip:"后台接口文档",icon:"el-icon-sold-out",name:"endDoc",doc:"https://vue-api.awebide.com/aweb-api/swagger-ui.html#/"}],collapsed:!1}},mixins:[o["d"]],methods:{logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then((function(){e.$store.dispatch("user/logout",{ctoken:Object(r["b"])()}).then((function(){e.$router.push("/login")})).catch((function(t){e.$notify.error({title:"退出登录失败"})}))})).catch((function(){}))},openMarket:function(e){e&&window.open(e)}},mounted:function(){},computed:{sysUserName:function(){return console.log(this.$store.state.user.userName),this.$store.state.user.userName},sysName:function(){return console.log(this.$store.getters.title),this.$store.getters.title},sysUserAvatar:function(){return console.log(this.$store.state.user.avatar),this.$store.state.user.avatar},logoSrc:function(){return this.$store.getters.logo||"../img/agree-logo.png"}},watch:{}},u=c,d=(a("5d6a"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=p.exports}}]);