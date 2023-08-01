<script setup lang="ts">
import { ref } from 'vue'
import PurchaseBox from '@/components/purchase-box.vue'
const list = ref([
  {
    id: 1,
    url: 'https://www.zrcsc.com/api/files/64c1d3f99221cd59e8ed59b8',
    labels: ['爆品', 'TOP'],
    title: '自然馋葱香椒麻猪舌1kg*10',
    price: '￥565',
    unit: '/箱'
  },
  {
    id: 2,
    url: 'https://www.zrcsc.com/api/files/63fc618f9221cd32491679b3',
    labels: ['热销'],
    title: '自然馋大刀腰片(金标)500g*20',
    price: '￥799',
    unit: '/箱'
  },
  {
    id: 3,
    url: 'https://www.zrcsc.com/api/files/63f869979221cdebc09662b4',
    labels: ['热销'],
    title: '爆爆滑海鸭蛋虾滑160g*36',
    price: '￥480',
    unit: '/箱'
  },
  {
    id: 4,
    url: 'https://www.zrcsc.com/api/files/63f8717f9221cdea08a1ad40',
    labels: ['爆品', 'TOP'],
    title: '自然馋严选千层肚1kg*10',
    price: '￥910',
    unit: '/箱'
  },
  {
    id: 5,
    url: 'https://www.zrcsc.com/api/files/63f866ad9221cd1b0d925002',
    labels: ['爆品', 'TOP'],
    title: '爆爆滑大颗粒虾滑1kg*12',
    price: '￥864',
    unit: '/箱'
  },
  {
    id: 6,
    url: 'https://www.zrcsc.com/api/files/63fd691b9221cd24d58ebafb',
    labels: ['热销'],
    title: '自然馋黑土猪火锅午餐肉340g*24',
    price: '￥340',
    unit: '/箱'
  },
  {
    id: 7,
    url: 'https://www.zrcsc.com/api/files/63fdbbc19221cdf2b0726856',
    labels: ['热销'],
    title: '自然馋牛奶鸭血300g*20',
    price: '￥41',
    unit: '/箱'
  },
  {
    id: 8,
    url: 'https://www.zrcsc.com/api/files/63f87dbc9221cd3755aa7722',
    labels: ['爆品', 'TOP'],
    title: '自然馋麻辣排骨1.2kg*8',
    price: '￥498',
    unit: '/箱'
  },
])
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
          <template v-for="item in list" :key="item.id">
            <PurchaseBox :url="item.url" :labels="item.labels" :title="item.title" :price="item.price" :unit="item.unit" />
          </template>
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
