<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1612854178100`" class="v2Container-1612854178100 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;height:auto;" :if="true" ref="v2Container_1">
            <v2-form-input :wid="`1612854599723`" class="v2-form-input-1612854599723 V2Widget" :style="{'position':'relative','align-self':'auto','padding-left':0,'flex-shrink':0,'text-align':'left'}" :theme="{'size':''}" :disabled="false" :label="`运单号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`65px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4" :value.sync="waybill_id">
            </v2-form-input>
            <v2-component-btn :wid="`1612855111983`" class="v2-component-btn-1612855111983 V2Widget" :style="{'align-self':'auto','margin-left':'10px','flex-shrink':0}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1613138459846" @_op_component-btn_btn:undefined="v2_component_btn_1614691893888" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0,'height':'890.00px'}" :setPageCallback="setPageCallback" :toolBar="true" :tableData="billInfoList" :pageSize="pageSize" :currentPage="currentPage" :totalCount="billTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'waybill_id','label':'运单号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'status','label':'状态','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'pay','label':'是否付款','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'link','prop':'order_id','label':'订单号','handleLink':true,'handleLinkCB':'openEditBillPage','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="billInfoList" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getbillInfo`" :current-page="currentPage" :total-count="billTotalCount" :tool-bar="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'运单物流','type':'text','handler':'','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"billInfoList","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"currentPage","dataValue":"currentPage","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"billTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"waybill_id","type":""}]}
                },
                /* 运单号 */
                'waybill_id': '',
                /* 运单信息列表 */
                'billInfoList': [],
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
            'billTotalCount': {
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
             *  获取运单信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getbillInfo(page, size) {
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
                  "query": {
                    "waybillId": ctx.waybill_id
                  },
                  "ranges": []
                };
                ctx.$axios.post(`${axios.server}/billInfo/list`, params).then(res => {
                  if (res.success && res.status) {
                    const tableData = res.obj && res.obj.records || [];
                
                    ctx.billInfoList = tableData.map(function (item) {
                      return {
                        waybill_id: item.waybillId,
                        order_id: item.orderId,
                        status: ctx.checkStatus(item.confirmTime,item.finishTime,item.cancelTime,item.paymentTime),
                        pay: ctx.checkPayment(item.paymentTime),
                      }
                    });
                    ctx.staffTotalCount = res.obj && res.obj.totalElements;
                  }
                }).catch(error => {
                
                })
            },
            /**
             *  查询
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
                ctx.getbillInfo(ctx.currentPage);
            },
            /**
             *  打开编辑子页面
             *  @param 新参数 index
             *  @param 新参数 row
             */
            openEditBillPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title: '编辑客户信息',
                    path: '/edit/order',
                    component: 'GRP/showBillDetail',
                    type: 'SUB',
                    closeOnClickModal: false,
                    hideConfirmBtn: true,
                    hideCancelBtn: true,
                    width: "910px", //弹窗的宽
                    height: "510px", //高，不设置默认是auto
                    closeOnClickModal: true,//点击弹窗外部是否关闭弹窗，不设置默认是true：会关闭，false：不关闭
                    params:{order_id:row.order_id},
                    confirmCallback: (ret) => {
                        ctx.$axios.post(`${axios.server}/orderInfo/edit`, ret).then(res => {
                            //下一步的行为
                            if (res.success) {
                                ctx.$notify({
                                    title: '客户信息编辑成功',
                                    type: 'success'
                                });
                            } else {
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
                    cancelCallback: (e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  判断是否付款
             *  @param 新参数 payTime
             */
            checkPayment(payTime) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                if(null!=payTime) return "已付款";
                else if(null==payTime) return"未付款"
            },
            /**
             *  判断状态
             *  @param 新参数 confirmTime
             *  @param 新参数 finishTime
             *  @param 新参数 cancelTime
             *  @param 新参数 paymentTime
             */
            checkStatus(confirmTime, finishTime, cancelTime, paymentTime) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                if(null!= cancelTime) return "已取消";
                if(null== paymentTime) return "未付款";
                if(null==confirmTime) return"未揽件";
                if(null==finishTime) return "运送中"
                if(null!= finishTime) return"已完成";
            },
            /**
             *  v2_component_btn_1614691890570
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1614691890570($event, vueIns) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
            },
            /**
             *  查询
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1614691893888($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                
                /**
                方法名称：getbillInfo
                方法描述：获取运单信息
                参数1:page(新参数)
                参数2:size(新参数)
                **/
                ctx.getbillInfo(ctx.currentPage);
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