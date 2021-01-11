<template><v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;align-self:stretch;flex-shrink:1;flex-grow:0;min-width:50px;min-height:50px;animation-duration:1s;border-width:1px;" :class="[`todo-item-ctn`,`todo-item-done`]"><v2container id="1578594648480" :wid="`1578594648480`" :index="0" :pid="`root`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;animation-duration:1s;`" v-show="true"><v2container id="1578594693591" :wid="`1578594693591`" :index="0" :pid="`1578594648480`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:50%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578594709867" :wid="`1578594709867`" :index="0" :pid="`1578594693591`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;color:#666;animation-duration:1s;`" v-show="true"></v2-component-text></v2container><v2container id="1578594684879" :wid="`1578594684879`" :index="1" :pid="`1578594648480`" v-initial-style="`position:relative;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;box-sizing:border-box;align-self:stretch;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;min-width:50px;min-height:50px;width:50%;animation-duration:1s;`" v-show="true"><v2-component-text class="V2Widget" id="1578594767950" :wid="`1578594767950`" :index="0" :pid="`1578594684879`" v-initial-style="`position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;box-sizing:border-box;align-self:auto;flex-basis:auto;flex-shrink:1;flex-grow:0;overflow:hidden;color:#666;animation-duration:1s;`" v-show="true"></v2-component-text></v2container></v2container></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/webide.support.fusion/mixin/v2-view';import events from "@v2-lib/webide.support.fusion/mixin/events";
            
            export default{
                /** display **/
                /*{"icon":"icontongyong","desp":"fx_水平_1","type":"gridLayout","width":"800px","height":"45px"}*/
                /** display over **/
                /** data **/
                data() {
                    return {
                        "CONTENT": {
                          structure: {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"style":{"textStyle":{}},"text":"${text1}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578594709867,"pid":1578594693591,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","color":"#666","animation-duration":"1s"},"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"50%","animation-duration":"1s"},"id":1578594693591,"pid":1578594648480,"ctnStyle":[{},{}],"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]},{"component":"v2-layout","href":"v2-layout","direction":"col","children":[{"style":{"textStyle":{}},"text":"${text2}","editable":false,"textBreak":true,"visible":true,"__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1578594767950,"pid":1578594684879,"commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","color":"#666","animation-duration":"1s"},"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0px","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","width":"50%","animation-duration":"1s"},"id":1578594684879,"pid":1578594648480,"ctnStyle":[{},{},{}],"customClass":[],"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"style":{},"commonStyle":{"position":"relative","margin-top":"0px","margin-bottom":"0px","margin-left":"0","margin-right":"0px","box-sizing":"border-box","align-self":"stretch","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","display":"flex","flex-direction":"row","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","min-width":"50px","min-height":"50px","animation-duration":"1s"},"id":1578594648480,"pid":"root","ctnStyle":[{},{}],"customClass":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]}],"events":{},"commonStyle":{"display":"flex","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","align-self":"stretch","flex-shrink":"1","flex-grow":"0","min-width":"50px","min-height":"50px","animation-duration":"1s","border-width":"1px"},"ctnStyle":[{}],"customClass":["todo-item-ctn","todo-item-done"],"realSize":[],"sizeLocked":{"widthLock":false,"heightLock":false},"animate":["","animated"]},
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
/** "desp":"标识","id":2 **/
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
/* .todo-item-done{
    border-bottom: 1px solid rgb(225, 243, 216);
} */

</style>