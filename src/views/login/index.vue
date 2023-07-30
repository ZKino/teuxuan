<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  account: '',
  password: '',
  remember: false,
})

const submit = () => {
  if (!form.account || !form.password) {
    ElMessage({
      message: '账号密码不能为空！',
      type: 'warning',
    })
  }
}
</script>

<template>
  <div class="login">
    <div class="left">
      <h2 class="wecome">hi，欢迎光临特u选!</h2>
      <span class="sub-wecome">在这里做老板的同时，我们一起成长!</span>
      <el-form :model="form" label-width="80px" style="width: 395px">
        <el-form-item label="账号">
          <el-input type="text" v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item label="记住密码">
          <el-switch v-model="form.remember" />
        </el-form-item>
      </el-form>
      <div class="btn-groundg">
        <el-button type="primary" @click="submit">登录</el-button>
      </div>
      <div class="action">
        <span class="txt">还没有账号？立即注册</span>
        <span class="tiyan">体验一下？</span>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  width: 44%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding-top: 314px;

  .wecome {
    font-size: 40px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 28px;
  }

  .sub-wecome {
    font-size: 20px;
    font-weight: 400;
    color: #999999;
    margin-bottom: 82px;
  }

  .btn-groundg .el-button {
    width: 395px;
    height: 64px;
    background-color: #ff5702;
    border-radius: 4px;
    font-size: 25px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin: 64px 0 27px 0;
    border: none;
    outline: none;
  }

  .action {
    width: 395px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    cursor: pointer;

    & span:first-child {
      margin-left: 10px;
    }
    & span:last-child {
      color: rbg(255, 87, 2);
    }
  }
}
.right {
  width: 56%;
  height: 100%;
  border: 1px solid blue;
  background-image: url('https://www.zrcsc.com/api/files/62e10c089221cdded426fb55');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
