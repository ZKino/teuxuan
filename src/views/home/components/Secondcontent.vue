<script setup lang="ts">
import noticeIcon from '@/assets/notice.png'
</script>
<template>
  <div class="secondcontent">
    <div class="container">
      <div class="inner">
        <div class="content-left">
          <div class="content-left-platform">
            <div class="content-left-platform-notice">
              <img class="notice" :src="noticeIcon" alt="" />
              <span>平台公告</span>
            </div>
            <div class="content-left-platform-text"><div>暂无内容</div></div>
          </div>
          <div class="content-left-flex">
            <div class="content-left-coupon-entry-v2">
              <img
                src="https://www.zrcsc.com/api/files/648020ba9221cdcb55e3d87a"
                alt=""
              />
            </div>
            <div class="content-left-coupon-entry-v2">
              <img
                src="https://www.zrcsc.com/api/files/648020d49221cdaf42dc2014"
                alt=""
              />
            </div>
            <div class="content-left-coupon-entry-v2">
              <img
                src="https://www.zrcsc.com/api/files/648020e19221cdaf42dc2021"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="content-right">
          <img
            src="https://www.zrcsc.com/api/files/629efc119221cd7f08fc665f"
            alt=""
            class="case4"
          />
          <div>供应链专家免费讲座杭州峰会</div>
          <div class="content-right-buttom">立即参加</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.secondcontent {
}
.secondcontent .inner {
  display: flex;
  justify-content: space-between;

  .content-left {
    height: 287px;
    width: 840px;

    .content-left-platform {
      height: 80px;
      display: flex;
      background: #ffffff;
      margin-bottom: 16px;

      .content-left-platform-notice {
        width: 198px;
        margin: 8px 0;
        border-right: 2px solid #f2f2d1;
        font-size: 20px;
        display: flex;
        align-items: center;

        .notice {
          width: 29px;
          height: 32px;
          margin: 0 16px 0 24px;
        }
      }

      .content-left-platform-text {
        text-align: left;
        padding: 14px 24px;
        width: 590px;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
    }

    .content-left-flex {
      height: 191px;
      display: flex;

      .content-left-coupon-entry-v2 {
        width: 276.6666667px;
        height: 100%;
        margin-right: 4px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &:nth-child(2) img {
          transform: translateX(-4px);
        }

        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .content-right {
    height: 287px;
    width: 344px;
    padding: 20px;
    background: #ffffff;
    text-align: center;

    .case4 {
      margin: 17px;
    }

    .content-right-buttom {
      width: 115px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      background: linear-gradient(315deg, #eb5411 0%, #fba22b 100%);
      border-radius: 20px;
      margin: 10px auto;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>
