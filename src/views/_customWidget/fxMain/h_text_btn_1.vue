<template><v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;align-self:stretch;flex-shrink:1;flex-grow:0;min-width:50px;min-height:50px;animation-duration:1s;border-width:1px;" :class="[`todo-item-ctn`]"><v2container id="1578594648480" :wid="`1578594648480`" :index="0" :pid="`root`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;animation-duration:1s;`" v-show="true"><v2container id="1578594693591" :wid="`1578594693591`" :index="0" :pid="`1578594648480`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:33%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578594709867" :wid="`1578594709867`" :index="0" :pid="`1578594693591`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;color:#666;animation-duration:1s;`" v-show="true"></v2-component-text></v2container><v2container id="1578594684879" :wid="`1578594684879`" :index="1" :pid="`1578594648480`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:33%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578594767950" :wid="`1578594767950`" :index="0" :pid="`1578594684879`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;color:#666;animation-duration:1s;`" v-show="true"></v2-component-text></v2container><v2container id="1578597498750" :wid="`1578597498750`" :index="2" :pid="`1578594648480`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:34%;animation-duration:1s;`" v-show="true"><v2-component-btn class="V2Widget" id="1578597589651" :wid="`1578597589651`" :index="0" :pid="`1578597498750`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-btn><v2-component-btn class="V2Widget" id="1578597525309" :wid="`1578597525309`" :index="1" :pid="`1578597498750`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;animation-duration:1s;`" v-show="true"></v2-component-btn></v2container></v2container></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/webide.support.fusion/mixin/v2-view';import events from "@v2-lib/webide.support.fusion/mixin/events";
            
            export default{
                /** display **/
                /*{"icon":"icontongyong","desp":"fx_水平文本按钮_1","type":"gridLayout","width":"800px","height":"45px"}*/
                /** display over **/
                /** data **/
                data() {
                    return {
                        "CONTENT": {
                          structure: {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"style":{"textStyle":{}},"text":"${text1}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578594709867,"pid":1578594693591,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","color":"#666","animation-duration":"1s"},"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"center","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"33%","animation-duration":"1s"},"id":1578594693591,"pid":1578594648480,"ctnStyle":[{},{}],"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"style":{"textStyle":{}},"text":"${text2}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578594767950,"pid":1578594684879,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","color":"#666","animation-duration":"1s"},"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"center","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"33%","animation-duration":"1s"},"id":1578594684879,"pid":1578594648480,"ctnStyle":[{},{},{}],"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"theme":{"btnType":"primary","size":"mini"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"${btn1}","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1580976853000"]}},"id":1578597589651,"pid":1578597498750,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},{"theme":{"btnType":"danger","size":"mini"},"style":{"btnStyle":{}},"disabled":false,"loading":false,"btnName":"${btn2}","shape":"def","visible":true,"__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["v2_component_btn_1580976932000"]}},"id":1578597525309,"pid":1578597498750,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","animation-duration":"1s"},"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"center","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"34%","animation-duration":"1s"},"id":1578597498750,"pid":1578594648480,"ctnStyle":[{},{}],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","animation-duration":"1s"},"id":1578594648480,"pid":"root","ctnStyle":[{},{},{}],"customClass":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"events":{},"commonStyle":{"display":"flex","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","align-self":"stretch","flex-shrink":"1","flex-grow":"0","min-width":"50px","min-height":"50px","animation-duration":"1s","border-width":"1px"},"ctnStyle":[{}],"customClass":["todo-item-ctn"],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},
                          forms: []
                        },
                        
                    }
                },
                /** data over **/
                /** props **/
                props:{
                  /** "desp":"文本1","id":0 **/
text1:{default:()=>{return 20200202}},
/** "desp":"文本2","id":1 **/
text2:{default:()=>{return `待调账 3 件`}},
/** "desp":"按钮1","id":2 **/
btn1:{default:()=>{return `按钮1`}},
/** "desp":"按钮2","id":3 **/
btn2:{default:()=>{return `按钮2`}},
/** "desp":"标识","id":4 **/
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
/** "desp":"v2_component_btn_1580976853000","id":1578597589651 **/
        v2_component_btn_1580976853000(vueIns/*组件的vue实例*/){
          /**
* 事件绑定在vue实例上，第一个参数是vue实例。
* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
**/

//函数内直接用ctx代替this访问vue页面的数据。
const ctx = this;

// ctx.$prompt('备注信息', '再次提醒', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
//     // inputErrorMessage: '邮箱格式不正确'
//   })
this.$confirm('是否再次提醒该事件?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
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
    this.$message({
      type: 'success',
      message: '已成功添加提醒'
    });
  }).catch(() => {
    // this.$message({
    //   type: 'info',
    //   message: '取消输入'
    // });
  });
        },/** "desp":"v2_component_btn_1580976932000","id":1578597525309 **/
        v2_component_btn_1580976932000(vueIns/*组件的vue实例*/){
          /**
* 事件绑定在vue实例上，第一个参数是vue实例。
* 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
**/

//函数内直接用ctx代替this访问vue页面的数据。
const ctx = this;

// ctx.$prompt('备注信息', '移除提醒', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
//     // inputErrorMessage: '邮箱格式不正确'
//   })
this.$confirm('是否移除事件提醒?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
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
    this.$message({
      type: 'success',
      message: '已成功移除提醒'
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
this.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1578594767950, modelKey:"text" });
this.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1578594709867, modelKey:"text" });
this.$store.commit("registerBind",{ vueObj:this, data:this.btn1, dataStr:"btn1", wid:1578597589651, modelKey:"btnName" });
this.$store.commit("registerBind",{ vueObj:this, data:this.btn2, dataStr:"btn2", wid:1578597525309, modelKey:"btnName" });
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
.todo-item-ctn{
    border-bottom: 1px solid #ddd;
}

</style>