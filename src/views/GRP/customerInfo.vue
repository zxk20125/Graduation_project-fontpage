<template>
    <v2container :wid="`root`" style="width:100%;height:100%;display:flex;align-items:flex-start;align-self:stretch;box-sizing:border-box;flex-direction:column;flex-shrink:0;" class="V2Container">
        <div :wid="`1612535056658`" class="v2Container-1578537283708 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:row;" ref="v2Container_6">
            <v2-form-input :wid="`1612535040338`" class="v2-form-input-1579152715570 V2Widget" :style="{'position':'relative','margin-bottom':'0','overflow':'hidden','animation-duration':'1s','flex-shrink':0,'padding-left':'0'}" :theme="{'size':'medium'}" :disabled="false" :label="`用户账号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1579152715570" :value.sync="customerLoginName">
            </v2-form-input>
            <v2-component-btn :wid="`1612535127748`" class="v2-component-btn-1578539012886 V2Widget" :style="{'position':'relative','margin-bottom':'0','margin-left':'20px','flex-shrink':0,'overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`查询`" :right-icon="`el-icon-search`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1614351319319" @_op_component-btn_btn:undefined="v2_component_btn_1614351600155" ref="v2-component-btn_1578539012886">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612534187575`" class="v2-component-table-1612534187575 V2Widget" :style="{'align-self':'auto','width':'calc(100% - 20px)','height':'816.00px','flex-shrink':0}" :tableData="customerInfoList" :pageSize="pageSize" :currentPage="currentPage" :totalCount="customerTotalCount" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'name','label':'姓名','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'login_name','label':'账号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'age','label':'年龄','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'sex','label':'性别','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'phone','label':'手机','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id_cardno','label':'身份证号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="customerInfoList" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getcustomerInfoList`" :current-page="currentPage" :total-count="customerTotalCount" :tool-bar="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'修改','type':'primary','handler':'openEditSub','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_2">
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
                    'mapping': {"1612534187575":[{"id":1612534187575,"modelValue":"tableData","dataValue":"customerInfoList","type":""},{"id":1612534187575,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612534187575,"modelValue":"currentPage","dataValue":"currentPage","type":""},{"id":1612534187575,"modelValue":"totalCount","dataValue":"customerTotalCount","type":""}],"1612535040338":[{"id":1612535040338,"modelValue":"value","dataValue":"customerLoginName","type":""}],"1612535055323":[{"id":1612535055323,"modelValue":"value","dataValue":"createTime","type":""}],"1612535042388":[{"id":1612535042388,"modelValue":"value","dataValue":"name","type":""}]}
                },
                /* 当前页面 */
                'currentPage': 1,
                /* 创建时间 */
                'createTime': ``,
                /* 用户账号 */
                'customerLoginName': '',
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 请求数据 */
            'reqMessage': {
                'default': () => {
                    return ''
                }
            },
            /* 客户信息列表 */
            'customerInfoList': {
                'default': () => {
                    return []
                }
            },
            /* 每页数量 */
            'pageSize': {
                'default': () => {
                    return 10
                }
            },
            /* 客户总数据 */
            'customerTotalCount': {
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
             *  获取用户列表
             *  @param 当前页码 page
             *  @param 总条数 size
             */
            getcustomerInfoList(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page && (ctx.currentPage = page);
                !page && (ctx.currentPage = 1);
                size && (ctx.pageSize = size);
                !size && (ctx.pageSize = 10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [],
                  "query": {
                    "customerLoginName": ctx.customerLoginName,
                  },
                  "ranges": []
                };
                
                
                ctx.$axios.post(`${axios.server}/customerInfo/list`, params).then(res => {
                  if (res.success && res.status) {
                    const tableData = res.obj&&res.obj.records||[];
                    console.log(tableData)
                    ctx.customerInfoList = tableData.map(function (item) {
                      return {
                        name: item.customerName,
                        login_name: item.customerLoginName || '',
                        age: item.customerAge || '',
                        sex: item.customerSex,
                        phone: item.customerPhone,
                        id_cardno: item.idCardNo,
                        id:item.customerId
                      }
                    });
                    console.log(ctx.customerInfoList)
                     ctx.userTotalCount = res.obj&&res.obj.totalElements;
                  }
                }).catch(error => {
                
                })
            },
            /**
             *  打开编辑子页面
             *  @param 本行 index
             *  @param 新参数 row
             */
            openEditSub(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title: '编辑客户信息',
                    path: '/edit/customer',
                    component: 'GRP/editcustomerSubPage',
                    type: 'SUB',
                    closeOnClickModal: false,
                    hideConfirmBtn: true,
                    hideCancelBtn: true,
                    width:"650px",
                    height:"550px",
                    closeOnClickModal: true,//点击弹窗外部是否关闭弹窗，不设置默认是true：会关闭，false：不关闭
                    params:{id:row.id},
                    confirmCallback: (ret) => {
                        ctx.$axios.post(`${axios.server}/customer/edit`, ret).then(res => {
                            //下一步的行为
                            if (res.success) {
                                ctx.$notify({
                                    title: '客户信息编辑成功',
                                    type: 'success'
                                });
                            } else {
                                ctx.$notify({
                                    title: res.msg,
                                    type: 'error'
                                });
                
                            }
                        }).catch(function (error) {
                            console.log(error);
                            ctx.$notify({
                                title: error.msg || '编辑失败',
                                type: 'error'
                            });
                        });
                
                    },
                    cancelCallback: (e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  查询
             *  @param $event $event
             *  @param vueIns vueIns
             */
            v2_component_btn_1614351319319($event, vueIns=this.$refs['v2-component-btn_1578539012886']) {
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
                方法名称：getcustomerInfoList
                方法描述：获取用户列表
                参数1:page(当前页码)
                参数2:size(总条数)
                **/
                ctx.getcustomerInfoList(ctx.currentPage);
            },
            /**
             *  v2_component_btn_1614351600155
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1614351600155($event, vueIns=this.$refs['v2-component-btn_1578539012886']) {
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
                
                
                /**
                方法名称：getcustomerInfoList
                方法描述：获取用户列表
                参数1:page(当前页码)
                参数2:size(总条数)
                **/
                ctx.getcustomerInfoList(ctx.currentPage);
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