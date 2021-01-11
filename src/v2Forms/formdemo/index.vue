<template>
  <div>
    <el-form
      ref="mountpoint"
      v-loading="loading.status"
      :element-loading-text="loading.text"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="100px"
    >
      <el-form-item label="支付方式" prop="field101">
        <el-select
          v-model="formData.field101"
          @change="on_field101_change"
          placeholder="请选择下拉选择支付方式"
          clearable
          :style="{ width: '100%' }"
        >
          <el-option
            v-for="(item, index) in field101Options"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-row v-show="visible_info">
        <el-col :span="12">
          <el-form-item label="姓名" prop="field103">
            <el-input
              v-model="formData.info.field103"
              placeholder="请输入姓名"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系方式" prop="field105">
            <el-input
              v-model="formData.info.field105"
              placeholder="请输入联系方式"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-show="visible_cardInfo">
        <el-col :span="12">
          <el-form-item label="账号" prop="field109">
            <el-input
              v-model="formData.cardInfo.field109"
              placeholder="请输入账号"
              :disabled="disabled_field109"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="余额" prop="field110">
            <el-input
              v-model="formData.cardInfo.field110"
              placeholder="请输入余额"
              :disabled="disabled_field110"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="top">
        <el-col :span="4">
          <el-form-item label-width="0" prop="">
            <el-button
              type="primary"
              icon="el-icon-search"
              size="medium"
              @click="bindButtonSubmit_build"
            >
              确定信息
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    //表单宽度
    width: {
      type: String,
      default: "100%",
    },
    //表单数据
    formData: {
      type: Object,
      default: () => {
        return {
          field101: undefined,
          info: {
            field103: undefined,
            field105: undefined,
          },
          cardInfo: {
            field109: undefined,
            field110: undefined,
          },
          row111: {},
        };
      },
    },
  },
  data() {
    return {
      loading: {
        status: false,
        text: "加载中",
      },
      info_show_4: true,
      cardInfo_show_5: true,
      field109_disabled_6: false,
      field110_disabled_7: false,
      rules: {
        field101: [
          {
            required: true,
            message: "请选择下拉选择支付方式",
            trigger: "change",
          },
        ],
        field103: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        field105: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
        ],
        field109: [{ required: true, message: "请输入账号", trigger: "blur" }],
        field110: [{ required: true, message: "请输入余额", trigger: "blur" }],
      },

      field101Options: [
        { label: "现金", value: "cash" },
        { label: "银行卡", value: "card" },
      ],
    };
  },
  computed: {
    visible_info() {
      return this.info_show_4;
    },
    visible_cardInfo() {
      return this.cardInfo_show_5;
    },
    disabled_field109() {
      return this.field109_disabled_6;
    },
    disabled_field110() {
      return this.field110_disabled_7;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.info_show_4 = false;
    this.cardInfo_show_5 = false;
  },
  methods: {
    bindButtonSubmit_build: function() {
      this.submitForm();
    },
    submitForm() {
      this.loading.status = false;
      this.$refs["mountpoint"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
        this.$emit("confirm-submit", this.formData);
      });
    },
    resetForm() {
      this.$refs["mountpoint"].resetFields();
    },
    on_field101_change: function(value) {
      this.formData.info.field103 = "";
      if (!!this.formData.field101) {
        this.formData.info.field103 = "张三";
      }
      this.formData.info.field105 = "";
      if (!!this.formData.field101) {
        this.formData.info.field105 = "12738217283";
      }
      this.info_show_4 = !!this.formData.field101;
      this.cardInfo_show_5 = !!(this.formData.field101 == "card");
      this.formData.cardInfo.field109 = "";
      if (this.formData.field101 == "card") {
        this.formData.cardInfo.field109 = "123123123";
      }
      this.formData.cardInfo.field110 = "";
      if (this.formData.field101 == "card") {
        this.formData.cardInfo.field110 = "56466";
      }
      this.field109_disabled_6 = !!(this.formData.field101 == "card");
      this.field110_disabled_7 = !!(this.formData.field101 == "card");
    },
  },
};
</script>
<style></style>
