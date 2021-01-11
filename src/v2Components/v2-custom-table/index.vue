<template>
<div>
    <el-table :data="tableData" :span-method="objectSpanMethod" border>
        <el-table-column v-for="item in columnData" :key="item.name" :prop="item.name" :label="item.label" :width="item.width"></el-table-column>
        <!-- <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 4（元）"></el-table-column> -->
    </el-table>
</div>
</template>

<script>
export default {
    name: "v2-custom-table",
    props: {
        tableData: {
            default: () => [{
                ID: 1,
                date: '1'
            }, {
                ID: 1,
                date: '1'
            }, {
                ID: 1,
                date: '1'
            }, {
                ID: 2,
                date: '2'
            }, {
                ID: 2,
                date: '2'
            }, {
                ID: 3,
                date: '3'
            }, 
             {
                ID: 3,
                date: '3'
            }, 
             {
                ID: 3,
                date: '3'
            }, 
             {
                ID: 3,
                date: '3'
            }, {
                ID: 1,
                date: '1'
            }, {
                ID: 1,
                date: '1'
            }, {
                ID: 2,
                date: '2'
            }, {
                ID: 2,
                date: '2'
            }, {
                ID: 3,
                date: '34'
            }, ]
        },
        columnData: {
            default: () => [{
                    name: "ID",
                    label: "IDaffa",
                    width: "180",
                },
                {
                    name: "date",
                    label: "日期",
                    width: "180",
                },
                {
                    name: "data1",
                    label: "数据1",
                    width: "180",
                },
                {
                    name: "data2",
                    label: "数据2",
                    width: "180",
                },
                {
                    name: "data3",
                    label: "数据3",
                    width: "180",
                },
                {
                    name: "data4",
                    label: "数据4",
                    width: "180",
                },
            ],
        }
    },
    data() {
        return {};
    },
    computed: {

        rowSpans() {
            let r = [];
            if (this.columnData && this.columnData[0]) {
                let key = this.columnData[0].name
                //遍歷數據，找到相同值
                let lastValue, startIndex = 0,
                    count = 0;
                let result = [];
                for (let i = 0, len = this.tableData.length; i < len; i++) {
                    //拿到当前行数据item
                    let item = this.tableData[i];

                    if (lastValue === item[key]) {
                        //如果上一个数据和item数据相等，则认为该行占据空间为0，同时，增加一次相等计数
                        result[i] = 0;
                        count++;
                    } else {
                        //如果上一个数据和item数据不等，则认为需要新起一个大行，那么将大行的起始行span设为“相等计数+1”
                        result[startIndex] = count + 1;
                        //新起的一行，初始span为1，也就是至少会占据一行
                        result[i] = 1;
                        //重新开始计数
                        count = 0;
                        //重新开始计大行初始行号startIndex
                        startIndex = i;
                        //重新设置上一行数据
                        lastValue = item[key];
                    }
                }
                return result
            }
        }
    },
    methods: {

        objectSpanMethod({ row, column, rowIndex, columnIndex }) {

            if (columnIndex === 0 && this.rowSpans) {
                return {
                    rowspan: this.rowSpans[rowIndex],
                    colspan: this.rowSpans[rowIndex] == 0 ? 0 : 1,
                };
            }
        },
    },
};
</script>
