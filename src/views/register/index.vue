<script setup lang="ts">
import { reactive, ref } from 'vue'
import Nav from '@/components/nav.vue'

const form = reactive({
  uname: '',
  account: '',
  payPwd: '',
  phone: '',
  loginPwd: '',
  companyName: '',
  companyLogo: '',
  companyCode: '',
  companyBoss: '',
  agreenMent: false,
})

const rules = reactive({
  uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  account: [{ required: true, message: '请输入登录账户', trigger: 'blur' }],
  payPwd: [{ required: true, message: '请输入支付密码', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  loginPwd: [{ required: true, message: '请输入登录密码', trigger: 'blur' }],
})

const ruleFormRef = ref()

const submitForm = async (formEl: any) => {
  if (!form.agreenMent) {
    return ElMessage({
      message: '请阅读并同意用户协议和隐私条款',
    })
  }

  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log('submit')
    } else {
      console.log(fields, '===')
    }
  })
}
</script>

<template>
  <div class="register">
    <Nav />
    <div class="container">
      <div class="inner">
        <el-form :model="form" :rules="rules" ref="ruleFormRef">
          <div class="title">个人信息</div>
          <div class="form-inp">
            <div class="item">
              <el-form-item required prop="uname">
                <el-input v-model="form.uname" placeholder="请输入用户名" />
              </el-form-item>
              <el-form-item required prop="account">
                <el-input v-model="form.account" placeholder="请输入登录账户" />
              </el-form-item>
              <el-form-item required prop="payPwd">
                <el-input v-model="form.payPwd" placeholder="请输入支付密码" />
              </el-form-item>
            </div>
            <div class="item">
              <el-form-item required prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号码" />
              </el-form-item>
              <el-form-item required prop="loginPwd">
                <el-input
                  v-model="form.loginPwd"
                  placeholder="请输入登录密码"
                />
              </el-form-item>
            </div>
          </div>
          <div class="title">公司信息</div>
          <div class="form-inp">
            <div class="item">
              <el-form-item prop="companyName">
                <el-input
                  v-model="form.companyName"
                  placeholder="请输入公司名称"
                />
              </el-form-item>
              <el-form-item prop="companyCode">
                <el-input
                  v-model="form.companyCode"
                  placeholder="请输入公司统一信用"
                />
              </el-form-item>
            </div>
            <div class="item">
              <el-form-item prop="companyLogo">
                <el-input
                  v-model="form.companyLogo"
                  placeholder="请输入公司品牌"
                />
              </el-form-item>
              <el-form-item prop="companyBoss">
                <el-input
                  v-model="form.companyBoss"
                  placeholder="请输入法人名称"
                />
              </el-form-item>
            </div>
          </div>
          <div class="subform">
            <el-button type="button" @click="submitForm(ruleFormRef)"
              >注册</el-button
            >
            <el-checkbox
              v-model="form.agreenMent"
              label="我已阅读并同意用户协议和隐私条款"
              size="large"
            />
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.register {
  height: 100vh;
  background-color: #fafafa;
}

.register .inner {
  margin-top: 16px;
  background-color: #fff;

  .title {
    text-align: left;
    margin: 0 0 30px 150px;
    padding-top: 25px;
    font-size: 20px !important;
    font-weight: 500;
    line-height: 1 !important;
    letter-spacing: 0.02em !important;
    font-family: Roboto, sans-serif !important;
  }

  .form-inp {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .item {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .el-form-item {
        width: 300px;
        margin-right: 116px;
        position: relative;

        :deep(.el-form-item__content) {
          width: 300px;
        }

        :deep(.el-form-item__error) {
          position: absolute;
          left: -88px;
          top: 0;
          transform: translateY(50%);
        }
      }
    }
  }

  .subform {
    margin-top: 50px;
    width: 100%;
    height: 200px;
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .el-button {
      padding: 0;
      width: 350px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #ff5500;
      font-size: 20px;
      font-weight: 500;
      border-radius: 5px;
      color: white;
      margin: 30px 0px 30px 70px;
      border: none;
    }
  }
}
</style>
