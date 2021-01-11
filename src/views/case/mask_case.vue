<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;width:80%;flex-direction:column;flex-shrink:0;margin-top:10px;margin-left:20px;" class="V2Container">
        <div :wid="`1600674747630`" class="V2Widget" style="box-sizing:border-box;font-size:2em;margin-top:20px;margin-left:10px;margin-bottom:20px;" component="v2-component-text" ref="v2ComponentText_1">
            <p :style="{'word-break':'break-all'}">
                遮罩层案例
            </p>
        </div>
        <div :wid="`1601183541511`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.5em;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_7">
            <p :style="{'word-break':'break-all'}">
                生成遮罩
            </p>
        </div>
        <div :wid="`1601183141005`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;padding-bottom:10px;" ref="v2Container_1">
            <div :wid="`1601183299983`" class="v2-component-text-1601183299983 V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-top:10px;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_5">
                <p :style="{'word-break':'break-all'}">
                    通过ctx.$loading()调用,配置相对应的属性
                </p>
            </div>
            <div :wid="`1601188603437`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_10">
                <p :style="{'word-break':'break-all'}">
                    Lock  同 v-loading 指令中的 lock 修饰符 (布尔值),
                </p>
            </div>
            <div :wid="`1601188839034`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_11">
                <p :style="{'word-break':'break-all'}">
                    text 显示在加载图标下方的加载文案
                </p>
            </div>
            <div :wid="`1601188886778`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_12">
                <p :style="{'word-break':'break-all'}">
                    spinner自定义加载图标类名
                </p>
            </div>
            <div :wid="`1601188885926`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_13">
                <p :style="{'word-break':'break-all'}">
                    background遮罩背景色
                </p>
            </div>
            <div :wid="`1601183151372`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_2">
                <p :style="{'word-break':'break-all'}">
                    示例代码 : const loading=ctx.$loading({     lock: true,     text: '正在加载中',     spinner: 'el-icon-loading',     background: 'rgba(45, 140, 240, 0.49)',     target: ctx.$el });
                </p>
            </div>
        </div>
        <v2-component-btn :wid="`1600674783190`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`点击生成遮罩层,2s后关闭`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600674734537" ref="v2ComponentBtn_1">
        </v2-component-btn>
        <div :wid="`1601183686408`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_2">
            <div :wid="`1601183698792`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.5em;margin-top:20px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_8">
                <p :style="{'word-break':'break-all'}">
                    关闭遮罩层
                </p>
            </div>
            <div :wid="`1601183748447`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_3">
                <div :wid="`1601183846527`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-top:10px;margin-bottom:10px;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_9">
                    <p :style="{'word-break':'break-all'}">
                        关闭遮罩层代码  =>  loading.close();
                    </p>
                </div>
            </div>
        </div>
    </v2container>
</template>
<script>
    import {mixins} from '@v2-lib/vue.spa.plugin'
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
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
             *  点击生成遮罩事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600674734537($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nconst loading = ctx.$loading({\n    lock: true,\n    text: '加载中',\n    spinner: 'el-icon-loading',\n    background: 'rgba(0, 0, 0, 0.8)',\n    target: ctx.$el\n});\n","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                const loading=ctx.$loading({
                    lock: true,
                    text: '正在加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(45, 140, 240, 0.49)',
                    target: ctx.$el
                });
                
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                debugger
                setTimeout(() => {
                          loading.close();
                        }, 2000);
                // loading.close()
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