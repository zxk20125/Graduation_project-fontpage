<template>
    <v2container :wid="`root`" style="display:flex;height:auto;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;flex-shrink:0;" class="V2Container">
        <div :wid="`1614764771020`" class="v2Container-1614764771020 V2Container" style="position:relative;overflow:hidden;display:flex;height:auto;box-sizing:border-box;align-self:stretch;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;justify-content:center;" :if="true" ref="v2Container_1">
            <div :wid="`1614764745782`" class="v2Container-1614764745782 V2Container" style="box-sizing:border-box;align-self:stretch;display:block;flex-direction:column;align-items:flex-start;margin-left:0;overflow:hidden;position:relative;flex-shrink:0;" :if="true" ref="v2Container_2">
                <v2-form-input :wid="`1614764756124`" class="v2-form-input-1614764756124 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`起始地址`" :placeholder="`请输入起始地址`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_1" :value.sync="startAddress">
                </v2-form-input>
                <v2-form-input :wid="`1614764837231`" class="v2-form-input-1614764837231 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`终点地址`" :placeholder="`请输入终点地址`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_2" :value.sync="endAddress">
                </v2-form-input>
                <v2-form-input :wid="`1614764830485`" class="v2-form-input-1614764830485 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`定价`" :placeholder="`请输入定价`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4" :value.sync="price">
                </v2-form-input>
            </div>
        </div>
        <div :wid="`1614766242007`" class="v2Container-1614766242007 V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;flex-shrink:0;" :if="true" ref="v2Container_4">
            <v2-component-btn :wid="`1614774384400`" class="v2-component-btn-1614774384400 V2Widget" :style="{'align-self':'auto','margin-top':'5px'}" :theme="{'btnType':'normal&shape=plain','size':'small'}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614824974231" ref="v2ComponentBtn_7">
            </v2-component-btn>
            <v2-component-btn :wid="`1614766284343`" class="v2-component-btn-1614765251471 V2Widget" :style="{'align-self':'auto','margin-top':'5px','margin-right':'10px'}" :theme="{'btnType':'primary','size':'small'}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614822992180" ref="v2ComponentBtn_5">
            </v2-component-btn>
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
                    'mapping': {"1614764756124":[{"id":1614764756124,"modelValue":"value","dataValue":"startAddress","type":""}],"1614764837231":[{"id":1614764837231,"modelValue":"value","dataValue":"endAddress","type":""}],"1614764830485":[{"id":1614764830485,"modelValue":"value","dataValue":"price","type":""}],"1614765164838":[{"id":1614765164838,"modelValue":"value","dataValue":"branch","type":""},{"id":1614765164838,"modelValue":"optionConfig","dataValue":"branchList","type":""}],"1614765166810":[{"id":1614765166810,"modelValue":"value","dataValue":"sex","type":""},{"id":1614765166810,"modelValue":"optionConfig","dataValue":"sexList","type":""}],"1614822742740":[{"id":1614822742740,"modelValue":"value","dataValue":"account","type":""}],"1614824450359":[{"id":1614824450359,"modelValue":"value","dataValue":"id","type":""}]}
                },
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 起始地址 */
            'startAddress': {
                'default': () => {
                    return ''
                }
            },
            /* 终点地址 */
            'endAddress': {
                'default': () => {
                    return ''
                }
            },
            /* 定价 */
            'price': {
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
             *  获取运送地址定价信息
             */
            getshipAddressInfo() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/shipAddressInfo/get/${ctx.AParams.id}`).then(res=>{
                    if(res.success&&res.status){
                        var obj = res.obj;
                
                        ctx.startAddress=obj&&obj.startAddress;
                        ctx.endAddress  = obj&&obj.endAddress;
                        ctx.price= obj&&obj.shipAddressMoney;
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  提交
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614822992180($event, vueIns=this.$refs['v2ComponentBtn_5']) {
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
                方法名称：SubmitMethod
                方法描述：提交方法
                **/
                ctx.SubmitMethod();
            },
            /**
             *  提交方法
             */
            SubmitMethod() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                let dataList={}
                dataList={
                    
                        startAddress:ctx.startAddress,
                        endAddress:ctx.endAddress,
                        shipAddressMoney:ctx.price
                }
                ctx.$root.confirm(dataList);
            },
            /**
             *  关闭
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614824974231($event, vueIns=this.$refs['v2ComponentBtn_7']) {
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
                ctx.close()
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
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
            console.log(ctx.AParams.id)
            if(ctx.AParams.id){
                ctx.getshipAddressInfo();
            }
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
.v2Container-1614766242007{
    position:absolute!important;
    bottom:0;
    width:100%;
    right:0;
    border-top:1px solid #e5e5e5;
}
</style>