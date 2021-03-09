<template>
    <v2container :wid="`root`" style="flex-shrink:0;box-sizing:border-box;" class="V2Container">
        <div :wid="`1614832033329`" class="v2Container-1614832033329 V2Container" style="box-sizing:border-box;align-self:stretch;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;" :if="true" ref="v2Container_1">
            <v2-component-btn :wid="`1614832083679`" class="v2-component-btn-1614832083679 V2Widget" :style="{'align-self':'auto','margin-right':'20px'}" :theme="{'btnType':'danger','size':'medium'}" :disabled="false" :loading="false" :btn-name="`删除`" :shape="`def`" :if="true" @_op_component-btn_btn:click="v2_component_btn_1614839644860" ref="v2ComponentBtn_1">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612854187456`" class="v2-component-table-1612854187456 V2Widget" :style="{'align-self':'auto','height':'864.00px','margin-left':'0','width':'calc(100% - 20px)','flex-shrink':0}" :setPageCallback="setPageCallback" :toolBar="true" :tableData="feedBackfList" :pageSize="pageSize" :totalCount="feedBackTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'customer_id','label':'反馈客户','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'feedback_content','label':'反馈内容','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'customer_phone','label':'客户联系电话','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'customer_email','label':'客户邮箱','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="feedBackfList" :selection="`multi`" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getfeedBackInfo`" :total-count="feedBackTotalCount" :tool-bar="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'编辑','type':'primary','handler':'','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_1" :value.sync="selectItem">
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
                    'mapping': {"1612854187456":[{"id":1612854187456,"modelValue":"setPageCallback","dataValue":"setPageCallback","type":""},{"id":1612854187456,"modelValue":"toolBar","dataValue":"true","type":""},{"id":1612854187456,"modelValue":"tableData","dataValue":"feedBackfList","type":""},{"id":1612854187456,"modelValue":"value","dataValue":"selectItem","type":""},{"id":1612854187456,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612854187456,"modelValue":"totalCount","dataValue":"feedBackTotalCount","type":""}],"1612854599723":[{"id":1612854599723,"modelValue":"value","dataValue":"staff_name","type":""}]}
                },
                /* 员工姓名 */
                'staff_name': '',
                /* 选中的值 */
                'selectItem': [],
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 页码数 */
            'pageSize': {
                'default': () => {
                    return 10
                }
            },
            /* 客户地址信息列表 */
            'feedBackfList': {
                'default': () => {
                    return []
                }
            },
            /* 当前页面 */
            'currentPage': {
                'default': () => {
                    return 1
                }
            },
            /* 数据总条数 */
            'feedBackTotalCount': {
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
            getfeedBackInfo(page, size) {
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
                  "query": {},
                  "ranges": []
                };
                ctx.$axios.post(`${axios.server}/feedBackInfo/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&& res.obj.records||[];
                      ctx.feedBackfList  = tableData.map(function(item){
                        return{
                          customer_id:item.loginName,
                          feedback_content:item.feedbackContent,
                          customer_phone:item.customerPhone,
                          customer_email:item.mailxbox,
                          id:item.feedbackId
                        }
                      });
                      ctx.feedBackTotalCount = res.obj&&res.obj.total;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  打开编辑子页面
             */
            openEditStaffPage() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
            },
            /**
             *  删除
             */
            v2_component_btn_1614839644860($event, vueIns=this.$refs['v2ComponentBtn_1']) {
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
                //*++++AGREE-CODE-END++++*//
                //*====AGREE-ACTION-END====*//
                ctx.delectMethod()
                
                
            },
            /**
             *  删除方法
             *  @param 新参数 index
             *  @param 新参数 row
             */
            delectMethod(index, row) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                console.log(ctx.selectItem)
                let list= ctx.selectItem.map(function(item){
                      return item.id
                })
                console.log()
                ctx.$axios.post(`${axios.server}/feedBackInfo/delete`,JSON.stringify(list),{
                  headers: {
                        'Content-type':'application/json'
                        }
                }).then(res=>{
                    if(res.success){
                            ctx.$notify({
                                type: 'success',
                                title: '删除成功'
                            });
                            ctx.getfeedBackInfo();
                        }else{
                            this.$notify({
                                title: res.msg,
                                type: 'error'
                            });
                        }
                }).catch(error=>{
                  
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