<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:80%;flex-direction:column;flex-shrink:0;color:#FFFFFF;margin-top:30px;margin-left:30px;" class="V2Container">
        <div :wid="`1601176168086`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_3">
            <div :wid="`1601176405305`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:2.5em;" component="v2-component-text" ref="v2ComponentText_1">
                <p :style="{'word-break':'break-all'}">
                    MessageBox 弹框
                </p>
            </div>
            <div :wid="`1601176871452`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;margin-top:20px;" ref="v2Container_9">
                <div :wid="`1601176925867`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_3">
                    <p :style="{'word-break':'break-all'}">
                        弹窗基础提示
                    </p>
                </div>
            </div>
            <div :wid="`1601177074978`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_7">
                <p :style="{'word-break':'break-all'}">
                    当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。
                </p>
            </div>
            <div :wid="`1601177018441`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_10">
                <div :wid="`1601177006865`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;border-right-width:0;border-left-width:0;border-top-width:0;border-bottom-width:0;color:#000000;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_5">
                    <p :style="{'word-break':'break-all'}">
                        调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title。值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600679212376`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`点击打开弹框`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600679224514" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <div :wid="`1601176195754`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:20px;" ref="v2Container_4">
            <div :wid="`1601177294555`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;margin-top:10px;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_8">
                <p :style="{'word-break':'break-all'}">
                    选择确认/取消
                </p>
            </div>
            <div :wid="`1601177358294`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10;margin-bottom:10px;" component="v2-component-text" ref="v2ComponentText_9">
                <p :style="{'word-break':'break-all'}">
                    提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
                </p>
            </div>
            <div :wid="`1601177396721`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_11">
                <div :wid="`1601177405053`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_10">
                    <p :style="{'word-break':'break-all'}">
                        调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。Message Box 组件也拥有极高的定制性，我们可以传入options作为第三个参数，它是一个字面量对象。type字段表明消息类型，可以为success，error，info和warning，无效的设置将会被忽略。注意，第二个参数title必须定义为String类型，如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600679807959`" class="V2Widget" :style="{'background-color':'rgba(58, 232, 58, 0.94)','color':'#FFFFFF','margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`点击打开选择弹窗`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600679903177" ref="v2ComponentBtn_3">
            </v2-component-btn>
        </div>
        <div :wid="`1601176214040`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:30px;margin-bottom:30px;" ref="v2Container_5">
            <div :wid="`1601177937523`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;" component="v2-component-text" ref="v2ComponentText_11">
                <p :style="{'word-break':'break-all'}">
                    提交内容
                </p>
            </div>
            <div :wid="`1601177891478`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_12">
                <p :style="{'word-break':'break-all'}">
                    当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。
                </p>
            </div>
            <div :wid="`1601177946120`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;" ref="v2Container_12">
                <div :wid="`1601177902364`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.2em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_13">
                    <p :style="{'word-break':'break-all'}">
                        调用$prompt方法即可打开消息提示，它模拟了系统的 prompt。可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，可以返回Boolean或String，返回false或字符串时均表示校验未通过，同时返回的字符串相当于定义了inputErrorMessage字段。此外，可以用inputPlaceholder字段来定义输入框的占位符。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600680204997`" class="V2Widget" :style="{'background-color':'rgba(249, 177, 68, 0.94)','color':'#FFFFFF','margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`点击打开提交`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600680260837" ref="v2ComponentBtn_4">
            </v2-component-btn>
        </div>
        <div :wid="`1601176282614`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_6">
            <div :wid="`1601178186189`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;" component="v2-component-text" ref="v2ComponentText_15">
                <p :style="{'word-break':'break-all'}">
                    自定义弹框
                </p>
            </div>
            <div :wid="`1601178119557`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.4em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_16">
                <p :style="{'word-break':'break-all'}">
                    可自定义配置不同内容。
                </p>
            </div>
            <div :wid="`1601178224195`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;" ref="v2Container_13">
                <div :wid="`1601178145282`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_17">
                    <p :style="{'word-break':'break-all'}">
                        以上三个方法都是对$msgbox方法的再包装。本例直接调用$msgbox方法，使用了showCancelButton字段，用于显示取消按钮。另外可使用cancelButtonClass为其添加自定义样式，使用cancelButtonText来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了beforeClose属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：action、实例本身和done方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加loading状态等；此时若需要关闭实例，可以调用done方法（若在beforeClose中没有调用done，则实例不会关闭）。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600680653785`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`自定义点击事件`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600680698499" ref="v2ComponentBtn_5">
            </v2-component-btn>
        </div>
        <div :wid="`1601176233964`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:30px;margin-bottom:20px;" ref="v2Container_8">
            <div :wid="`1601178371680`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;" component="v2-component-text" ref="v2ComponentText_18">
                <p :style="{'word-break':'break-all'}">
                    使用 HTML 片段
                </p>
            </div>
            <div :wid="`1601178415858`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.4em;margin-top:10px;" component="v2-component-text" ref="v2ComponentText_19">
                <p :style="{'word-break':'break-all'}">
                    message 属性支持传入 HTML 片段。
                </p>
            </div>
            <div :wid="`1601178348248`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:10px;margin-bottom:10px;" ref="v2Container_14">
                <div :wid="`1601178366398`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10px;margin-bottom:10px;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_20">
                    <p :style="{'word-break':'break-all'}">
                        将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1600680828026`" class="V2Widget" :style="{'background-color':'rgba(248, 63, 63, 0.79)','color':'#FFFFFF','margin-top':'20px','margin-left':'20px'}" :theme="{'btnType':'normal&shape=plain','size':''}" :disabled="false" :loading="false" :btn-name="`html片段`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600680864617" ref="v2ComponentBtn_6">
            </v2-component-btn>
        </div>
        <div :wid="`1601179395503`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_15">
            <div :wid="`1601179383411`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.8em;" component="v2-component-text" ref="v2ComponentText_21">
                <p :style="{'word-break':'break-all'}">
                    居中布局
                </p>
            </div>
            <div :wid="`1601179420693`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.4em;margin-top:10px;padding-bottom:10px;" component="v2-component-text" ref="v2ComponentText_22">
                <p :style="{'word-break':'break-all'}">
                    内容支持居中布局
                </p>
            </div>
            <div :wid="`1601179424185`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);" ref="v2Container_16">
                <div :wid="`1601179448469`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;color:#000000;font-size:1.3em;margin-top:10px;margin-bottom:10px;margin-left:10px;" component="v2-component-text" ref="v2ComponentText_23">
                    <p :style="{'word-break':'break-all'}">
                        将 center 设置为 true 即可开启居中布局
                    </p>
                </div>
            </div>
            <v2-component-btn :wid="`1601179367425`" class="V2Widget" :style="{'flex-shrink':'0','margin-top':'20px','margin-left':'20px','background-color':'rgba(120, 189, 221, 0.93)'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`居中布局`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1601179641859" ref="v2ComponentBtn_7">
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
             *  基础弹窗事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600679224514($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\nthis.$alert('这是一段内容', '标题名称', {\n          confirmButtonText: '确定',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                // 调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。
                // 此例中接收了两个参数，message和title。值得一提的是，窗口被关闭后，
                // 它默认会返回一个Promise对象便于进行后续操作的处理
                const ctx = this;
                
                ctx.$alert('这是一段内容', '标题名称', {
                          confirmButtonText: '确定',
                          callback: action => {
                            this.$message({
                              type: 'info',
                              message: `action: ${ action }`
                            });
                          }
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  确认取消事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600679903177($event, vueIns=this.$refs['v2ComponentBtn_3']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\nthis.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: '删除成功!'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '已取消删除'\n          });          \n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                // 调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。Message Box 组件也拥有极高的
                // 定制性，我们可以传入options作为第三个参数，它是一个字面量对象。type字段表明消息类型，
                // 可以为success，error，info和warning，无效的设置将会被忽略。
                // 注意，第二个参数title必须定义为String类型，
                // 如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。
                
                ctx.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                        }).then(() => {
                          ctx.$message({
                            type: 'success',
                            message: '删除成功!'
                          });
                        }).catch(() => {
                          ctx.$message({
                            type: 'info',
                            message: '已取消删除'
                          });          
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  提交数据事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600680260837($event, vueIns=this.$refs['v2ComponentBtn_4']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                // 调用$prompt方法即可打开消息提示，它模拟了系统的 prompt。
                // 可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，
                // 可以返回Boolean或String，返回false或字符串时均表示校验未通过，
                // 同时返回的字符串相当于定义了inputErrorMessage字段。
                // 此外，可以用inputPlaceholder字段来定义输入框的占位符。
                
                ctx.$prompt('请输入邮箱', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                          inputErrorMessage: '邮箱格式不正确'
                        }).then(({ value }) => {
                          this.$message({
                            type: 'success',
                            message: '你的邮箱是: ' + value
                          });
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '取消输入'
                          });       
                        });
            },
            /**
             *  自定义点击事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600680698499($event, vueIns=this.$refs['v2ComponentBtn_5']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\n const h = this.$createElement;\n        this.$msgbox({\n          title: '消息',\n          message: h('p', null, [\n            h('span', null, '内容可以是 '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = '执行中...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                // 本例直接调用$msgbox方法，使用了showCancelButton字段，
                // 用于显示取消按钮。另外可使用cancelButtonClass为其添加自定义样式，
                // 使用cancelButtonText来自定义按钮文本（Confirm 按钮也具有相同的字段，
                // 在文末的字段说明中有完整的字段列表）。此例还使用了beforeClose属性，
                // 它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。
                // 它有三个参数：action、实例本身和done方法。使用它能够在关闭前对实例进行一些操作，
                // 比如为确定按钮添加loading状态等；此时若需要关闭实例，
                // 可以调用done方法（若在beforeClose中没有调用done，则实例不会关闭）。
                 const h = ctx.$createElement;
                        ctx.$msgbox({
                          title: '消息',
                          message: h('p', null, [
                            h('span', null, '内容可以是 '),
                            h('i', { style: 'color: teal' }, 'VNode')
                          ]),
                          showCancelButton: true,
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                              instance.confirmButtonLoading = true;
                              instance.confirmButtonText = '执行中...';
                              setTimeout(() => {
                                done();
                                setTimeout(() => {
                                  instance.confirmButtonLoading = false;
                                }, 300);
                              }, 3000);
                            } else {
                              done();
                            }
                          }
                        }).then(action => {
                          ctx.$message({
                            type: 'info',
                            message: 'action: ' + action
                          });
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  html片段
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600680864617($event, vueIns=this.$refs['v2ComponentBtn_6']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n// message 属性支持传入 HTML 片段。\nctx.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {\n          dangerouslyUseHTMLString: true\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                // message 属性支持传入 HTML 片段。
                ctx.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                          dangerouslyUseHTMLString: true
                        });
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
            },
            /**
             *  _op_componentBtn_btn_1601179641859
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1601179641859($event, vueIns=this.$refs['v2ComponentBtn_7']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nthis.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: '删除成功!'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '已取消删除'\n          });\n        });","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning',
                          center: true
                        }).then(() => {
                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                          });
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '已取消删除'
                          });
                        });
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