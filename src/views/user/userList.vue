<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;min-width:50px;overflow:hidden;animation-duration:1s;flex-direction:column;min-height:50px;" class="V2Container">
        <div :wid="`1578537283708`" class="v2Container-1578537283708 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;min-width:50px;overflow:hidden;flex-shrink:0;min-height:50px;animation-duration:1s;flex-direction:row;" ref="v2Container_1578537283708">
            <v2-form-input :wid="`1579152715570`" class="v2-form-input-1579152715570 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-left':'10px','margin-right':'10px'}" :theme="{'size':'medium'}" :disabled="false" :label="`用户名`" :placeholder="`请输入用户名`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :value.sync="username" ref="v2-form-input_1579152715570">
            </v2-form-input>
            <v2-form-treeselect :wid="`1579152759468`" class="v2-form-treeselect-1579152759468 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':'0'}" :theme="{'size':'small'}" :disabled="false" :data-type="`cus`" :options="[{'active':'true','label':'正常','value':'1','expanded':false,'checked':false,'children':[{'active':'true','label':'','value':'','expanded':false,'checked':false,'children':[{'active':'true','label':'','value':'','checked':false}]}]},{'active':true,'label':'异常','value':'2','expanded':false,'checked':false,'children':[{'active':'true','label':'','value':'','expanded':false,'checked':false,'children':[{'active':'true','label':'','value':'','checked':false}]}]}]" :label="`状态`" :placeholder="`请选择状态`" :partition="`/`" :leaf-only="false" :label-witdh="`80px`" :title-mode="`col`" :is-required="false" :value.sync="userStatus" ref="v2-form-treeselect_1579152759468">
            </v2-form-treeselect>
            <v2-form-datepicker :wid="`1578537726108`" class="v2-form-datepicker-1578537726108 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-left':'10px','margin-right':'10px'}" :theme="{'size':'medium'}" :disabled="false" :label="`创建时间`" :label-witdh="`80px`" :placeholder="`请选择`" :title-mode="`col`" :type="`daterange`" :is-required="false" :clearable="true" :format="`yyyy 年 MM 月 dd 日`" :value-format="`timestamp`" :align="`left`" :value.sync="createTime" ref="v2-form-datepicker_1578537726108">
            </v2-form-datepicker>
            <v2-component-btn :wid="`1578539012886`" class="v2-component-btn-1578539012886 common-btn-focus V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-left':'10px','margin-right':'10px'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578965103000" ref="v2-component-btn_1578539012886">
            </v2-component-btn>
        </div>
        <div :wid="`1578539257540`" class="v2Container-1578539257540 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;min-width:50px;overflow:hidden;min-height:50px;animation-duration:1s;flex-direction:row;flex-shrink:0;" ref="v2Container_1578539257540">
            <v2-component-btn :wid="`1578539271197`" class="v2-component-btn-1578539271197 common-btn-focus V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`新增用户`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578838760000" ref="v2-component-btn_1578539271197">
            </v2-component-btn>
            <v2-component-btn :wid="`1578539296885`" class="v2-component-btn-1578539296885 common-btn-normal V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':'0'}" :disabled="isDisabled" :theme="{'btnType':'normal','size':'medium'}" :loading="false" :btn-name="`删除`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578838839000" ref="v2-component-btn_1578539296885">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1578539272258`" class="v2-component-table-1578539272258 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','width':'calc(100% - 20px)','height':'557.00px','flex-shrink':0}" :tableData="userTableList" :pageSize="pageSize" :totalCount="userTotalCount" :theme="{'tableType':'border','size':''}" :table-data="userTableList" :page-size="pageSize" :total-count="userTotalCount" :columns="[{'active':true,'prop':'username','label':'用户名','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'nickname','label':'昵称','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'creator','label':'创建用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'createTime','label':'创建时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editor','label':'最近修改用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editTime','label':'最近修改时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'status','label':'状态','width':'100px','sortable':true,'openFilter':false,'type':'tag','combi':[{'active':'true'}],'tagMap':[{'active':'true','value':'1','text':'正常','type':'text'},{'active':true,'value':'2','text':'异常','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'desp','label':'描述','sortable':false,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]}]" :selection="`multi`" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :index-location="`left`" :open-page="true" :open-set-page-callback="true" :set-page-callback="`getPageUserList`" :tool-bar="true" :tool-title="`操作列`" :tool-location="`right`" :tool-width="`150px`" :tool-btns="[{'active':'true','btnName':'关联角色','type':'text','handler':'showRoleModal','rowName':'','toolIcon':'','rowValue':''},{'active':true,'btnName':'编辑','type':'text','handler':'editUser','rowName':'','toolIcon':'','rowValue':''}]" :expand="false" :value.sync="selectedUserList" @_op_table_table:selection-change="v2_component_table_1578928960000" ref="v2-component-table_1578539272258">
        </v2-component-table>
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
                    'mapping': {"1578537221490":[{"id":1578537221490,"modelValue":"value","dataValue":"username","type":""}],"1578537355608":[{"id":1578537355608,"modelValue":"value","dataValue":"userStatus","type":""}],"1578537726108":[{"id":1578537726108,"modelValue":"value","dataValue":"createTime","type":""}],"1578539272258":[{"id":1578539272258,"modelValue":"tableData","dataValue":"userTableList","type":""},{"id":1578539272258,"modelValue":"value","dataValue":"selectedUserList","type":""},{"id":1578539272258,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578539272258,"modelValue":"totalCount","dataValue":"userTotalCount","type":""}],"1578539296885":[{"id":1578539296885,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1578539296885,"modelValue":"visible","dataValue":"true","type":""}],"1579152110683":[{"id":1579152110683,"modelValue":"value","dataValue":"userStatus","type":""}],"1579152715570":[{"id":1579152715570,"modelValue":"value","dataValue":"username","type":""}],"1579153658381":[{"id":1579153658381,"modelValue":"value","dataValue":"userStatus","type":""}],"1579152759468":[{"id":1579152759468,"modelValue":"value","dataValue":"userStatus","type":""}],"1578539271197":[{"id":1578539271197,"modelValue":"visible","dataValue":"true","type":""}]}
                },
                /* 用户名 */
                'username': ``,
                /* 用户状态 */
                'userStatus': [],
                /* 创建时间 */
                'createTime': '',
                /* 用户表格数据 */
                'userTableList': [],
                /* 当前页码 */
                'currentPage': 1,
                /* 用户总数据 */
                'userTotalCount': 1,
                /* 每页数量 */
                'pageSize': 10,
                /* 是否禁用 */
                'isDisabled': true,
                /* 选中的用户数据 */
                'selectedUserList': [],
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
             *  显示关联角色子页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            showRoleModal(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'关联角色',
                    path:'/associate/role',
                    component:'user/roleListSubPage',
                    type:'SUB',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row&&row.id,roles:row.roles},
                    confirmCallback:() => { 
                       ctx.getPageUserList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  打开新增用户子页面
             */
            openAddUserPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'新增用户',
                    path:'/add/user',
                    component:'user/addUserPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        params&&(params.password = params.password?ctx.$root.encryptByDES(params.password):'');
                        ctx.$axios.post(`${axios.server}/user/add`, params).then(res => {
                            //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '新增用户成功',
                                    type: 'success'
                                });
                                ctx.getPageUserList();
                            }else{
                                ctx.$notify({
                                    title: res.msg,
                                    type: 'error'
                                });
                
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });   
                  
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  删除用户
             */
            deleteUser() {
                //函数内直接用ctx代替ctx访问vue页面的数据。
                const ctx = this;
                var userIds  = [];
                
                userIds = ctx.selectedUserList.map(function(item){
                    
                    return item.id;
                });
                
                ctx.$confirm('确定删除选中记录码？', '删除用户', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}/user/delete`, JSON.stringify(userIds),{
                        headers: {
                        'Content-type':'application/json'
                        }
                    }).then(res => {
                        //下一步的行为
                        if(res.success){
                            ctx.$notify({
                                type: 'success',
                                title: '删除成功'
                            });
                            ctx.getPageUserList();
                        }else{
                            this.$notify({
                                title: res.msg,
                                type: 'error'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                    });
                }).catch(action => {
                
                });
            },
            /**
             *  编辑用户
             *  @param 索引 index
             *  @param 行数据 row
             */
            editUser(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'编辑用户',
                    path:'/edit/user',
                    component:'user/editUserSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{id:row?row.id:''},
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        params.password&&(params.password=ctx.$root.encryptByDES(params.password));
                        ctx.$axios.post(`${axios.server}/user/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑用户成功',
                                    type: 'success'
                                });
                               ctx.getPageUserList(ctx.currentPage);
                                
                            }else{
                                ctx.$notify({
                                    title: res.msg,
                                    type: 'error'
                                });
                               
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                       
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  打开新增用户子页面
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578838760000($event, vueIns=this.$refs['v2-component-btn_1578539271197']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                /**
                方法名称：openAddUserPage
                方法描述：打开新增用户子页面
                
                **/
                ctx.openAddUserPage();
            },
            /**
             *  删除选中的用户数据
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578838839000($event, vueIns=this.$refs['v2-component-btn_1578539296885']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：deleteUser
                方法描述：删除用户
                
                **/
                ctx.deleteUser();
            },
            /**
             *  获取用户分页数据
             *  @param 当前页码 page
             *  @param 单页数量 size
             */
            getPageUserList(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page&&(ctx.currentPage=page);
                !page&&(ctx.currentPage=1);
                size&&(ctx.pageSize=size);
                !size&&(ctx.pageSize=10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [
                    {
                      "key": "create_Time",
                      "order": "desc"
                    }
                  ],
                  "query": {
                    "name": ctx.username||'',
                    "status":ctx.userStatus.length===1?ctx.userStatus[0]:''
                  },
                    "ranges": [
                    {
                      "from": ctx.createTime?ctx.createTime[0]:null,
                      "key": "create_Time",
                      "to":  ctx.createTime?ctx.createTime[1]+1000*60*60*24-1:null
                    }
                  ]
                };
                
                ctx.$axios.post(`${axios.server}/user/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.userTableList  = tableData.map(function(item){
                        return{
                          id:item.id,
                          username:item.name||'',
                          desp:item.desc||'',
                          createTime:ctx.timesTransferToDate(item.createTime),
                          creator:item.createUserName,
                          editor:item.updateUserName,
                          editTime:ctx.timesTransferToDate(item.updateTime),
                          nickname:item.nickname,
                          status:item.status,
                          roles:item.roles
                
                        }
                      });
                      ctx.userTotalCount = res.obj&&res.obj.totalElements;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  转换为日期
             *  @param 时间戳 timestamp
             */
            timesTransferToDate(timestamp) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                if(timestamp){
                    var date = new Date(Number(timestamp)),
                        Y = date.getFullYear() + '-',
                        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
                        D = date.getDate()<10?'0'+date.getDate():date.getDate(),
                        h = date.getHours()<10?'0'+date.getHours():date.getHours(),
                        m = date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes(),
                        s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
                
                    return Y +'-'+ M +'-'+ D +' '+ h +':'+ m +':'+ s;
                }else{
                    return '';
                }
            },
            /**
             *  表格复选框状态改变时获取选中的数据
             *  @param 选中的数据 selections
             */
            v2_component_table_1578928960000(selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                debugger
                ctx.selectedUserList = selections||[];
                
                if (selections.length > 0) {
                    ctx.isDisabled = false;
                }else {
                    ctx.isDisabled = true;
                }
            },
            /**
             *  v2_pagination_1578929249000
             *  @param 组件的vue实例 vueIns
             *  @param 当前页码 currentPage
             */
            v2_pagination_1578929249000(vueIns, currentPage) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.currentPage = currentPage;
                ctx.getPageUserList(currentPage);
            },
            /**
             *  v2_pagination_1578929439000
             *  @param 组件的vue实例 vueIns
             *  @param 每页显示个数 pageSize
             */
            v2_pagination_1578929439000(vueIns, pageSize) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.pageSize = pageSize;
                ctx.getPageUserList()
            },
            /**
             *  查询用户数据
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578965103000($event, vueIns=this.$refs['v2-component-btn_1578539012886']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：getPageUserList
                方法描述：获取用户分页数据
                参数1:currentPage(当前页码)
                **/
                ctx.currentPage = 1;
                ctx.getPageUserList();
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