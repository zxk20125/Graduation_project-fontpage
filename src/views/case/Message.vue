<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-direction:column;flex-shrink:0;width:80%;padding-left:30px;" class="V2Container">
        <div :wid="`1601126881379`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_3">
            <div :wid="`1601133094448`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-shrink:0;flex-direction:column;" ref="v2Container_12">
                <div :wid="`1601126975343`" class="v2-component-text-1601126975343 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:2.5em;margin-top:30px;" component="v2-component-text" ref="v2ComponentText_2">
                    <p :style="{'word-break':'break-all'}">
                        Message消息提示
                    </p>
                </div>
            </div>
            <div :wid="`1601174311185`" class="v2-component-text-1601174311185 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:20px;" component="v2-component-text" ref="v2ComponentText_10">
                <p :style="{'word-break':'break-all'}">
                    基础用法
                </p>
            </div>
            <div :wid="`1601174368726`" class="v2-component-text-1601174368726 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_11">
                <p :style="{'word-break':'break-all'}">
                    从顶部出现，3 秒后自动消失。
                </p>
            </div>
            <div :wid="`1601133087664`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;" ref="v2Container_11">
                <div :wid="`1601126944656`" class="v2-component-text-1601126944656 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-left:10px;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_3">
                    <p :style="{'word-break':'break-all'}">
                        {{explain1}}
                    </p>
                </div>
                <div :wid="`1601128040884`" class="v2-component-text-1601128040884 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-left:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_4">
                    <p :style="{'word-break':'break-all'}">
                        {{explain1_1}}
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600676036610`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'10px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`消息提示`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600676000169" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <div :wid="`1601128621059`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:10px;" ref="v2Container_4">
            <div :wid="`1601174514289`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-shrink:0;flex-direction:column;" ref="v2Container_17">
                <div :wid="`1601174587231`" class="v2-component-text-1601174587231 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:20px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_13">
                    <p :style="{'word-break':'break-all'}">
                        vnode
                    </p>
                </div>
            </div>
            <div :wid="`1601133114613`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_13">
                <div :wid="`1601131580552`" class="v2-component-text-1601131580552 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;margin-left:10px;margin-top:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_5">
                    <p :style="{'word-break':'break-all'}">
                        message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600677069000`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'10px','background-color':'rgba(58, 232, 58, 0.94)','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`内容可以是vnode`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600676990106" ref="v2ComponentBtn_2">
            </v2-component-btn>
        </div>
        <div :wid="`1601128703927`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_5">
            <div :wid="`1601174708968`" class="v2-component-text-1601174708968 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:30px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_15">
                <p :style="{'word-break':'break-all'}">
                    不同状态提示
                </p>
            </div>
            <div :wid="`1601133163282`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_14">
                <div :wid="`1601131655470`" class="v2-component-text-1601131655470 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;margin-left:10px;margin-top:10px;margin-bottom:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_6">
                    <p :style="{'word-break':'break-all'}">
                        当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入type字段的情况下像open4那样直接调用。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600678213358`" class="V2Widget" :style="{'background-color':'rgba(249, 177, 68, 0.94)','margin-top':'20px','margin-left':'10px','color':'#FFFFFF'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`成功提示`" :shape="`plain`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600678178052" ref="v2ComponentBtn_5">
            </v2-component-btn>
            <v2-component-btn :wid="`1600678445208`" class="V2Widget" :style="{'background-color':'rgba(248, 63, 63, 0.79)','margin-top':'20px','color':'#FFFFFF'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`警告提示`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600678465863" ref="v2ComponentBtn_6">
            </v2-component-btn>
        </div>
        <div :wid="`1601128698350`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:15px;" ref="v2Container_7">
            <div :wid="`1601174764170`" class="v2-component-text-1601174764170 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:20px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_16">
                <p :style="{'word-break':'break-all'}">
                    可关闭提示
                </p>
            </div>
            <div :wid="`1601174837557`" class="v2-component-text-1601174837557 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_17">
                <p :style="{'word-break':'break-all'}">
                    可以添加关闭按钮。
                </p>
            </div>
            <div :wid="`1601133219992`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_15">
                <div :wid="`1601131743656`" class="v2-component-text-1601131743656 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;background-color:rgb(242,242,242);margin-left:10px;margin-top:10px;margin-bottom:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_8">
                    <p :style="{'word-break':'break-all'}">
                        默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message 拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600678603337`" class="V2Widget" :style="{'background-color':'#FCC6C6','margin-top':'20px','margin-left':'10px','color':'#000000'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`错误提示,可选择关闭`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600678609181" ref="v2ComponentBtn_7">
            </v2-component-btn>
        </div>
        <div :wid="`1601128740430`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:10px;" ref="v2Container_8">
            <div :wid="`1601174911625`" class="v2-component-text-1601174911625 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:20px;" component="v2-component-text" ref="v2ComponentText_18">
                <p :style="{'word-break':'break-all'}">
                    使用 HTML 片段
                </p>
            </div>
            <div :wid="`1601175015799`" class="v2-component-text-1601175015799 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:18px;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_19">
                <p :style="{'word-break':'break-all'}">
                    message 属性支持传入 HTML 片段
                </p>
            </div>
            <div :wid="`1601133191189`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;" ref="v2Container_16">
                <div :wid="`1601131881120`" class="v2-component-text-1601131881120 V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-left:10px;margin-top:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_9">
                    <p :style="{'word-break':'break-all'}">
                        将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600678824569`" class="V2Widget" :style="{'margin-top':'20px','background-color':'#B7D4F4','margin-left':'10px','color':'#000000'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`使用html片段`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600678843279" ref="v2ComponentBtn_8">
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
                    'mapping': {"1601126944656":[{"id":1601126944656,"modelValue":"text","dataValue":"explain1","type":""}],"1601128040884":[{"id":1601128040884,"modelValue":"text","dataValue":"explain1_1","type":""}]}
                },
                /* 消息提示 */
                'explain1': `
                普通的消息提示框,在element-ui上有更为详细的文档:
                https://element.eleme.cn/#/zh-CN/component/message
                `,
                /* 新建页面数据 */
                'explain1_1': `引用方式相差不大,如这个消息提示引用方式 ctx.$message({
                  type: 'info',
                  message: '这是一条消息提示'
                });`,
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
             *  消息提示
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600676000169($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                 ctx.$message({
                              type: 'info',
                              message: '这是一条消息提示'
                            });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  提示框vnode
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600676990106($event, vueIns=this.$refs['v2ComponentBtn_2']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                const h = ctx.$createElement;
                ctx.$message({
                          message: h('p', null, [
                            h('span', null, '内容可以是 '),
                            h('i', { style: 'color: teal' }, 'VNode')
                          ])
                        });
            },
            /**
             *  成功提示
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600678178052($event, vueIns=this.$refs['v2ComponentBtn_5']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\nthis.$message({\n          showClose: true,\n          message: '这是一条成功消息',\n          type: 'success'\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                this.$message({
                          showClose: true,
                          message: '这是一条成功消息',
                          type: 'success'
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  警告提示
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600678465863($event, vueIns=this.$refs['v2ComponentBtn_6']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\nctx.$message({\n          message: '警告哦，这是一条警告消息',\n          type: 'warning'\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.$message({
                          message: '警告哦，这是一条警告消息',
                          type: 'warning'
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  错误提示
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600678609181($event, vueIns=this.$refs['v2ComponentBtn_7']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nctx.$message({\n          showClose: true,\n          message: '错了哦，这是一条错误消息',\n          type: 'error'\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$message({
                          showClose: true,
                          message: '错了哦，这是一条错误消息',
                          type: 'error'
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  html片段
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600678843279($event, vueIns=this.$refs['v2ComponentBtn_8']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nctx.$message({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>这是 <i>HTML</i> 片段</strong>'\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$message({
                          dangerouslyUseHTMLString: true,
                          message: '<strong>这是 <i>HTML</i> 片段</strong>'
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                // ctx.$message({
                  // type: 'info',
                  //  主题 success/warning/info/error
                //   title: "提示",
                //   message: "这是一条通知信息",
                
                  // position: "top-right",
                  // 信息出现位置 top-right/top-left/bottom-right/bottom-left
                
                  // type:success,
                  // 主题样式，如果不在可选值内将被忽略 success/warning/info/error
                
                  //  duration: 0,
                  //  显示时间, 毫秒。设为 0 则不会自动关闭
                
                  // offset: 100,
                  // 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
                
                  // iconClass:"el-icon-eleme",
                  // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
                
                  
                  // dangerouslyUseHTMLString: true,
                  // 是否将 message 属性作为 HTML 片段处理
                
                  //  showClose: false
                  // 隐藏关闭按钮
                // })
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