<template><v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;align-self:stretch;flex-shrink:1;flex-grow:0;min-width:50px;min-height:50px;animation-duration:1s;" :class="todoCtnClass"><v2container id="1578602101407" :wid="`1578602101407`" :index="0" :pid="`root`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;animation-duration:1s;`" v-show="true"><v2container id="1578602140071" :wid="`1578602140071`" :index="0" :pid="`1578602101407`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:nowrap;align-content:stretch;min-width:40px;min-height:50px;width:40px;animation-duration:1s;`" v-show="true"><v2-component-icon class="V2Widget" id="1578602159577" :wid="`1578602159577`" :index="0" :pid="`1578602140071`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;font-size:24px;animation-duration:1s;`" v-show="true"></v2-component-icon></v2container><v2container id="1578602115185" :wid="`1578602115185`" :index="1" :pid="`1578602101407`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:30%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578602227759" :wid="`1578602227759`" :index="0" :pid="`1578602115185`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-text></v2container><v2container id="1578602203601" :wid="`1578602203601`" :index="2" :pid="`1578602101407`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:30%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578602220563" :wid="`1578602220563`" :index="0" :pid="`1578602203601`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-text></v2container><v2container id="1578602198497" :wid="`1578602198497`" :index="3" :pid="`1578602101407`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:center;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:40%;animation-duration:1s;`" v-show="true"><v2-component-btn class="V2Widget" id="1578602204620" :wid="`1578602204620`" :index="0" :pid="`1578602198497`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-btn><v2-component-btn class="V2Widget" id="1578602253654" :wid="`1578602253654`" :index="1" :pid="`1578602198497`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-btn></v2container></v2container></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/webide.support.fusion/mixin/v2-view';import events from "@v2-lib/webide.support.fusion/mixin/events";
            
            export default{
                /** display **/
                /*{"icon":"icontongyong","desp":"fx_水平文本按钮状态","type":"gridLayout","width":"800px","height":"45px"}*/
                /** display over **/
                /** data **/
                data() {
                    return {
                        "CONTENT": {
                          structure: {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"component":"v2-layout","href":"v2-layout","direction":"row","children":[{"style":{"iStyle":{}},"icon":"el-icon-warning","symbol":false,"visible":true,"__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1578602159577,"pid":1578602140071,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","font-size":"24px","animation-duration":"1s"},"customClass":"${todoIconClass}","sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"column","justify-content":"center","align-items":"center","flex-wrap":"nowrap","align-content":"stretch","min-width":"40px","min-height":"50px","width":"40px","animation-duration":"1s"},"id":1578602140071,"pid":1578602101407,"ctnStyle":[{},{}],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"row","children":[{"style":{"textStyle":{}},"text":"${text1}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578602227759,"pid":1578602115185,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"column","justify-content":"center","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"30%","animation-duration":"1s"},"id":1578602115185,"pid":1578602101407,"ctnStyle":[{},{}],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"row","children":[{"style":{"textStyle":{}},"text":"${text2}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578602220563,"pid":1578602203601,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"column","justify-content":"center","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"30%","animation-duration":"1s"},"id":1578602203601,"pid":1578602101407,"ctnStyle":[{},{}],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"theme":{"btnType":"primary","size":"mini"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"${btn1}","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578627817000"]}},"id":1578602204620,"pid":1578602198497,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":1,"flex-grow":0,"overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},{"theme":{"btnType":"danger","size":"mini"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"${btn2}","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1578628129000"]}},"id":1578602253654,"pid":1578602198497,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"center","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"40%","animation-duration":"1s"},"id":1578602198497,"pid":1578602101407,"ctnStyle":[{},{}],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","animation-duration":"1s"},"id":1578602101407,"pid":"root","ctnStyle":[{},{},{},{}],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"events":{},"commonStyle":{"display":"flex","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","align-self":"stretch","flex-shrink":"1","flex-grow":"0","min-width":"50px","min-height":"50px","animation-duration":"1s"},"ctnStyle":[{}],"customClass":"${todoCtnClass}","realSize":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},
                          forms: []
                        },
                        
                    }
                },
                /** data over **/
                /** props **/
                props:{
                  /** "desp":"文本1","id":0 **/
text1:{default:()=>{return 202020202}},
/** "desp":"文本2","id":1 **/
text2:{default:()=>{return `待调账 3 条`}},
/** "desp":"按钮1","id":2 **/
btn1:{default:()=>{return `按钮1`}},
/** "desp":"按钮2","id":3 **/
btn2:{default:()=>{return `按钮2`}},
/** "desp":"图标类","id":4 **/
todoIconClass:{default:()=>{return 'todo-icon todo-time-danger'}},
/** "desp":"容器类","id":5 **/
todoCtnClass:{default:()=>{return 'todo-item-ctn todo-type-danger'}},
/** "desp":"页面路径","id":6 **/
page:{default:()=>{return `pages/details/accountDetail`}},
/** "desp":"页面标题","id":7 **/
title:{default:()=>{return `调账明细`}},
/** "desp":"标识","id":8 **/
id:{default:()=>{return ''}}
                },
                /** props over **/
                mixins:[root,widget,cpt,events,mixins],
                
                /** computed **/
                computed:{},
                /** computed over **/
                /** watch **/
                watch:{

},
                /** watch over **/
                /** methods **/
                methods:{
/** "desp":"v2_component_btn_1578627817000","id":1578602204620 **/
        v2_component_btn_1578627817000(vueIns/*组件的vue实例*/){
          /**
* 事件绑定在vue实例上，第一个参数是vue实例。
* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
**/

//函数内直接用ctx代替this访问vue页面的数据。
const ctx = this;

//  ## type 配置说明 ##
//  * BLANK > 项目中的标签页
//  * SUB > 当前页面上的弹窗页
//  * WINDOW > 浏览器的新窗口
//  * SELF > 自身页面

var page = ctx.page;
var title = ctx.title;
var date = ctx.text1;

alert('打开页面路径: ' + page + '\n' + 
      '打开页面标题: ' + title + '\n' + 
      '页面传递参数: ' + date + '\n')

// ctx.open({
//   status: true,
//   title: title,
//   path: page,
//   page: page,
//   params: { date: date },
//   type: "BLANK",
// });

        },/** "desp":"v2_component_btn_1578628129000","id":1578602253654 **/
        v2_component_btn_1578628129000(vueIns/*组件的vue实例*/){
          /**
* 事件绑定在vue实例上，第一个参数是vue实例。
* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
**/

//函数内直接用ctx代替this访问vue页面的数据。
const ctx = this;

ctx.$prompt('备注信息', '取消提醒', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // inputErrorMessage: '邮箱格式不正确'
  }).then(({ value }) => {
    // TODO: 这里需要向后台提交请求
    // 可以以 ctx.id 作为数据的标识符
    // 然后在相应的响应回调中提示成功/失败信息
    /**
     * method:请求方式
     * url: 请求路径,
     * data: 请求体参数 
    **/
    // ctx.$axios({
    //   method: 'post',
    //   url: 'url',
    //   data: {}
    // }).then(res=>{
    // // 成功回调，res为响应体
    // }).catch(e=>{
    // // 失败回调,e为错误提示
    // });
    alert('备注信息为: ' + value)
    this.$message({
      type: 'success',
      message: '已成功取消提醒'
    });
  }).catch(() => {
    // this.$message({
    //   type: 'info',
    //   message: '取消输入'
    // });
  });
        },
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
this.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1578602227759, modelKey:"text" });
this.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1578602220563, modelKey:"text" });
this.$store.commit("registerBind",{ vueObj:this, data:this.btn1, dataStr:"btn1", wid:1578602204620, modelKey:"btnName" });
this.$store.commit("registerBind",{ vueObj:this, data:this.btn2, dataStr:"btn2", wid:1578602253654, modelKey:"btnName" });
this.$store.commit("registerBind",{ vueObj:this, data:this.todoIconClass, dataStr:"todoIconClass", wid:1578602159577, modelKey:"customClass" });
this.$store.commit("registerBind",{ vueObj:this, data:this.todoCtnClass, dataStr:"todoCtnClass", wid:root, modelKey:"customClass" });
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
/* .todo-type-danger {
  background: rgba(245, 108, 108, 0.15);
}
.todo-type-warning {
  background: rgba(230, 162, 60, 0.15);
}
.todo-type-info {
  background: rgba(103, 194, 58, 0.15);
} */

.todo-time-danger {
  color: #F56C6C;
}
.todo-time-warning {
  color: #E6A23C;
}
.todo-time-info {
  color: #67C23A;
}
</style>