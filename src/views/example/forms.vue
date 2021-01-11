<template>
    <v2container :wid="`root`" style="height:100%;width:100%;flex-direction:column;flex-shrink:0;" class="v2container-undefined v2container-root V2Container">
        <formdemo :wid="`1600161233343`" class="formdemo-1600161233343 V2Widget" :formData="formData" :width="`60%`" :form-data="formData" @confirm-submit="formdemo_1600161223134" ref="formdemo_1">
        </formdemo>
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
                    'mapping': {"1600161233343":[{"id":1600161233343,"modelValue":"formData","dataValue":"formData"}]}
                },
                /* 表单初始数据 */
                'formData': {
                    field101: '',
                    info: {
                    field103: '',
                    field105: '',
                    },
                    cardInfo: {
                    field109: '',
                    field110: '',
                    }
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
             *  form_demo_1600160919639
             *  @param 表单数据 formData
             *  @param 组件的vue实例 vueIns
             */
            form_demo_1600160919639(formData, vueIns) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
            },
            /**
             *  formdemo_1600161223134
             *  @param 表单数据 formData
             */
            formdemo_1600161223134(formData) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                alert('接受提交事件，数据为'+JSON.stringify(formData))
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