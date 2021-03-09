<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1612854178100`" class="v2Container-1612854178100 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;height:auto;" :if="true" ref="v2Container_1">
            <v2-form-input :wid="`1612854599723`" class="v2-form-input-1612854599723 V2Widget" :style="{'position':'relative','align-self':'auto','padding-left':0,'flex-shrink':0}" :theme="{'size':'medium'}" :disabled="false" :label="`客户账号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :if="true" ref="v2FormInput_4" :value.sync="login_name">
            </v2-form-input>
            <v2-component-btn :wid="`1612855111983`" class="v2-component-btn-1612855111983 V2Widget" :style="{'align-self':'auto','flex-shrink':0,'margin-left':'20px'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`查询`" :right-icon="`el-icon-search`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614179211305" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'816.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :setPageCallback="setPageCallback" :tableData="addressList" :pageSize="pageSize" :totalCount="addressTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'login_name','label':'客户账号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'address_name','label':'寄出人姓名','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'address','label':'地址','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'phone','label':'电话','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="addressList" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getAddressInfo`" :total-count="addressTotalCount" :tool-bar="false" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[]" :expand="false" :if="true" ref="v2ComponentTable_1">
        </v2-component-table>
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"addressList","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"addressTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"login_name","type":""}]}
                },
                /* 客户账号 */
                'login_name': ``,
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 客户地址信息列表 */
            'addressList': {
                'default': () => {
                    return []
                }
            },
            /* 页码数 */
            'pageSize': {
                'default': () => {
                    return 10
                }
            },
            /* 数据总条数 */
            'addressTotalCount': {
                'default': () => {
                    return 1
                }
            },
            /* 当前页码 */
            'currentPage': {
                'default': () => {
                    return 1
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  获取客户地址信息
             *  @param 新参数 page
             *  @param 新参数 size
             */
            getAddressInfo(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page&&(ctx.currentPage=page);
                !page&&(ctx.currentPage=1);
                size&&(ctx.pageSize=size);
                !size&&(ctx.pageSize=10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [],
                  "query": {
                    "loginName": ctx.login_name
                  },
                  "ranges": []
                };
                
                ctx.$axios.post(`${axios.server}/addressInfo/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj && res.obj.records||[];
                      
                      ctx.addressList  = tableData.map(function(item){
                        return{
                          login_name:item.loginName,
                          address_name:item.addressName||'',
                          address:item.address||'',
                          phone:item.phone
                        }
                      });
                      ctx.addressTotalCount = res.obj&&res.obj.total;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  查询
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1613138459846($event, vueIns) {
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
                /**
                方法名称：getAddressInfo
                方法描述：获取客户地址信息
                **/
                ctx.getAddressInfo();
            },
            /**
             *  查询
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614179211305($event, vueIns=this.$refs['v2ComponentBtn_1']) {
                /**
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：getAddressInfo
                方法描述：获取客户地址信息
                参数1:page(新参数)
                参数2:size(新参数)
                **/
                ctx.getAddressInfo(ctx.currentPage);
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