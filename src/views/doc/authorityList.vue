<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;animation-duration:1s;flex-direction:column;min-width:50px;min-height:50px;" class="V2Container">
        <div :wid="`1578537283708`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:column;" ref="v2Container_1578537283708">
            <v2-form-input :wid="`1579152715570`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`创建用户`" :placeholder="`请输入创建用户`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1579152715570" :value.sync="creator">
            </v2-form-input>
            <v2-form-input :wid="`1580789804791`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':''}" :disabled="false" :label="`权限名称`" :placeholder="`请输入权限名称`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1580789804791" :value.sync="name">
            </v2-form-input>
            <v2-form-datepicker :wid="`1578537726108`" class="form-item V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{}" :disabled="false" :label="`创建时间`" :label-witdh="`80px`" :placeholder="`请选择`" :title-mode="`col`" :type="`daterange`" :is-required="false" :clearable="true" :format="`yyyy 年 MM 月 dd 日`" :value-format="`timestamp`" :align="`left`" ref="v2-form-datepicker_1578537726108" :value.sync="createTime">
            </v2-form-datepicker>
            <v2-component-btn :wid="`1578539012886`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0,'overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578965103000" ref="v2-component-btn_1578539012886">
            </v2-component-btn>
        </div>
        <div :wid="`1578539257540`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:column;" ref="v2Container_1578539257540">
            <v2-component-btn :wid="`1578539271197`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','flex-shrink':0}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`新增权限`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578838760000" ref="v2-component-btn_1578539271197">
            </v2-component-btn>
            <v2-component-btn :wid="`1578539296885`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :disabled="isDisabled" :theme="{'btnType':'normal','size':''}" :loading="false" :btn-name="`删除`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578838839000" ref="v2-component-btn_1578539296885">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1578539272258`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-basis':'100%','overflow':'hidden','animation-duration':'1s','width':'calc(100% - 20px)'}" :tableData="authorityTableList" :pageSize="pageSize" :totalCount="authorityTotalCount" :theme="{'tableType':'border','size':''}" :columns="[{'active':true,'prop':'name','label':'权限名称','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'creator','label':'创建用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'createTime','label':'创建时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editor','label':'最近修改用户','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'editTime','label':'最近修改时间','sortable':true,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'prop':'desp','label':'描述','sortable':false,'openFilter':false,'type':'text','combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]}]" :table-data="authorityTableList" :selection="`multi`" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getPageAuthorityList`" :total-count="authorityTotalCount" :tool-bar="true" :tool-title="`操作列`" :tool-location="`right`" :tool-width="`100px`" :tool-btns="[{'active':true,'btnName':'编辑','type':'text','handler':'editAuthority','rowName':'','toolIcon':'','rowValue':''}]" :expand="false" @_op_table_table:selection-change="v2_component_table_1578928960000" ref="v2-component-table_1578539272258">
        </v2-component-table>
        <v2-pagination :wid="`1578838455979`" v-show="false" class="common-pagination V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :total="authorityTotalCount" :pageSize="pageSize" :currentPage="currentPage" :pagesize="pageSize" :currentpage="currentPage" @_op_pagination:current-change="v2_pagination_1578929249000" @_op_pagination:size-change="v2_pagination_1578929439000" ref="v2-pagination_1578838455979">
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
                    'mapping': {"1578537221490":[{"id":1578537221490,"modelValue":"value","dataValue":"username","type":""}],"1578537355608":[{"id":1578537355608,"modelValue":"value","dataValue":"userStatus","type":""}],"1578537726108":[{"id":1578537726108,"modelValue":"value","dataValue":"createTime","type":""}],"1578539272258":[{"id":1578539272258,"modelValue":"tableData","dataValue":"authorityTableList","type":""},{"id":1578539272258,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578539272258,"modelValue":"totalCount","dataValue":"authorityTotalCount","type":""}],"1578838455979":[{"id":1578838455979,"modelValue":"total","dataValue":"authorityTotalCount","type":""},{"id":1578838455979,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578838455979,"modelValue":"currentPage","dataValue":"currentPage","type":""}],"1578539296885":[{"id":1578539296885,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579152110683":[{"id":1579152110683,"modelValue":"value","dataValue":"userStatus","type":""}],"1579152715570":[{"id":1579152715570,"modelValue":"value","dataValue":"creator","type":""}],"1579153658381":[{"id":1579153658381,"modelValue":"value","dataValue":"userStatus","type":""}],"1580789804791":[{"id":1580789804791,"modelValue":"value","dataValue":"name","type":""}]}
                },
                /* 创建时间 */
                'createTime': ``,
                /* 当前页码 */
                'currentPage': 1,
                /* 每页数量 */
                'pageSize': 10,
                /* 是否禁用 */
                'isDisabled': true,
                /* 创建用户 */
                'creator': ``,
                /* 权限名称 */
                'name': ``,
                /* 选中的权限数据 */
                'selectedAuthorityList': [],
                /* 权限总数据 */
                'authorityTotalCount': 1,
                /* 权限表格数据 */
                'authorityTableList': [],
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
             *  打开新增权限子页面
             */
            openAddAuthorityPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'新增权限',
                    path:'/add/authority',
                    component:'authority/addAuthority',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                       
                        ctx.$axios.post(`${axios.server}/authority/add`, params).then(res => {
                            //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '新增权限成功',
                                    type: 'success'
                                });
                                ctx.getPageAuthorityList();
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
             *  删除权限
             */
            deleteAuthority() {
                //函数内直接用ctx代替ctx访问vue页面的数据。
                const ctx = this;
                var authorityIds  = [];
                
                authorityIds = ctx.selectedAuthorityList.map(function(item){
                    
                    return item.id;
                });
                
                ctx.$confirm('确定删除选中记录码？', '删除权限', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}/authority/delete`, JSON.stringify(authorityIds),{
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
                            ctx.getPageAuthorityList();
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
             *  编辑权限
             *  @param 索引 index
             *  @param 行数据 row
             */
            editAuthority(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'编辑权限',
                    path:'/edit/authority',
                    component:'authority/addAuthority',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{id:row?row.id:''},
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        ctx.$axios.post(`${axios.server}/authority/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑权限成功',
                                    type: 'success'
                                });
                               ctx.getPageAuthorityList(ctx.currentPage);
                                
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
             *  打开新增权限子页面
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
                ctx.openAddAuthorityPage();
            },
            /**
             *  删除选中权限数据
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
                ctx.deleteAuthority();
            },
            /**
             *  获取菜单分页数据
             *  @param 当前页码 page
             *  @param 新参数 size
             */
            getPageAuthorityList(page, size) {
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
                    "name": ctx.name||'',
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
                
                ctx.$axios.post(`${axios.server}/authority/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.authorityTableList  = tableData.map(function(item){
                        return{
                          id:item.id,
                          name:item.name||'',
                          desp:item.desc||'',
                          createTime:ctx.timesTransferToDate(item.createTime),
                          creator:item.createUserName,
                          editor:item.updateUserName,
                          editTime:ctx.timesTransferToDate(item.updateTime)
                
                        }
                      });
                      ctx.authorityTotalCount = res.obj&&res.obj.totalElements;
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
             *  表格复选框状态改变时获取表格选中数据
             *  @param 组件的vue实例 vueIns
             *  @param 选中的数据 selections
             */
            v2_component_table_1578928960000($event, vueIns=this.$refs['v2-component-table_1578539272258'], selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.selectedAuthorityList = selections||[];
                
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
            v2_pagination_1578929249000($event, vueIns=this.$refs['v2-pagination_1578838455979'], currentPage) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.currentPage = currentPage;
                ctx.getPageAuthorityList(currentPage);
            },
            /**
             *  v2_pagination_1578929439000
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
                ctx.getPageAuthorityList()
            },
            /**
             *  查询权限列表
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
                ctx.getPageAuthorityList();
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