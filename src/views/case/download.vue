<template>
    <v2container :wid="`root`" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;width:90%;flex-direction:column;flex-shrink:0;min-height:20px;" class="V2Container">
        <div :wid="`1602209380851`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_5">
            <div :wid="`1602229222232`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:25px;margin-top:10px;margin-bottom:20px;" component="v2-component-text" ref="v2ComponentText_24">
                <p :style="{'font-weight':'bold','word-break':'break-all'}">
                    使用上传组件实现上传
                </p>
            </div>
            <div :wid="`1602209450917`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-bottom:20px;" ref="v2Container_6">
                <div :wid="`1602209428670`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_7">
                    <p :style="{'word-break':'break-all'}">
                        在基础组件拖拽一个上传组件到页面上,然后在上传组件的配置项里面,有个上传地址,这个就是后台的接口地址,比如本次的案例的后台地址'/file2/upload',由于后台在文件上传的时候需要hearders带有token,下面按钮点击之后就能为上传组件增加一个token值,这个一般都是放在生命周期靠前位置,比如mounted的时候就添加,本次为演示
                    </p>
                </div>
            </div>
            <div :wid="`1602295760895`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;" ref="v2Container_12">
                <v2-form-input :wid="`1602295787041`" class="V2Widget" :style="{'flex-shrink':'0','margin-bottom':'20px'}" :theme="{'size':''}" :disabled="false" :label="`filePartId`" :placeholder="`请输入分片标识`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2FormInput_1" :value.sync="filePartId">
                </v2-form-input>
                <v2-form-input :wid="`1602295826677`" class="V2Widget" :style="{'flex-shrink':'0','margin-left':'20px'}" :theme="{'size':''}" :disabled="false" :label="`filePart`" :placeholder="`请输入分片信息`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2FormInput_2" :value.sync="filePart">
                </v2-form-input>
            </div>
            <v2-component-btn :wid="`1602211610578`" class="v2-component-btn-1602211610578 V2Widget" :style="{'flex-shrink':'0','margin-bottom':'10px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`点击为上传组件增加token,分片参数`" :shape="`def`" @_op_component-btn_btn:click="_op_componentBtn_btn_1602211540144" ref="v2ComponentBtn_3">
            </v2-component-btn>
            <v2-form-upload :wid="`1602209471420`" class="v2-form-upload-1602209471420 V2Widget" :style="{'flex-shrink':'0'}" :action="uploadUrl" :success-callback="`successCallback`" :disabled="false" :type="`normal`" :list-type="`text`" :limit-type="`*`" :limit="3" :limit-size="50000" :auto-upload="true" :btn-text="`选择文件`" :btn-upload-text="`上传`" :prompt="`可以选择任意文件进行上传`" :is-required="false" :label="`使用上传组件`" :label-witdh="`100px`" :title-mode="`col`" ref="v2FormUpload_1">
            </v2-form-upload>
        </div>
        <div :wid="`1602232412538`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_9">
            <div :wid="`1602232559435`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:20px;margin-bottom:20px;min-height:20px;width:100%;" ref="v2Container_11">
                <div :wid="`1602232483952`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_25">
                    <p :style="{'word-break':'break-all'}">
                        ctx.__getVueIns('1602209471420').$refs._op_formUpload_upload.headers = {                 "X-CSRF-TOKEN":window.sessionStorage.getItem('token'),                 "filePartId":'a',                 "filePart":'1/4'             };
                    </p>
                </div>
                <div :wid="`1602236672490`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-bottom:5px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_27">
                    <p :style="{'word-break':'break-all'}">
                        X-CSRF-TOKEN：获取登陆之后的token值，获取方式window.sessionStorage.getItem('token')
                    </p>
                </div>
                <div :wid="`1602236703851`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-bottom:5px;margin-left:10px;margin-right:10px;" component="v2-component-text" ref="v2ComponentText_26">
                    <p :style="{'word-break':'break-all'}">
                        filePartId：分片标识。使用分片上传时前端需要为文件的分片生成一个统一的分片字符串标识，方便后端识别，合并。(如果不分片可以为空)
                    </p>
                </div>
                <div :wid="`1602236834095`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;margin-bottom:10px;margin-right:10px;padding-left:10px;" component="v2-component-text" ref="v2ComponentText_28">
                    <p :style="{'word-break':'break-all'}">
                        filePart：分片信息。值的格式为 currentPart/total ，其中currentPart为当前分片数，total为总分片数，例如上传4个分片中的第一块分片为"1/4"。(如果不分片可以为空)
                    </p>
                </div>
            </div>
        </div>
        <div :wid="`1602295788351`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;" component="v2-component-text" ref="v2ComponentText_29">
        </div>
        <div :wid="`1602487129454`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;flex-shrink:0;justify-content:center;" ref="v2Container_13">
            <div :wid="`1602487129039`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:20px;" component="v2-component-text" ref="v2ComponentText_31">
                <p :style="{'word-break':'break-all'}">
                    返回数据为： 
                </p>
            </div>
            <div :wid="`1602296092477`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:20px;margin-bottom:20px;" component="v2-component-text" ref="v2ComponentText_30">
                <p :style="{'word-break':'break-all'}">
                    {{successData}}
                </p>
            </div>
        </div>
        <div :wid="`1601121755648`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;" ref="v2Container_4">
            <div :wid="`1601121908136`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:25px;margin-bottom:20px;" component="v2-component-text" ref="v2ComponentText_6">
                <p :style="{'font-weight':'bold','word-break':'break-all'}">
                    调用管道封装的方法进行下载操作
                </p>
            </div>
            <v2-form-input :wid="`1602486224131`" class="V2Widget" :style="{'flex-shrink':'0'}" :theme="{'size':''}" :disabled="false" :label="`下载文件`" :placeholder="`请输入下载文件名`" :title-mode="`col`" :label-witdh="`100px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2FormInput_3" :value.sync="filePath">
            </v2-form-input>
            <v2-component-btn :wid="`1600581961819`" class="V2Widget" :style="{'margin-top':'20px','margin-left':'10px'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`下载`" :shape="`round`" @_op_component-btn_btn:click="_op_componentBtn_btn_1600581899716" ref="v2ComponentBtn_1">
            </v2-component-btn>
            <div :wid="`1602225149295`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;border-style:solid;border-color:rgb(4,190,189);border-width:5px;border-right-width:0;border-left-width:5px;border-top-width:0;border-bottom-width:0;background-color:rgb(242,242,242);margin-top:20px;" ref="v2Container_7">
                <div :wid="`1602226699428`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;width:100%;flex-shrink:0;flex-direction:column;margin-top:10px;margin-bottom:10px;margin-left:10px;" ref="v2Container_8">
                    <div :wid="`1602226733000`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;" component="v2-component-text" ref="v2ComponentText_9">
                        <p :style="{'word-break':'break-all'}">
                            调用已经封装好的下载管道,代码案例如下,在管道的封装方法中有更为详细的说明文档
                        </p>
                    </div>
                    <div :wid="`1602226769889`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;" component="v2-component-text" ref="v2ComponentText_10">
                        <p :style="{'word-break':'break-all'}">
                            pipe.download({
                        </p>
                    </div>
                    <div :wid="`1602226821806`" class="v2-component-text-1602226821806 V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_11">
                        <p :style="{'word-break':'break-all'}">
                                data:{filePath:'/2020-10-16/1602817806380.zip'},
                        </p>
                    </div>
                    <div :wid="`1602226797011`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_12">
                        <p :style="{'word-break':'break-all'}">
                               // 下载服务器上面的文件的路径，这个文件路径是自己上传的，如果要测试，自己上传看返回数据路径
                        </p>
                    </div>
                    <div :wid="`1602226828485`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_13">
                        <p :style="{'word-break':'break-all'}">
                             type:'get',
                        </p>
                    </div>
                    <div :wid="`1602226810350`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_14">
                        <p :style="{'word-break':'break-all'}">
                            // 下载请求是get请求
                        </p>
                    </div>
                    <div :wid="`1602226877899`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_15">
                        <p :style="{'word-break':'break-all'}">
                            url:'$ {axios.server}/file2/download'
                        </p>
                    </div>
                    <div :wid="`1602226795758`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_16">
                        <p :style="{'word-break':'break-all'}">
                                // 下载的后台接口路径
                        </p>
                    </div>
                    <div :wid="`1602226897611`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_17">
                        <p :style="{'word-break':'break-all'}">
                                success(response){
                        </p>
                    </div>
                    <div :wid="`1602226839901`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_18">
                        <p :style="{'word-break':'break-all'}">
                             if(response.status){ if(response.status){
                        </p>
                    </div>
                    <div :wid="`1602226854013`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_19">
                        <p :style="{'word-break':'break-all'}">
                             console.log('下载成功');
                        </p>
                    </div>
                    <div :wid="`1602226901983`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_20">
                        <p :style="{'word-break':'break-all'}">
                              }else{
                        </p>
                    </div>
                    <div :wid="`1602226872335`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_21">
                        <p :style="{'word-break':'break-all'}">
                             console.log('下载失败',response); }
                        </p>
                    </div>
                    <div :wid="`1602227021943`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;margin-left:10px;font-size:15px;" component="v2-component-text" ref="v2ComponentText_22">
                        <p :style="{'word-break':'break-all'}">
                               }
                        </p>
                    </div>
                    <div :wid="`1602226986142`" class="V2Widget" style="box-sizing:border-box;flex-shrink:0;font-size:15px;" component="v2-component-text" ref="v2ComponentText_23">
                        <p :style="{'word-break':'break-all'}">
                            })
                        </p>
                    </div>
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
                    'mapping': {"1600656088834":[],"1600660435781":[{"id":1600660435781,"modelValue":"value","dataValue":"path1","type":""},{"id":1600660435781,"modelValue":"successCallback","dataValue":"path2","type":""},{"id":1600660435781,"modelValue":"action","dataValue":"path3","type":""},{"id":1600660435781,"modelValue":"data","dataValue":"path4","type":""},{"id":1600660435781,"modelValue":"fileName","dataValue":"path5","type":""}],"1600842741970":[{"id":1600842741970,"modelValue":"action","dataValue":"uploadUrl","type":""}],"1602209471420":[{"id":1602209471420,"modelValue":"action","dataValue":"uploadUrl","type":""}],"1602296092477":[{"id":1602296092477,"modelValue":"text","dataValue":"successData","type":""}],"1602295787041":[{"id":1602295787041,"modelValue":"value","dataValue":"filePartId","type":""}],"1602295826677":[{"id":1602295826677,"modelValue":"value","dataValue":"filePart","type":""}],"1602486224131":[{"id":1602486224131,"modelValue":"value","dataValue":"filePath","type":""}]}
                },
                /* 分片标识 */
                'filePartId': '',
                /* 分片信息 */
                'filePart': '',
                /* 成功上传返回数据 */
                'successData': '后台传回来数据',
                /* 下载的文件路径 */
                'filePath': '/2020-10-16/1602817806380.zip',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {

        },
        'computed': {
            /**
             *  选择文件路径
             */
            uploadUrl() {
                /** @type {V2ViewType} */
                let ctx = this;
                return `${axios.server}/file2/upload`
            }
        },
        'watch': {

        },
        'methods': {
            /**
             *  下载点击事件
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600581899716($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\nconsole.log(123)","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                console.log(123)
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                // debugger
                // const loading = ctx.$loading({
                //     lock: true,
                //     text: '加载中',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(255, 255, 255, 0.9)',
                //     target: ctx.$el
                // });
                
                if(ctx.filePath!=''){
                pipe.download({
                    data:{filePath: ctx.filePath},
                    type:'get',
                    url:`${axios.server}/file2/download`,
                    success(response){
                        debugger
                        if(response.status==200){
                           ctx.$message({
                                        type: 'success',
                                        message: '开始下载，请稍候…'
                                    });
                        }else{
                            ctx.$message({
                                        type: 'error',
                                        message: '下载失败，请确认输入框是否为返回文件名…'
                                    });
                        }
                    }
                })
                }else{
                     ctx.$message({
                                        type: 'error',
                                        message: '请输入下载文件名'
                                    });
                }
                
                
                // alert(ctx.path1)
                // console.log(ctx.path1)
            },
            /**
             *  _op_componentBtn_btn_1600659528685
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1600659528685(vueIns) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                debugger
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                // const loading = ctx.$loading({
                //     lock: true,
                //     text: '加载中',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(255, 255, 255, 0.9)',
                //     target: ctx.$el
                // });
            },
            /**
             *  按钮点击
             *  @param 组件的vue实例 vueIns
             */
            _op_componentBtn_btn_1602211540144($event, vueIns=this.$refs['v2ComponentBtn_3']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-/ {"name":"custom","main":"AGREE-CUSTOM","desp":"事件准备","code":"/**\n* 事件绑定在vue实例上，第一个参数是vue实例。\n* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN\n**/\n\n//函数内直接用ctx代替this访问vue页面的数据。\nconst ctx = this;\n\n","showConfig":true} /-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                
                const ctx = this;
                
                
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                
                
                ctx.__getVueIns('1602209471420').$refs._op_formUpload_upload.headers = {
                                "X-CSRF-TOKEN":window.sessionStorage.getItem('token'),
                                "filePartId":ctx.filePartId,
                                "filePart":ctx.filePart
                            };
                            
                if(ctx.__getVueIns('1602209471420').$refs._op_formUpload_upload.headers){
                    ctx.successData='增加token成功';
                 console.log('增加token成功',ctx.__getVueIns('1602209471420').$refs._op_formUpload_upload.headers)
                
                }
                
                ctx.successCallback();         
                        
                // ctx.__getVueIns('1602209471420').$refs._op_formUpload_upload.submit()
            },
            /**
             *  成功回调
             *  @param 返回参数 res
             *  @param 文件 file
             *  @param fileList fileList
             */
            successCallback(res, file, fileList) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                console.log(res)
                console.log(file)
                console.log(FileList)
                
                ctx.successData = res
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