<template>
    <v2container :wid="`root`" style="display:flex;height:auto;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;flex-shrink:0;" class="V2Container">
        <div :wid="`1614764771020`" class="v2Container-1614764771020 V2Container" style="position:relative;overflow:hidden;display:flex;height:auto;box-sizing:border-box;align-self:stretch;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;justify-content:center;" :if="true" ref="v2Container_1">
            <div :wid="`1614764745782`" class="v2Container-1614764745782 V2Container" style="box-sizing:border-box;align-self:stretch;display:block;flex-direction:column;align-items:flex-start;margin-left:0;overflow:hidden;position:relative;flex-shrink:0;" :if="true" ref="v2Container_2">
                <v2-form-input :wid="`1614764756124`" class="v2-form-input-1614764756124 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`姓名`" :placeholder="`请输入姓名`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_1" :value.sync="name">
                </v2-form-input>
                <v2-form-input :wid="`1614764837231`" class="v2-form-input-1614764837231 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`年龄`" :placeholder="`请输入年龄`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_2" :value.sync="age">
                </v2-form-input>
                <v2-form-input :wid="`1614764830485`" class="v2-form-input-1614764830485 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`联系电话`" :placeholder="`请输入联系电话`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4" :value.sync="phone">
                </v2-form-input>
                <v2-form-select :wid="`1614765164838`" class="v2-form-select-1614765164838 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'195.00px'}" :optionConfig="branchList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="branchList" :options="[]" :label="`网点`" :placeholder="`请选择`" :label-witdh="`80px`" :title-mode="`col`" :clearable="false" :prefix="false" :filterable="true" :is-required="false" :if="true" ref="v2FormSelect_1" :value.sync="branch">
                </v2-form-select>
                <v2-form-select :wid="`1614765166810`" class="v2-form-select-1614765166810 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'195.00px'}" :optionConfig="sexList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="sexList" :options="[]" :label="`性别`" :placeholder="`请选择`" :label-witdh="`80px`" :title-mode="`col`" :clearable="false" :prefix="false" :filterable="true" :is-required="false" :if="true" ref="v2FormSelect_2" :value.sync="sex">
                </v2-form-select>
            </div>
        </div>
        <div :wid="`1614766242007`" class="v2Container-1614766242007 V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;flex-shrink:0;" :if="true" ref="v2Container_4">
            <v2-component-btn :wid="`1614774384400`" class="v2-component-btn-1614774384400 V2Widget" :style="{'align-self':'auto','margin-top':'5px','flex-shrink':0}" :theme="{'btnType':'normal&shape=plain','size':'small'}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614781368622" ref="v2ComponentBtn_7">
            </v2-component-btn>
            <v2-component-btn :wid="`1614766284343`" class="v2-component-btn-1614765251471 V2Widget" :style="{'align-self':'auto','margin-top':'5px','margin-right':'10px'}" :theme="{'btnType':'primary','size':'small'}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614781011043" ref="v2ComponentBtn_5">
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
                        'config': [],
                        'validate_callbacks': [

                        ],
                        'submit_callbacks': [

                        ]
                    },
                    'mapping': {"1614764756124":[{"id":1614764756124,"modelValue":"value","dataValue":"name","type":""}],"1614764837231":[{"id":1614764837231,"modelValue":"value","dataValue":"age","type":""}],"1614764830485":[{"id":1614764830485,"modelValue":"value","dataValue":"phone","type":""}],"1614765164838":[{"id":1614765164838,"modelValue":"value","dataValue":"branch","type":""},{"id":1614765164838,"modelValue":"optionConfig","dataValue":"branchList","type":""}],"1614765166810":[{"id":1614765166810,"modelValue":"value","dataValue":"sex","type":""},{"id":1614765166810,"modelValue":"optionConfig","dataValue":"sexList","type":""}]}
                },
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
            /* 年龄 */
            'age': {
                'default': () => {
                    return ''
                }
            },
            /* 联系电话 */
            'phone': {
                'default': () => {
                    return ''
                }
            },
            /* 网点列表 */
            'branchList': {
                'default': () => {
                    return []
                }
            },
            /* 性别列表 */
            'sexList': {
                'default': () => {
                    return [
                      {
                        "value": '男',
                        "label": "男"
                      },
                      {
                        "value": '女',
                        "label": "女"
                      }
                    ]
                }
            },
            /* 网点 */
            'branch': {
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
            /* 员工编号 */
            'staffId': {
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
             *  获取配送员信息
             */
            getdeliverInfo() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/staffInfo/get/${ctx.AParams.staffId}`).then(res=>{
                    if(res.success&&res.status){
                        var obj = res.obj;
                
                        ctx.name=obj&&obj.staffName;
                        ctx.age  = obj&&obj.staffAge;
                        ctx.phone= obj&&obj.staffPhone;
                        ctx.sex= obj&&obj.staffSex;
                        ctx.branch= obj&&obj.dotId;
                        ctx.staffId=obj&&obj.staffId
                        
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  获取网点列表
             */
            getbranchList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/branchInfo/list`).then(res=>{
                    if(res.status&&res.success){
                       
                        ctx.branchList = res.obj.map(function(item){
                            return {
                                value:item.dotId,
                                label:item.dotName
                            }
                        })
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  v2_component_btn_1614781011043
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614781011043($event, vueIns=this.$refs['v2ComponentBtn_5']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"params": {}
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                const ctx = this;
                ctx.submitData();
            },
            /**
             *  提交方法
             */
            submitData() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                let dataList={}
                console.log(1)
                dataList={
                    staffId:ctx.staffId,
                    staffName:ctx.name,
                    staffAge:ctx.age,
                    staffSex:ctx.sex,
                    dotId:ctx.branch,
                    staffPhone:ctx.phone
                }
                ctx.$root.confirm(dataList);
            },
            /**
             *  v2_component_btn_1614781368622
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614781368622($event, vueIns=this.$refs['v2ComponentBtn_7']) {
                //*====AGREE-ACTION-START====*//
                //*+AGREE-CONFIG-*//
                //{
                //	"name": "custom",
                //	"params": {}
                //}
                //*-AGREE-CONFIG+*//
                //*++++AGREE-CODE-START++++*//
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
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
            const ctx = this;
            if(ctx.AParams.staffId){
                ctx.getdeliverInfo();
            }
            ctx.getbranchList();
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
.v2Container-1614766242007{
    position:absolute!important;
    bottom:0;
    width:100%;
    right:0;
    border-top:1px solid #e5e5e5;
}
</style>