<template>
    <v2container :wid="`root`" style="width:80%;height:100%;flex-shrink:0;flex-direction:column;" class="V2Container">
        <div :wid="`1601258988084`" class="v2Container-1601258988084 V2Container" style="width:100%;flex-direction:column;" ref="v2Container_2">
            <div :wid="`1601261546193`" class="v2-component-text-1601261546193 V2Widget" component="v2-component-text" ref="v2ComponentText_7">
                <p :style="{'word-break':'break-all'}" style="font-size: 30px;word-break: break-all;font-weight: bold;">
                    组件的事件暴露
                </p>
            </div>
            <div :wid="`1601260183473`" class="v2Container-1601260183473 V2Container" style="width:100%;flex-direction:column;flex-shrink:0;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(224,224,224);margin-top:10px;margin-bottom:10px;" ref="v2Container_5">
                <div :wid="`1601259347332`" class="v2-component-text-1601259347332 text_margin V2Widget" component="v2-component-text" ref="v2ComponentText_3">
                    <p :style="{'word-break':'break-all'}">
                        创建的组件通过事件暴露(实际就是ctx.$emit("暴露事件名", $event);),将事件暴露到页面,通过组件的事件触发相对应的暴露事件(@暴露事件名,监听事件暴露出来的组件事件),在父页面的暴露事件中写相对应的操作作逻辑(如修改页面数据,调用方法等),来以此达到修改父页面,
                    </p>
                </div>
                <div :wid="`1601260476464`" class="v2-component-text-1601260476464 text_margin V2Widget" component="v2-component-text" ref="v2ComponentText_6">
                    <p :style="{'word-break':'break-all'}">
                        这个按钮名绑定了一个页面数据,可以通过下方组件的+,-对按钮的数据进行加法和减法操作
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1601259037377`" class="v2-component-btn-1601259037377 V2Widget" :style="{'width':'100px'}" :btnName="changeNumber" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="changeNumber" :shape="`def`" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <div :wid="`1601259036678`" class="v2Container-1601259036678 V2Container" style="width:100%;flex-direction:column;" ref="v2Container_3">
            <v2-component-comexpose :wid="`1601259034020`" class="v2-component-comexpose-1601259034020 V2Widget" :style="{'height':'50px','width':'200px'}" @add="v2_component_comexpose_1601259143645" @reduce="v2_component_comexpose_1601259147268" ref="v2ComponentComexpose_1">
            </v2-component-comexpose>
            <div :wid="`1601260153286`" class="v2Container-1601260153286 V2Container" style="width:100%;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(224,224,224);" ref="v2Container_4">
                <div :wid="`1601259372112`" class="v2-component-text-1601259372112 text_margin V2Widget" component="v2-component-text" ref="v2ComponentText_5">
                    <p :style="{'word-break':'break-all'}">
                        一开始给两个按钮创建了点击事件,当鼠标点击按钮的时候触发相对应的事件,+号的按钮暴露的事件命名为增加事件,-号事件命名为减少事件,对事件进行命名有助于我们之后修改页面或者组件时候辨别,事件的命名相当于事件的注释,在组件中分别将增加事件和减少事件暴露出来,暴露的事件名英文就是组件的调用时候所使用,中文名也就是注释.这样就创建了两个暴露事件,以这个为例,+号新建了一个点击事件,点击事件暴露出来一个add的事件,在页面中使用的时候就可以让组件绑定暴露的事件,可以达到,点击加号,触发点击事件,点击事件触发add事件,add事件在页面修改页面的参数,实现,点击组件加号修改页面的值
                    </p>
                </div>
            </div>
        </div>
    </v2container>
</template>
<script>
    import {mixins} from '@v2-lib/vue.spa.plugin'
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
    import v2ComponentComexpose from '@/views/_customWidget/comexpose.vue'
    /* __V2_DECOMPILABLE__ */
    export default {
        'mixins': [
            root,
            mixins
        ],
        'components': {
            v2ComponentComexpose
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
                    'mapping': {"1601259037377":[{"id":1601259037377,"modelValue":"btnName","dataValue":"changeNumber","type":""}]}
                },
                /* 数字改变 */
                'changeNumber': 1,
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
             *  对changeNumber进行加法操作
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_comexpose_1601259143645($event, vueIns=this.$refs['v2ComponentComexpose_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"main": "AGREE-CUSTOM",
                //	"desp": "事件准备",
                //	"code": "/**\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\nctx.changeNumber=ctx.changeNumber+1;",
                //	"showConfig": true
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.changeNumber=ctx.changeNumber+1;
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  对changeNumber进行减法操作
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_comexpose_1601259147268($event, vueIns=this.$refs['v2ComponentComexpose_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"main": "AGREE-CUSTOM",
                //	"desp": "事件准备",
                //	"code": "/**\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nctx.changeNumber=ctx.changeNumber+1;",
                //	"showConfig": true
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.changeNumber=ctx.changeNumber-1;
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  undefined
             */
            undefined() {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
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
.text_margin{
    margin:10px;
}

</style>