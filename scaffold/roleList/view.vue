<template>
    <v2container :wid="`root`" style="height:100%;min-width:50px;overflow:hidden;flex-direction:column;min-height:50px;animation-duration:1s;" class="V2Container">
        <v2container :wid="`1578839196114`" class="V2Container" v-initial-style="`align-items:center;min-width:50px;overflow:hidden;flex-shrink:0;min-height:50px;animation-duration:1s;`">
            <v2-form-input :wid="`1578839218090`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;`" :value="queryRoleParams.roleName" :label="`角色名`" :placeholder="`请输入角色名`">
            </v2-form-input>
            <v2-form-datepicker :wid="`1578886111204`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;`" :value="queryRoleParams.createTime" :label="`创建时间`" :type="`daterange`" :value-format="`timestamp`">
            </v2-form-datepicker>
            <v2-component-btn :wid="`1578839255372`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-shrink:0;`" :btn-name="`查询`">
            </v2-component-btn>
        </v2container>
        <v2container :wid="`1578839261978`" class="V2Container" v-initial-style="`min-width:50px;overflow:hidden;min-height:50px;animation-duration:1s;`">
            <v2-component-btn :wid="`1578839200941`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-shrink:0;`" :btn-name="`新增角色`">
            </v2-component-btn>
            <v2-component-btn :wid="`1579240061839`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;`" :btn-name="`导入`">
            </v2-component-btn>
            <v2-component-btn :wid="`1579058632986`" v-show="$AUTH(`role/roleList`,1579058632986)" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-shrink:0;`" :visible="$AUTH(`role/roleList`,1579058632986)" :disabled="isDisabled" :btn-name="`导出excel`">
            </v2-component-btn>
            <v2-component-btn :wid="`1579239830566`" v-show="$AUTH(`role/roleList`,1579239830566)" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;`" :disabled="isDisabled" :visible="$AUTH(`role/roleList`,1579239830566)" :btn-name="`导出pdf`">
            </v2-component-btn>
            <v2-component-btn :wid="`1579169614891`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-shrink:0;`" :disabled="isDisabled" :btn-name="`删除`" :shape="`plain`">
            </v2-component-btn>
            <v2-component-btn :wid="`1586250571705`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-shrink:0;`" :disabled="isDisablePrint" :btn-name="`打印`" :shape="`plain`">
            </v2-component-btn>
        </v2container>
        <v2-component-table :wid="`1578839285432`" class="V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;flex-basis:100%;width:calc(calc(100% - 20px));height:auto;`" :pageSize="pageSize" :totalCount="roleTotalCount" :tableData="roleTableData" :columns="[{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;roleName&quot;,&quot;label&quot;:&quot;角色名称&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}]},{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;creator&quot;,&quot;label&quot;:&quot;创建用户&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}]},{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;createTime&quot;,&quot;label&quot;:&quot;创建时间&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}]},{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;editor&quot;,&quot;label&quot;:&quot;最近修改用户&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:false,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}]},{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;editTime&quot;,&quot;label&quot;:&quot;最近修改时间&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:true,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;useMinWidth&quot;:true},{&quot;active&quot;:true,&quot;type&quot;:&quot;text&quot;,&quot;prop&quot;:&quot;desp&quot;,&quot;label&quot;:&quot;描述&quot;,&quot;linkTarget&quot;:&quot;_blank&quot;,&quot;headerAlign&quot;:&quot;left&quot;,&quot;align&quot;:&quot;left&quot;,&quot;sortable&quot;:false,&quot;openFilter&quot;:false,&quot;combi&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;tagMap&quot;:[{&quot;active&quot;:&quot;true&quot;,&quot;type&quot;:&quot;text&quot;}],&quot;iconMap&quot;:[{&quot;active&quot;:&quot;true&quot;}],&quot;filterMap&quot;:[{&quot;active&quot;:&quot;true&quot;}]}]" :table-data="roleTableData" :selection="`multi`" :page-size="pageSize" :open-set-page-callback="true" :set-page-callback="`getPageRoleList`" :total-count="roleTotalCount" :tool-bar="true" :tool-width="280" :tool-btns="[{&quot;active&quot;:&quot;true&quot;,&quot;btnName&quot;:&quot;关联菜单&quot;,&quot;type&quot;:&quot;text&quot;,&quot;handler&quot;:&quot;openAssociateMenuSubPage&quot;},{&quot;active&quot;:true,&quot;btnName&quot;:&quot;关联权限&quot;,&quot;type&quot;:&quot;text&quot;,&quot;handler&quot;:&quot;openAssociateAuthSubPage&quot;},{&quot;active&quot;:true,&quot;btnName&quot;:&quot;关联组件&quot;,&quot;type&quot;:&quot;text&quot;,&quot;handler&quot;:&quot;openComponentPage&quot;},{&quot;active&quot;:true,&quot;btnName&quot;:&quot;编辑&quot;,&quot;type&quot;:&quot;text&quot;,&quot;handler&quot;:&quot;openEditRoleSubPage&quot;}]">
        </v2-component-table>
        <v2-pagination :wid="`1578839881638`" v-show="false" class="common-pagination V2Widget" v-initial-style="`animation-duration:1s;overflow:hidden;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;`" :total="roleTotalCount" :pageSize="pageSize" :currentPage="currentPage">
        </v2-pagination>
    </v2container>
</template>
<script>
    import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view'
    /* __V2_DECOMPILABLE__ */
    export default {
        'mixins': [
            root
                    ],
        'components': {

        },
        data() {
            return {
                'CONTENT': {
                    'structure': {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2Container","href":"v2Container","direction":"col","children":[{"theme":{"size":"medium"},"style":{"label":{}},"disabled":false,"label":"角色名","placeholder":"请输入角色名","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","showWordLimit":false,"clearable":false,"isRequired":false,"autoComplete":false,"visible":true,"__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{"_op_formInput_input":{}},"id":1578839218090,"pid":1578839196114,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"value":"${queryRoleParams.roleName}","customClass":[],"props":["value","disabled","label","placeholder","prepend","append","titleMode","labelWitdh","inputType","rows","maxlength","minlength","prefixIcon","suffixIcon","showWordLimit","clearable","isRequired","autoComplete","suggestion","visible"],"$defaultProps":{"disabled":true,"titleMode":true,"labelWitdh":true,"inputType":true,"rows":true,"showWordLimit":true,"clearable":true,"isRequired":true,"autoComplete":true,"visible":true}},{"theme":{"size":"medium"},"style":{"label":{}},"value":"${queryRoleParams.createTime}","disabled":false,"label":"创建时间","labelWitdh":"80px","placeholder":"请选择","titleMode":"col","type":"daterange","isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"timestamp","align":"left","visible":true,"__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{"_op_formDatePicker_picker":{}},"id":1578886111204,"pid":1578839196114,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":[],"props":["value","disabled","label","labelWitdh","placeholder","titleMode","type","isRequired","clearable","format","valueFormat","align","visible"],"$defaultProps":{"disabled":true,"labelWitdh":true,"placeholder":true,"titleMode":true,"isRequired":true,"clearable":true,"format":true,"align":true,"visible":true}},{"theme":{"btnType":"primary","size":"medium"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"查询","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578887267000"]}},"id":1578839255372,"pid":1578839196114,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":[],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"disabled":true,"loading":true,"shape":true,"visible":true}}],"style":{},"id":1578839196114,"pid":"root","ctnStyle":[{},{},{}],"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated",""],"props":[],"events":{"_op_content":{}}},{"component":"v2Container","href":"v2Container","direction":"col","children":[{"theme":{"btnType":"primary","size":"medium"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"新增角色","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578893003000"]}},"id":1578839200941,"pid":1578839261978,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":[],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"disabled":true,"loading":true,"shape":true,"visible":true}},{"theme":{"btnType":"primary","size":"medium"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"导入","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1579240033000"]}},"id":1579240061839,"pid":1578839261978,"customClass":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"disabled":true,"loading":true,"shape":true,"visible":true}},{"theme":{"btnType":"primary","size":"medium"},"style":{"btnStyle":{}},"disabled":"${isDisabled}","loading":false,"btnName":"导出excel","shape":"def","visible":"${$AUTH(`role/roleList`,1579058632986)}","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1579059575000"]}},"id":1579058632986,"pid":1578839261978,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":[],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"loading":true,"shape":true,"visible":true}},{"theme":{"btnType":"primary","size":"medium"},"style":{"btnStyle":{}},"disabled":"${isDisabled}","loading":false,"btnName":"导出pdf","shape":"def","visible":"${$AUTH(`role/roleList`,1579239830566)}","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1579239816000"]}},"id":1579239830566,"pid":1578839261978,"customClass":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"loading":true,"shape":true,"visible":true}},{"theme":{"btnType":"normal","size":"medium"},"style":{"btnStyle":{}},"disabled":"${isDisabled}","loading":false,"btnName":"删除","shape":"plain","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578903078000"]}},"id":1579169614891,"pid":1578839261978,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"customClass":[],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"$defaultProps":{"loading":true,"visible":true}},{"theme":{"size":"medium","btnType":"normal"},"style":{"btnStyle":{}},"disabled":"${isDisablePrint}","loading":false,"btnName":"打印","shape":"plain","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1586250496000"]}},"id":1586250571705,"pid":1578839261978,"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":["disabled","loading","btnName","leftIcon","rightIcon","shape","visible"],"customClass":[],"$defaultProps":{"loading":true,"visible":true}}],"style":{},"id":1578839261978,"pid":"root","ctnStyle":[{},{},{},{},{},{}],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated",""],"customClass":[],"props":[],"events":{"_op_content":{}}},{"theme":{"tableType":"border","size":"medium"},"columns":[{"active":true,"type":"text","prop":"roleName","label":"角色名称","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":true,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"type":"text","prop":"creator","label":"创建用户","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":true,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"type":"text","prop":"createTime","label":"创建时间","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":true,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"type":"text","prop":"editor","label":"最近修改用户","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":false,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"type":"text","prop":"editTime","label":"最近修改时间","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":true,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}],"useMinWidth":true},{"active":true,"type":"text","prop":"desp","label":"描述","linkTarget":"_blank","headerAlign":"left","align":"left","sortable":false,"openFilter":false,"combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"openIndex":false,"openPage":true,"toolBar":true,"toolTitle":"操作","toolWidth":"280","toolBtns":[{"active":"true","btnName":"关联菜单","type":"text","handler":"openAssociateMenuSubPage"},{"active":true,"btnName":"关联权限","type":"text","handler":"openAssociateAuthSubPage"},{"active":true,"btnName":"关联组件","type":"text","handler":"openComponentPage"},{"active":true,"btnName":"编辑","type":"text","handler":"openEditRoleSubPage"}],"expand":false,"visible":true,"__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{"_op_table_table":{"selection-change":["v2_component_table_1578902624000"]}},"id":1578839285432,"pid":"root","sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"],"tableData":"${roleTableData}","customClass":[],"selection":"multi","tHeight":"100%","tMaxHeight":"100%","openSetPageCallback":true,"setPageCallback":"getPageRoleList","totalCount":"${roleTotalCount}","props":["columns","tableData","selection","radioSelect","value","selectionLocation","tHeight","tMaxHeight","openIndex","loading","indexLocation","openPage","pagerCount","pageSizes","pageSize","openSetPageCallback","setPageCallback","currentPage","totalCount","toolBar","toolTitle","toolLocation","toolWidth","toolBtns","expand","expandMap","visible"],"pageSize":"${pageSize}","$defaultProps":{"tHeight":true,"tMaxHeight":true,"openIndex":true,"openPage":true,"toolTitle":true,"expand":true,"visible":true}},{"total":"${roleTotalCount}","pageSize":"${pageSize}","isShowTotal":"true","isShowPageSize":true,"isForward":true,"visible":"false","__capacity":"1","component":"v2-pagination","href":"v2-pagination","children":[],"events":{"_op_pagination":{"current-change":["v2_pagination_1578899748000"],"size-change":["v2_pagination_1578900328000"]}},"id":1578839881638,"pid":"root","sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"currentPage":"${currentPage}","customClass":["common-pagination"]}],"events":{},"ctnStyle":[{},{},{},{}],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"],"props":[]},
                    'forms_v2': {
                        'config': [],
                        'validate_callbacks': [

                        ],
                        'submit_callbacks': [

                        ]
                    },
                    'mapping': {"1578839285432":[{"id":1578839285432,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578839285432,"modelValue":"totalCount","dataValue":"roleTotalCount","type":""},{"id":1578839285432,"modelValue":"tableData","dataValue":"roleTableData","type":""}],"1578839218090":[{"id":1578839218090,"modelValue":"value","dataValue":"queryRoleParams.roleName","type":""}],"1578886111204":[{"id":1578886111204,"modelValue":"value","dataValue":"queryRoleParams.createTime","type":""}],"1578839881638":[{"id":1578839881638,"modelValue":"total","dataValue":"roleTotalCount","type":""},{"id":1578839881638,"modelValue":"pageSize","dataValue":"pageSize","type":""},{"id":1578839881638,"modelValue":"currentPage","dataValue":"currentPage","type":""}],"1578839276942":[{"id":1578839276942,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579058658755":[{"id":1579058658755,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579058632986":[{"id":1579058632986,"modelValue":"visible","dataValue":"$AUTH(`role/roleList`,1579058632986)","type":""},{"id":1579058632986,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579070147220":[{"id":1579070147220,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579169614891":[{"id":1579169614891,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"}],"1579239830566":[{"id":1579239830566,"modelValue":"disabled","dataValue":"isDisabled","type":"boolean"},{"id":1579239830566,"modelValue":"visible","dataValue":"$AUTH(`role/roleList`,1579239830566)","type":""}],"1586250571705":[{"id":1586250571705,"modelValue":"disabled","dataValue":"isDisablePrint","type":"boolean"}]}
                },
                /* 角色表格数据 */
                'roleTableData': [],
                /* 查询角色列表参数对象 */
                'queryRoleParams': {
                    roleName:'',
                    createTime:''
                },
                /* 角色列表总数 */
                'roleTotalCount': 0,
                /* 角色表格每页数量 */
                'pageSize': 10,
                /* 当前页码 */
                'currentPage': 1,
                /* 是否禁用 */
                'isDisabled': true,
                /* 选中的数据 */
                'selectedRoleList': [],
                /* 禁止打印按钮 */
                'isDisablePrint': true,
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
             *  打开新增角色子页面
             */
            openAddRoleSubPage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                //console.log(row);
                const ctx = this;
                ctx.open({
                    title:'新增角色',
                    path:'add/role',
                    component:'role/addRoleSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:() => { 
                        
                        ctx.getPageRoleList();
                    },
                    cancelCallback:(e) => {
                       
                    }
                })
            },
            /**
             *  删除角色
             */
            deleteRole() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var roleIds  = [];
                
                roleIds = ctx.selectedRoleList.map(function(item){
                    
                    return item.roleId;
                });
                
                ctx.$confirm('确定删除选中记录码？', '删除角色', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}/role/delete`, JSON.stringify(roleIds),{
                        headers: {
                        'Content-type':'application/json'
                        }
                    }).then(res => {
                        //下一步的行为
                        if(res.success){
                            ctx.$notify({
                                type: 'success',
                                title: '删除成功'
                            });
                            ctx.getPageRoleList();
                        }else{
                            ctx.$notify({
                                title: res.msg,
                                type: 'error'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                            title: error.msg || '删除失败',
                            type: 'error'
                        });
                    });
                
                }).catch(action => {
                
                });
            },
            /**
             *  打开关联菜单子页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openAssociateMenuSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'关联菜单',
                    path:'associate/menu',
                    component:'role/menuListSubPage',
                    type:'SUB',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:'',menus:row.menus},
                    confirmCallback:() => { 
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  打开关联权限子页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openAssociateAuthSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    title:'关联权限',
                    path:'asssociate/authority',
                    component:'role/authoritySubPage',
                    type:'SUB',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:'',authorities:row.authorities},
                    confirmCallback:() => { 
                       ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                        console.log('点击取消')
                    }
                })
            },
            /**
             *  获取分页角色列表
             *  @param 当前页码 page
             *  @param 单页数量 size
             */
            getPageRoleList(page, size) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                page&&(ctx.currentPage=page);
                !page&&(ctx.currentPage=1);
                size&&(ctx.pageSize=size);
                !size&&(ctx.pageSize=10);
                const params = {
                  "pageNum": ctx.currentPage,
                  "pageSize": ctx.pageSize,
                  "orders": [
                    {
                      "key": "createTime",
                      "order": "desc"
                    }
                  ],
                  "query": {
                
                    "name": ctx.queryRoleParams.roleName||'',
                  },
                  "ranges": [
                    {
                      "from": ctx.queryRoleParams.createTime?ctx.queryRoleParams.createTime[0]:null,
                      "key": "createTime",
                      "to":  ctx.queryRoleParams.createTime?ctx.queryRoleParams.createTime[1]+1000*60*60*24-1:null
                    }
                  ]
                };
                //console.log(ctx.__getVueIns('_op_pagination'));
                ctx.$axios.post(`${axios.server}/role/list`,params).then(res=>{
                    if(res.success&&res.status){
                      const tableData = res.obj&&res.obj.content||[];
                      
                      ctx.roleTableData  = tableData.map(function(item){
                        return{
                          roleId:item.id,
                          menus:item.menus||[],
                          authorities:item.authorities||[],
                          roleName:item.name||'',
                          desp:item.desc||'',
                          createTime:ctx.timesTransferToDate(item.createTime),
                          creator:item.createUserName,
                          editor:item.updateUserName,
                          editTime:ctx.timesTransferToDate(item.updateTime)
                        }
                      });
                      ctx.roleTotalCount = res.obj&&res.obj.totalElements;
                    }
                }).catch(error=>{
                  
                })
            },
            /**
             *  查询角色数据
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578887267000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.currentPage = 1;
                ctx.getPageRoleList();
            },
            /**
             *  打开新增角色子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578893003000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：openAddRoleSubPage
                方法描述：打开新增角色子页面
                
                **/
                ctx.openAddRoleSubPage();
            },
            /**
             *  时间转换
             *  @param 时间戳 timestamp
             */
            timesTransferToDate(timestamp) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                if(timestamp){
                    var date = new Date(Number(timestamp)),
                        Y = date.getFullYear() + '-',
                        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
                        D = date.getDate()<10?'0'+date.getDate():date.getDate(),
                        h = date.getHours()<10?'0'+date.getHours():date.getHours(),
                        m = date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes(),
                        s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
                
                    return Y +'-'+ M +'-'+ D +' '+ h +':'+ m +':'+ s;
                }else{
                    return '';
                }
            },
            /**
             *  v2_pagination_1578899748000
             *  @param 组件的vue实例 vueIns
             *  @param 当前页码 currentPage
             */
            v2_pagination_1578899748000(vueIns, currentPage) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.currentPage = currentPage;
                ctx.getPageRoleList(currentPage);
            },
            /**
             *  v2_pagination_1578900328000
             *  @param 组件的vue实例 vueIns
             *  @param 每页个数 pageSize
             */
            v2_pagination_1578900328000(vueIns, pageSize) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                //ctx.__getVueIns('').refs.
                ctx.pageSize = pageSize;
                ctx.getPageRoleList();
            },
            /**
             *  表格复选框状态改变时获取选中的数据
             *  @param 组件的vue实例 vueIns
             *  @param 选中的数据 selections
             */
            v2_component_table_1578902624000(vueIns, selections) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.selectedRoleList = selections||[];
                
                if (selections.length > 0) {
                    ctx.isDisabled = false;
                    (selections.length===1)?(ctx.isDisablePrint = false):(ctx.isDisablePrint = true);
                }else {
                    ctx.isDisabled = true;
                    ctx.isDisablePrint = true;
                }
            },
            /**
             *  删除选中的角色数据
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1578903078000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：deleteRole
                方法描述：删除角色
                
                **/
                ctx.deleteRole();
            },
            /**
             *  编辑角色页面
             *  @param 索引 index
             *  @param 行数据 row
             */
            openEditRoleSubPage(index, row) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'编辑角色',
                    path:'edit/role',
                    component:'role/addRoleSubPage',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:''},
                    confirmCallback:() => { 
                        
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
                       
                    }
                })
            },
            /**
             *  导出excel
             */
            exportExcel() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows  = [];
                
                rows = ctx.selectedRoleList.map(function(item){
                    
                    return   {
                        "createTime": item.createTime,
                        "createUserName":item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                ctx.$confirm('确定导出选中记录码？', '导出excel', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    ctx.$axios.post(`${axios.server}//role/export/excel`, JSON.stringify(rows),{
                        headers: {
                            'Content-type':'application/json'
                        },
                        responseType: 'blob'
                    }).then(res => {
                        //下一步的行为
                        if(!res){
                            ctx.$notify({
                                title: res.msg,
                                type: '导出失败'
                            });
                            return ;
                        }else{
                            ctx.downloadFile(res,'xlsx');
                            ctx.$notify({
                                type: 'success',
                                title: '导出成功'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                            title: error.msg || '导出失败',
                            type: 'error'
                        });
                    });
                
                }).catch(action => {
                
                });
            },
            /**
             *  导出pdf
             */
            exportPdf() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows  = [];
                
                rows = ctx.selectedRoleList.map(function(item){
                    
                    return   {
                        "createTime": item.createTime,
                        "createUserName":item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                ctx.$confirm('确定导出选中记录码？', '导出PDF', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                
                    ctx.$axios.post(`${axios.server}/role/export/pdf`, JSON.stringify(rows),{
                        headers: {
                        'Content-type':'application/json'
                        },
                        responseType: 'blob'
                    }).then(res => {
                        //下一步的行为
                        if(!res){
                            ctx.$notify({
                                title: res.msg,
                                type: '导出失败'
                            });
                            return ;
                        }else{
                            ctx.downloadFile(res,'pdf');
                            ctx.$notify({
                                type: 'success',
                                title: '导出成功'
                            });
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                        ctx.$notify({
                            title: error.msg || '导出失败',
                            type: 'error'
                        });
                    });
                
                }).catch(action => {
                
                });
            },
            /**
             *  导出excel文件
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579059575000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：exportExcel
                方法描述：导出excel
                
                **/
                ctx.exportExcel();
            },
            /**
             *  v2_component_btn_1579059590000
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579059590000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：exportPdf
                方法描述：导出pdf
                
                **/
                ctx.exportPdf();
            },
            /**
             *  导出文件
             *  @param 数据流 data
             *  @param 文件类型 type
             */
            downloadFile(data, type) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                if(data){
                    var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }),
                        url = window.URL.createObjectURL(blob),
                        aLink = document.createElement("a");
                        
                    aLink.style.display = "none";
                    aLink.href = url;
                    aLink.setAttribute("download",new Date().getTime() + "."+type);
                    document.body.appendChild(aLink);
                    aLink.click();
                    console.log(aLink.getAttribute('href'));
                    document.body.removeChild(aLink); //下载完成移除元素
                    window.URL.revokeObjectURL(url); 
                }
            },
            /**
             *  导出pdf文件
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579239816000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                /**
                方法名称：exportPdf
                方法描述：导出pdf
                
                **/
                ctx.exportPdf();
            },
            /**
             *  打开导入子页面
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1579240033000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.openImportFilePage();
                // ctx.open({
                //     title:'导入流程',
                //     path:'role/import',
                //     component:'role/importFileTemplate',
                //     type:'SUB',
                //     closeOnClickModal:false,
                //     hideConfirmBtn:true, 
                //     hideCancelBtn:true, 
                //     confirmCallback:() => { 
                //         ctx.getPageRoleList();
                //     },
                //     cancelCallback:(e) => {
                
                //     }
                // });
            },
            /**
             *  打开导入子页面
             */
            openImportFilePage() {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                ctx.open({
                    title:'导入流程',
                    path:'role/import',
                    component:'role/importFileTemplate',
                    type:'SUB',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    confirmCallback:() => { 
                        ctx.getPageRoleList();
                    },
                    cancelCallback:(e) => {
                
                    }
                });
            },
            /**
             *  打印
             *  @param 组件的vue实例 vueIns
             */
            v2_component_btn_1586250496000(vueIns) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                ctx.printPage();
            },
            /**
             *  打印数据
             */
            printPage() {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                var rows = [];
                
                rows = ctx.selectedRoleList.map(function (item) {
                
                    return {
                        "createTime": item.createTime,
                        "createUserName": item.creator,
                        "desc": item.desp,
                        "id": item.roleId,
                        "name": item.roleName,
                        "updateTime": item.editTime,
                        "updateUserName": item.editor
                    };
                });
                
                if ($('iframe#printIframe') && $('iframe#printIframe').length) {
                
                    $('iframe#printIframe').remove();
                }
                var printIframe = document.createElement("iframe");
                
                printIframe.style.display = "none";
                printIframe.id = "printIframe";
                printIframe.src = `${axios.server}/templates/preview?desc=${rows[0].desc}&name=${rows[0].name}`;
                document.body.appendChild(printIframe);
                $("#printIframe")[0].contentWindow.print();
            },
            /**
             *  打开关联组件子页面
             *  @param 行号 index
             *  @param 行数据 row
             */
            openComponentPage(index, row) {
                // 函数内直接用 ctx 代替 this 访问 Vue 页面的数据。
                /** @type {V2ViewType} */
                const ctx = this;
                
                ctx.open({
                    title:'关联组件',
                    path:'associate/component',
                    component:'role/componentAuthority',
                    type:'SUB',
                    customClass:'permission-dialog',
                    height:'600px',
                    closeOnClickModal:false,
                    hideConfirmBtn:true, 
                    hideCancelBtn:true, 
                    params:{id:row?row.roleId:''},
                    confirmCallback:() => { 
                        ctx.getPageRoleList(ctx.currentPage);
                    },
                    cancelCallback:(e) => {
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
            const ctx = this;
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