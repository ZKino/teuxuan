<script setup lang="ts"></script>
<template>
  <div class="box-footer">
    <div class="container">
      <div class="inner">
        <div class="top">
          <el-image
            class="ioc"
            src="https://www.zrcsc.com/api/files/629ecec09221cd9b84c11ecc"
            fit="contain"
          />
          <el-divider direction="vertical" />
          <div>
            <p>四川掌酷智能科技有限公司</p>
            <p>地址:四川成都联合广场28层</p>
          </div>
          <el-divider direction="vertical" />
          <div>
            <p>服务热线400-6666-019</p>
            <p>工作日 9：30-18：30</p>
          </div>
          <el-divider direction="vertical" />
          <el-image
            class="qrCode"
            src="https://www.zrcsc.com/api/files/629ecedf9221cda3fc3270ba"
            fit="contain"
          />
        </div>
        <div class="bot">
          <div class="col">
            <span class="tag"><span class="tag inner1"> 多 </span></span>
            <span>品类齐全 一站式购物</span>
          </div>
          <el-divider direction="vertical" />
          <div class="col">
            <span class="tag"><span class="tag inner1"> 快 </span></span>
            <span>多仓直发 极速配送</span>
          </div>
          <el-divider direction="vertical" />
          <div class="col">
            <span class="tag"><span class="tag inner1"> 好 </span></span>
            <span>正品好货 精致服务</span>
          </div>
          <el-divider direction="vertical" />
          <div class="col">
            <span class="tag"><span class="tag inner1"> 省 </span></span>
            <span>天天底价 畅选无忧</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-footer div {
  box-sizing: border-box;
}

.top {
  padding: 9px 0 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: Bold;
  background-color: #ffffff;
  flex-wrap: wrap;

  .ioc {
    height: 88px;
  }

  .qrCode {
    height: 118px;
  }

  .el-divider--vertical {
    height: 64px;
    width: 2px;
    color: #eb5411;
  }
}

.bot {
  background-color: #eb5411;
  color: #ffffff;
  font-size: 1.428571428571429rem;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 60px;
  flex-wrap: wrap;
  padding: 0 10px;

  .col {
    padding: 17px 0;
    min-width: 228px;

    .tag {
      display: inline-block;
      width: 36px;
      height: 24px;
      line-height: 24px;
      background: #ffffff;
      position: relative;
      text-align: center;
    }

    .tag::before,
    .tag::after {
      content: '';
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      position: absolute;
    }

    .tag::before {
      left: 0;
      top: -12px;
      border-bottom: 12px solid #ffffff;
    }
  }

  .tag::after {
    left: 0;
    bottom: -12px;
    border-top: 12px solid #ffffff;
  }

  .tag.inner1 {
    background-color: #eb5411;
    -webkit-transform: scale(0.85, 0.9);
    -moz-transform: scale(0.85, 0.9);
    transform: scale(0.85, 0.9);
    z-index: 1;
  }

  .tag.inner1::before {
    top: -11px;
    border-bottom: 12px solid #eb5411;
  }
  .tag.inner1::after {
    bottom: -11px;
    border-top: 12px solid #eb5411;
  }

  .el-divider--vertical {
    height: 32px;
    width: 2px;
    color: #ffffff;
  }
}
</style>
