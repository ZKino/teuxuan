<script setup lang="ts"></script>
<template>
  <div class="purchase-box">
    <div style="position: relative">
      <img
        src="https://www.zrcsc.com/api/files/64c1d3f99221cd59e8ed59b8"
        alt=""
      />
    </div>
    <div class="labels">
      <span class="labelStyle">爆品</span><span class="labelStyle">TOP</span>
    </div>
    <div class="coupons">
      <span class="isDirect">直</span>
      <span class=""></span> <span class=""></span>
    </div>
    <div class="purchase-items-text">自然馋葱香椒麻猪舌1kg*10</div>
    <div class="purchase-items-foot">
      <div class="purchase-items-red">￥565</div>
      <span>/箱</span>
    </div>
    <div class="purchase-items-add">
      <img src="https://www.zrcsc.com/api/files/63048afb9221cdc090db64c5" />
      <div>加入购物车</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.purchase-box {
  border: 1px solid #eeeeee;
  padding: 4px;
  margin-bottom: 10px;
  margin: 5px 5px;
  width: 24%;

  & img {
    width: 270px;
    height: 270px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
  }

  .labels {
    width: 270px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    .labelStyle {
      display: inline-block;
      line-height: 19px;
      height: 19px;
      padding: 2px 6px;
      background: #eeeeee;
      margin-right: 4px;
    }
  }

  .coupons {
    display: flex;
    width: 270px;
    margin-top: 8px;
    height: 18px;

    .isDirect {
      height: 18px;
      padding: 0px 4px;
      line-height: 18px;
      background: #eb5411;
      border-radius: 2px 2px 2px 2px;
      opacity: 1;
      text-align: center;
      display: inline-block;
      font-size: 12px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }

  .purchase-items-text {
    margin: 8px 0px;
    font-size: 16px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 270px;
  }

  .purchase-items-foot {
    display: flex;
    align-items: center;
    margin: 0px 0 8px 0;

    .purchase-items-red {
      font-size: 24px;
      font-weight: bold;
      color: #eb5411;
    }
  }

  .purchase-items-add {
    width: 270px;
    height: 45px;
    background: #eb5411;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
    line-height: 45px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    padding: 0 70px;
    box-sizing: border-box;
    cursor: pointer;

    & > img {
      width: 20px;
      height: 20px;
      margin-top: 13px;
      object-fit: cover;
      cursor: pointer;
      border-radius: 4px;
    }
  }
}
</style>
