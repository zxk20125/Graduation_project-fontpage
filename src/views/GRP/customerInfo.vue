<template>
    <v2container :wid="`root`" style="width:100%;height:100%;display:flex;align-items:flex-start;align-self:stretch;box-sizing:border-box;flex-direction:column;flex-shrink:0;" class="V2Container">
        <div :wid="`1612535056658`" class="v2Container-1578537283708 V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;flex-direction:row;" ref="v2Container_6">
            <v2-form-input :wid="`1612535040338`" class="v2-form-input-1579152715570 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`创建用户`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1579152715570" :value.sync="name">
            </v2-form-input>
            <v2-form-input :wid="`1612535042388`" class="v2-form-input-1580789804791 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'size':'medium'}" :disabled="false" :label="`身份证号`" :placeholder="`请输入`" :title-mode="`col`" :label-witdh="`80px`" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" ref="v2-form-input_1580789804791" :value.sync="name">
            </v2-form-input>
            <v2-component-btn :wid="`1612535127748`" class="v2-component-btn-1578539012886 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':0,'overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':'medium'}" :disabled="false" :loading="false" :btn-name="`查询`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578965103000" ref="v2-component-btn_1578539012886">
            </v2-component-btn>
        </div>
        <v2-component-table :wid="`1612534187575`" class="v2-component-table-1612534187575 V2Widget" :style="{'align-self':'auto','width':'98%','height':'985px','flex-shrink':0}" :tableData="customerInfoList" :pageSize="pageSize" :currentPage="currentPage" :theme="{'tableType':'border','size':''}" :tooltip-effect="`dark`" :columns="[{'active':true,'type':'text','prop':'name','label':'姓名','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'login_name','label':'账号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'password','label':'密码','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'age','label':'年龄','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'sex','label':'性别','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'phone','label':'手机','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]},{'active':true,'type':'text','prop':'id_cardno','label':'身份证号','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','useMinWidth':true,'headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[],'tagMap':[],'textMap':[],'iconMap':[],'filterMap':[]}]" :table-data="customerInfoList" :selection-location="`left`" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :index-location="`left`" :open-page="true" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`setPageCallback`" :current-page="currentPage" :tool-bar="true" :tool-title="`操作`" :tool-header-align="`left`" :tool-location="`right`" :tool-width="100" :tool-btns="[{'active':true,'btnName':'修改','type':'primary','handler':'','rowName':' ','toolIcon':' ','rowValue':' '}]" :expand="false" :if="true" ref="v2ComponentTable_2">
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
                    'mapping': {"1612534187575":[{"id":1612534187575,"modelValue":"tableData","dataValue":"customerInfoList","type":""},{"id":1612534187575,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1612534187575,"modelValue":"currentPage","dataValue":"currentPage","type":""}],"1612535040338":[{"id":1612535040338,"modelValue":"value","dataValue":"name","type":""}],"1612535055323":[{"id":1612535055323,"modelValue":"value","dataValue":"createTime","type":""}],"1612535042388":[{"id":1612535042388,"modelValue":"value","dataValue":"name","type":""}]}
                },
                /* 当前页面 */
                'currentPage': 1,
                /* 姓名 */
                'name': '',
                /* 身份证号 */
                'id_cardno': ``,
                /* 创建时间 */
                'createTime': ``,
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
                page&&(ctx.currentPage=page);
                !page&&(ctx.currentPage=1);
                size&&(ctx.pageSize=size);
                !size&&(ctx.pageSize=10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "appreqbody":
                    {
                      "name": ctx.name,
                      "id_cardno": ctx.id_cardno
                    }
                };
                
                ctx.$axios.post(`${axios.server}/customer/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.records||[];
                      
                      ctx.authorityTableList  = tableData.map(function(item){
                        return{
                          name:item.id,
                          login_name:item.name||'',
                          age:item.desc||'',
                          sex:ctx.timesTransferToDate(item.createTime),
                          phone:item.createUserName,
                          id_cardno:item.updateUserName,
                        }
                      });
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  打开编辑子页面
             *  @param 本行 row
             */
            openEditSub(row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title: '编辑客户信息',
                    path: '/edit/customer',
                    component: 'GRP/customerEditSub',
                    type: 'SUB',
                    closeOnClickModal: false,
                    hideConfirmBtn: true,
                    hideCancelBtn: true,
                    width: "600px", //弹窗的宽
                    height: "500px", //高，不设置默认是auto
                    closeOnClickModal: true,//点击弹窗外部是否关闭弹窗，不设置默认是true：会关闭，false：不关闭
                    params:{"id":row.id},
                    confirmCallback: (ret) => {
                        ctx.$axios.post(`${axios.server}/customer/edit`, ret).then(res => {
                            //下一步的行为
                            if (res.success) {
                                ctx.$notify({
                                    title: '客户信息编辑成功',
                                    type: 'success'
                                });
                                ctx.getPageAuthorityList();
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