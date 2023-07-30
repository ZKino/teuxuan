<script setup lang="ts">
import { ref } from 'vue'

import { RouterLink } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

import Dialog from '@/components/dialog.vue'

const isShow = ref(false)
const onShow = () => {
  isShow.value = true
}
const onClose = () => {
  isShow.value = false
}
</script>

<template>
  <div class="nav">
    <div class="container">
      <div class="inner">
        <div class="left">欢迎光临特U选</div>
        <div class="right">
          <div class="order">
            <el-dropdown>
              <span class="el-dropdown-link">
                我的订单
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>全部订单</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="service" @click="onShow">联系客服</div>
          <div class="login">
            <RouterLink to="/login">登录</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog :isShow="isShow" @onClose="onClose" />
</template>

<style lang="scss" scoped>
.nav {
  background-color: #fafafa;
  position: sticky;
  top: 0;
  z-index: 999;
}

.nav .inner {
  $h: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $h;

  .right {
    display: flex;
    align-items: center;

    .order,
    .service,
    .login {
      margin-left: 40px;
      cursor: pointer;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: inherit;
    }
  }
}
</style>
