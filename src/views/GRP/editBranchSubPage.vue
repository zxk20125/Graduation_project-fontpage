<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;height:auto;flex-shrink:0;" class="V2Container">
        <div :wid="`1578552432842`" class="V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;flex-shrink:0;" ref="v2Container_1578552432842">
            <div :wid="`1578552513559`" class="form-user-info-wrapper V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:block;flex-direction:column;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;height:226.00px;" ref="v2Container_1578552513559">
                <v2-form-input :wid="`1579252216073`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :label-witdh="labelWidth" :disabled="false" :label="`网点名`" :placeholder="`请输入网点名`" :title-mode="`col`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :value.sync="dotName" ref="v2-form-input_1579252216073">
                </v2-form-input>
                <v2-form-input :wid="`1578552443987`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :label-witdh="labelWidth" :disabled="false" :label="`网点城市`" :placeholder="`请输入网点城市`" :title-mode="`col`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :value.sync="dotCity" ref="v2-form-input_1578552443987">
                </v2-form-input>
                <v2-form-input :wid="`1614610993221`" class="v2-form-input-1614610993221 V2Widget" :style="{'position':'relative','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`网点地址`" :placeholder="`请输入网点地址`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :if="true" ref="v2FormInput_1" :value.sync="dotAddress">
                </v2-form-input>
                <v2-form-input :wid="`1578552704152`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :label-witdh="labelWidth" :disabled="false" :label="`联系电话`" :placeholder="`请输入联系电话`" :title-mode="`col`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :value.sync="dotPhone" ref="v2-form-input_1578552704152">
                </v2-form-input>
            </div>
        </div>
        <div :wid="`1579166732561`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;" ref="v2Container_1579166732561">
            <v2-component-btn :wid="`1579166663051`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578929870000" ref="v2-component-btn_1579166663051">
            </v2-component-btn>
            <v2-component-btn :wid="`1579166655478`" class="common-btn-focus margin-right20 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" ref="v2-component-btn_1579166655478">
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
                        'config': [{"name":"addUserForm","desc":"新增用户表单","validate_when":"blur","submit_emitters":[{"widget_id":1579166655478,"event":"(default)"}],"inputs":{"1578552559896":{"desc":"昵称","validation":{"kind":"single-regexp","value":{"value":"\\S{1,50}","message":"昵称不能为空,长度限制在1到50个字符"}},"name":"nickname"},"1578552443987":{"desc":"密码","validation":{"kind":"single-js","value":{"value":"(value, vueIns, ctx) => {\r\n    if(value){\r\n        return /^\\S{6,24}$/.test(value);\r\n    }else{\r\n        return true;\r\n    }\r\n}","message":"密码为6·24位"}},"name":"password"},"1578552629581":{"desc":"确认密码","validation":{"kind":"single-js","value":{"value":"(value, vueIns, ctx) => {\r\n    if(value){\r\n        return value===ctx.userData.password;\r\n    }else{\r\n        if(ctx.userData.password){\r\n            return false;\r\n        }else{\r\n            return true;\r\n        }\r\n    }\r\n    \r\n}","message":"两次密码不一致"}},"name":"repeatPwd"},"1578552704152":{"desc":"联系电话","validation":{"kind":"single-regexp","value":{"value":"1[3|7|8]\\d{9}$|^19[8-9]\\d{8}$|^166\\d{8}|^15[0-3|5-9]\\d{8}|^14[5|7]\\d{8}","message":"请输入为11位的手机号码"}},"name":"phone"},"1578552715892":{"desc":"邮箱","validation":{"kind":"single-regexp","value":{"value":"\\S+@\\S+\\.\\S+","message":"邮箱不能为空"}},"name":"email"},"1578552940623":{"desc":"状态","validation":{"kind":"dict","value":{"ref":null,"rules":[],"disabled_rules":[]}},"name":"status"},"1578553052538":{"desc":"描述","validation":{"kind":"single-js","value":{"value":"(value, vueIns, ctx) => value.length<=200","message":"用户描述长度限制为 0 到 200 个字符"}},"name":"desp"},"1579166655478":{"desc":"提交","validation":{"kind":"dict","value":{"ref":null,"rules":[],"disabled_rules":[]}},"name":"submitBtn"}}}],
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
                                //console.log('字段:')
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
                                    desc: data.desp||'',
                                    email: data.email||'',
                                    nickname: data.nickname||'',
                                    phone: data.phone||'',
                                    status: data.status?'1':'2'
                                };
                                data.password&&(params.password=data.password);
                                if(ctx.AParams.id){
                                    params.id = ctx.AParams.id;
                                    ctx.$root.confirm(params);
                            
                                }
                            
                                
                            })
                        ]
                    },
                    'mapping': {"1578552493733":[{"id":1578552493733,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552493733,"modelValue":"value","dataValue":"userData.username","type":""}],"1578552559896":[{"id":1578552559896,"modelValue":"value","dataValue":"userData.nickname","type":""},{"id":1578552559896,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578552443987":[{"id":1578552443987,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552443987,"modelValue":"value","dataValue":"dotCity","type":""}],"1578552629581":[{"id":1578552629581,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552629581,"modelValue":"value","dataValue":"userData.repeatPwd","type":""}],"1578552704152":[{"id":1578552704152,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552704152,"modelValue":"value","dataValue":"dotPhone","type":""}],"1578552715892":[{"id":1578552715892,"modelValue":"value","dataValue":"userData.email","type":""},{"id":1578552715892,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578553052538":[{"id":1578553052538,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578553052538,"modelValue":"value","dataValue":"userData.desp","type":""}],"1578552940623":[{"id":1578552940623,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552940623,"modelValue":"value","dataValue":"userData.status","type":""}],"1579252216073":[{"id":1579252216073,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1579252216073,"modelValue":"value","dataValue":"dotName","type":""}],"1613226146968":[{"id":1613226146968,"modelValue":"value","dataValue":"staffData.staff_phone","type":""}],"1614610971726":[{"id":1614610971726,"modelValue":"value","dataValue":"staffData.staff_phone1614610900013","type":""},{"id":1614610971726,"modelValue":"labelWitdh","dataValue":"labelWidth1614610900013","type":""}],"1614610993221":[{"id":1614610993221,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1614610993221,"modelValue":"value","dataValue":"dotAddress","type":""}]}
                },
                /* 表单标题宽度 */
                'labelWidth': '100px',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 网点名 */
            'dotName': {
                'default': () => {
                    return ''
                }
            },
            /* 联系电话 */
            'dotPhone': {
                'default': () => {
                    return ''
                }
            },
            /* 网点地址 */
            'dotAddress': {
                'default': () => {
                    return ''
                }
            },
            /* 网点所属城市 */
            'dotCity': {
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
             *  关闭编辑用户子页面
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578929870000($event, vueIns=this.$refs['v2-component-btn_1579166663051']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
            },
            /**
             *  获取网点数据
             */
            getBranchDetail() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/branchInfo/get/${ctx.AParams.id}`).then(res=>{
                    if(res.success&&res.status){
                        var obj = res.obj;
                
                
                        ctx.dotName=obj.dotName;
                        ctx.dotPhone=obj.dotPhone;
                        ctx.dotAddress=obj.dotAddress;
                        ctx.dotCity=obj.dotCity;
                
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  设置表单提示
             */
            setFormToolTips() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                pipe.tooltip(this.__getVueIns('1578552559896').$refs._op_formInput_input, {
                    content: '昵称长度限制为 1 到 50 个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                pipe.tooltip(this.__getVueIns('1578552443987').$refs._op_formInput_input, {
                    content: '密码长度限制为 6 到 24 个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578552629581').$refs._op_formInput_input, {
                    content: '请再次输入密码',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                pipe.tooltip(this.__getVueIns('1578552704152').$refs._op_formInput_input, {
                    content: '联系电话长度限制为11个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578552715892').$refs._op_formInput_input, {
                    content: '请输入邮箱',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                
                pipe.tooltip(this.__getVueIns('1578553052538').$refs._op_formInput_input, {
                    content: '用户描述长度限制为 0 到 200 个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
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
            if (ctx.AParams.id) {
                ctx.getBranchDetail();
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
  //  color:#fff;
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
   // color:#606266;
   // background:#fff;
}
.margin-right20{
    margin-right:20px!important;
}
.form-user-info-wrapper{
    width:70%;
    margin-left:auto!important;
    margin-right:auto!important;
}
.margin-bottom20{
    margin-bottom:20px;
}
.form-textarea-margin{
    margin:0 0 20px 0!important;
}
</style>