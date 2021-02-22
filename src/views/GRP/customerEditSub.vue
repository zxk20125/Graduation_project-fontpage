<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;flex-shrink:0;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;height:auto;" class="form-user-info-wrapper V2Container">
        <v2-form-input :wid="`1580871567706`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s','flex-shrink':0}" :disabled="isDisabled" :labelWitdh="labelWidth" :theme="{'size':''}" :label="`权限名称`" :placeholder="`请输入权限名称`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2-form-input_1580871567706" :value.sync="name">
        </v2-form-input>
        <v2-form-select :wid="`1580876549784`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :optionConfig="authorityList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="authorityList" :options="[{'active':'true','label':'','value':''}]" :label="`父级权限`" :placeholder="`请选择父级权限`" :label-witdh="labelWidth" :title-mode="`col`" :clearable="false" :filterable="true" :is-required="false" ref="v2-form-select_1580876549784" :value.sync="parentId">
        </v2-form-select>
        <div :wid="`1580872309891`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;" ref="v2Container_1580872309891">
            <v2-component-btn :wid="`1580872264258`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1580875777000" ref="v2-component-btn_1580872264258">
            </v2-component-btn>
            <v2-component-btn :wid="`1580872338903`" class="margin-right20 common-btn-focus V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" ref="v2-component-btn_1580872338903">
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
                        'config': [{"name":"authority_form_568","desc":"权限表单","validate_when":"blur","submit_emitters":[{"widget_id":1580872338903,"event":"(default)"}],"inputs":{"1580871619270":{"desc":"描述","validation":{"kind":"single-js","value":{"value":"(value, vueIns, ctx) => value.length<=200","message":"权限描述长度限制为 0 到 200 个字符"}},"name":"desc"},"1580871567706":{"desc":"权限名称","validation":{"kind":"single-regexp","value":{"value":"[a-zA-Z]{1,50}","message":"权限名长度限制为 1 到 50 个字符，且全为英文字符"}},"name":"name"},"1580872338903":{"desc":"提交","validation":{"kind":"dict","value":{"ref":null,"rules":[],"disabled_rules":[]}},"name":"提交"}}}],
                        'validate_callbacks': [
                            (function(result, ctx, resolve, reject){
                                /**
                                 *  result: {
                                 *      ok: boolean,
                                 *      child_results: Array<{
                                 *          ok: boolean,  // 输入是否正确
                                 *          message?: string,  // 错误提示
                                 *          fieldName: string,  // 字段名
                                 *          fieldDesc: string,  // 字段描述
                                 *          wid: string,  // 输入组件 ID
                                 *          vueIns: VueComponent  // 输入组件实例
                                 *      }>
                                 *  }  // 校验结果列表
                                 *  ctx: VueComponent  // 页面的组件实例
                                 *  resolve: () => void  // 校验完成，可以提交
                                 *  reject: () => void  // 校验完成，不能提交
                                 */
                                console.log('字段:')
                                result.child_results.forEach(r => {
                                    if (r.ok) {
                                        console.log(r.fieldName, '输入正确')
                                    } else {
                                        console.log(r.fieldName, '输入不正确', r.message)
                                    }
                                    if (r.vueIns.$showResult) {
                                        // 在 r 所对应的组件上显示错误提示，
                                        // 若无错误则清除提示。入参 { ok: boolean, message?: string }
                                        r.vueIns.$showResult(r)
                                    }
                                })
                                if (result.ok) {
                                    console.log('=> 表单输入正确，验证通过')
                                    resolve()
                                } else {
                                    console.log('=> 表单输入不正确')
                                    reject()
                                }
                            })
                        ],
                        'submit_callbacks': [
                            (function(data, ctx){
                                /**
                                 *  data: { [key: string]: string }  // 要提交的数据
                                 *  ctx: VueComponent  // 页面的组件实例
                                 */
                                var params = {
                                    name:ctx.name,
                                    desc:ctx.desc,
                                    parentId:ctx.parentId,
                                };
                                ctx.AParams.id&&(params.id=ctx.AParams.id);
                            
                                ctx.$root.confirm(params);
                            })
                        ]
                    },
                    'mapping': {"1580871567706":[{"id":1580871567706,"modelValue":"value","dataValue":"name","type":""},{"id":1580871567706,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1580871567706,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1580871641330":[{"id":1580871641330,"modelValue":"value","dataValue":"parentId","type":""},{"id":1580871641330,"modelValue":"optionConfig","dataValue":"authorityList","type":""},{"id":1580871641330,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1580871619270":[{"id":1580871619270,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1580871619270,"modelValue":"value","dataValue":"desc","type":""}],"1580876549784":[{"id":1580876549784,"modelValue":"value","dataValue":"parentId","type":""},{"id":1580876549784,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1580876549784,"modelValue":"optionConfig","dataValue":"authorityList","type":""}]}
                },
                /* 标题宽度 */
                'labelWidth': '100px',
                /* 权限名称 */
                'name': ``,
                /* 父级权限 */
                'parentId': ``,
                /* 权限描述 */
                'desc': ``,
                /* 权限列表 */
                'authorityList': [],
                /* 是否禁填 */
                'isDisabled': false,
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
             *  获取权限列表
             */
            getAuthorityList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/authority/list`).then(res=>{
                    if(res.status&&res.success){
                       
                        ctx.authorityList = res.obj.map(function(item){
                            return {
                                value:item.id,
                                label:item.name
                            }
                        })
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  设置表单提示
             */
            setFormTips() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                pipe.tooltip(this.__getVueIns('1580871567706').$refs._op_formInput_input, {
                    content: '权限名长度限制为 1 到 50 个字符，且全为英文字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1580876549784').$refs._op_formSelect_select, {
                    content: '请选择父级权限',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                
                pipe.tooltip(this.__getVueIns('1580871619270').$refs._op_formInput_input, {
                    content: '权限描述长度限制为 0 到 200 个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
            },
            /**
             *  关闭子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1580875777000($event, vueIns=this.$refs['v2-component-btn_1580872264258']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
            },
            /**
             *  权限详情
             */
            getAuthorityDetail() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/authority/get/${ctx.AParams.id}`).then(res=>{
                    if(res.success&&res.status){
                        var obj = res.obj;
                
                        ctx.name=obj&&obj.name;
                        ctx.parentId  = obj&&obj.parentId;
                        ctx.desc= obj&&obj.desc;
                
                    }
                }).catch(error=>{
                    console.log(error);
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
            const ctx = this;
            ctx.getAuthorityList();
            if(ctx.AParams.id){
                ctx.isDisabled = true;
                ctx.getAuthorityDetail();
            }
            ctx.setFormTips();
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
    position:absolute !important;
    bottom:0;
    width:100%;
    right:0;
    border-top:1px solid #e5e5e5;
}
.common-btn-focus{
  //  background:#457ce2;
    height:32px;
    color:#fff;
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
    color:#606266;
    background:#fff;
}
.margin-right20{
    margin-right:20px !important;
}
.form-user-info-wrapper{
    width:70%;
    margin-left:auto !important;
    margin-right:auto !important;
}
.margin-bottom20{
    margin-bottom:20px;
}
.form-textarea{
    width:100%;
    margin:0 0 20px 0 !important;
}
</style>