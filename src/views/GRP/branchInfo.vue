<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1612854178100`" class="v2Container-1612854178100 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;height:auto;" :if="true" ref="v2Container_1">
            <v2-form-input :wid="`1612854599723`" class="v2-form-input-1612854599723 V2Widget" :style="{'position':'relative','align-self':'auto','padding-left':0,'flex-shrink':0}" :theme="{'size':''}" :disabled="false" :label="`网点名`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" :value.sync="dot_name" ref="v2FormInput_4">
            </v2-form-input>
            <v2-component-btn :wid="`1612855111983`" class="v2-component-btn-1612855111983 V2Widget" :style="{'align-self':'auto'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" :if="true" @_op_component-btn_btn:undefined="v2_component_btn_1613138459846" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'816.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :toolBar="true" :tableData="branchList" :pageSize="pageSize" :totalCount="branchTotalCount" :theme="{'tableType':'border','size':''}" :set-page-callback="`getbranchInfo`" :tool-bar="true" :page-size="pageSize" :table-data="branchList" :total-count="branchTotalCount" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'dot_name','label':'网点名','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'dot_city','label':'网点所在城市','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'dot_address','label':'网点地址','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'dot_phone','label':'联系号码','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :open-set-page-callback="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'编辑','type':'primary','handler':'openEditBranchPage','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"branchList","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"branchTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"dot_name","type":""}]}
                },
                /* 网点名 */
                'dot_name': '',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 页码数 */
            'pageSize': {
                'default': () => {
                    return 10
                }
            },
            /* 数据总条数 */
            'branchTotalCount': {
                'default': () => {
                    return 1
                }
            },
            /* 客户地址信息列表 */
            'branchList': {
                'default': () => {
                    return []
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  获取网点信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getbranchInfo(page, size) {
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
                    "dotName": ctx.dot_name,
                  },
                  "ranges": []
                };
                
                
                ctx.$axios.post(`${axios.server}/branchInfo/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.branchList  = tableData.map(function(item){
                        return{
                          dot_name:item.dotName,
                          dot_city:item.dotCity,
                          dot_address:item.dotAddress,
                          dot_phone:item.dotPhone,
                          id:item.dotId
                        }
                      });
                      ctx.branchTotalCount = res.obj&&res.obj.totalElements;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  查询
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1613138459846($event, vueIns=this.$refs['v2ComponentBtn_1']) {
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
             *  打开编辑子页面
             *  @param 新参数 index
             *  @param 新参数 row
             */
            openEditBranchPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                console.log(row.staff_id)
                ctx.open({
                    title:'编辑网点信息',
                    path:'/edit/Branch',
                    component:'GRP/editBranchSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{id:row.id},
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        ctx.$axios.post(`${axios.server}/branchInfo/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑网点信息成功',
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