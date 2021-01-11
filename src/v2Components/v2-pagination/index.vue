<template>
    <el-pagination
        :class="widgetClass" 
        :style="model.commonStyle"
        ref="_op_pagination"
        :current-page="Number(model.currentPage)||1"
        :page-sizes="model.pageSizeArr||[10,20,30,40,50]"
        :page-size="Number(model.pageSize)"
        :layout="layoutStr"
        :prev-text ="model.prevText"
        :next-text ="model.nextText"
        :total="Number(model.total)">
    </el-pagination>
</template>
<script>

  export default {
    name: 'v2-component-carousel',

    data(){
      return {
          //currentPage:1
         // pageSize:Number(this.model.pageSize),
         // totalCount:Number(this.model.total)
          
      }
    },
    computed:{
      layoutStr(){

          var layoutArr = ["prev", "pager", "next"];
          if(this.model.isShowTotal){
             layoutArr.unshift('total');
          }
          if(this.model.isShowPageSize){
            layoutArr.length>3?layoutArr.splice(1,0,'sizes'):layoutArr.unshift('sizes');
          }
          if(this.model.isForward){
            layoutArr.push('jumper');
          }
          return layoutArr.join(',');
      }
    },
    methods:{
     
    }
  }
</script>
<style lang="scss" scoped>

</style>
