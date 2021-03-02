<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'816.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :setPageCallback="setPageCallback" :toolBar="true" :tableData="orderList" :pageSize="pageSize" :totalCount="orderTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'order_id','label':'订单编号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'customer','label':'下单用户','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'sender','label':'寄件地址','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'reciver','label':'收件地址','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'shipInfo','label':'物品信息','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'order_time','label':'下单时间','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="orderList" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getOrderInfo`" :total-count="orderTotalCount" :tool-bar="false" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'留言','type':'text','handler':'','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"orderList","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"orderTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"staff_name","type":""}]}
                },
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
            /* 订单信息信息列表 */
            'orderList': {
                'default': () => {
                    return []
                }
            },
            /* 数据总条数 */
            'orderTotalCount': {
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
             *  获取订单信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getOrderInfo(page, size) {
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
                  "query": {},
                  "ranges": []
                };
                
                ctx.$axios.post(`${axios.server}/orderInfo/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.orderList  = tableData.map(function(item){
                        return{
                          order_id:item.orderId,
                          customer:item.loginName,
                          sender:"寄件人:"+item.sender+"\n"+item.senderPhone+"\n"+item.senderAddress,
                          reciver:"收件人:"+item.receiver+"\n"+item.receiverPhone+"\n"+item.receivingAddress,
                          shipInfo:item.resSort+"\n重量:"+item.weight+"\n"+
                          ctx.checkInsured(item.insuredPrice)+"\n运费:"+item.freight+"元\n"+
                          item.paymentMethod,
                          order_time:item.orderTime,
                        }
                      });
                      ctx.orderTotalCount = res.obj&&res.obj.total;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  打开编辑子页面
             */
            openEditStaffPage() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
            },
            /**
             *  判断是否保价
             *  @param 新参数 insured
             */
            checkInsured(insured) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                if(insured==1)return "已保价";
                else if(insured==0)return "未保价";
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
.el-table .cell{
    white-space:pre-line;
}
</style>