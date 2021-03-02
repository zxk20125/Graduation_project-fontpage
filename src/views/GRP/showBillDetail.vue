<template>
    <v2container :wid="`root`" style="height:500.00px;width:900px;box-sizing:border-box;align-self:auto;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;margin-top:10px;margin-bottom:10px;flex-shrink:0;" class="V2Container">
        <div :wid="`1614697445658`" class="v2Container-1614697445658 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;height:418.00px;" :if="true" ref="v2Container_1">
            <v2-component-text-value :wid="`1614697534034`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','width':'322.00px'}" :title="`订单编号`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_6" :value.sync="order_id">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697544289`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','width':'322.00px'}" :title="`下单用户`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_7" :value.sync="order_id">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697453934`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'24px','width':'322.00px'}" :title="`寄件地址`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_8" :value.sync="order_id">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697672395`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'24px','width':'322.00px'}" :title="`收件地址`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_9" :value.sync="order_id">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697706848`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'24.00px','width':'322.00px'}" :title="`物品信息`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_10" :value.sync="order_id">
            </v2-component-text-value>
            <v2-component-text-value :wid="`1614697671782`" class="v2-component-text-value-1614697534034 V2Widget" :style="{'align-self':'auto','height':'24px','width':'322.00px'}" :title="`下单时间`" :overflow="`normal`" :overflow-line="3" :text-break="true" :type="`text`" :direction="`text-value-col`" :if="true" ref="v2ComponentTextValue_11" :value.sync="order_id">
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
                    'mapping': {"1614693570282":[],"1614696808267":[],"1614696761906":[],"1614696892928":[{"id":1614696892928,"modelValue":"value","dataValue":"order_id","type":""}],"1614697123184":[{"id":1614697123184,"modelValue":"value","dataValue":"你好","type":""}],"1614697378341":[{"id":1614697378341,"modelValue":"value","dataValue":"order_id","type":""}],"1614697534034":[{"id":1614697534034,"modelValue":"value","dataValue":"order_id","type":""}],"1614697544289":[{"id":1614697544289,"modelValue":"value","dataValue":"order_id","type":""}],"1614697453934":[{"id":1614697453934,"modelValue":"value","dataValue":"order_id","type":""}],"1614697672395":[{"id":1614697672395,"modelValue":"value","dataValue":"order_id","type":""}]}
                },
                /* 订单编号 */
                'order_id': '',
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