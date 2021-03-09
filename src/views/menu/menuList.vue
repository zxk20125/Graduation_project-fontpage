<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;animation-duration:1s;flex-direction:column;min-width:50px;min-height:50px;" class="V2Container">
        <div :wid="`1578537283708`" class="v2Container-1578537283708 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:row;flex-shrink:0;" ref="v2Container_1578537283708">
            <v2-form-input :wid="`1579152715570`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`创建用户`" :placeholder="`请输入创建用户`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1579152715570" :value.sync="creator">
            </v2-form-input>
            <v2-form-input :wid="`1580789804791`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`菜单标题`" :placeholder="`请输入菜单名称`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1580789804791" :value.sync="menuTitle">
            </v2-form-input>
            <v2-form-datepicker :wid="`1578537726108`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`创建时间`" :label-witdh="`80px`" :placeholder="`请选择`" :title-mode="`col`" :type="`daterange`" :is-required="false" :clearable="true" :format="`yyyy 年 MM 月 dd 日`" :value-format="`timestamp`" :align="`left`" ref="v2-form-datepicker_1578537726108" :value.sync="createTime">
            </v2-form-datepicker>
            <v2-component-btn :wid="`1578539012886`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578965103000" ref="v2-component-btn_1578539012886">
            </v2-component-btn>
        </div>
        <div :wid="`1578539257540`" class="v2Container-1578539257540 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:row;" ref="v2Container_1578539257540">
            <v2-component-btn :wid="`1578539271197`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0,'overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`新增菜单`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578838760000" ref="v2-component-btn_1578539271197">
            </v2-component-btn>
            <v2-component-btn :wid="`1578539296885`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','flex-shrink':0}" :disabled="isDisabled" :theme="{'btnType':'normal','size':'medium'}" :loading="false" :btn-name="`删除`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578838839000" ref="v2-component-btn_1578539296885">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1578539272258`" class="V2Widget" :style="{'overflow':'hidden','width':'calc(100% - 20px)','height':'557.00px','animation-duration':'1s','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0}" :tableData="menuTableList" :pageSize="pageSize" :totalCount="menuTotalCount" :theme="{'tableType':'border','size':''}" :columns="[{'active':true,'prop':'name','label':'菜单名称','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'title','label':'标题','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'icon','label':'菜单图标','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'creator','label':'创建用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'createTime','label':'创建时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editor','label':'最近修改用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editTime','label':'最近修改时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'desp','label':'描述','sortable':false,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'path','label':'菜单路径','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]}]" :table-data="menuTableList" :selection="`multi`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getPageMenuList`" :total-count="menuTotalCount" :tool-bar="true" :tool-title="`操作列`" :tool-width="`100px`" :tool-btns="[{'active':true,'btnName':'编辑','type':'text','handler':'editMenu','rowName':'','toolIcon':'','rowValue':''}]" :expand="false" @_op_table_table:selection-change="v2_component_table_1578928960000" ref="v2-component-table_1578539272258">
        </v2-component-table>
        <v2-pagination :wid="`1578838455979`" v-show="false" class="common-pagination V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :total="menuTotalCount" :pageSize="pageSize" :currentPage="currentPage" :pagesize="pageSize" :currentpage="currentPage" @_op_pagination:current-change="v2_pagination_1578929249000" @_op_pagination:size-change="v2_pagination_1578929439000" ref="v2-pagination_1578838455979">
        </v2-pagination>
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
                    'mapping': {"1578537221490":[{"id":1578537221490,"modelValue":"value","dataValue":"username","type":""}],"1578537355608":[{"id":1578537355608,"modelValue":"value","dataValue":"userStatus","type":""}],"1578537726108":[{"id":1578537726108,"modelValue":"value","dataValue":"createTime","type":""}],"1578539272258":[{"id":1578539272258,"modelValue":"tableData","dataValue":"menuTableList","type":""},{"id":1578539272258,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578539272258,"modelValue":"totalCount","dataValue":"menuTotalCount","type":""}],"1578838455979":[{"id":1578838455979,"modelValue":"total","dataValue":"menuTotalCount","type":""},{"id":1578838455979,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578838455979,"modelValue":"currentPage","dataValue":"currentPage","type":""}],"1578539296885":[{"id":1578539296885,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1578539296885,"modelValue":"visible","dataValue":"true","type":""}],"1579152110683":[{"id":1579152110683,"modelValue":"value","dataValue":"userStatus","type":""}],"1579152715570":[{"id":1579152715570,"modelValue":"value","dataValue":"creator","type":""}],"1579153658381":[{"id":1579153658381,"modelValue":"value","dataValue":"userStatus","type":""}],"1580789804791":[{"id":1580789804791,"modelValue":"value","dataValue":"menuTitle","type":""}],"1578539271197":[{"id":1578539271197,"modelValue":"visible","dataValue":"true","type":""}]}
                },
                /* 创建时间 */
                'createTime': ``,
                /* 当前页码 */
                'currentPage': 1,
                /* 每页数量 */
                'pageSize': 10,
                /* 是否禁用 */
                'isDisabled': true,
                /* 选中的用户数据 */
                'selectedUserList': [],
                /* 创建用户 */
                'creator': ``,
                /* 菜单标题 */
                'menuTitle': ``,
                /* 菜单表格数据 */
                'menuTableList': [],
                /* 菜单总数据 */
                'menuTotalCount': 1,
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
             *  打开新增菜单子页面
             */
            openAddMenuPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'新增菜单',
                    path:'/add/menu',
                    component:'menu/addMenuPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                       
                        ctx.$axios.post(`${axios.server}/menu/add`, params).then(res => {
                            //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '新增菜单成功',
                                    type: 'success'
                                });
                                ctx.getPageMenuList();
                            }else{
                                ctx.$notify({
                                    title: res.msg,
                                    type: 'error'
                                });
                
                            }
                        }).catch(function (error) {
                            console.log(error);
                            ctx.$notify({
                                title: error.msg || '新增失败',
                                type: 'error'
                            });
                        });   
                  
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  删除菜单
             */
            deleteMenu() {
                //函数内直接用ctx代替ctx访问vue页面的数据。
                const ctx = this;
                var menuIds  = [];
                
                menuIds = ctx.selectedMenuList.map(function(item){
                    
                    return item.id;
                });
                
                ctx.$confirm('确定删除选中记录码？', '删除菜单', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}/menu/delete`, JSON.stringify(menuIds),{
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
                            ctx.getPageMenuList();
                        }else{
                            this.$notify({
                                title: res.msg,
                                type: 'error'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                                title: error.msg || '删除失败',
                                type: 'error'
                            });
                    });
                }).catch(action => {
                
                });
            },
            /**
             *  编辑菜单
             *  @param 索引 index
             *  @param 行数据 row
             */
            editMenu(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'编辑菜单',
                    path:'/edit/menu',
                    component:'menu/addMenuPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{id:row?row.id:''},
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        ctx.$axios.post(`${axios.server}/menu/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑菜单成功',
                                    type: 'success'
                                });
                               ctx.getPageMenuList(ctx.currentPage);
                                
                            }else{
                                ctx.$notify({
                                    title: res.msg,
                                    type: 'error'
                                });
                               
                            }
                        }).catch(function (error) {
                            console.log(error);
                            ctx.$notify({
                                title: error.msg || '编辑失败',
                                type: 'error'
                            });
                        });
                       
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  打开新增菜单子页面
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
                ctx.openAddMenuPage();
            },
            /**
             *  删除选中的菜单数据
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
                ctx.deleteMenu();
            },
            /**
             *  获取菜单分页数据
             *  @param 当前页码 page
             *  @param 单页数量 size
             */
            getPageMenuList(page, size) {
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
                      "key": "createTime",
                      "order": "desc"
                    }
                  ],
                  "query": {
                    "title": ctx.menuTitle||'',
                    "createUserName":ctx.creator||''
                  },
                    "ranges": [
                    {
                      "from": ctx.createTime?ctx.createTime[0]:null,
                      "key": "createTime",
                      "to":  ctx.createTime?ctx.createTime[1]+1000*60*60*24-1:null
                    }
                  ]
                };
                
                ctx.$axios.post(`${axios.server}/menu/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      console.log(JSON.stringify(res))
                      ctx.menuTableList  = tableData.map(function(item){
                        return{
                          id:item.id,
                          name:item.name||'',
                          desp:item.desc||'',
                          createTime:ctx.timesTransferToDate(item.createTime),
                          creator:item.createUserName,
                          editor:item.updateUserName,
                          editTime:ctx.timesTransferToDate(item.updateTime),
                          path:item.path,
                          title:item.title||'',
                          icon:item.icon||''
                
                        }
                      });
                      ctx.menuTotalCount = res.obj&&res.obj.total;
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
             *  表格复选框状态改变时获取选中的菜单数据
             *  @param 选中的数据 selections
             */
            v2_component_table_1578928960000(selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.selectedMenuList = selections||[];
                
                if (selections.length > 0) {
                    ctx.isDisabled = false;
                }else {
                    ctx.isDisabled = true;
                }
            },
            /**
             *  v2_pagination_1578929249000
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             *  @param 当前页码 currentPage
             */
            v2_pagination_1578929249000($event, vueIns=this.$refs['v2-pagination_1578838455979'], currentPage) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.currentPage = currentPage;
                ctx.getPageMenuList(currentPage);
            },
            /**
             *  v2_pagination_1578929439000
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             *  @param 每页显示个数 pageSize
             */
            v2_pagination_1578929439000($event, vueIns=this.$refs['v2-pagination_1578838455979'], pageSize) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.pageSize = pageSize;
                ctx.getPageMenuList()
            },
            /**
             *  查询菜单数据
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
                ctx.getPageMenuList();
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