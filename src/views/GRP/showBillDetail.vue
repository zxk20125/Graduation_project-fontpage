<template>
    <v2container :wid="`root`" style="height:450px;width:400px;box-sizing:border-box;align-self:auto;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;margin-top:10px;margin-bottom:10px;flex-shrink:0;" class="V2Container">
        <div :wid="`1614697445658`" class="v2Container-1614697445658 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;height:390.00px;width:724.00px;" :if="true" ref="v2Container_1">
            <v2-component-text-value :wid="`1614697534034`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','width':'322.00px','flex-shrink':0,'height':'56.6px'}" :title="`订单编号`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="order_id" ref="v2ComponentTextValue_6">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697544289`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','width':'322.00px','flex-shrink':0,'height':'53.6px'}" :title="`下单用户`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="loginName" ref="v2ComponentTextValue_7">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697453934`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'81.00px','width':'322.00px','flex-shrink':0}" :title="`寄件地址`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="sender" ref="v2ComponentTextValue_8">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697672395`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'85.00px','width':'322.00px','flex-shrink':0}" :title="`收件地址`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="reciver" ref="v2ComponentTextValue_9">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697706848`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'50.00px','width':'322.00px','flex-shrink':0}" :title="`物品信息`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="stuffInfo" ref="v2ComponentTextValue_10">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697671782`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'56.00px','width':'322.00px','flex-shrink':0}" :title="`下单时间`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" :value.sync="orderTime" ref="v2ComponentTextValue_11">
            </v2-component-text-value>
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
                    'mapping': {"1614693570282":[],"1614696808267":[],"1614696761906":[],"1614696892928":[{"id":1614696892928,"modelValue":"value","dataValue":"order_id","type":""}],"1614697123184":[{"id":1614697123184,"modelValue":"value","dataValue":"你好","type":""}],"1614697378341":[{"id":1614697378341,"modelValue":"value","dataValue":"order_id","type":""}],"1614697534034":[{"id":1614697534034,"modelValue":"value","dataValue":"order_id","type":""}],"1614697544289":[{"id":1614697544289,"modelValue":"value","dataValue":"loginName","type":""}],"1614697453934":[{"id":1614697453934,"modelValue":"value","dataValue":"sender","type":""}],"1614697672395":[{"id":1614697672395,"modelValue":"value","dataValue":"reciver","type":""}],"1614697706848":[{"id":1614697706848,"modelValue":"value","dataValue":"stuffInfo","type":""}],"1614697671782":[{"id":1614697671782,"modelValue":"value","dataValue":"orderTime","type":""}]}
                },
                /* 订单编号 */
                'order_id': '',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 下单用户 */
            'loginName': {
                'default': () => {
                    return ''
                }
            },
            /* 寄件地址 */
            'sender': {
                'default': () => {
                    return ''
                }
            },
            /* 收件地址 */
            'reciver': {
                'default': () => {
                    return ''
                }
            },
            /* 物品信息 */
            'stuffInfo': {
                'default': () => {
                    return ''
                }
            },
            /* 下单时间 */
            'orderTime': {
                'default': () => {
                    return ''
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  获取订单详情
             */
            getOrderInfo() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                ctx.$axios.get(`${axios.server}/orderInfo/get/${ctx.order_id}`).then(res => {
                    if (res.success && res.status) {
                        
                        var item = res.obj;
                        console.log(item.stuffInfo)
                        ctx.loginName = item.loginName;
                        ctx.sender = "寄件人:" + item.sender + "\n" + item.senderPhone + "\n" + item.senderAddress;
                        ctx.reciver = "收件人:" + item.receiver + "\n" + item.receiverPhone + "\n" + item.receivingAddress;
                        ctx.stuffInfo = item.resSort + "\n重量:" + item.weight + "\n" +
                            ctx.checkInsured(item.insuredPrice) + "\n运费:" + item.freight + "元\n" +
                            item.paymentMethod;
                        ctx.orderTime = String(item.orderTime);
                    }
                
                }).catch(error => {
                    console.log(error);
                })
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
            const ctx = this;
            ctx.getOrderInfo();
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