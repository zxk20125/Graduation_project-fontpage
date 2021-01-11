<template><v2container :wid="`root`" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:nowrap;align-content:stretch;align-self:stretch;flex-shrink:1;flex-grow:0;min-width:50px;min-height:50px;"><v2loop class="V2Widget" id="1578597998217" :wid="`1578597998217`" :index="0" :pid="`root`" v-show="true"><template v-slot="scope"><v2-component-h_text_btn_1 class="V2Widget" :id="scope._item.id" :wid="`1578597998217-${scope._key}`" :index="scope._key" :pid="`1578597998217`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style" :text1="scope._item.date" :text2="scope._item.event.describe" :btn1="`再次提醒`" :btn2="`移除`"></v2-component-h_text_btn_1></template></v2loop></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/webide.support.fusion/mixin/v2-view';
            import v2ComponentH_text_btn_1 from '@/views/_customWidget/fxMain/h_text_btn_1.vue'
            export default{
                /** display **/
                /*{"icon":"icontongyong","desp":"已取消待办","type":"gridLayout","width":"620px","height":"1080px"}*/
                /** display over **/
                /** data **/
                data() {
                    return {
                        "CONTENT": {
                          structure: {"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"dataBasket":{"text1":"${$item.date}","text2":"${$item.event.describe}","btn1":"`再次提醒`","btn2":"`移除`","id":"${$item.id}"},"visible":true,"__type":"loop","__loopTarget":"cancelEvents","__capacity":"1","component":"v2-component-h_text_btn_1","href":"v2-component-h_text_btn_1","cptpath":"\\src\\views\\_customWidget\\fxMain\\h_text_btn_1.vue","children":[],"events":{},"id":1578597998217,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border-box","align-self":"auto","flex-basis":"auto","flex-shrink":"1","flex-grow":"0","overflow":"hidden","width":"600px","height":"45px","animation-duration":"1s"},"sizeLocked":{"widthLock":true,"heightLock":false},"animate":["","animated"]}],"events":{},"commonStyle":{"display":"flex","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start","flex-wrap":"nowrap","align-content":"stretch","align-self":"stretch","flex-shrink":"1","flex-grow":"0","min-width":"50px","min-height":"50px"},"ctnStyle":[{}]},
                          forms: []
                        },
                        /** "desp":"已取消事项","id":0 **/
cancelEvents:[
  {id: 'id_20200111', date: '20200111', event: {describe: '待调账 1 件'}},
  {id: 'id_20200112', date: '20200112', event: {describe: '待调账 2 件'}},
  {id: 'id_20200113', date: '20200113', event: {describe: '待调账 3 件'}},
  {id: 'id_20200114', date: '20200114', event: {describe: '待调账 4 件'}},
  {id: 'id_20200115', date: '20200115', event: {describe: '待调账 5 件'}},
  {id: 'id_20200116', date: '20200116', event: {describe: '待调账 6 件'}},
  {id: 'id_20200117', date: '20200117', event: {describe: '待调账 7 件'}},
  {id: 'id_20200118', date: '20200118', event: {describe: '待调账 8 件'}},
  {id: 'id_20200119', date: '20200119', event: {describe: '待调账 9 件'}},
]
                    }
                },
                /** data over **/
                /** props **/
                props:{
                  
                },
                /** props over **/
                mixins:[root,mixins],
                components:{v2ComponentH_text_btn_1},
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
this.$store.commit("registerBind",{ dataStr:"$item.date", wid:1578597998217, modelKey:"text1" });
this.$store.commit("registerBind",{ dataStr:"$item.event.describe", wid:1578597998217, modelKey:"text2" });
this.$store.commit("registerBind",{ dataStr:"$item.id", wid:1578597998217, modelKey:"id" });
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
