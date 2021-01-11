<template><v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;align-self:stretch;flex-shrink:1;flex-grow:0;min-width:50px;min-height:50px;animation-duration:1s;"><v2loop class="V2Widget" id="1578603025925" :wid="`1578603025925`" :index="0" :pid="`root`" v-show="true"><template v-slot="scope"><v2-component-h_text_btn_state class="V2Widget" :id="scope._item.id" :wid="`1578603025925-${scope._key}`" :index="scope._key" :pid="`1578603025925`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style" :text1="scope._item.date" :text2="scope._item.event.describe" :btn1="`查看明细`" :btn2="`取消提醒`" :todoIconClass="scope._item.event.daysRemain" :todoCtnClass="scope._item.event.type" :page="scope._item.event.page" :title="scope._item.event.title"></v2-component-h_text_btn_state></template></v2loop></v2container></template>
<script>
            import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view';
            import v2ComponentH_text_btn_state from '@/views/_customWidget/fxMain/h_text_btn_state.vue'
            export default{
                /** display **/
                /*{"icon":"icontongyong","desp":"待办事项","type":"gridLayout","width":"620px","height":"1080px"}*/
                /** display over **/
                /** data **/
                data() {
                    return {
                        "CONTENT": {
                          structure: {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"dataBasket":{"text1":"${$item.date}","text2":"${$item.event.describe}","btn1":"`查看明细`","btn2":"`取消提醒`","todoIconClass":"${$item.event.daysRemain}","todoCtnClass":"${$item.event.type}","page":"${$item.event.page}","title":"${$item.event.title}","id":"${$item.id}"},"visible":true,"__loopTarget":"undoEvents","__capacity":"1","component":"v2-component-h_text_btn_state","href":"v2-component-h_text_btn_state","cptpath":"\\src\\views\\_customWidget\\fxMain\\h_text_btn_state.vue","children":[],"events":{},"id":1578603025925,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","width":"600px","height":"45px","animation-duration":"1s"},"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"],"__type":"loop"}],"events":{},"commonStyle":{"display":"flex","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","align-self":"stretch","flex-shrink":"1","flex-grow":"0","min-width":"50px","min-height":"50px","animation-duration":"1s"},"ctnStyle":[{},{},{},{},{}],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},
                          forms: []
                        },
                        /** "desp":"待办事项","id":0 **/
undoEvents:[
  {id: 'id_20200103', date: '2020-01-03', event: {describe: '待调账 1 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-danger'}},
  {id: 'id_20200102', date: '2020-01-02', event: {describe: '待调账 2 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-warning'}},
  {id: 'id_20200103', date: '2020-01-03', event: {describe: '待调账 3 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-warning'}},
  {id: 'id_20200104', date: '2020-01-04', event: {describe: '用户管理 4 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200105', date: '2020-01-05', event: {describe: '用户管理 5 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200106', date: '2020-01-06', event: {describe: '用户管理 6 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200107', date: '2020-01-07', event: {describe: '设备管理 7 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200108', date: '2020-01-08', event: {describe: '设备管理 8 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200109', date: '2020-01-09', event: {describe: '设备管理 9 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200101', date: '2020-01-01', event: {describe: '待调账 1 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-danger'}},
  {id: 'id_20200102', date: '2020-01-02', event: {describe: '待调账 2 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-warning'}},
  {id: 'id_20200103', date: '2020-01-03', event: {describe: '待调账 3 件', page: 'pages/details/accountDetail', title: '调账明细', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-warning'}},
  {id: 'id_20200104', date: '2020-01-04', event: {describe: '用户管理 4 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200105', date: '2020-01-05', event: {describe: '用户管理 5 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200106', date: '2020-01-06', event: {describe: '用户管理 6 件', page: 'pages/userManage/UserInfoManage', title: '用户管理', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200107', date: '2020-01-07', event: {describe: '设备管理 7 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-danger', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200108', date: '2020-01-08', event: {describe: '设备管理 8 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-warning', daysRemain: 'todo-icon todo-time-info'}},
  {id: 'id_20200109', date: '2020-01-09', event: {describe: '设备管理 9 件', page: 'pages/deviceInfo/deviceInfoManage', title: '设备管理', type: 'todo-item-ctn todo-type-info', daysRemain: 'todo-icon todo-time-info'}},
]
                    }
                },
                /** data over **/
                /** props **/
                props:{
                  
                },
                /** props over **/
                mixins:[root],
                components:{v2ComponentH_text_btn_state},
                /** computed **/
                computed:{},
                /** computed over **/
                /** watch **/
                watch:{

},
                /** watch over **/
                /** methods **/
                methods:{

},
                /** methods over **/
                /** beforeCreate **/
                beforeCreate(){
                  let ctx = this;
                },
                /** beforeCreate over **/
                /** created **/
                created(){
                    let ctx = this;
/** bind **/
this.$store.commit("registerBind",{ dataStr:"$item.date", wid:1578603025925, modelKey:"text1" });
this.$store.commit("registerBind",{ dataStr:"$item.event.describe", wid:1578603025925, modelKey:"text2" });
this.$store.commit("registerBind",{ dataStr:"$item.event.daysRemain", wid:1578603025925, modelKey:"todoIconClass" });
this.$store.commit("registerBind",{ dataStr:"$item.event.type", wid:1578603025925, modelKey:"todoCtnClass" });
this.$store.commit("registerBind",{ dataStr:"$item.event.page", wid:1578603025925, modelKey:"page" });
this.$store.commit("registerBind",{ dataStr:"$item.event.title", wid:1578603025925, modelKey:"title" });
this.$store.commit("registerBind",{ dataStr:"$item.id", wid:1578603025925, modelKey:"id" });
/** bind over **/
                    /** $watch **/
                    
                    /** $watch over **/
                    /** poll **/
                    
                    /** poll over **/
                },
                /** created over **/
                /** beforeMount **/
                beforeMount(){
                    let ctx = this;
                },
                /** beforeMount over **/
                /** mounted **/
                mounted(){
                    let ctx = this;
                    
                },
                /** mounted over **/
                /** beforeUpdate **/
                beforeUpdate(){
                    let ctx = this;
                },
                /** beforeUpdate over **/
                /** updated **/
                updated(){
                    let ctx = this;
                },
                /** updated over **/
                /** beforeDestroy **/
                beforeDestroy(){ 
                        let ctx = this;
                },
                /** beforeDestroy over **/
                /** destroyed **/
                destroyed(){
                        let ctx = this;
                },
                /** destroyed over **/
                /** deactivated **/
                deactivated(){
                  let ctx = this;
                },
                /** deactivated over **/
                /** activated **/
                activated(){
                  let ctx = this;
                },
                /** activated over **/
            };
        </script>
<style lang="scss">

</style>