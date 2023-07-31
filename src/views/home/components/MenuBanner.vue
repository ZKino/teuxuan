<script setup lang="ts"></script>
<template>
  <div class="menu-banner">
    <div class="container">
      <div class="inner">
        <div class="nav-left">5</div>
        <div class="nav-cnetre">2</div>
        <div class="nav-right">
          <div class="nav-right-head">
            <div class="nav-right-login">
              <el-avatar :size="80" src="https://www.zrcsc.com/api/files/62a2ba8b9221cda8747d43e3" />
              <div class="nav-right-head-information">
                <div class="nav-right-head-information-name">请先登录</div>
                <div class="nav-right-head-information-introduce">下午好，欢迎来到特U选</div>
                <div class="hr-line">
                  <div class="circle"></div>
                  <div class="line"></div>
                  <div class="circle"></div>
                </div>
              </div>
            </div>
            <div class="nav-right-button">
              <div class="login-key">一键登录</div>
              <div class="register">免费登录</div>
            </div>
          </div>
          <img src="https://www.zrcsc.com/api/files/629ef91d9221cd8ba087dcff" alt="" />
          <div class="nav-right-state">
            <div>
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待付款</div>
            </div>
            <div>
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待发货</div>
            </div>
            <div>
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待收货</div>
            </div>
            <div>
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待评价</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu-banner {
  margin: 16px 0 25px 0;
}

.menu-banner .inner {
  display: flex;
  justify-content: space-between;

  .nav-left {
    width: 178px;
    height: 100%;
    position: relative;
    background-color: #fff;
  }

  .nav-cnetre {
    width: 646px;
    height: 100%;
  }

  .nav-right {
    width: 344px;
    height: 100%;
    background: #fff;

    .nav-right-head {
      height: 155px;
      background: #efdfcf;
      padding: 8px 18px;

      .nav-right-login {
        display: flex;
        justify-content: space-between;

        .nav-right-head-information {
          margin-bottom: 20px;

          .nav-right-head-information-name {
            text-align: left;
            color: #333333;
            margin-bottom: 16px;
          }

          .nav-right-head-information-introduce {
            font-size: 14px;
            text-align: left;
            color: #333333;
            margin-bottom: 14px;
          }

          .hr-line {
            display: flex;
            justify-content: center;
            align-items: center;

            .circle {
              width: 10px;
              height: 10px;
              background: #fff;
              border-radius: 50%;
            }

            .line {
              width: 200px;
              height: 2px;
              background: #fff;
            }
          }
        }
      }

      .nav-right-button {
        display: flex;
        justify-content: space-between;

        .login-key {
          width: 108px;
          height: 26px;
          line-height: 26px;
          background: #eb5411;
          border-radius: 2px 2px 2px 2px;
          border: 1px solid #fba22b;
          color: #fff;
          cursor: pointer;
          text-align: center;
        }

        .register {
          width: 108px;
          height: 26px;
          line-height: 26px;
          background: #ffffff;
          border-radius: 2px 2px 2px 2px;
          border: 1px solid #fba22b;
          color: #eb5411;
          cursor: pointer;
          text-align: center;
        }
      }
    }

    .nav-right-state {
      font-size: 14px;
      display: flex;
      justify-content: space-around;

      .nav-right-state-num {
        margin: 5px 0;
        cursor: pointer;
      }

      .pointer {
        cursor: pointer;
      }
    }
  }
}
</style>
