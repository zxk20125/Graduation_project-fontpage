<template>
    <v2container :wid="`root`" style="box-sizing:border-box;" class="V2Container">
        <div :wid="`1578552432842`" class="V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;flex-shrink:0;" ref="v2Container_1578552432842">
            <div :wid="`1578552513559`" class="form-user-info-wrapper V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:block;flex-direction:column;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;height:351.00px;" ref="v2Container_1578552513559">
                <v2-form-input :wid="`1579252216073`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`姓名`" :placeholder="`请输入用户名`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2-form-input_1579252216073" :value.sync="name">
                </v2-form-input>
                <v2-form-input :wid="`1578552443987`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`年龄`" :placeholder="`请输入员工年龄`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2-form-input_1578552443987" :value.sync="age">
                </v2-form-input>
                <v2-form-input :wid="`1578552704152`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`联系电话`" :placeholder="`请输入联系电话`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2-form-input_1578552704152" :value.sync="phone">
                </v2-form-input>
                <v2-form-input :wid="`1614404374059`" class="v2-form-input-1614404374059 V2Widget" :style="{'position':'relative','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`账号`" :placeholder="`请输入账号`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :if="true" ref="v2FormInput_3" :value.sync="login_name">
                </v2-form-input>
                <v2-form-input :wid="`1614404409443`" class="v2-form-input-1614404409443 V2Widget" :style="{'position':'relative','overflow':'hidden','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':'medium'}" :disabled="false" :label="`身份证`" :placeholder="`请输入身份证`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :if="true" ref="v2FormInput_4" :value.sync="id_no">
                </v2-form-input>
                <v2-form-select :wid="`1613225479973`" class="v2-form-select-1613225357594 V2Widget" :style="{'width':'220px','align-self':'auto','margin-left':'20px','padding-left':'10px','margin-bottom':'10px','flex-shrink':0}" :optionConfig="sexList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="sexList" :options="[]" :label="`性别`" :placeholder="`请选择`" :label-witdh="`80px`" :title-mode="`col`" :clearable="false" :prefix="false" :filterable="true" :is-required="false" :if="true" ref="v2FormSelect_2" :value.sync="sex">
                </v2-form-select>
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
                    'mapping': {"1578552493733":[{"id":1578552493733,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552493733,"modelValue":"value","dataValue":"userData.username","type":""}],"1578552559896":[{"id":1578552559896,"modelValue":"value","dataValue":"userData.nickname","type":""},{"id":1578552559896,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578552443987":[{"id":1578552443987,"modelValue":"value","dataValue":"age","type":""},{"id":1578552443987,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578552629581":[{"id":1578552629581,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552629581,"modelValue":"value","dataValue":"userData.repeatPwd","type":""}],"1578552704152":[{"id":1578552704152,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552704152,"modelValue":"value","dataValue":"phone","type":""}],"1578552715892":[{"id":1578552715892,"modelValue":"value","dataValue":"userData.email","type":""},{"id":1578552715892,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578553052538":[{"id":1578553052538,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578553052538,"modelValue":"value","dataValue":"userData.desp","type":""}],"1578552940623":[{"id":1578552940623,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578552940623,"modelValue":"value","dataValue":"userData.status","type":""}],"1579252216073":[{"id":1579252216073,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1579252216073,"modelValue":"value","dataValue":"name","type":""}],"1613226146968":[{"id":1613226146968,"modelValue":"value","dataValue":"staffData.staff_phone","type":""}],"1614404374059":[{"id":1614404374059,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1614404374059,"modelValue":"value","dataValue":"login_name","type":""}],"1614404409443":[{"id":1614404409443,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1614404409443,"modelValue":"value","dataValue":"id_no","type":""}],"1613225479973":[{"id":1613225479973,"modelValue":"value","dataValue":"sex","type":""},{"id":1613225479973,"modelValue":"optionConfig","dataValue":"sexList","type":""}],"1614405566403":[{"id":1614405566403,"modelValue":"value","dataValue":"phone1614405490447","type":""},{"id":1614405566403,"modelValue":"labelWitdh","dataValue":"labelWidth1614405490447","type":""}]}
                },
                /* 表单标题宽度 */
                'labelWidth': '100px',
                /* 性别 */
                'sexList': [
                  {
                    "value": "男",
                    "label": "男"
                  },
                  {
                    "value": "女",
                    "label": "女"
                  }
                ],
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 姓名 */
            'name': {
                'default': () => {
                    return ''
                }
            },
            /* 账号 */
            'login_name': {
                'default': () => {
                    return ''
                }
            },
            /* 手机 */
            'phone': {
                'default': () => {
                    return ''
                }
            },
            /* 性别 */
            'sex': {
                'default': () => {
                    return ''
                }
            },
            /* 年龄 */
            'age': {
                'default': () => {
                    return ''
                }
            },
            /* 身份证 */
            'id_no': {
                'default': () => {
                    return ''
                }
            },
            /* undefined初始数据 */
            'labelWidth1614405490447': {
                'default': () => {
                    return ``
                }
            },
            /* undefined初始数据 */
            'phone1614405490447': {
                'default': () => {
                    return ``
                }
            },
            /* undefined初始数据 */
            'phone1614405490447': {
                'default': () => {
                    return ``
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
             *  获取客户数据
             */
            getCustomerDeatil() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/customerInfo/get/${ctx.AParams.id}`).then(res=>{
                    if(res.success&&res.status){
                        var obj = res.obj;
                
                        ctx.name=obj&&obj.customerName;
                        ctx.login_name = obj&&obj.customerLoginName;
                        ctx.age  = obj&&obj.customerAge;
                        ctx.phone= obj&&obj.customerPhone;
                        ctx.id_no= obj&&obj.idCardNo;
                        ctx.sex= obj&&obj.customerSex;
                
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
            console.log(ctx.AParams.id)
            if(ctx.AParams.id){
                ctx.getCustomerDeatil();
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