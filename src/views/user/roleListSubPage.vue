<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;align-content:stretch;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;">
        <v2-component-table :wid="`1578626611968`" class="role-table V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;overflow:hidden;animation-duration:1s;width:auto;`" :tableData="roleTableList" :table-data="roleTableList" :columns="[{&quot;active&quot;:true,&quot;prop&quot;:&quot;roleId&quot;,&quot;label&quot;:&quot;ID&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;type&quot;:&quot;text&quot;,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;width&quot;:&quot;150px&quot;},{&quot;active&quot;:true,&quot;prop&quot;:&quot;roleName&quot;,&quot;label&quot;:&quot;角色&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;type&quot;:&quot;text&quot;,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;width&quot;:&quot;150px&quot;},{&quot;active&quot;:true,&quot;prop&quot;:&quot;desp&quot;,&quot;label&quot;:&quot;说明&quot;,&quot;sortable&quot;:false,&quot;openFilter&quot;:false,&quot;type&quot;:&quot;text&quot;,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;width&quot;:&quot;300px&quot;}]" :selection="`multi`" :open-index="false" :open-page="false" :tool-bar="false" :tool-title="`操作列`" :tool-location="`right`" :tool-width="100" :tool-btns="[]" :expand="false" :visible="true">
        </v2-component-table>
        <v2container :wid="`1578966899082`" class="diaglog-btn-ctn" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;justify-content:flex-end;align-items:flex-start;align-content:stretch;min-width:50px;min-height:50px;animation-duration:1s;`" :direction="`col`">
            <v2-component-btn :wid="`1578966933302`" class="common-btn-normal V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;flex-shrink:0;overflow:hidden;animation-duration:1s;`" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" :visible="true">
            </v2-component-btn>
            <v2-component-btn :wid="`1578966925673`" class="common-btn-focus margin-right20 V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;overflow:hidden;animation-duration:1s;`" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" :visible="true">
            </v2-component-btn>
        </v2container>
    </v2container>
</template>
<script>
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
                                            import {mixins} from "@v2-lib/vue.spa.plugin"

    export default {
        'mixins': [
            root,mixins
            
        ],
        'components': {

        },
        data() {
            return {
                'CONTENT': {
                    'structure': {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"theme":{"tableType":"border"},"tableData":"${roleTableList}","columns":[{"active":true,"prop":"roleId","label":"ID","sortable":true,"openFilter":false,"type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}],"width":"150px"},{"active":true,"prop":"roleName","label":"角色","sortable":true,"openFilter":false,"type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}],"width":"150px"},{"active":true,"prop":"desp","label":"说明","sortable":false,"openFilter":false,"type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}],"width":"300px"}],"selection":"multi","openIndex":false,"openPage":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","toolBtns":[],"expand":false,"visible":true,"__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{"_op_table_table":{"selection-change":["v2_component_table_1578967582000"]}},"id":1578626611968,"pid":"root","sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"],"customClass":["role-table"],"props":["tableData","loading","columns","selection","value","selectionLocation","tHeight","tMaxHeight","openIndex","indexLocation","openPage","pagerCount","pageSizes","pageSize","openSetPageCallback","setPageCallback","currentPage","totalCount","toolBar","toolTitle","toolLocation","toolWidth","toolBtns","expand","expandMap","visible"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"theme":{"btnType":"normal","size":""},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"取消","shape":"plain","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578966973000"]}},"id":1578966933302,"pid":1578966899082,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":["common-btn-normal"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"]},{"theme":{"btnType":"primary","size":""},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"提交","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578967772000"]}},"id":1578966925673,"pid":1578966899082,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":["common-btn-focus","margin-right20"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"]}],"style":{},"id":1578966899082,"pid":"root","ctnStyle":[{},{}],"customClass":["diaglog-btn-ctn"],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":["height","direction","visible"]}],"events":{},"ctnStyle":[{},{}],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},
                    'forms': []
                },
                /* 角色表格数据 */
                'roleTableList': [],
                /* 选中的角色数据 */
                'selectedRoleList': [],
                /* 版本号，请勿修改 */
                '__VERSION': 3.0
            }
        },
        'props': {

        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  获取角色表格数据
             */
            getRoleList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                //console.log(ctx.AParams.roles);
                ctx.$axios.get(`${axios.server}/role/list`).then(res => {
                  if (res.success && res.status) {
                    const tableData = res.obj || [];
                
                    ctx.roleTableList = tableData.map(function (item) {
                      return {
                        roleId: item.id,
                        roleName: item.name || '',
                        desp: item.desc || '',
                
                      }
                    });
                    ctx.$nextTick(function(){
                    
                      if (ctx.roleTableList.length &&ctx.AParams.roles&&ctx.AParams.roles.length) {
                        ctx.AParams.roles.forEach(item => {
                          for (let i = 0; i < ctx.roleTableList.length; i++) {
                            if (ctx.roleTableList[i].roleId === item.id) {
                              ctx.__getVueIns('1578626611968').$refs._op_table_table.toggleRowSelection(ctx.roleTableList[i]);
                            }
                          }
                
                        })
                      }
                    })
                
                  }
                }).catch(error => {
                
                })
            },
            /**
             *  关闭关联角色子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578966973000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
            },
            /**
             *  关联角色
             */
            associateRoles() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var roleIds  = [];
                
                roleIds = ctx.selectedRoleList.map(function(item){
                    
                    return item.roleId;
                });
                
                ctx.$axios.post(`${axios.server}/user/update/role/${ctx.AParams.id}`, JSON.stringify(roleIds),{
                    headers: {
                        'Content-type':'application/json'
                    }
                }).then(res => {
                    //下一步的行为
                    if(res.success){
                        ctx.$notify({
                            type: 'success',
                            title: '关联角色成功'
                        });
                        
                    }else{
                        this.$notify({
                            title: res.msg,
                            type: 'error'
                        });
                    }
                    ctx.close();
                    ctx.$root.confirm();
                        
                }).catch(function (error) {
                        console.log(error);
                });
            },
            /**
             *  表格复选框状态改变时获取选中数据
             *  @param 组件的vue实例 vueIns
             *  @param 选中数据 selections
             */
            v2_component_table_1578967582000(vueIns, selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.selectedRoleList = selections||[];
            },
            /**
             *  关联角色
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578967772000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.associateRoles();
                
            }
        },
        beforeCreate() {
            let ctx = this;
        },
        created() {
            /* Mapping */;
            /* Advanced Watch */;
            /* Poll Start */;
            /* User Code */;
            let ctx = this;
        },
        beforeMount() {
            let ctx = this;
        },
        mounted() {
            /* Resume */;
            /* User Code */;
            //函数内直接用ctx代替this访问vue页面的数据。
            const ctx = this;
            ctx.getRoleList();
        },
        beforeUpdate() {
            let ctx = this;
        },
        updated() {
            let ctx = this;
        },
        beforeDestroy() {
            let ctx = this;
        },
        destroyed() {
            let ctx = this;
        },
        deactivated() {
            let ctx = this;
        },
        activated() {
            let ctx = this;
        }
    }
</script>
<style lang="scss">
.role-table{
    height:auto !important;
    margin:0 !important;
    overflow:auto!important;

    .el-table{
        min-width:655px!important;

        .cell{
            white-space: nowrap;
        }
    }
}
.role-table .el-table__body-wrapper{
    height:auto !important;
}
.diaglog-btn-ctn{
    position:absolute!important;
    bottom:0;
    width:100%;
    right:0;
    border-top:1px solid #e5e5e5;
}
.common-btn-focus{
 //   background:#457ce2;
    height:32px;
 //   color:#fff;
    line-height:32px;
    padding-top:0;
    padding-bottom:0;
}
.common-btn-normal{
    height:32px;
    line-height:32px;
    padding-top:0;
    padding-bottom:0;
    border:1px solid #dcdfe6;
 //   color:#606266;
 //   background:#fff;
}
.margin-right20{
    margin-right:20px!important;
}

</style>