(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-roleListSubPage"],{1935:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v2container",{staticClass:"V2Container",staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-start","align-self":"stretch","min-width":"50px","min-height":"50px","animation-duration":"1s","box-sizing":"border-box",height:"auto"},attrs:{wid:"root"}},[o("v2-component-table",{ref:"v2-component-table_1578626611968",staticClass:"role-table V2Widget",style:{position:"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","align-self":"auto",overflow:"hidden","animation-duration":"1s",width:"auto","flex-shrink":0},attrs:{wid:"1578626611968",tableData:t.roleTableList,theme:{tableType:"border",size:""},columns:[{active:!0,prop:"roleId",label:"ID",sortable:!0,openFilter:!1,type:"text",combi:[{active:"true"}],tagMap:[{active:"true",type:"text"}],iconMap:[{active:"true"}],filterMap:[{active:"true"}],width:"150px"},{active:!0,prop:"roleName",label:"角色",sortable:!0,openFilter:!1,type:"text",combi:[{active:"true"}],tagMap:[{active:"true",type:"text"}],iconMap:[{active:"true"}],filterMap:[{active:"true"}],width:"150px"},{active:!0,prop:"desp",label:"说明",sortable:!1,openFilter:!1,type:"text",combi:[{active:"true"}],tagMap:[{active:"true",type:"text"}],iconMap:[{active:"true"}],filterMap:[{active:"true"}],width:"300px"}],"table-data":t.roleTableList,selection:"multi","selection-location":"left","open-index":!1,"open-page":!1,"tool-bar":!1,"tool-title":"操作列","tool-location":"right","tool-width":100,"tool-btns":[],expand:!1,value:t.selectedRoleList},on:{"_op_table_table:selection-change":t.v2_component_table_1578967582000,"update:value":function(e){t.selectedRoleList=e}}}),o("div",{ref:"v2Container_1578966899082",staticClass:"diaglog-btn-ctn V2Container",staticStyle:{position:"relative","box-sizing":"border-box","align-self":"stretch",overflow:"hidden",display:"flex","flex-direction":"row","justify-content":"flex-end","align-items":"flex-start","min-width":"50px","min-height":"50px","animation-duration":"1s",height:"auto"},attrs:{wid:"1578966899082"}},[o("v2-component-btn",{ref:"v2-component-btn_1578966933302",staticClass:"common-btn-normal V2Widget",style:{position:"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","align-self":"auto","flex-shrink":"0",overflow:"hidden","animation-duration":"1s"},attrs:{wid:"1578966933302",theme:{btnType:"normal",size:""},disabled:!1,loading:!1,"btn-name":"取消",shape:"plain"},on:{"_op_component-btn_btn:click":t.v2_component_btn_1578966973000}}),o("v2-component-btn",{ref:"v2-component-btn_1578966925673",staticClass:"common-btn-focus margin-right20 V2Widget",style:{position:"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","align-self":"auto",overflow:"hidden","animation-duration":"1s"},attrs:{wid:"1578966925673",theme:{btnType:"primary",size:""},disabled:!1,loading:!1,"btn-name":"提交",shape:"def"},on:{"_op_component-btn_btn:click":t.v2_component_btn_1578967772000}})],1)],1)},i=[],a=(o("ac6a"),o("7f7f"),o("a6fc")),l=o("25f3"),s={mixins:[a["b"],l["d"]],components:{},data:function(){return{CONTENT:{forms_v2:{config:[],validate_callbacks:[],submit_callbacks:[]},mapping:{1578626611968:[{id:1578626611968,modelValue:"tableData",dataValue:"roleTableList",type:""},{id:1578626611968,modelValue:"value",dataValue:"selectedRoleList",type:""}]}},roleTableList:[],selectedRoleList:[],__VERSION:4}},props:{},computed:{},watch:{},methods:{getRoleList:function(){var t=this;t.$axios.get("".concat(axios.server,"/role/list")).then((function(e){if(e.success&&e.status){var o=e.obj||[];t.roleTableList=o.map((function(t){return{roleId:t.id,roleName:t.name||"",desp:t.desc||""}})),t.$nextTick((function(){t.roleTableList.length&&t.AParams.roles&&t.AParams.roles.length&&t.AParams.roles.forEach((function(e){for(var o=0;o<t.roleTableList.length;o++)t.roleTableList[o].roleId===e.id&&t.__getVueIns("1578626611968").$refs._op_table_table.toggleRowSelection(t.roleTableList[o])}))}))}})).catch((function(t){}))},v2_component_btn_1578966973000:function(t){arguments.length>1&&void 0!==arguments[1]||this.$refs["v2-component-btn_1578966933302"];var e=this;e.close()},associateRoles:function(){var t=this,e=this,o=[];console.log(e.selectedRoleList),o=e.selectedRoleList.map((function(t){return t.roleId})),e.$axios.post("".concat(axios.server,"/user/update/role/").concat(e.AParams.id),JSON.stringify(o),{headers:{"Content-type":"application/json"}}).then((function(o){o.success?e.$notify({type:"success",title:"关联角色成功"}):t.$notify({title:o.msg,type:"error"}),e.close(),e.$root.confirm()})).catch((function(t){console.log(t)}))},v2_component_table_1578967582000:function(t){arguments.length>1&&void 0!==arguments[1]||this.$refs["v2-component-table_1578626611968"];var e=arguments.length>2?arguments[2]:void 0,o=this;o.selectedRoleList=e||[]},v2_component_btn_1578967772000:function(t){arguments.length>1&&void 0!==arguments[1]||this.$refs["v2-component-btn_1578966925673"];var e=this;e.associateRoles()}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var t=this;t.getRoleList()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},deactivated:function(){},activated:function(){}},r=s,c=o("2877"),p=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=p.exports}}]);