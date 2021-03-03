<template>
    <v2container :wid="`root`" style="display:flex;height:auto;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;box-sizing:border-box;flex-shrink:0;" class="V2Container">
        <div :wid="`1614764771020`" class="v2Container-1614764771020 V2Container" style="position:relative;overflow:hidden;display:flex;height:auto;box-sizing:border-box;align-self:stretch;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;justify-content:center;" :if="true" ref="v2Container_1">
            <div :wid="`1614764745782`" class="v2Container-1614764745782 V2Container" style="box-sizing:border-box;align-self:stretch;display:block;flex-direction:column;align-items:flex-start;height:242.00px;margin-left:0;overflow:hidden;position:relative;width:302.00px;" :if="true" ref="v2Container_2">
                <v2-form-input :wid="`1614764756124`" class="v2-form-input-1614764756124 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`姓名`" :placeholder="`请输入姓名`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_1">
                </v2-form-input>
                <v2-form-input :wid="`1614764837231`" class="v2-form-input-1614764837231 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`年龄`" :placeholder="`请输入年龄`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_2">
                </v2-form-input>
                <v2-form-input :wid="`1614764830485`" class="v2-form-input-1614764830485 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'300px'}" :theme="{'size':''}" :disabled="false" :label="`联系电话`" :placeholder="`请输入联系电话`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4">
                </v2-form-input>
                <v2-form-select :wid="`1614765164838`" class="v2-form-select-1614765164838 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'180px'}" :theme="{'size':''}" :disabled="false" :data-type="`cus`" :options="[]" :label="`网点`" :placeholder="`请选择`" :label-witdh="`80px`" :title-mode="`col`" :clearable="false" :prefix="false" :filterable="true" :is-required="false" :if="true" ref="v2FormSelect_1">
                </v2-form-select>
                <v2-form-select :wid="`1614765166810`" class="v2-form-select-1614765166810 V2Widget" :style="{'align-self':'auto','margin-bottom':'10px','width':'180px'}" :theme="{'size':''}" :disabled="false" :data-type="`cus`" :options="[]" :label="`性别`" :placeholder="`请选择`" :label-witdh="`80px`" :title-mode="`col`" :clearable="false" :prefix="false" :filterable="true" :is-required="false" :if="true" ref="v2FormSelect_2">
                </v2-form-select>
            </div>
        </div>
        <div :wid="`1614766242007`" class="v2Container-1614766242007 V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;height:auto;" :if="true" ref="v2Container_4">
                <v2-component-btn :wid="`1614766284343`" class="v2-component-btn-1614765251471 V2Widget" :style="{'align-self':'auto','margin-top':'0'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`按钮`" :shape="`def`" :if="true" ref="v2ComponentBtn_5">
                </v2-component-btn>
                <v2-component-btn :wid="`1614766345621`" class="v2-component-btn-1614766345621 V2Widget" :style="{'align-self':'auto'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`按钮`" :shape="`def`" :if="true" ref="v2ComponentBtn_6">
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
                    'mapping': {}
                },
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 数据 */
            'FormData': {
                'default': () => {
                    return {
                        
                    }
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {

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