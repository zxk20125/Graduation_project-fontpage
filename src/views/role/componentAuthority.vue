<template>
  <div class="component-authority-page-wrap">
        <el-table
            ref="componentTable"
            :data="componentTableData"
            class="component-table"
            style="width: 100%;"
            row-class-name="component-table-row"
            header-row-class-name="component-table-header-row"
            :default-sort="{prop: 'desp', order: 'descending'}"
          >
            <el-table-column
              prop="desp"
              label="页面"
              min-width="150"
              sortable
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              label="组件权限"
              min-width="300"
            >
              <template slot-scope="scope">
                <el-checkbox-group v-model="scope.row.checkedWidgets" @change="widgetsChange(scope.row)">
                    <el-checkbox v-for="item in scope.row.widget" :label="item.wid" :key="item.wid">{{item.desp}}</el-checkbox>
                </el-checkbox-group>
              </template>
            </el-table-column>
            <el-table-column width="50" label="全选">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checkAll" @change="handleCheckAllChange(scope.row)"></el-checkbox>
              </template>
            </el-table-column>
        </el-table>  
        <div class="footer-btn-ctn">
          <el-button @click="cancelAssociate" class="common-cancel-btn">取消</el-button>
          <el-button
            class="common-confirm-btn"
            type="primary"
            @click="sureAssociate"
          >确定</el-button>
        </div>    
  </div>
</template>

<script>
// import {
//     getRoutersList
// } from "@/api/api"
var widgetMap = require("../../../config/auth.json");
export default {
  mixins: [],
  components: {},
  data() {

    return {
        roleId:'',
        componentTableData:[],
        permissionsMap:{},
        checkAll:false

    };
  },
  props: {},
  methods: {
      getPermissionsList(){
          const ctx = this;
           ctx.$axios.get(`${axios.server}/role/get/permissions/${ctx.roleId}`)
           .then(res=>{
               if(res&&res.success){
                     ctx.permissionsMap = res.obj&&res.obj.permissions||{};
                    if(widgetMap&&!$.isEmptyObject(widgetMap)){
                        let widgetArr = [];
                        for(let key in widgetMap){
                      
                            widgetArr.push({
                                ...widgetMap[key],
                                checkedWidgets:ctx.permissionsMap[key]||[],
                                checkAll:widgetMap[key]&&widgetMap[key].widget&&ctx.permissionsMap[key]&&(widgetMap[key].widget.length===ctx.permissionsMap[key].length)
                            });
                        }
                        ctx.componentTableData = [...widgetArr];
                    }
               }
           })
      },
      handleCheckAllChange(row){
       
          if(row.checkAll){
              row.checkedWidgets = row.widget.map(item=>{
                  return item.wid;
              });
          }else{
              row.checkedWidgets = [];
          }
      },
      widgetsChange(row){
          if(row.checkedWidgets.length&&row.checkedWidgets.length===row.widget.length){
              row.checkAll = true;
          }else{
              row.checkAll = false;
          }
      },
      cancelAssociate(){
          this.$root.cancel();
      },
      sureAssociate(){
          const ctx = this;
          let checkedMap = {};
         
          for(let i=0;i<ctx.componentTableData.length;i++){
              let item = ctx.componentTableData[i];

              checkedMap[item.path]= item.checkedWidgets;
          }
          ctx.$axios.post(`${axios.server}/role/update/permissions/${ctx.roleId}`,{
              permissions: checkedMap
          })
          .then(res=>{
              if(res&&res.success){
                //   getRoutersList().then(res=>{
                //      if(res&&res.success){

                //          const permissions = res.obj&&res.obj.permissions&&res.obj.permissions.permissions||{};
                //          ctx.$root.__parent.$root.$store.commit('user/SET_AUTH',permissions);
                //          window.localStorage.setItem('auth',JSON.stringify(permissions));
                          
                //      }
                //   })
                 ctx.$root.confirm();
              }
          })          
      }
  },
  mounted() {
    const ctx = this;
    ctx.roleId = this.$parent&&this.$parent.params&&this.$parent.params.id;
    this.getPermissionsList();

  },
  beforeDestroy(){

  },
  destroyed() {
   
  },
  computed: {

  },
  watch: {

  }
};
</script>

<style lang="scss">
.component-authority-page-wrap {
    overflow-y: auto;
    .footer-btn-ctn{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        border-top:1px solid #E7ECEF;
        text-align: right;
        .el-button{
            height:32px;
            line-height:32px;
            padding:0 20px;
            margin:10px 20px 10px 0;
        }
    }
}
.permission-dialog{
    .aweb-dialog__header{
        height:44px;
        box-sizing: border-box;
    }
    div.aweb-dialog__body{
      padding-bottom:0;
    }

}
</style>