<template>
    <v2container :wid="`root`" style="width:100%;height:100%;display:flex;align-items:flex-start;align-self:stretch;box-sizing:border-box;flex-direction:column;flex-shrink:0;" class="V2Container">
        <div :wid="`1610350128822`" class="v2Container-1610350128822 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0);height:1082.00px;flex-shrink:0;" ref="v2Container_2">
            <v2-form-input :wid="`1610350193224`" class="v2-form-input-1610350095999 V2Widget" :style="{'align-self':'auto','background-color':'#FFFFFF'}" :theme="{'size':''}" :disabled="false" :label="`账号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_3">
            </v2-form-input>
            <v2-form-input :wid="`1610350556716`" class="v2-form-input-1610350095999 V2Widget" :style="{'align-self':'auto'}" :theme="{'size':''}" :disabled="false" :label="`密码`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4">
            </v2-form-input>
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
            /* 账号 */
            'userName': {
                'default': () => {
                    return ''
                }
            },
            /* 密码 */
            'passWord': {
                'default': () => {
                    return ''
                }
            },
            /* 请求数据 */
            'reqMessage': {
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
             *  登陆
             */
            loginMethod() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                
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