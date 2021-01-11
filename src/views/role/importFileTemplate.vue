<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;" class="form-user-info-wrapper V2Container">
        <v2-component-btn :wid="`1579073644646`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'text','size':''}" :disabled="false" :loading="false" :btn-name="`点击下载模板`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1579075628000" ref="v2-component-btn_1579073644646">
        </v2-component-btn>
        <v2-form-upload :wid="`1579073713062`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :action="uploadUrl" :limitType="fileType" :disabled="false" :type="`drag`" :list-type="`text`" :limit-type="fileType" :limit="1" :limit-size="2" :auto-upload="false" :btn-text="`选择文件`" :btn-upload-text="`上传`" :prompt="`先下载文件模板，在模板内填写数据，在导入模板，仅支持excel文件导入`" :is-required="false" :label-witdh="0" :title-mode="`col`" ref="v2-form-upload_1579073713062">
        </v2-form-upload>
        <div :wid="`1579074078301`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1579074078301">
            <v2-component-btn :wid="`1579074107305`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1579074044000" ref="v2-component-btn_1579074107305">
            </v2-component-btn>
            <v2-component-btn :wid="`1579074116294`" class="common-btn-focus margin-right20 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`导入`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1579074066000" ref="v2-component-btn_1579074116294">
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
                    'mapping': {"1579073713062":[{"id":1579073713062,"modelValue":"action","dataValue":"uploadUrl","type":""},{"id":1579073713062,"modelValue":"limitType","dataValue":"fileType","type":""}]}
                },
                /* 上传地址 */
                'uploadUrl': '${axios.server}/role/import',
                /* 文件格式 */
                'fileType': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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
             *  关闭导入子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579074044000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
                
            },
            /**
             *  导入文件
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579074066000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.__getVueIns('1579073713062').$refs._op_formUpload_upload.submit();
            },
            /**
             *  下载模板
             */
            downloadTemplate() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/role/template`, {
                    responseType: 'blob'
                }).then(res => {
                    if (!res) {
                        ctx.$notify({
                            title: '下载模板失败',
                            type: 'error'
                        });
                        return;
                    } else {
                        var blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }),
                            url = window.URL.createObjectURL(blob),
                            aLink = document.createElement("a");
                
                        aLink.style.display = "none";
                        aLink.href = url;
                        aLink.setAttribute("download", "template.xlsx");
                        document.body.appendChild(aLink);
                        aLink.click();
                        document.body.removeChild(aLink); //下载完成移除元素
                        window.URL.revokeObjectURL(url);
                        ctx.$notify({
                            type: 'success',
                            title: '下载模板成功'
                        });
                    }
                }).catch(error => {
                    console.log(error);
                })
            },
            /**
             *  下载模板
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579075628000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：downloadTemplate
                方法描述：下载模板
                
                **/
                ctx.downloadTemplate();
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
            //函数内直接用ctx代替this访问vue页面的数据。
            const ctx = this;
            
            ctx.__getVueIns('1579073713062').$refs._op_formUpload_upload.headers = {
                "X-CSRF-TOKEN":window.sessionStorage.getItem('token')
            };
            ctx.__getVueIns('1579073713062').$refs._op_formUpload_upload.onSuccess = function (res,file,fileList) {
                
                if(res.success){
                    ctx.$notify({
                        title: '导入成功',
                        type: 'success'
                    });
                    ctx.close();
                    ctx.$root.confirm();
                }else{
                    ctx.$notify({
                        title: '导入失败',
                        message:res.msg,
                        type: 'error'
                    });
                    ctx.close();
                }
            
            }
            ctx.__getVueIns('1579073713062').$refs._op_formUpload_upload.onError = function (error,file,fileList) {
                ctx.$notify({
                    title: '导入失败',
                    type: 'error'
                });
                ctx.close();
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
.diaglog-btn-ctn{
    position:absolute!important;
    bottom:0;
    width:100%;
    right:0;
    border-top:1px solid #e5e5e5;
}
.common-btn-focus{
    //background:#457ce2;
    height:32px;
   // color:#fff;
    line-height:32px;
    padding-top:0;
    padding-bottom:0;
}
.common-btn-normal{
    height:32px;
    line-height:32px;
    padding-top:0;
    padding-bottom:0;
    border:1px solid #dcdfe6;
    //color:#606266;
   // background:#fff;
}
.margin-right20{
    margin-right:20px!important;
}
.form-user-info-wrapper{
    width:70%;
    margin-left:auto!important;
    margin-right:auto!important;

    .el-button--text{
        margin:0 0 0 10px!important;
    }
}
</style>