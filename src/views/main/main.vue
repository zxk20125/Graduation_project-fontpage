<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;flex-direction:column;min-width:50px;min-height:50px;animation-duration:1s;background-color:rgba(0, 0, 0, 0);flex-shrink:0;" class="V2Container">
        <div :wid="`1611046571777`" class="v2Container-1611046571777 V2Container" style="display:flex;height:998px;background:0;box-sizing:border-box;align-self:stretch;flex-direction:column;align-items:flex-start;background-color:#0D94AA;flex-shrink:0;background-image:url(./img/500.png);" :if="true" ref="v2Container_1580961183459">
        </div>
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
                    'mapping': {"1579156958748":[{"id":1579156958748,"modelValue":"tableData","dataValue":"tableData","type":""}],"1579154143412":[{"id":1579154143412,"modelValue":"customClass","dataValue":"pageSearchCtnClass","type":""}],"1580806210155":[{"id":1580806210155,"modelValue":"tableData","dataValue":"tableData","type":""}],"1580806814168":[{"id":1580806814168,"modelValue":"tableData","dataValue":"tableData","type":""}],"1580830334970":[{"id":1580830334970,"modelValue":"tableData","dataValue":"eventsDetail","type":""}],"1580866289081":[{"id":1580866289081,"modelValue":"tabs","dataValue":"todoUI.tabs","type":""}],"1580867861641":[{"id":1580867861641,"modelValue":"page","dataValue":"todoPagePath","type":""}],"1580889307649":[{"id":1580889307649,"modelValue":"src","dataValue":"userInfo.avatar","type":""}],"1580889285169":[{"id":1580889285169,"modelValue":"text","dataValue":"userInfo.name","type":""}],"1580889353973":[{"id":1580889353973,"modelValue":"text","dataValue":"userInfo.tel","type":""}],"1580889264666":[{"id":1580889264666,"modelValue":"text","dataValue":"userInfo.userName","type":""}],"1580889270385":[{"id":1580889270385,"modelValue":"text","dataValue":"userInfo.workNum","type":""}],"1580889206815":[{"id":1580889206815,"modelValue":"text","dataValue":"userInfo.mail","type":""}],"1580889617913":[{"id":1580889617913,"modelValue":"text","dataValue":"eventsInfo.eventStage.undo","type":""}],"1580889605719":[{"id":1580889605719,"modelValue":"text","dataValue":"eventsInfo.eventStage.done","type":""}],"1580889683798":[{"id":1580889683798,"modelValue":"text","dataValue":"eventsInfo.eventImportance.common","type":""}],"1580889712266":[{"id":1580889712266,"modelValue":"text","dataValue":"eventsInfo.eventImportance.serious","type":""}],"1580889695152":[{"id":1580889695152,"modelValue":"text","dataValue":"eventsInfo.eventImportance.emergency","type":""}]}
                },
                /* 表格数据 */
                'tableData': [{
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1111 弄',
                  title: '页面1',
                  path: 'spa/newPage'
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 2222 弄',
                  title: '页面2',
                  path: 'spa/newSubPage'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 3333 弄',
                  title: '页面3',
                  path: 'spa/open'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 4444 弄',
                  title: '页面4',
                  path: 'spa/spa'
                }],
                /* 待办事项视图数据 */
                'todoUI': {
                    tabs: [
                      {icon: 'el-icon-knife-fork', text: '待办事项', badge: {val: '10', type: 'danger'}},
                      {icon: 'el-icon-cold-drink', text: '已取消待办', badge: {val: '20', type: 'primary'}},
                      {icon: 'el-icon-chat-line-round', text: '最新公告', badge: {val: '30', type: 'success'}},
                    ],
                    btns: [
                      {icon: '',text: '更多'},
                    ]
                },
                /* 用户信息 */
                'userInfo': {
                  avatar: 'img/user.png',
                  name: '张三',
                  tel: '12345678910',
                  userName: '觉得你就爱看',
                  workNum: '2020',
                  mail: 'aaa@bbb.cn',
                },
                /* 事件统计信息 */
                'eventsInfo': {
                  eventStage: {
                    undo: 242,
                    done: 210
                  },
                  eventImportance: {
                    common: 54,
                    serious: 124,
                    emergency: 64
                  }
                },
                /* 事件详情 */
                'eventsDetail': [{
                  item: '协议支付',
                  unprocessed: 20,
                  processed: 11,
                  processStatus: {
                    auto: 1,
                    manual: 10
                  },
                  processRate: '50%',
                  unsolved: 10
                }, {
                  item: '付款',
                  unprocessed: 20,
                  processed: 12,
                  processStatus: {
                    auto: 2,
                    manual: 10
                  },
                  processRate: '50%',
                  unsolved: 10
                }, {
                  item: '退款',
                  unprocessed: 20,
                  processed: 13,
                  processStatus: {
                    auto: 3,
                    manual: 10
                  },
                  processRate: '50%',
                  unsolved: 10
                }],
                /* 版本号，请勿修改 */
                '__VERSION': 4.0
            }
        },
        'props': {
            /* 待办页面路径 */
            'todoPagePath': {
                'default': () => {
                    return '_customWidget/fxTodos/undo'
                }
            }
        },
        'computed': {

        },
        'watch': {

        },
        'methods': {
            /**
             *  打开子页面
             *  @param 新参数 index
             *  @param 新参数 row
             *  @param 新参数 item
             */
            openSubPage(index, row, item) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                ctx.open({
                    status:true,
                    title: row.title,
                    path: row.path, //相当于页面的id，也是页面的路由
                    page: row.path,//vue页面组件的路径
                    // type:'BLANK', // 打开新的 tab
                    type:'SUB', // 打开子页面
                    params:{}
                })
            },
            /**
             *  tooltip
             *  @param 新参数 index
             *  @param 新参数 row
             *  @param 新参数 item
             */
            tooltipCallback(index, row, item) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                let dom = document.createElement('ul')
                
                // dom.onclick = function(){
                //     // 这里执行页面创建的方法
                //     ctx.testEv(row)
                //     // 这里执行原生的 js
                //     console.log(`${item.prop}+${row[item.prop]}+${index}`)
                // }
                // dom.innerHTML=`${row[item.prop]}+ ${index}`
                
                dom.className = 'tooltip-list'
                dom.innerHTML = `<li>自动处理 : ${row.processStatus.auto}</li><li>人工处理 : ${row.processStatus.manual}</li>`
                
                return {
                    dom
                }
            },
            /**
             *  测试方法
             *  @param 新参数 param
             */
            testEv(param) {
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                console.log('param: ', param)
                alert('已处理 ' + param.processed)
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
.v2-order-ctn {
  /* height: 100px; */
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}
.template-ctt-ctn {
  /* height: 100px; */
  margin: 5px !important;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px 8px 4px 4px;
}
.template-ctt-header {
  background: #f5f7fa;
  border-bottom: 2px solid #ebeef5;
  font-size: 15px;
  font-weight: bold;
  color: #666;
}
.template-sub-ctt-ctn {
  margin: 10px !important;
  /* background: #ffe; */
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.template-sub-ctt-header {
  background: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
  font-size: 14px;
  font-weight: bold;
  color: #666;
}
.template-tabs {
}
.template-tabs .el-tabs--border-card {
  border: none;
}
.template-tabs .el-tabs__header {
  margin-bottom: 0;
}
.template-tabs .el-tabs__content {
  display: none;
}
.template-userInfo-item {
  margin: 5px 20px !important;
  font-size: 15px;
  color: #888;
}
.template-eventsInfo-item {
  border-radius: 4px;
  background: #f5f7fa;
  font-size: 15px;
  color: #888;
}
.el-table th {
  background: #f5f7fa;
  color: #555;
}
.tooltip-list {
    line-height: 30px;
    margin: 0 25px;
}
.tooltip-list li {
    list-style: circle;
    font-size: 14px;
    color: #888;
}
.fx-tabs-ctt{
    overflow-x:hidden!important;
}
</style>