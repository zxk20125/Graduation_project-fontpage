<template>
    <v2container :wid="`root`" style="width:100%;height:100%;flex-shrink:0;" class="V2Container">
        <div :wid="`1601010305085`" class="V2Container" ref="v2Container_1">
            <v2-component-btn :wid="`1601005113997`" class="v2-component-btn-1601005113997 V2Widget" :style="{'flex-shrink':0}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`+`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1601005112003" ref="v2ComponentBtn_1">
            </v2-component-btn>
            <v2-component-btn :wid="`1601010330461`" class="v2-component-btn-1601010330461 V2Widget" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`-`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1601010313643" ref="v2ComponentBtn_2">
            </v2-component-btn>
        </div>
    </v2container>
</template>
<script>
    import {mixins} from '@v2-lib/vue.spa.plugin'
    import {root, cpt, widget} from '@v2-lib/webide.support.fusion/mixin/v2-view'
    import events from '@v2-lib/webide.support.fusion/mixin/events'
    /* __V2_DECOMPILABLE__ */
    export default {
        'mixins': [
            root,
            widget,
            cpt,
            events,
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
                    'mapping': {}
                },
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
             *  点击增加事件
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1601005112003($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"main": "AGREE-CUSTOM",
                //	"desp": "事件准备",
                //	"code": "/**\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;",
                //	"showConfig": true
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                
                /**
                抛出的事件名：add
                第一个参数："add"为抛出的事件名
                不限制传参个数(默认第二个为event事件)
                **/
                ctx.$emit("add", $event);
            },
            /**
             *  点击减少事件
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1601010313643($event, vueIns=this.$refs['v2ComponentBtn_2']) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                抛出的事件名：reduce
                第一个参数："reduce"为抛出的事件名
                不限制传参个数(默认第二个为event事件)
                **/
                ctx.$emit("reduce", $event);
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