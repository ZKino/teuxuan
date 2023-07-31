<script setup lang="ts">
import logoIcon from '@/assets/logo2.png'
import shopcarIcon from '@/assets/shopcar2.png'
import Search from '@/components/search.vue'
</script>

<template>
  <div class="search-bar">
    <div class="container">
      <div class="inner">
        <img class="icon" :src="logoIcon" alt="logo" />
        <div class="right">
          <Search iconColor="rgb(192, 196, 204)" inputBg="#f7f7f7" inputColor="#606266" />
          <el-badge :value="0" class="brage">
            <img class="car" :src="shopcarIcon" alt="" />
          </el-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  background-color: #fff;
}
.search-bar .inner {
  height: 48px;
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
