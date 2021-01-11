<template>
  <div>
    <el-badge
      v-for="item in badgeData"
      :key="item.ID"
      :value="item.value"
      :class="item.class"
      :type="model.styleSelect"
      :size="model.size"
    >
      <el-button size="small" v-if="!model.iconType" :style="{padding:model.labelWitdh}">{{item.desp}}</el-button>
      <el-button class="share-button" icon="el-icon-share" type="primary" v-if="model.iconType"  :style="{padding:model.labelWitdh}"></el-button>
      <!-- <el-button circle="" -->
    </el-badge>
  </div>
</template>

<script>
export default {
  name: "v2-badge",
  props: {
    badgeData: {
      default: () => [
        {
          ID: 1,
          value: "1",
          class: "item",
          //   type: "primary",
          desp: "评论",
        },
        {
          ID: 2,
          value: "2",
          class: "item",
          //   type: "warning",
          desp: "回复",
        },
        {
          ID: 3,
          value: "12",
          class: "item",
          //   type: "warning",
          desp: "查看",
        },
      ],
    },

    //    iconType:false
  },
  data() {
    return {};
  },
};
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>