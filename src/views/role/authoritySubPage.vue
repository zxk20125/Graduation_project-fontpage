<template>
    <v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;align-content:stretch;align-self:stretch;min-width:50px;min-height:50px;animation-duration:1s;">
        <v2-component-tree :wid="`1579056569223`" class="V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;overflow:hidden;animation-duration:1s;width:auto;height:auto;`" :optionConfig="authorityList" :data-type="`def`" :option-config="authorityList" :options="[{&quot;active&quot;:&quot;true&quot;,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;,&quot;expanded&quot;:false,&quot;checked&quot;:false,&quot;children&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;,&quot;expanded&quot;:false,&quot;checked&quot;:false,&quot;children&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;label&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;,&quot;checked&quot;:false}]}]}]" :node-key="`id`" :show-checkbox="true" :leaf-only="true" :visible="true">
        </v2-component-tree>
        <v2container :wid="`1579056672948`" class="diaglog-btn-ctn" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;overflow:hidden;display:flex;justify-content:flex-end;align-items:flex-start;align-content:stretch;min-width:50px;min-height:50px;animation-duration:1s;`" :direction="`col`">
            <v2-component-btn :wid="`1579056709434`" class="common-btn-normal V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;flex-shrink:0;overflow:hidden;animation-duration:1s;`" :disabled="false" :loading="false" :btn-name="`取消`" :shape="`plain`" :visible="true">
            </v2-component-btn>
            <v2-component-btn :wid="`1579056731898`" class="common-btn-focus margin-right20 V2Widget" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;overflow:hidden;animation-duration:1s;`" :disabled="false" :loading="false" :btn-name="`提交`" :shape="`def`" :visible="true">
            </v2-component-btn>
        </v2container>
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
                    'structure': {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"dataType":"def","optionConfig":"${authorityList}","options":[{"active":"true","label":"","value":"","expanded":false,"checked":false,"children":[{"active":"true","label":"","value":"","expanded":false,"checked":false,"children":[{"active":"true","label":"","value":"","checked":false}]}]}],"nodeKey":"id","showCheckbox":true,"leafOnly":true,"visible":true,"__capacity":"1","component":"v2-component-tree","href":"v2-component-tree","children":[],"events":{},"id":1579056569223,"pid":"root","sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"],"props":["dataType","optionConfig","options","nodeKey","showCheckbox","value","leafOnly","visible"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"theme":{"btnType":"normal","size":""},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"取消","shape":"plain","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1579056675000"]}},"id":1579056709434,"pid":1579056672948,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":["common-btn-normal"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"]},{"theme":{"btnType":"primary","size":""},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"提交","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1579056703000"]}},"id":1579056731898,"pid":1579056672948,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":["common-btn-focus","margin-right20"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"]}],"style":{},"id":1579056672948,"pid":"root","ctnStyle":[{},{}],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":["diaglog-btn-ctn"],"props":["height","direction","visible"]}],"events":{},"ctnStyle":[{},{}],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":["direction"]},
                    'forms': []
                },
                /* 权限数据 */
                'authorityList': [],
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
             *  获取权限数据
             */
            getAuthorityList() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.__getVueIns('1579056569223').$refs._op_componentTree_tree.store.defaultExpandAll = true;
                
                ctx.$axios.get(`${axios.server}/authority/list`).then(res=>{
                
                    ctx.authorityList = ctx.transformList(res.obj);
                    ctx.$nextTick(function(){
                       var selectedauthorities = ctx.AParams.authorities.map(function(item){
                            return item.id;
                        });
                        ctx.__getVueIns('1579056569223').$refs._op_componentTree_tree.setCheckedKeys(selectedauthorities,false);
                    })
                    
                }).catch(error=>{
                    console.log(error);
                })
            },
            /**
             *  关联权限
             */
            associateAuthority() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var authorityIds  = ctx.__getVueIns('1579056569223').$refs._op_componentTree_tree.getCheckedKeys(true);
                
                ctx.$axios.post(`${axios.server}/role/update/authority/${ctx.AParams.id}`, JSON.stringify(authorityIds),{
                    headers: {
                        'Content-type':'application/json'
                    }
                }).then(res => {
                    //下一步的行为
                    if(res.success){
                        ctx.$notify({
                            type: 'success',
                            title: '关联权限成功'
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
             *  转为treeData
             *  @param 新参数 list
             */
            transformList(list) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                let dataObj = {},
                    result = list || [];
                if (list && list.length) {
                    result
                        .sort((a, b) => {
                            return parseInt(a.order, 10) - parseInt(b.order, 10);
                        })
                        .map(i => {
                            !i.parentId && (i.parentId = "");
                            let p = dataObj[i.parentId];
                            if (!p) {
                                p = dataObj[i.parentId] = {
                                    id: i.parentId,
                                    children: []
                                };
                            } else {
                                !p.children && (p.children = []);
                            }
                            let item = dataObj[i.id] || {
                                id: i.id
                            };
                            item.label = i.name;
                            item.parentId = i.parentId || "";
                            dataObj[i.id] = item;
                            p.children.push(item);
                        });
                
                    Object.keys(dataObj)
                        .filter(e => !dataObj[e].children)
                        .map(e => delete dataObj[e]);
                
                    return dataObj[""].children;
                    
                } else {
                    return [];
                }
            },
            /**
             *  关闭关联权限子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579056675000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.close();
            },
            /**
             *  关联权限
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579056703000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：associateAuthority
                方法描述：关联权限
                
                **/
                ctx.associateAuthority();
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
            ctx.getAuthorityList();
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
 //   background:#457ce2;
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
  //  color:#606266;
   // background:#fff;
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