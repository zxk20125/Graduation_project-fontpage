<template>
    <v2container :wid="`root`" style="flex-direction:column;min-width:50px;min-height:50px;animation-duration:1s;flex-shrink:0;" class="form-user-info-wrapper V2Container">
        <v2-form-input :wid="`1578989229995`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{}" :disabled="false" :label="`名称`" :placeholder="`请输入名称`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :visible="true" :custom-class="[&quot;form-item-block&quot;]" ref="v2-form-input_1578989229995" :value.sync="menuObj.name">
        </v2-form-input>
        <v2-form-input :wid="`1578989270974`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{}" :disabled="false" :label="`标题`" :placeholder="`请输入标题`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="true" :auto-complete="false" :visible="true" :custom-class="[&quot;form-item-block&quot;]" ref="v2-form-input_1578989270974" :value.sync="menuObj.title">
        </v2-form-input>
        <v2-form-input :wid="`1578989245653`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{}" :disabled="false" :label="`路径`" :placeholder="`请输入路径`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :visible="true" :custom-class="[&quot;form-item-block&quot;]" ref="v2-form-input_1578989245653" :value.sync="menuObj.path">
        </v2-form-input>
        <v2-form-select :wid="`1578991541023`" class="form-item-block v2-form-select-1578991541023 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','flex-shrink':0}" :labelWitdh="labelWidth" :optionConfig="menuList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="menuList" :options="[{&quot;active&quot;:&quot;true&quot;,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;},{&quot;active&quot;:true,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;}]" :label="`父级菜单`" :placeholder="`请选择父级菜单`" :label-witdh="labelWidth" :title-mode="`col`" :clearable="false" :filterable="true" :is-required="false" :visible="true" :custom-class="[&quot;form-item-block&quot;,&quot;v2-form-select-1578991541023&quot;]" ref="v2-form-select_1578991541023" :value.sync="menuObj.parentId">
        </v2-form-select>
        <v2-form-select :wid="`1598930198699`" class="form-item-block v2-form-select-1578991541023 v2-form-select-1598930198699 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :optionConfig="iconList" :theme="{'size':''}" :disabled="false" :data-type="`def`" :option-config="iconList" :options="[{&quot;active&quot;:&quot;true&quot;,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;},{&quot;active&quot;:true,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;}]" :label="`图标`" :placeholder="`请选择图标`" :label-witdh="labelWidth" :title-mode="`col`" :clearable="true" :filterable="true" :is-required="false" :visible="true" :custom-class="[&quot;form-item-block&quot;,&quot;v2-form-select-1578991541023&quot;,&quot;v2-form-select-1598930198699&quot;]" ref="v2FormSelect_1" :value.sync="menuObj.icon">
        </v2-form-select>
        <v2-form-input :wid="`1578989273015`" class="form-item-block V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':''}" :disabled="false" :label="`排序`" :placeholder="`请输入排序`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`text`" :rows="2" :show-word-limit="false" :clearable="false" :is-required="false" :auto-complete="false" :visible="true" :custom-class="[&quot;form-item-block&quot;]" ref="v2-form-input_1578989273015" :value.sync="menuObj.order">
        </v2-form-input>
        <v2-form-input :wid="`1578989373807`" class="form-textarea V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :labelWitdh="labelWidth" :theme="{'size':''}" :disabled="false" :label="`描述`" :placeholder="`请填写描述`" :title-mode="`col`" :label-witdh="labelWidth" :input-type="`textarea`" :rows="5" :maxlength="200" :show-word-limit="true" :clearable="false" :is-required="false" :auto-complete="false" :visible="true" :custom-class="[&quot;form-textarea&quot;]" ref="v2-form-input_1578989373807" :value.sync="menuObj.desc">
        </v2-form-input>
        <v2-form-switch :wid="`1596089189700`" class="V2Widget" :style="{'margin-left':'10px','margin-right':'10px'}" :labelWitdh="labelWidth" :disabled="false" :label="`增量部署`" :label-witdh="labelWidth" :title-mode="`col`" :is-required="false" :visible="true" :custom-class="[]" ref="form-switch-1" :value.sync="menuObj.deploy">
        </v2-form-switch>
        <div :wid="`1580814894142`" class="diaglog-btn-ctn V2Container" :style="{'position':'relative','overflow':'hidden','justify-content':'flex-end','min-width':'50px','min-height':'50px','animation-duration':'1s'}" :custom-class="[&quot;diaglog-btn-ctn&quot;,&quot;V2Container&quot;]" component="v2Container" ref="v2Container_1580814894142">
            <v2-component-btn :wid="`1580814867006`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" :visible="true" :custom-class="[&quot;common-btn-normal&quot;]" @_op_componentbtn_btn:click="v2_component_btn_1580814836000" ref="v2-component-btn_1580814867006">
            </v2-component-btn>
            <v2-component-btn :wid="`1580814895794`" class="common-btn-focus margin-right20 V2Widget" :style="{'margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" :visible="true" :custom-class="[&quot;common-btn-focus&quot;,&quot;margin-right20&quot;]" ref="v2-component-btn_1580814895794">
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
                        'config': [{"name":"menuForm","desc":"菜单表单","validate_when":"blur","submit_emitters":[{"widget_id":1580814895794,"event":"(default)"}],"inputs":{"1578989229995":{"desc":"名称","validation":{"kind":"single-regexp","value":{"value":"[a-zA-Z]+","message":"名称为英文字符"}},"name":"name"},"1578989270974":{"desc":"标题","validation":{"kind":"single-regexp","value":{"value":"\\S+","message":"标题不能为空"}},"name":"标题"},"1580814895794":{"desc":"提交","validation":{"kind":"dict","value":{"ref":null,"rules":[],"disabled_rules":[]}},"name":"submitBtn"}}}],
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
                                    name:ctx.menuObj.name,
                                    desc:ctx.menuObj.desc,
                                    title:ctx.menuObj.title,
                                    path:ctx.menuObj.path,
                                    icon:ctx.menuObj.icon,
                                   // parentId:ctx.menuObj.parentId[0],
                                   parentId:ctx.menuObj.parentId,
                                    order:ctx.menuObj.order,
                                    deploy:ctx.menuObj.deploy
                                };
                                ctx.AParams.id&&(params.id=ctx.AParams.id);
                            
                                ctx.$root.confirm(params);
                            
                            })
                        ]
                    },
                    'mapping': {"1578989229995":[{"id":1578989229995,"modelValue":"value","dataValue":"menuObj.name","type":""},{"id":1578989229995,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578989270974":[{"id":1578989270974,"modelValue":"value","dataValue":"menuObj.title","type":""},{"id":1578989270974,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578989245653":[{"id":1578989245653,"modelValue":"value","dataValue":"menuObj.path","type":""},{"id":1578989245653,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578989303711":[{"id":1578989303711,"modelValue":"value","dataValue":"selectedMenuTree","type":""},{"id":1578989303711,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578989303711,"modelValue":"optionConfig","dataValue":"menuTreeData","type":""}],"1578989273015":[{"id":1578989273015,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578989273015,"modelValue":"value","dataValue":"menuObj.order","type":""}],"1578989373807":[{"id":1578989373807,"modelValue":"value","dataValue":"menuObj.desc","type":""},{"id":1578989373807,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1578991541023":[{"id":1578991541023,"modelValue":"value","dataValue":"menuObj.parentId","type":""},{"id":1578991541023,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1578991541023,"modelValue":"optionConfig","dataValue":"menuList","type":""}],"1580801069334":[{"id":1580801069334,"modelValue":"value","dataValue":"menuObj.icon","type":""},{"id":1580801069334,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""}],"1596089189700":[{"id":1596089189700,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1596089189700,"modelValue":"value","dataValue":"menuObj.deploy","type":""}],"1598930198699":[{"id":1598930198699,"modelValue":"labelWitdh","dataValue":"labelWidth","type":""},{"id":1598930198699,"modelValue":"value","dataValue":"menuObj.icon","type":""},{"id":1598930198699,"modelValue":"optionConfig","dataValue":"iconList","type":""}]}
                },
                /* 标题宽度 */
                'labelWidth': '100px',
                /* 菜单列表数据 */
                'menuList': [],
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 菜单数据 */
            'menuObj': {
                'default': () => {
                    return {
                        name:'',
                        title:'',
                        desc:'',
                        path:'',
                        order:'',
                        icon:'',
                        parentId:'',
                        deploy:false
                    }
                }
            }
        },
        'computed': {
            /**
             *  图标列表
             */
            iconList() {
                /** @type {V2ViewType} */
                let ctx = this;
                return ctx.$root.__parent.$root.$store.state.icon.icons||[]
            }
        },
        'watch': {

        },
        'methods': {
            /**
             *  获取菜单列表
             */
            getMenuList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/menu/list`).then(res=>{
                    if(res.status&&res.success){
                       
                        ctx.menuList = res.obj.sort((a, b) => {
                            return parseInt(a.order, 10) - parseInt(b.order, 10);
                        }).map(function(item){
                            return {
                                value:item.id,
                                label:item.title
                            }
                        })
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  转换菜单数据
             *  @param 菜单数据 list
             */
            transformMenu(list) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                let menuObj = {},
                    result = list || [];
                if (list && list.length) {
                    result
                        .sort((a, b) => {
                            return parseInt(a.order, 10) - parseInt(b.order, 10);
                        })
                        .map(i => {
                            !i.parentId && (i.parentId = "");
                            let p = menuObj[i.parentId];
                            if (!p) {
                                p = menuObj[i.parentId] = {
                                    value:i.parentId,
                                    id: i.parentId,
                                    children: []
                                };
                            } else {
                                !p.children && (p.children = []);
                            }
                            let item = menuObj[i.id] || {
                                id: i.id,
                                value:i.id
                            };
                            item.label = i.title;
                            item.parentId = i.parentId || "";
                            menuObj[i.id] = item;
                            p.children.push(item);
                        });
                    ctx.menuTreeObj = menuObj;
                    Object.keys(menuObj)
                        .filter(e => !menuObj[e].children)
                        .map(e => delete menuObj[e]);
                
                    return menuObj[""].children;
                    
                } else {
                    return [];
                }
            },
            /**
             *  表单提示
             */
            setFormTips() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                pipe.tooltip(this.__getVueIns('1578989229995').$refs._op_formInput_input, {
                    content: '菜单名称为英文字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578989270974').$refs._op_formInput_input, {
                    content: '请输入菜单标题',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                pipe.tooltip(this.__getVueIns('1578989245653').$refs._op_formInput_input, {
                    content: '请填写菜单路径',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578991541023').$refs._op_formSelect_select, {
                    content: '请选择父级菜单',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                pipe.tooltip(this.__getVueIns('1580801069334').$refs._op_formInput_input, {
                    content: '请填写菜单图标类名，如el-icon-menu',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                });
                pipe.tooltip(this.__getVueIns('1578989273015').$refs._op_formInput_input, {
                    content: '请输入排序，为整数',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
                
                pipe.tooltip(this.__getVueIns('1578989373807').$refs._op_formInput_input, {
                    content: '菜单描述长度限制为 0 到 200 个字符',
                    placement: 'top-start',
                    style: {// 内容的样式
                        fontSize: '12px'
                    }
                })
            },
            /**
             *  v2_component_btn_1580802220000
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1580802220000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
            },
            /**
             *  获取菜单详情
             */
            getMenuDetail() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.$axios.get(`${axios.server}/menu/get/${ctx.AParams.id}`).then(res=>{
                    if(res.status&&res.success){
                        ctx.menuObj.name=res.obj.name;
                        ctx.menuObj.title=res.obj.title;
                        ctx.menuObj.desc=res.obj.desc;
                        ctx.menuObj.path=res.obj.path;
                        ctx.menuObj.order=res.obj.order;
                        ctx.menuObj.icon=res.obj.icon;
                        ctx.menuObj.parentId=res.obj.parentId;
                        ctx.menuObj.deploy=res.obj.deploy;
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  关闭菜单子页面
             *  @param $event $event
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1580814836000($event, vueIns=this.$refs['v2-component-btn_1580814867006']) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
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
            debugger;
            const ctx = this;
            ctx.getMenuList();
            if(ctx.AParams.id){
                ctx.getMenuDetail();
            }
            ctx.setFormTips();
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
  //  background:#457ce2;
    height:32px;
    color:#fff;
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
    //color:#606266;
    //background:#fff;
}
.margin-right20{
    margin-right:20px!important;
}
.form-user-info-wrapper{
    width:70%;
    margin-left:auto!important;
    margin-right:auto!important;
}
.margin-bottom20{
    margin-bottom:20px;
}
.form-textarea{
    width:100%;
    margin: 0 0 20px 0!important;
}
</style>

<style lang="scss" scoped="scoped">
.V2Widget {
    box-sizing: border-box;
}
.V2Container {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    height: auto;
    box-sizing: border-box;
}
</style>
<style id="__V2DefaultStyle">
    /* {"widget":{"box-sizing":"border-box"},"container":{"display":"flex","align-items":"flex-start","align-self":"stretch","height":"auto","box-sizing":"border-box"}} */
</style>