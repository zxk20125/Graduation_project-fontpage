<template>
    <v2container :wid="`root`" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;flex-direction:column;min-width:50px;min-height:50px;animation-duration:1s;background-color:rgba(0, 0, 0, 0);flex-shrink:0;" class="V2Container">
        <div :wid="`1579154163610`" class="template-ctt-ctn V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;margin-top:20px;flex-basis:100%;overflow:hidden;flex-direction:column;min-width:50px;animation-duration:1s;" ref="v2Container_1579154163610">
            <div :wid="`1579162594504`" class="template-ctt-header V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:50px;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;justify-content:center;min-height:50px;animation-duration:1s;" ref="v2Container_1579162594504">
                <div :wid="`1579162688499`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:0;margin-bottom:0;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                    <p :style="{'word-break':'break-all'}">
                        个人工作台首页
                    </p>
                </div>
            </div>
            <div :wid="`1579156896919`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:100%;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;width:100%;animation-duration:1s;" ref="v2Container_1579156896919">
                <div :wid="`1580804771524`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;animation-duration:1s;width:100%;" ref="v2Container_1580804771524">
                    <div :wid="`1580806576980`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:450px;box-sizing:border-box;position:relative;overflow:hidden;min-width:400px;min-height:450px;animation-duration:1s;" ref="v2Container_1580806576980">
                        <div :wid="`1580865796641`" class="template-sub-ctt-ctn V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:50%;animation-duration:1s;" ref="v2Container_1580865796641">
                            <div :wid="`1580893329915`" class="template-sub-ctt-header V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:40px;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;justify-content:center;min-height:40px;animation-duration:1s;" ref="v2Container_1580893329915">
                                <div :wid="`1580893280433`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:0;margin-bottom:0;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                    <p :style="{'word-break':'break-all'}">
                                        我的个人信息
                                    </p>
                                </div>
                            </div>
                            <div :wid="`1580888917068`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:20px;overflow:hidden;min-width:50px;min-height:50px;top:0;animation-duration:1s;" ref="v2Container_1580888917068">
                                <div :wid="`1580888991933`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:150px;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:150px;animation-duration:1s;" ref="v2Container_1580888991933">
                                    <v2-component-image :wid="`1580889307649`" class="V2Widget" :style="{'width':'132px','height':'132px','position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s'}" :src="userInfo.avatar" ref="v2-component-image_1580889307649">
                                    </v2-component-image>
                                </div>
                                <div :wid="`1580888944944`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:150px;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:calc(100% - 150px);animation-duration:1s;" ref="v2Container_1580888944944">
                                    <div :wid="`1580889285169`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:35px;margin-bottom:10px;margin-left:20px;margin-right:10px;overflow:hidden;font-size:18px;color:#666;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{userInfo.name}}
                                        </p>
                                    </div>
                                    <v2-component-divider :wid="`1580889911367`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','width':'calc(100% - 30px)','animation-duration':'1s'}" :theme="{}" :content-position="`center`" :icon-position="`left`" :direction="`horizontal`" ref="v2-component-divider_1580889911367">
                                    </v2-component-divider>
                                    <div :wid="`1580889353973`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:20px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:16px;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{userInfo.tel}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div :wid="`1580889067509`" class="template-userInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889067509">
                                <div :wid="`1580961114771`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;width:30%;animation-duration:1s;" ref="v2Container_1580961114771">
                                    <v2-component-icon :wid="`1580889212829`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#457ce2'}" :symbol="false" ref="v2-component-icon_1580889212829">
                                    </v2-component-icon>
                                    <div :wid="`1580961118327`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            用户名
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580960812817`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:70%;animation-duration:1s;" ref="v2Container_1580960812817">
                                    <div :wid="`1580889264666`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{userInfo.userName}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div :wid="`1580889193025`" class="template-userInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889193025">
                                <div :wid="`1580961129615`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;width:30%;animation-duration:1s;" ref="v2Container_1580961129615">
                                    <v2-component-icon :wid="`1580889266770`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#457ce2'}" :symbol="false" ref="v2-component-icon_1580889266770">
                                    </v2-component-icon>
                                    <div :wid="`1580961193128`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            工号
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580960839486`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:70%;animation-duration:1s;" ref="v2Container_1580960839486">
                                    <div :wid="`1580889270385`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{userInfo.workNum}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div :wid="`1580889222575`" class="template-userInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889222575">
                                <div :wid="`1580961183458`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;width:30%;animation-duration:1s;" ref="v2Container_1580961183458">
                                    <v2-component-icon :wid="`1580889313110`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#457ce2'}" :symbol="false" ref="v2-component-icon_1580889313110">
                                    </v2-component-icon>
                                    <div :wid="`1580961212297`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            邮箱
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580960836356`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:70%;animation-duration:1s;" ref="v2Container_1580960836356">
                                    <div :wid="`1580889206815`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{userInfo.mail}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :wid="`1580865837844`" class="template-sub-ctt-ctn V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:50%;animation-duration:1s;" ref="v2Container_1580865837844">
                            <div :wid="`1580893359116`" class="template-sub-ctt-header V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:40px;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;justify-content:center;min-height:40px;animation-duration:1s;" ref="v2Container_1580893359116">
                                <div :wid="`1580893361287`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:0;margin-bottom:0;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                    <p :style="{'word-break':'break-all'}">
                                        我的当日事件统计
                                    </p>
                                </div>
                            </div>
                            <div :wid="`1580889555560`" class="V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:calc(50% + 30px);box-sizing:border-box;position:relative;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889555560">
                                <div :wid="`1580889554439`" class="template-eventsInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;margin-top:20px;margin-bottom:10px;margin-left:20px;margin-right:10px;overflow:hidden;flex-direction:column;justify-content:center;min-width:50px;min-height:50px;width:50%;animation-duration:1s;background-color:#457ce2;" ref="v2Container_1580889554439">
                                    <div :wid="`1580889651391`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;color:#fff;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            未处理
                                        </p>
                                    </div>
                                    <div :wid="`1580889617913`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:30px;color:#fff;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{eventsInfo.eventStage.undo}}
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580889593844`" class="template-eventsInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;margin-top:20px;margin-bottom:10px;margin-left:10px;margin-right:20px;overflow:hidden;flex-direction:column;justify-content:center;min-width:50px;min-height:50px;width:50%;animation-duration:1s;" ref="v2Container_1580889593844">
                                    <div :wid="`1580889623553`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            已处理
                                        </p>
                                    </div>
                                    <div :wid="`1580889605719`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:30px;color:#457ce2;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{eventsInfo.eventStage.done}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div :wid="`1580889526222`" class="template-eventsInfo-item V2Container" style="display:flex;align-items:center;align-self:stretch;height:calc(50% - 60px);box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:20px;margin-left:20px;margin-right:20px;overflow:hidden;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889526222">
                                <div :wid="`1580889719747`" class="V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;animation-duration:1s;width:33.333%;" ref="v2Container_1580889719747">
                                    <div :wid="`1580889721909`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:50%;box-sizing:border-box;position:relative;overflow:hidden;justify-content:center;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889721909">
                                        <v2-component-icon :wid="`1580889687847`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#67C23A'}" :symbol="false" ref="v2-component-icon_1580889687847">
                                        </v2-component-icon>
                                        <div :wid="`1580889702571`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                            <p :style="{'word-break':'break-all'}">
                                                普通
                                            </p>
                                        </div>
                                    </div>
                                    <div :wid="`1580889683798`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:24px;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{eventsInfo.eventImportance.common}}
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580889645069`" class="V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:33.333%;animation-duration:1s;" ref="v2Container_1580889645069">
                                    <div :wid="`1580889765105`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:50%;box-sizing:border-box;position:relative;overflow:hidden;justify-content:center;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889765105">
                                        <v2-component-icon :wid="`1580889753238`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#E6A23C'}" :symbol="false" ref="v2-component-icon_1580889753238">
                                        </v2-component-icon>
                                        <div :wid="`1580889626182`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                            <p :style="{'word-break':'break-all'}">
                                                严重
                                            </p>
                                        </div>
                                    </div>
                                    <div :wid="`1580889712266`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:24px;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{eventsInfo.eventImportance.serious}}
                                        </p>
                                    </div>
                                </div>
                                <div :wid="`1580889693606`" class="V2Container" style="display:flex;align-items:center;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:50px;min-height:50px;width:33.333%;animation-duration:1s;" ref="v2Container_1580889693606">
                                    <div :wid="`1580889723257`" class="V2Container" style="display:flex;align-items:flex-end;align-self:stretch;height:50%;box-sizing:border-box;position:relative;overflow:hidden;justify-content:center;min-width:50px;min-height:50px;animation-duration:1s;" ref="v2Container_1580889723257">
                                        <v2-component-icon :wid="`1580889748272`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','animation-duration':'1s','color':'#F56C6C'}" :symbol="false" ref="v2-component-icon_1580889748272">
                                        </v2-component-icon>
                                        <div :wid="`1580889668832`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;" component="v2-component-text">
                                            <p :style="{'word-break':'break-all'}">
                                                紧急
                                            </p>
                                        </div>
                                    </div>
                                    <div :wid="`1580889695152`" class="V2Widget" style="box-sizing:border-box;position:relative;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;overflow:hidden;animation-duration:1s;font-size:24px;" component="v2-component-text">
                                        <p :style="{'word-break':'break-all'}">
                                            {{eventsInfo.eventImportance.emergency}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <v2-component-table :wid="`1580830334970`" class="V2Widget" :style="{'position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'10px','margin-right':'10px','overflow':'hidden','width':'calc(100% - 20px)','animation-duration':'1s','height':'100%','top':'-1px','left':'-1px'}" :tableData="eventsDetail" :theme="{'tableType':'border','size':''}" :columns="[{'active':true,'type':'text','prop':'item','label':'对象','linkTarget':'_blank','headerAlign':'left','align':'left','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'openTooltip':false,'handleLink':true,'handleLinkCB':'openSubPage'},{'active':true,'type':'text','prop':'unprocessed','label':'未处理','linkTarget':'_blank','headerAlign':'center','align':'center','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'processed','label':'已处理','linkTarget':'_blank','headerAlign':'center','align':'center','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}],'openTooltip':true,'handleTooltip':true,'tooltipEffect':'light','tooltipContentCallback':'tooltipCallback'},{'active':true,'type':'text','prop':'processRate','label':'处理率','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','tooltipEffect':'dark','useMinWidth':true,'headerAlign':'center','align':'center','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]},{'active':true,'type':'text','prop':'unsolved','label':'未解决数','handleLink':true,'handleLinkCB':'handleLinkCallback','linkTarget':'_blank','openTooltip':false,'handleTooltip':true,'tooltipContent':'提示','tooltipContentCallback':'tooltipContentCallback','tooltipEffect':'dark','useMinWidth':true,'headerAlign':'center','align':'center','sortable':false,'openFilter':false,'combi':[{'active':'true'}],'tagMap':[{'active':'true','type':'text'}],'iconMap':[{'active':'true'}],'filterMap':[{'active':'true'}]}]" :table-data="eventsDetail" :t-height="`100%`" :t-max-height="`100%`" :open-index="false" :loading="false" :open-page="false" :pager-count="5" :open-set-page-callback="false" :set-page-callback="`setPageCallback`" :total-count="1" :tool-bar="true" :tool-title="`操作`" :tool-location="`right`" :tool-width="100" :tool-btns="[]" :expand="false" ref="v2-component-table_1580830334970">
                    </v2-component-table>
                </div>
                <div :wid="`1580803127247`" class="template-sub-ctt-ctn V2Container" style="display:flex;align-items:flex-start;align-self:stretch;height:auto;box-sizing:border-box;position:relative;overflow:hidden;flex-direction:column;min-width:620px;min-height:50px;animation-duration:1s;width:620px;" ref="v2Container_1580803127247">
                    <v2-component-stabs :wid="`1580866289081`" class="template-tabs V2Widget" :style="{'animation-duration':'1s','position':'relative','width':'100%','margin-top':'0','margin-bottom':'0','margin-left':'0','margin-right':'0','overflow':'hidden'}" :tabs="todoUI.tabs" :active="0" :tabs-type="`border-card`" :has-btns="false" :has-badge="true" :btns-type="`text`" @_op_s-tabs_tabs:tab-click="v2_component_stabs_1578589799000" ref="v2-component-stabs_1580866289081">
                    </v2-component-stabs>
                    <v2-page :wid="`1580867861641`" class="fx-tabs-ctt" :style="{'height':'calc(100% - 50px)','padding-left':'0','padding-right':'0','margin-right':'0','animation-duration':'1s','overflow':'scroll','width':'100%','position':'relative','margin-top':'10px','margin-bottom':'10px','margin-left':'0','align-self':'stretch','min-width':'50px','min-height':'50px'}" :page="todoPagePath" :keep-alive="false" ref="v2-page_1580867861641" :params="``" :keepalive="false">
                    </v2-page>
                </div>
            </div>
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
            },
            /**
             *  v2_component_stabs_1578589799000
             *  @param 组件的vue实例 vueIns
             *  @param 激活的tab索引 activeTab
             */
            v2_component_stabs_1578589799000(vueIns, activeTab) {
                /**
                * 事件绑定在vue实例上，第一个参数是vue实例。
                * 更多其他参数可以参考element-ui官网:https://element.eleme.cn/#/zh-CN
                **/
                
                //函数内直接用ctx代替this访问vue页面的数据。
                const ctx = this;
                
                console.log('activeTab: ', activeTab)
                
                var idx = activeTab.index;
                if(idx == 0) ctx.todoPagePath = '_customWidget/fxTodos/undo';  // 待办事项
                if(idx == 1) ctx.todoPagePath = '_customWidget/fxTodos/cancel';  // 已取消待办
                if(idx == 2) ctx.todoPagePath = '_customWidget/fxTodos/latestNotice';  // 最新公告
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