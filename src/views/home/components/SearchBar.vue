<script setup lang="ts">
import logoIcon from '@/assets/logo.png'
import shopcarIcon from '@/assets/shopcar.png'
import Search from '@/components/search.vue'
</script>

<template>
  <div class="search-bar">
    <div class="container">
      <div class="inner">
        <img class="icon" :src="logoIcon" alt="logo">
        <div class="right">
          <Search />
          <el-badge :value="0" class="brage">
            <img class="car" :src="shopcarIcon" alt="">
          </el-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-bar .inner {
  padding: 0 20px 0 16px;
  height: 48px;
  background: linear-gradient(270deg, #eb5411 0%, #fba22b 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    height: 44px;
  }

  .right {
    display: flex;
    align-items: center;

    .car {
      width: 24px;
      height: 24px;
      margin-left: 16px;
    }

    .brage {
      position: relative;
      top: 4px;
    }
  }
}
</style>
