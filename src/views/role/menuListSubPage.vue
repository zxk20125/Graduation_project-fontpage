<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;" class="v2Container-root V2Container">
        <div :wid="`1578992360842`" class="v2Container-1578992360842 V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1578992360842">
            <v2-component-tree :wid="`1578992390778`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s','width':'auto','height':'auto'}" :optionConfig="menuList" :option-config="menuList" :node-key="`id`" :show-checkbox="true" :leaf-only="true" ref="v2-component-tree_1578992390778">
            </v2-component-tree>
        </div>
        <div :wid="`1578995352572`" class="diaglog-btn-ctn V2Container" style="position:relative;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1578995352572">
            <v2-component-btn :wid="`1578995298008`" class="common-btn-normal V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','flex-shrink':'0','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'normal','size':''}" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" @_op_component-btn_btn:click="v2_component_btn_1578995286000" ref="v2-component-btn_1578995298008">
            </v2-component-btn>
            <v2-component-btn :wid="`1578995354622`" class="common-btn-focus margin-right20 V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','align-self':'auto','overflow':'hidden','animation-duration':'1s'}" :theme="{'btnType':'primary','size':''}" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" @_op_component-btn_btn:click="v2_component_btn_1578996906000" ref="v2-component-btn_1578995354622">
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
                        'config': [],
                        'validate_callbacks': [

                        ],
                        'submit_callbacks': [

                        ]
                    },
                    'mapping': {"1578910493033":[{"id":1578910493033,"modelValue":"optionConfig","dataValue":"menuList","type":""}],"1578992390778":[{"id":1578992390778,"modelValue":"optionConfig","dataValue":"menuList","type":""}]}
                },
                /* 菜单数据 */
                'menuList': [],
                /* 选中的数据 */
                'selectedMenus': [],
                /* 菜单对象 */
                'menuObj': {},
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
             *  获取菜单列表
             */
            getMenuList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.__getVueIns('1578992390778').$refs._op_componentTree_tree.store.defaultExpandAll = true;
                
                ctx.$axios.get(`${axios.server}/menu/list`).then(res=>{
                
                    ctx.menuList = ctx.transformMenuList(res.obj);
                    ctx.$nextTick(function(){
                       var selectedMenus = ctx.AParams.menus.map(function(item){
                            return item.id;
                        }).filter(function(item){
                            return !ctx.menuObj[item];
                        });
                        ctx.__getVueIns('1578992390778').$refs._op_componentTree_tree.setCheckedKeys(selectedMenus,false);
                    })
                    
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  数据转换
             *  @param 菜单数据 list
             */
            transformMenuList(list) {
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
                                    id: i.parentId,
                                    children: []
                                };
                            } else {
                                !p.children && (p.children = []);
                            }
                            let item = menuObj[i.id] || {
                                id: i.id
                            };
                            item.label = i.title;
                            item.parentId = i.parentId || "";
                            menuObj[i.id] = item;
                            p.children.push(item);
                        });
                    ctx.menuObj = menuObj;
                    Object.keys(menuObj)
                        .filter(e => !menuObj[e].children)
                        .map(e => delete menuObj[e]);
                
                    return menuObj[""].children;
                    
                } else {
                    return [];
                }
            },
            /**
             *  关闭关联菜单子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578995286000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
                
            },
            /**
             *  关联菜单
             */
            associateMenu() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var menuIds  = ctx.__getVueIns('1578992390778').$refs._op_componentTree_tree.getCheckedKeys();
                var halfMenuIds  = ctx.__getVueIns('1578992390778').$refs._op_componentTree_tree.getHalfCheckedKeys();
                
                ctx.$axios.post(`${axios.server}/role/update/menu/${ctx.AParams.id}`, JSON.stringify([...menuIds,...halfMenuIds]),{
                    headers: {
                        'Content-type':'application/json'
                    }
                }).then(res => {
                    //下一步的行为
                    if(res.success){
                        ctx.$notify({
                            type: 'success',
                            title: '关联菜单成功'
                        });
                        
                    }else{
                        this.$notify({
                            title: res.msg,
                            type: 'error'
                        });
                    }
                    ctx.close();
                    ctx.$root.confirm();
                        
                }).catch(function (error) {
                        console.log(error);
                });
            },
            /**
             *  关联菜单
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578996906000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：associateMenu
                方法描述：关联菜单
                
                **/
                ctx.associateMenu();
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
            //函数内直接用ctx代替this访问vue页面的数据。
            const ctx = this;
            ctx.getMenuList();
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
   // background:#457ce2;
    height:32px;
   // color:#fff;
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
   // color:#606266;
  //  background:#fff;
}
.margin-right20{
    margin-right:20px!important;
}
.form-user-info-wrapper{
    width:70%;
    margin-left:auto!important;
    margin-right:auto!important;
}

</style>