<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1614602787546`" class="v2Container-1614602787546 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;height:auto;" ref="v2Container_2">
            <v2-component-btn :wid="`1614602925529`" class="v2-component-btn-1614602925529 V2Widget" :style="{'align-self':'auto','margin-right':'20px'}" :theme="{'btnType':'danger','size':''}" :disabled="false" :loading="false" :btn-name="`删除`" :right-icon="`el-icon-delete`" :shape="`def`" :if="true" ref="v2ComponentBtn_4">
            </v2-component-btn>
            <div :wid="`1614602839167`" class="v2Container-1614602839167 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;height:auto;" :if="true" ref="v2Container_1">
                <v2-component-btn :wid="`1614602836812`" class="v2-component-btn-1613475640042 V2Widget" :style="{'align-self':'auto','margin-right':'20px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`新增`" :right-icon="`el-icon-plus`" :shape="`def`" :if="true" ref="v2ComponentBtn_3">
                </v2-component-btn>
            </div>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'816.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :setPageCallback="setPageCallback" :toolBar="true" :pageSize="pageSize" :tableData="resSortList" :totalCount="resSortTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'res_sort','label':'物件类型','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'price','label':'定价','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="resSortList" :selection="`multi`" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getresSortInfo`" :total-count="resSortTotalCount" :tool-bar="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'编辑','type':'primary','handler':'openEditShipAddressPage','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1" :value.sync="selectData">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"value","dataValue":"selectData","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"resSortList","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"resSortTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"staff_name","type":""}]}
                },
                /* 选中的数据 */
                'selectData': ``,
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
            /* 总条数 */
            'resSortTotalCount': {
                'default': () => {
                    return 1
                }
            },
            /* 客户地址信息列表 */
            'resSortList': {
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
             *  获取物件定价信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getresSortInfo(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page && (ctx.currentPage = page);
                !page && (ctx.currentPage = 1);
                size && (ctx.pageSize = size);
                !size && (ctx.pageSize = 10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [],
                  "query": {},
                  "ranges": []
                };
                
                ctx.$axios.post(`${axios.server}/resSortInfo/list`, params).then(res => {
                  if (res.success && res.status) {
                    const tableData = res.obj&&res.obj.records||[];
                
                    ctx.resSortList = tableData.map(function (item) {
                      return {
                        res_sort: item.resSort,
                        price: item.resSortMoney,
                        id:item.resSortId
                      }
                    });
                    ctx.resSortTotalCount = res.obj && res.obj.total;
                  }
                }).catch(error => {
                
                })
            },
            /**
             *  打开编辑子页面
             *  @param 新参数 index
             *  @param 新参数 row
             */
            openEditShipAddressPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                console.log(row.staff_id)
                ctx.open({
                    title:'编辑配送员信息',
                    path:'/edit/Staff',
                    component:'GRP/editResSortSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    params:{id:row.id},
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:(params) => { 
                        ctx.$axios.post(`${axios.server}/resSortInfo/update`, params).then(res => {
                        //下一步的行为
                            if(res.success){
                                ctx.$notify({
                                    title: '编辑定价信息成功',
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