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
          <el-menu default-active="3">
            <el-sub-menu index="1">
              <template #title>
                <span>个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">需求申请</el-menu-item>
                <el-menu-item index="1-2">缺货申请</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
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
                <span>订单中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">我的订单</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span>营销中心</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <span>积分中心</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="6">
              <template #title>
                <span>我的钱包</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">钱包余额</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </div>
        <div class="content-right">
          <div class="row">
            <el-card>
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="全部订单" name="first"></el-tab-pane>
                <el-tab-pane label="待付款" name="second"></el-tab-pane>
                <el-tab-pane label="待发货" name="third"></el-tab-pane>
                <el-tab-pane label="待收货" name="fourth"></el-tab-pane>
                <el-tab-pane label="待评价" name="five"></el-tab-pane>
                <el-tab-pane label="已评价" name="six"></el-tab-pane>
                <el-tab-pane label="售后订单" name="seven"></el-tab-pane>
              </el-tabs>
              <div style="display: flex; justify-content: space-between">
                <div class="list list-head">
                  <span class="fit fit-first">商品信息</span>
                </div>
                <div
                  class="goodsoptstyle"
                  style="
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                  "
                >
                  <div></div>
                  <div><span>查看商品</span></div>
                  <div><span>商品操作</span></div>
                  <div><span>交易状态</span></div>
                  <div><span>交易操作</span></div>
                  <div><span>商品金额</span></div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="row" id="list-box"></div>
          <div class="row mini">
            <el-card style="display: flex;justify-content: flex-end;">
              <el-pagination
                :page-sizes="[20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="0"
              />
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.myorder {
  background-color: #f7f7f7;
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

    .row {
      margin-bottom: 16px;
      :deep(.el-tabs__active-bar) {
        display: none;
      }
      :deep(.el-tabs__header .el-tabs__item.is-active) {
        color: #eb5411;
      }
      .list-head {
        color: #666666;
      }
      .list {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .fit-first {
          text-align: left;
        }

        .fit {
          width: 0;
          min-width: 400px;
          flex: auto;
          flex-grow: 2;
          flex-shrink: 2;
        }
      }
      .goodsoptstyle div {
        width: 80px;
        text-align: center;
      }
    }

    #list-box {
      height: 0;
      min-height: 600px;
      flex: auto;
      overflow: auto;
    }
  }
}
</style>
