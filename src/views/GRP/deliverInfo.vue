<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1612854178100`" class="v2Container-1612854178100 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;height:auto;" :if="true" ref="v2Container_1">
            <v2-form-input :wid="`1612854599723`" class="v2-form-input-1612854599723 V2Widget" :style="{'position':'relative','align-self':'auto','padding-left':0,'flex-shrink':0}" :theme="{'size':''}" :disabled="false" :label="`员工账号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" :value.sync="staff_name" ref="v2FormInput_4">
            </v2-form-input>
            <v2-component-btn :wid="`1612855111983`" class="v2-component-btn-1612855111983 V2Widget" :style="{'align-self':'auto','flex-shrink':0,'margin-left':'10px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`查询`" :right-icon="`el-icon-search`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614091887290" ref="v2ComponentBtn_1">
            </v2-component-btn>
            <v2-component-btn :wid="`1614086695490`" class="v2-component-btn-1614086695490 V2Widget" :style="{'align-self':'auto','margin-left':'20px','flex-shrink':0}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`新增`" :right-icon="`el-icon-plus`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614086629526" ref="v2ComponentBtn_3">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'816.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :setPageCallback="setPageCallback" :toolBar="true" :tableData="staffList" :pageSize="pageSize" :currentPage="currentPage" :totalCount="staffTotalCount" :theme="{'tableType':'border','size':''}" :set-page-callback="`getStaffInfo`" :tool-bar="true" :table-data="staffList" :page-size="pageSize" :current-page="currentPage" :total-count="staffTotalCount" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'staff_id','label':'员工编号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'staff_name','label':'姓名','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'staff_sex','label':'性别','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'staff_age','label':'年龄','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'staff_phone','label':'联系号码','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'dot_id','label':'所属网点','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'hiredate','label':'入职时间','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :open-set-page-callback="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'编辑','type':'primary','handler':'editStaff','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"staffList","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"currentPage","dataValue":"currentPage","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"staffTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"staff_name","type":""}]}
                },
                /* 员工姓名 */
                'staff_name': '',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 每页数量 */
            'pageSize': {
                'default': () => {
                    return 10
                }
            },
            /* 客户地址信息列表 */
            'staffList': {
                'default': () => {
                    return []
                }
            },
            /* 数据总条数 */
            'staffTotalCount': {
                'default': () => {
                    return 1
                }
            },
            /* 当前页码 */
            'currentPage': {
                'default': () => {
                    return 1
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  获取客户地址信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getStaffInfo(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page&&(ctx.currentPage=page);
                !page&&(ctx.currentPage=1);
                size&&(ctx.pageSize=size);
                !size&&(ctx.pageSize=10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [],
                  "query": {
                    "staffName": ctx.staff_name
                  },
                  "ranges": []
                };
                
                ctx.$axios.post(`${axios.server}/staffInfo/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj && res.obj.records||[];
                      
                      ctx.staffList  = tableData.map(function(item){
                        return{
                          staff_name:item.staffName,
                          staff_age:item.staffAge,
                          staff_sex:item.staffSex,
                          staff_id:item.staffId,
                          staff_phone:item.staffPhone,
                          hiredate:item.hiredate,
                          dot_id:item.dotId
                        }
                      });
                      ctx.staffTotalCount = res.obj&&res.obj.total;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  查询
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1613138459846($event, vueIns) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"params": {}
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                /**
                方法名称：getStaffInfo
                方法描述：获取客户地址信息
                
                **/
                ctx.getStaffInfo();
            },
            /**
             *  新增配送员信息
             */
            openEditStaffPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'新增配送员',
                    path:'/add/authority',
                    component:'GRP/editdeliverSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true,
                    width:"650px",
                    height:"550px",
                    closeOnClickModal: true,
                    confirmCallback:(params) => { 
                       
                        ctx.$axios.post(`${axios.server}/staffInfo/add`, params).then(res => {
                            //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '新增权限成功',
                                    type: 'success'
                                });
                                ctx.getStaffInfo(ctx.currentPage);
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
             *  编辑配送员信息
             *  @param 新参数 index
             *  @param 新参数 row
             */
            editStaff(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                console.log(row.staff_id)
                ctx.open({
                    title:'编辑配送员信息',
                    path:'/edit/Staff',
                    component:'GRP/editdeliverSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{staffId:row.staff_id},
                    width:"650px",
                    height:"550px",
                    hideConfirmBtn:true, 
                    hideCancelBtn:true,
                    closeOnClickModal: true,
                    confirmCallback:(params) => { 
                        ctx.$axios.post(`${axios.server}/staffInfo/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑配送员成功',
                                    type: 'success'
                                });
                               ctx.getStaffInfo(ctx.currentPage);
                                
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
             *  新增
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614086629526($event, vueIns=this.$refs['v2ComponentBtn_3']) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：openEditStaffPage
                方法描述：新增配送员信息
                
                **/
                ctx.openEditStaffPage();
            },
            /**
             *  查询
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614091887290($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：getStaffInfo
                方法描述：获取客户地址信息
                参数1:page(新参数)
                参数2:size(新参数)
                **/
                ctx.getStaffInfo(ctx.currentPage);
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
            let ctx = this;
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