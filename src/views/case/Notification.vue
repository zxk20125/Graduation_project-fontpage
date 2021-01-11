<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:80%;flex-direction:column;flex-shrink:0;background-color:#FFFFFF;padding-left:30px;" class="V2Container">
        <div :wid="`1600740468464`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-direction:column;" ref="v2Container_1">
            <div :wid="`1601170656349`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:2.5em;margin-top:30px;" component="v2-component-text" ref="v2ComponentText_1">
                <p :style="{'word-break':'break-all'}">
                    Notification 通知
                </p>
            </div>
            <div :wid="`1601172343823`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.8em;margin-top:30px;" component="v2-component-text" ref="v2ComponentText_7">
                <p :style="{'word-break':'break-all'}">
                    基本用法
                </p>
            </div>
            <div :wid="`1601172779715`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.3em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_12">
                <p :style="{'word-break':'break-all'}">
                    适用性广泛的通知栏
                </p>
            </div>
            <div :wid="`1601170712029`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;margin-bottom:15px;" ref="v2Container_9">
                <div :wid="`1601170803868`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_2">
                    <p :style="{'word-break':'break-all'}">
                        Notification 组件提供通知功能，Element 注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600740492868`" class="V2Widget" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`常用通知[不自动关闭]`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600740419132" ref="v2ComponentBtn_3">
            </v2-component-btn>
        </div>
        <div :wid="`1601170607672`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;margin-bottom:20px;" ref="v2Container_8">
            <div :wid="`1601172392512`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.8em;margin-top:30px;" component="v2-component-text" ref="v2ComponentText_8">
                <p :style="{'word-break':'break-all'}">
                    带有倾向性通知
                </p>
            </div>
            <div :wid="`1601172869191`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.3em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_13">
                <p :style="{'word-break':'break-all'}">
                    带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息
                </p>
            </div>
            <div :wid="`1601172179875`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;margin-bottom:15px;" ref="v2Container_13">
                <div :wid="`1601172159278`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_6">
                    <p :style="{'word-break':'break-all'}">
                        Element 为 Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入type字段的情况下像open3和open4那样直接调用。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600740774279`" class="V2Widget" :style="{'background-color':'rgba(58, 232, 58, 0.94)','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`「成功、警告、消息、错误」类的系统消息`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600741909890" ref="v2ComponentBtn_6">
            </v2-component-btn>
        </div>
        <div :wid="`1601170490850`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-bottom:20px;" ref="v2Container_2">
            <div :wid="`1601172499744`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.8em;margin-top:30px;" component="v2-component-text" ref="v2ComponentText_9">
                <p :style="{'word-break':'break-all'}">
                    自定义弹出位置
                </p>
            </div>
            <div :wid="`1601172951636`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.3em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_14">
                <p :style="{'word-break':'break-all'}">
                    可以让 Notification 从屏幕四角中的任意一角弹出
                </p>
            </div>
            <div :wid="`1601171513600`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;margin-bottom:15px;" ref="v2Container_10">
                <div :wid="`1601171448082`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_3">
                    <p :style="{'word-break':'break-all'}">
                        使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600740704884`" class="V2Widget" :style="{'background-color':'rgba(249, 177, 68, 0.94)','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`改变通知出现位置`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600741159991" ref="v2ComponentBtn_4">
            </v2-component-btn>
        </div>
        <div :wid="`1601170497360`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:10px;margin-bottom:20px;" ref="v2Container_3">
            <div :wid="`1601172468047`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.8em;margin-top:20px;" component="v2-component-text" ref="v2ComponentText_10">
                <p :style="{'word-break':'break-all'}">
                    带有偏移通知
                </p>
            </div>
            <div :wid="`1601172972419`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.3em;margin-top:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_15">
                <p :style="{'word-break':'break-all'}">
                    让 Notification 偏移一些位置
                </p>
            </div>
            <div :wid="`1601171615609`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;margin-bottom:15px;" ref="v2Container_11">
                <div :wid="`1601171865922`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_4">
                    <p :style="{'word-break':'break-all'}">
                        Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600740736840`" class="V2Widget" :style="{'background-color':'rgba(248, 63, 63, 0.79)','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`通知位置偏移`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600741267600" ref="v2ComponentBtn_5">
            </v2-component-btn>
        </div>
        <div :wid="`1601170603534`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:10px;" ref="v2Container_6">
            <div :wid="`1601172627173`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.8em;margin-top:20px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_11">
                <p :style="{'word-break':'break-all'}">
                    使用 HTML 片段
                </p>
            </div>
            <div :wid="`1601172951382`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:1.3em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_16">
                <p :style="{'word-break':'break-all'}">
                    message 属性支持传入 HTML 片段
                </p>
            </div>
            <div :wid="`1601171987787`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;margin-top:10px;margin-bottom:15px;" ref="v2Container_12">
                <div :wid="`1601171945010`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;background-color:rgb(242,242,242);font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_5">
                    <p :style="{'word-break':'break-all'}">
                        将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600740837224`" class="V2Widget" :style="{'background-color':'rgba(120, 189, 221, 0.93)','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`html文本`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600742152471" ref="v2ComponentBtn_10">
            </v2-component-btn>
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
             *  常用通知
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600740419132($event, vueIns=this.$refs['v2ComponentBtn_3']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"notify","desp":"通知","main":"this.$notify","paramsType":"Object","params":[{"name":"title","desp":"通知标题","value":"","preset":"提示","type":"String","required":false,"computedStatus":false,"computedValue":""},{"name":"message","desp":"通知信息","value":"","preset":"这是一条通知信息","type":"String","required":true,"computedStatus":false,"computedValue":""},{"name":"position","desp":"提示位置","value":"","preset":["top-right","top-left","bottom-right","bottom-left"],"type":"String","required":true,"computedStatus":false,"computedValue":""},{"name":"offset","desp":"偏移量","value":"","preset":100,"type":"Number","required":false,"computedStatus":false,"computedValue":""}]} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                ctx.$notify({
                  title: "提示",
                  message: "这是一条通知信息",
                
                  // position: "top-right",
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  // type:success,
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                   duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  // offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  iconClass:"el-icon-eleme",
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  
                  // dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                  //  showClose: false
                  // 隐藏关闭按钮
                })
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  通知位置改变
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600741159991($event, vueIns=this.$refs['v2ComponentBtn_4']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$notify({
                  title: "提示",
                  message: "这是一条通知信息", 
                
                  position:"bottom-left",
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  // type:'success',
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                  //  duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  // offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  // iconClass:'el-icon-eleme',
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  // dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                    //  showClose: false
                  // 隐藏关闭按钮
                })
            },
            /**
             *  位置偏移
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600741267600($event, vueIns=this.$refs['v2ComponentBtn_5']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.$notify({
                  title: "提示",
                  message: "这是一条通知信息位置偏移", 
                
                  // position: bottom-left,
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  // type:'success',
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                  //  duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  // iconClass:'el-icon-eleme',
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  // dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                    //  showClose: false
                  // 隐藏关闭按钮
                })
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  带倾向的系统通知
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600741909890($event, vueIns=this.$refs['v2ComponentBtn_6']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                
                ctx.$notify({
                  title: "成功",
                  message: "这是一条成功通知信息", 
                
                  // position: bottom-left,
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  type:'success',
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                  //  duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  // offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  // iconClass:'el-icon-eleme',
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  
                  // dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                    //  showClose: false
                  // 隐藏关闭按钮
                })
            },
            /**
             *  html文本
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600742152471($event, vueIns=this.$refs['v2ComponentBtn_10']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                
                ctx.$notify({
                  title: "提示",
                  message: '<strong>这是 <i>HTML</i> 片段</strong>', 
                
                  // position: bottom-left,
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  // type:'success',
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                  //  duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  // offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  // iconClass:'el-icon-eleme',
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  
                  dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                    //  showClose: false
                  // 隐藏关闭按钮
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