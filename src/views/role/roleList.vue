<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;min-width:50px;overflow:hidden;flex-direction:column;min-height:50px;animation-duration:1s;flex-shrink:0;" class="v2Container-root V2Container">
        <div :wid="`1578839196114`" class="v2Container-1578839196114 V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;min-width:50px;overflow:hidden;flex-shrink:0;min-height:50px;animation-duration:1s;flex-direction:row;" ref="v2Container_1578839196114">
            <v2-form-input :wid="`1603072569815`" class="v2-form-input-1603072569815 V2Widget" :style="{'align-self':'auto'}" :theme="{'size':''}" :disabled="false" :label="`角色名`" :placeholder="`请输入角色名`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" :value.sync="queryRoleParams.roleName" ref="v2FormInput_1">
            </v2-form-input>
            <v2-form-datepicker :wid="`1603072597918`" class="v2-form-datepicker-1603072597918 V2Widget" :style="{'align-self':'auto'}" :theme="{'size':''}" :disabled="false" :label="`创建时间`" :label-witdh="`80px`" :placeholder="`请选择`" :title-mode="`col`" :type="`daterange`" :is-required="false" :clearable="true" :format="`yyyy 年 MM 月 dd 日`" :value-format="`timestamp`" :align="`left`" :disabled-date-list="[]" :if="true" :value.sync="queryRoleParams.createTime" ref="v2FormDatepicker_1">
            </v2-form-datepicker>
            <v2-component-btn :wid="`1578839255372`" class="v2-component-btn-1578839255372 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0}" :theme="{'btnType':'primary','size':'medium'}" :btn-name="`查询`" @_op_component-btn_btn:click="v2_component_btn_1578887267000" ref="v2-component-btn_1578839255372">
            </v2-component-btn>
        </div>
        <div :wid="`1578839261978`" class="v2Container-1578839261978 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;min-width:50px;overflow:hidden;min-height:50px;animation-duration:1s;flex-shrink:0;flex-direction:row;" ref="v2Container_1578839261978">
            <v2-component-btn :wid="`1578839200941`" class="v2-component-btn-1578839200941 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':'0'}" :theme="{'btnType':'primary','size':'medium'}" :btn-name="`新增角色`" @_op_component-btn_btn:click="v2_component_btn_1578893003000" ref="v2-component-btn_1578839200941">
            </v2-component-btn>
            <v2-component-btn :wid="`1579169614891`" class="V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0}" :disabled="isDisabled" :theme="{'btnType':'normal','size':'medium'}" :btn-name="`删除`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578903078000" ref="v2-component-btn_1579169614891">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1578839285432`" class="v2-component-table-1578839285432 V2Widget" :style="{'animation-duration':'1s','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-basis':'100%','width':'calc(100% - 20px)','flex-shrink':0}" :tableData="roleTableData" :pageSize="pageSize" :totalCount="roleTotalCount" :theme="{'tableType':'border','size':''}" :table-data="roleTableData" :page-size="pageSize" :total-count="roleTotalCount" :columns="[{'active':true,'type':'text','prop':'roleName','label':'角色名称','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':true,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'creator','label':'创建用户','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':true,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'createTime','label':'创建时间','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':true,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'editor','label':'最近修改用户','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'editTime','label':'最近修改时间','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':true,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'useMinWidth':true},{'active':true,'type':'text','prop':'desp','label':'描述','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]}]" :selection="`multi`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :open-page="true" :open-set-page-callback="true" :set-page-callback="`getPageRoleList`" :tool-bar="true" :tool-title="`操作`" :tool-width="280" :tool-btns="[{'active':'true','btnName':'关联菜单','type':'text','handler':'openAssociateMenuSubPage','rowName':'','toolIcon':'','rowValue':''},{'active':true,'btnName':'关联权限','type':'text','handler':'openAssociateAuthSubPage','rowName':'','toolIcon':'','rowValue':''},{'active':true,'btnName':'编辑','type':'text','handler':'openEditRoleSubPage','rowName':'','toolIcon':'','rowValue':''}]" :expand="false" @_op_table_table:selection-change="v2_component_table_1578902624000" ref="v2-component-table_1578839285432">
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
                    'mapping': {"1578839285432":[{"id":1578839285432,"modelValue":"tableData","dataValue":"roleTableData","type":""},{"id":1578839285432,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578839285432,"modelValue":"totalCount","dataValue":"roleTotalCount","type":""}],"1578839218090":[{"id":1578839218090,"modelValue":"value","dataValue":"queryRoleParams.roleName","type":""}],"1578886111204":[{"id":1578886111204,"modelValue":"value","dataValue":"queryRoleParams.createTime","type":""}],"1578839881638":[{"id":1578839881638,"modelValue":"total","dataValue":"roleTotalCount","type":""},{"id":1578839881638,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578839881638,"modelValue":"currentPage","dataValue":"currentPage","type":""}],"1578839276942":[{"id":1578839276942,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579058658755":[{"id":1579058658755,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579058632986":[{"id":1579058632986,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1579058632986,"modelValue":"visible","dataValue":"$AUTH(`role/roleList`,1579058632986)","type":""}],"1579070147220":[{"id":1579070147220,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579169614891":[{"id":1579169614891,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579239830566":[{"id":1579239830566,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1579239830566,"modelValue":"visible","dataValue":"$AUTH(`role/roleList`,1579239830566)","type":""}],"1586250571705":[{"id":1586250571705,"modelValue":"disabled","dataValue":"isDisablePrint","type":"boolean"}],"1603072569815":[{"id":1603072569815,"modelValue":"value","dataValue":"queryRoleParams.roleName","type":""}],"1603072597918":[{"id":1603072597918,"modelValue":"value","dataValue":"queryRoleParams.createTime","type":""}]}
                },
                /* 角色表格数据 */
                'roleTableData': [],
                /* 查询角色列表参数对象 */
                'queryRoleParams': {
                    roleName:'',
                    createTime:''
                },
                /* 角色列表总数 */
                'roleTotalCount': 0,
                /* 角色表格每页数量 */
                'pageSize': 10,
                /* 当前页码 */
                'currentPage': 1,
                /* 是否禁用 */
                'isDisabled': true,
                /* 选中的数据 */
                'selectedRoleList': [],
                /* 禁止打印按钮 */
                'isDisablePrint': true,
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
             *  打开新增角色子页面
             */
            openAddRoleSubPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                //console.log(row);
                const ctx = this;
                ctx.open({
                    title:'新增角色',
                    path:'add/role',
                    component:'role/addRoleSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:() => { 
                        
                        ctx.getPageRoleList();
                    },
                    cancelCallback:(e) => {
                       
                    }
                })
            },
            /**
             *  删除角色
             */
            deleteRole() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var roleIds  = [];
                
                roleIds = ctx.selectedRoleList.map(function(item){
                    
                    return item.roleId;
                });
                
                ctx.$confirm('确定删除选中记录码？', '删除角色', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}/role/delete`, JSON.stringify(roleIds),{
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
                            ctx.getPageRoleList();
                        }else{
                            ctx.$notify({
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
             *  打开关联菜单子页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openAssociateMenuSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'关联菜单',
                    path:'associate/menu',
                    component:'role/menuListSubPage',
                    type:'SUB',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:'',menus:row.menus},
                    confirmCallback:() => { 
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  打开关联权限子页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openAssociateAuthSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'关联权限',
                    path:'asssociate/authority',
                    component:'role/authoritySubPage',
                    type:'SUB',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:'',authorities:row.authorities},
                    confirmCallback:() => { 
                       ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  获取分页角色列表
             *  @param 当前页码 page
             *  @param 单页数量 size
             */
            getPageRoleList(page, size) {
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
                
                    "name": ctx.queryRoleParams.roleName||'',
                  },
                  "ranges": [
                    {
                      "from": ctx.queryRoleParams.createTime?ctx.queryRoleParams.createTime[0]:null,
                      "key": "createTime",
                      "to":  ctx.queryRoleParams.createTime?ctx.queryRoleParams.createTime[1]+1000*60*60*24-1:null
                    }
                  ]
                };
                //console.log(ctx.__getVueIns('_op_pagination'));
                ctx.$axios.post(`${axios.server}/role/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.roleTableData  = tableData.map(function(item){
                        return{
                          roleId:item.id,
                          menus:item.menus||[],
                          authorities:item.authorities||[],
                          roleName:item.name||'',
                          desp:item.desc||'',
                          createTime:ctx.timesTransferToDate(item.createTime),
                          creator:item.createUserName,
                          editor:item.updateUserName,
                          editTime:ctx.timesTransferToDate(item.updateTime)
                        }
                      });
                      ctx.roleTotalCount = res.obj&&res.obj.totalElements;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  查询角色数据
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578887267000($event, vueIns=this.$refs['v2-component-btn_1578839255372']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.currentPage = 1;
                ctx.getPageRoleList();
            },
            /**
             *  打开新增角色子页面
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578893003000($event, vueIns=this.$refs['v2-component-btn_1578839200941']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：openAddRoleSubPage
                方法描述：打开新增角色子页面
                
                **/
                ctx.openAddRoleSubPage();
            },
            /**
             *  时间转换
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
            v2_component_table_1578902624000(selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                debugger
                ctx.selectedRoleList = selections||[];
                
                if (selections.length > 0) {
                    ctx.isDisabled = false;
                    (selections.length===1)?(ctx.isDisablePrint = false):(ctx.isDisablePrint = true);
                }else {
                    ctx.isDisabled = true;
                    ctx.isDisablePrint = true;
                }
            },
            /**
             *  删除选中的角色数据
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578903078000($event, vueIns=this.$refs['v2-component-btn_1579169614891']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：deleteRole
                方法描述：删除角色
                
                **/
                ctx.deleteRole();
            },
            /**
             *  编辑角色页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openEditRoleSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'编辑角色',
                    path:'edit/role',
                    component:'role/addRoleSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:''},
                    confirmCallback:() => { 
                        
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                       
                    }
                })
            },
            /**
             *  导出excel
             */
            exportExcel() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows  = [];
                
                rows = ctx.selectedRoleList.map(function(item){
                    
                    return   {
                        "createTime": item.createTime,
                        "createUserName":item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                ctx.$confirm('确定导出选中记录码？', '导出excel', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}//role/export/excel`, JSON.stringify(rows),{
                        headers: {
                            'Content-type':'application/json'
                        },
                        responseType: 'blob'
                    }).then(res => {
                        //下一步的行为
                        if(!res){
                            ctx.$notify({
                                title: res.msg,
                                type: '导出失败'
                            });
                            return ;
                        }else{
                            ctx.downloadFile(res,'xlsx');
                            ctx.$notify({
                                type: 'success',
                                title: '导出成功'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                            title: error.msg || '导出失败',
                            type: 'error'
                        });
                    });
                
                }).catch(action => {
                
                });
            },
            /**
             *  导出pdf
             */
            exportPdf() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows  = [];
                
                rows = ctx.selectedRoleList.map(function(item){
                    
                    return   {
                        "createTime": item.createTime,
                        "createUserName":item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                ctx.$confirm('确定导出选中记录码？', '导出PDF', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                
                    ctx.$axios.post(`${axios.server}/role/export/pdf`, JSON.stringify(rows),{
                        headers: {
                        'Content-type':'application/json'
                        },
                        responseType: 'blob'
                    }).then(res => {
                        //下一步的行为
                        if(!res){
                            ctx.$notify({
                                title: res.msg,
                                type: '导出失败'
                            });
                            return ;
                        }else{
                            ctx.downloadFile(res,'pdf');
                            ctx.$notify({
                                type: 'success',
                                title: '导出成功'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                            title: error.msg || '导出失败',
                            type: 'error'
                        });
                    });
                
                }).catch(action => {
                
                });
            },
            /**
             *  v2_component_btn_1579059590000
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579059590000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：exportPdf
                方法描述：导出pdf
                
                **/
                ctx.exportPdf();
            },
            /**
             *  导出文件
             *  @param 数据流 data
             *  @param 文件类型 type
             */
            downloadFile(data, type) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                if(data){
                    var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }),
                        url = window.URL.createObjectURL(blob),
                        aLink = document.createElement("a");
                        
                    aLink.style.display = "none";
                    aLink.href = url;
                    aLink.setAttribute("download",new Date().getTime() + "."+type);
                    document.body.appendChild(aLink);
                    aLink.click();
                    console.log(aLink.getAttribute('href'));
                    document.body.removeChild(aLink); //下载完成移除元素
                    window.URL.revokeObjectURL(url); 
                }
            },
            /**
             *  打开导入子页面
             */
            openImportFilePage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'导入流程',
                    path:'role/import',
                    component:'role/importFileTemplate',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:() => { 
                        ctx.getPageRoleList();
                    },
                    cancelCallback:(e) => {
                
                    }
                });
            },
            /**
             *  打印数据
             */
            printPage() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows = [];
                
                rows = ctx.selectedRoleList.map(function (item) {
                
                    return {
                        "createTime": item.createTime,
                        "createUserName": item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                if ($('iframe#printIframe') && $('iframe#printIframe').length) {
                
                    $('iframe#printIframe').remove();
                }
                var printIframe = document.createElement("iframe");
                
                printIframe.style.display = "none";
                printIframe.id = "printIframe";
                printIframe.src = `${axios.server}/templates/preview?desc=${rows[0].desc}&name=${rows[0].name}`;
                document.body.appendChild(printIframe);
                $("#printIframe")[0].contentWindow.print();
            },
            /**
             *  打开关联组件子页面
             *  @param 行号 index
             *  @param 行数据 row
             */
            openComponentPage(index, row) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                
                ctx.open({
                    title:'关联组件',
                    path:'associate/component',
                    component:'role/componentAuthority',
                    type:'SUB',
                    customClass:'permission-dialog',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:''},
                    confirmCallback:() => { 
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
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