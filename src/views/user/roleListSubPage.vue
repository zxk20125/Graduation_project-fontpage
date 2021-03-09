<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;height:auto;" class="V2Container">
        <v2-component-table :wid="`1578626611968`" class="role-table V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s','width':'auto','flex-shrink':0}" :tableData="roleTableList" :theme="{'tableType':'border','size':''}" :columns="[{'active':true,'prop':'roleId','label':'ID','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'width':'150px'},{'active':true,'prop':'roleName','label':'角色','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'width':'150px'},{'active':true,'prop':'desp','label':'说明','sortable':false,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'width':'300px'}]" :table-data="roleTableList" :selection="`multi`" :selection-location="`left`" :open-index="false" :open-page="false" :tool-bar="false" :tool-title="`操作列`" :tool-location="`right`" :tool-width="100" :tool-btns="[]" :expand="false" @_op_table_table:selection-change="v2_component_table_1578967582000" ref="v2-component-table_1578626611968" :value.sync="selectedRoleList">
        </v2-component-table>
        <div :wid="`1578966899082`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;" ref="v2Container_1578966899082">
            <v2-component-btn :wid="`1578966933302`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578966973000" ref="v2-component-btn_1578966933302">
            </v2-component-btn>
            <v2-component-btn :wid="`1578966925673`" class="common-btn-focus margin-right20 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578967772000" ref="v2-component-btn_1578966925673">
            </v2-component-btn>
        </div>
    </v2container>
</template>
<script>
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
    import {mixins} from '@v2-lib/vue.spa.plugin'
    /* __V2_DECOMPILABLE__ */
    export default {
        'mixins': [
            root,
            mixins
        ],
        'components': {

        },
        data() {
            return {
                'CONTENT': {
                    'forms_v2': {
                        'config': [],
                        'validate_callbacks': [

                        ],
                        'submit_callbacks': [

                        ]
                    },
                    'mapping': {"1578626611968":[{"id":1578626611968,"modelValue":"tableData","dataValue":"roleTableList","type":""},{"id":1578626611968,"modelValue":"value","dataValue":"selectedRoleList","type":""}]}
                },
                /* 角色表格数据 */
                'roleTableList': [],
                /* 选中的角色数据 */
                'selectedRoleList': [],
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
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
            v2_component_btn_1578966973000($event, vueIns=this.$refs['v2-component-btn_1578966933302']) {
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
                console.log(ctx.selectedRoleList)
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
            v2_component_table_1578967582000($event, vueIns=this.$refs['v2-component-table_1578626611968'], selections) {
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
            v2_component_btn_1578967772000($event, vueIns=this.$refs['v2-component-btn_1578966925673']) {
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

</style>