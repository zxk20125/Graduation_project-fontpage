<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-left-ctn">
        <img src="../img/login.jpg">
        <p class="login-title">宅急送</p>
        <p class="vue-spa-version">曾学锴 &copy; 2020</p>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm cus-login-container"
      >
        <h3 class="cus-title">{{loginTitle}}</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="identifyCode">
          <div class="cus-code-input">
            <el-input
              class="input"
              maxlength="8"
              placeholder="请输入验证码"
              v-model="ruleForm.identifyCode"
            ></el-input>
            <div class="cus-identifying-code" @click="getIdentifyingCode(true)">
              <img
                style="height:100%; width: 100px; cursor: pointer;"
                alt="点击更换"
                :src="identifyCodeSrc"
                title="点击更换"
              >
            </div>
          </div>
        </el-form-item>

        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            class="cus-submit-btn"
            native-type="submit"
            @click.native.prevent="handleSubmit"
            :loading="logining"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getVerifyImage } from "@/api/api";
import packageV from "packageJSON";
export default {
  data() {
   
    return {
      otherQuery: {},
      identifyCodeSrc: getVerifyImage(),
      logining: false,
      version:packageV.version,
      ruleForm: {
        account: "",
        checkPass: "",
        identifyCode: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ],
        identifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: false
    };
  },
  watch: {},
  created() {},
  mounted() {},
  computed:{
    loginTitle(){
      return '宅急送后台管理系统'
    },
    logoSrc(){
      return this.$store.getters.logo||"../img/login_user.png"
    }
  },
  methods: {
    handleReset() {
      this.$refs.ruleForm.resetFields();
    },
    getIdentifyingCode: function(bRefresh) {
      if (bRefresh) {
        this.identifyCodeSrc = `${getVerifyImage()}?${Math.random()}`;
      }
    },
    handleSubmit(ev) {
      var _this = this;

      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var loginParams = {
            username: this.ruleForm.account,
            password: this.$root.encryptByDES(this.ruleForm.checkPass),
            code: this.ruleForm.identifyCode
          };

          this.logining = true;
          this.$store.dispatch("user/login", loginParams)
            .then(() => {
              //if(data.status&&data.success){
                _this.$router.push({ path: "/" });

                this.logining = false;
              //}
            })
            .catch(err => {
              this.logining = false;
              this.$notify({
                title: "登录失败",
                message: err&&err.msg,
                type: "error"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" >
.login-wrapper {
  position: fixed;
  background-image: url(../img/login.jpg);
  background-size: cover;
  background-position-y: 0;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.login-wrapper:before {
  position: absolute;
  content: "";
  background: hsla(0, 0%, 53.7%, 0.3);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsla(0, 0%, 53.7%, 0.3)),
    to(hsla(0, 0%, 53.7%, 0.5))
  );
  background: linear-gradient(hsla(0, 0%, 53.7%, 0.3), hsla(0, 0%, 53.7%, 0.5));
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.login-container {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -192.5px;
  margin-left: -375px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  width: 750px;
  -webkit-box-shadow: 0 0 12px #8f96a2;
  box-shadow: 0 0 12px #8f96a2;
  height: 360px;
}
.login-left-ctn {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
  background: rgba(228, 234, 244, 0.9);
  background: $--color-primary;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(69, 124, 226, 0.5)),
    to(rgba(69, 124, 226, 0.9))
  );
  background: linear-gradient(rgba(69, 124, 226, 0.5), rgba(69, 124, 226, 0.9));

  p.login-title {
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
  }
  img.login-logo-img {
    margin-top: 100px;
    width:120px;
    height:82px;
  }
  .vue-spa-version{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    color: #fff;
  }
}
.cus-submit-btn {
  width: 100%;
}
.cus-login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  // -webkit-border-radius: 5px;
  // border-radius: 5px;
  // -moz-border-radius: 5px;
  background-clip: padding-box;
  //margin: 180px auto;
  // width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  //border: 1px solid #eaeaea;
  //box-shadow: 0 0 25px #cac6c6;
  float: left;
  width: 50%;
  height: 100%;
  box-sizing: border-box;

  .cus-identifying-code {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 102px; /*设置图片显示的宽*/
    height: 40px; /*图片显示的高*/
    //background: #e2e2e2;
    margin: 0;
    border: 1px solid #ccc;
    border-left: 0;
    box-sizing: border-box;
  }
  .cus-title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
    font-size: 18px;
  }
  .cus-remember {
    float: left;
  }

  .cus-forget-passWord {
    float: right;
  }
}
</style>