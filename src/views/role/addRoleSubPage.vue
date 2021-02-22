<template>
    <v2container :wid="`root`" style="display:block;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;" class="form-user-info-wrapper V2Container">
        <v2-form-input :wid="`1578880992719`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :disabled="isDisable" :theme="{}" :label="`角色名`" :placeholder="`请输入角色名`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" ref="v2-form-input_1578880992719" :value.sync="roleName">
        </v2-form-input>
        <v2-form-input :wid="`1578881040593`" class="form-textarea-margin v2-form-input-1578881040593 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':''}" :disabled="false" :label="`描述`" :placeholder="`请填写描述`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`textarea`" :rows="5" :maxlength="200" :show-word-limit="true" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1578881040593" :value.sync="desp">
        </v2-form-input>
        <div :wid="`1578881127712`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1578881127712">
            <v2-component-btn :wid="`1578881089113`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578894579000" ref="v2-component-btn_1578881089113">
            </v2-component-btn>
            <v2-component-btn :wid="`1578881126091`" class="common-btn-focus margin-right20 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" ref="v2-component-btn_1578881126091">
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
                        'config': [{"name":"roleForm","desc":"角色信息表单","validate_when":"blur","submit_emitters":[{"widget_id":1578881126091,"event":"(default)"}],"inputs":{"1578880992719":{"desc":"角色名","validation":{"kind":"single-regexp","value":{"value":"ROLE_[A-Z_]+","message":"角色名以ROLE_开头，只包含大写字母和下划线"}},"name":"roleName"},"1578881040593":{"desc":"描述","validation":{"kind":"single-js","value":{"value":"(value, vueIns, ctx) => value.length <=200","message":"角色描述长度限制为 0 到 200 个字符"}},"name":"desp"},"1578881126091":{"desc":"提交","validation":{"kind":"dict","value":{"ref":null,"rules":[],"disabled_rules":[]}},"name":"提交"}}}],
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
                                    DESCRIPTION:data.desp||'',
                                    name:data.roleName||''
                                };
                                if(ctx.AParams.id){
                                    params.id = ctx.AParams.id;
                                    ctx.$axios.post(`${axios.server}/role/update`,params).then(res=>{
                            
                                        if(res.success){
                                            ctx.$notify({
                                                title: '编辑角色成功',
                                                type: 'success'
                                            });
                                            ctx.$root.confirm();
                                            ctx.close();
                                        }else{
                                            ctx.$notify({
                                                title: res.msg,
                                                type: 'error'
                                            });
                                            ctx.close();
                                        }
                                    }).catch(error=>{
                                        console.log(error);
                                    })
                                }else{
                                    ctx.$axios.post(`${axios.server}/role/add`,params).then(res=>{
                            
                                        if(res.success){
                                            ctx.$notify({
                                                title: '新增角色成功',
                                                type: 'success'
                                            });
                                            ctx.$root.confirm();
                                            ctx.close();
                                        }else{
                                            ctx.$notify({
                                                title: res.msg,
                                                type: 'error'
                                            });
                                            //ctx.close();
                                        }
                                    }).catch(error=>{
                                        console.log(error);
                                    })
                                }
                            
                            })
                        ]
                    },
                    'mapping': {"1578880992719":[{"id":1578880992719,"modelValue":"value","dataValue":"roleName","type":""},{"id":1578880992719,"modelValue":"disabled","dataValue":"isDisable","type":"boolean"}],"1578881040593":[{"id":1578881040593,"modelValue":"value","dataValue":"desp","type":""}]}
                },
                /* 角色名 */
                'roleName': ``,
                /* 描述 */
                'desp': ``,
                /* 是否禁填 */
                'isDisable': false,
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
             *  关闭新增角色子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578894579000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.close();
            },
            /**
             *  获取角色详情
             */
            getRoleDetail() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.$axios.get(`${axios.server}/role/get/${ctx.AParams.id}`).then(res=>{
                    if(res.success&&res.status){
                        ctx.roleName = res.obj&&res.obj.name;
                        ctx.desp = res.obj&&res.obj.desc;
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  显示表单提示
             */
            setFormToolTips() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                pipe.tooltip(this.__getVueIns('1578880992719').$refs._op_formInput_input, {
                    content: '角色名以ROLE_开头，只包含大写字母和下划线',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578881040593').$refs._op_formInput_input, {
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
            //函数内直接用ctx代替this访问vue页面的数据。
            const ctx = this;
            if(ctx.AParams.id){
                ctx.getRoleDetail();
                ctx.isDisable = true;
            }
            ctx.setFormToolTips();
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
   // background:#457ce2;
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
   // color:#606266;
  //  background:#fff;
}
.margin-right20{
    margin-right:0 0 20px 0!important;
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