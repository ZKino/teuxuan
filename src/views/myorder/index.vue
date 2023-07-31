<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="myorder">
    <Nav />
    <SearchBar />
    <div class="container">
      <div class="inner">
        <div class="menu-list">
          <div class="title">用户中心</div>
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">需求申请</el-menu-item>
                <el-menu-item index="1-2">缺货申请</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><location /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">银行卡信息</el-menu-item>
                <el-menu-item index="1-2">收货地址</el-menu-item>
                <el-menu-item index="1-3">账户安全</el-menu-item>
                <el-menu-item index="1-4">认证信息</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><location /></el-icon>
                <span>订单中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">我的订单</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><location /></el-icon>
                <span>营销中心</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <el-icon><location /></el-icon>
                <span>积分中心</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="6">
              <template #title>
                <el-icon><location /></el-icon>
                <span>我的钱包</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">钱包余额</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </div>
        <div class="content-right">44545</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.myorder {
  height: 100vh;
}

.myorder .inner {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 24px;

  .menu-list {
    min-width: 208px;
    height: 100% !important;
    margin-right: 16px;
    overflow-y: auto;
    background-color: rgb(255, 255, 255);

    .title {
      font-size: 20px;
      font-family: 'PingFang SC-Bold', 'PingFang SC';
      font-weight: bold;
      color: rgb(51, 51, 51);
      background-color: rgb(255, 255, 255);
      border-right: 1px solid rgb(230, 230, 230);
      padding: 16px 0px;
      text-align: center;
    }
  }

  .content-right {
    min-width: 976px;
  }
}
</style>
