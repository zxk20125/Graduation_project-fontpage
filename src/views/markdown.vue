<template>
    <v2container :wid="`root`" style="width:100%;height:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;align-content:stretch;align-self:stretch;min-width:50px;">
        <v2-form-mdeditor :wid="`1589443385977`" class="V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;flex-grow:\`\`;overflow:hidden;animation-duration:1s;`" :value="markdownValue">
        </v2-form-mdeditor>
        <v2-component-btn :wid="`1589443497769`" class="V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;overflow:hidden;animation-duration:1s;`">
        </v2-component-btn>
    </v2container>
</template>
<script>
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
    import {mixins} from "@v2-lib/vue.spa.plugin"
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
                    'structure': {"id":"root","component":"v2Container","direction":"row","layout":[100],"data":{},"children":[{"style":{"label":{}},"value":"${markdownValue}","disabled":false,"readonly":false,"toolbarIcons":"full","allowUpload":false,"filename":"file","uploadcb":"uploadcb","label":"测试标题","labelWitdh":"80px","placeholder":"请编辑","titleMode":"col","isRequired":false,"visible":true,"__capacity":"1","component":"v2-form-mdeditor","href":"v2-form-mdeditor","children":[],"events":{},"id":1589443385977,"pid":"root","sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},{"theme":{"btnType":"primary","size":""},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"输出markdown值","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1589443514000"]}},"id":1589443497769,"pid":"root","sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"events":{}},
                    'forms': []
                },
                /* 新建页面数据 */
                'markdownValue': '',
                /* 版本号，请勿修改 */
                '__VERSION': 3.0
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
             *  输出markdown值
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1589443514000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                console.log(ctx.markdownValue);
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