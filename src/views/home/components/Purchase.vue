<script setup lang="ts">
import PurchaseBox from '@/components/purchase-box.vue'
</script>
<template>
  <div class="purchase purchase-btm">
    <div class="container">
      <div class="inner">
        <div class="purchase-head">
          <div class="purchase-head-title">选尖货</div>
          <div class="purchase-head-recommend">
            根据您的浏览，实时为您推荐爆款产品
          </div>
          <div class="purchase-head-more">查看更多</div>
        </div>
        <div class="purchase-items">
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
          <PurchaseBox />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.purchase .inner {
  padding: 20px;
  background: #ffffff;
  margin: 0 auto;
}

.purchase-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.purchase-head-title {
  width: 90px;
  font-size: 20px;
}
.purchase-head-recommend {
  margin-right: 600px;
}
.purchase-head-more {
  font-weight: bold;
  color: #e59112;
  cursor: pointer;
}

.purchase-items {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
}
</style>
