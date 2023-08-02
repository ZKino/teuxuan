<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const num = ref(-1)
const onMousenter = (e: any, index: number) => {
  num.value = index
}
const onMousleave = () => {
  num.value = -1
}
const linkToMyOrder = (e: any, aName: string) => {
  localStorage.setItem('aName', aName)
  router.push('/myorder')
}
const linkToRegister = () => {
  router.push('/register')
}
const linkToLogin = () => {
  router.push('/login')
}
const account = ref('')
onMounted(() => {
  const userInfo = localStorage.getItem('userInfo') || ''
  if(!userInfo) return
  const userInfoObj = JSON.parse(userInfo)
  account.value = userInfoObj.account
})
</script>
<template>
  <div class="menu-banner">
    <div class="container">
      <div class="inner">
        <div class="nav-left">
          <ul>
            <li @mouseenter="onMousenter($event, 0)" @mouseleave="onMousleave">
              <div class="nav-left-item">食材</div>
            </li>
            <li @mouseenter="onMousenter($event, 1)" @mouseleave="onMousleave">
              <div class="nav-left-item">锅底用料</div>
            </li>
            <li @mouseenter="onMousenter($event, 2)" @mouseleave="onMousleave">
              <div class="nav-left-item">复合调味料</div>
            </li>
            <li @mouseenter="onMousenter($event, 3)" @mouseleave="onMousleave">
              <div class="nav-left-item">干杂干调</div>
            </li>
            <li @mouseenter="onMousenter($event, 4)" @mouseleave="onMousleave">
              <div class="nav-left-item">饮品</div>
            </li>
            <li @mouseenter="onMousenter($event, 5)" @mouseleave="onMousleave">
              <div class="nav-left-item">爆品推荐</div>
            </li>
            <li @mouseenter="onMousenter($event, 6)" @mouseleave="onMousleave">
              <div class="nav-left-item">低值易耗</div>
            </li>
            <li @mouseenter="onMousenter($event, 7)" @mouseleave="onMousleave">
              <div class="nav-left-item">装修装饰</div>
            </li>
            <li @mouseenter="onMousenter($event, 8)" @mouseleave="onMousleave">
              <div class="nav-left-item">设施设备</div>
            </li>
            <li @mouseenter="onMousenter($event, 9)" @mouseleave="onMousleave">
              <div class="nav-left-item">外卖专用</div>
            </li>
          </ul>
          <div
            class="detail-item-panel"
            :style="{ display: `${num !== -1 ? '' : 'none'}` }"
          >
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 0 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>牛肉</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>猪肉</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>禽肉</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>刨品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>水货</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>丸滑</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>江河湖海</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>方便食品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>素菜</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>腌卤品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>小吃</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 1 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>牛油底料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>清油底料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>菌汤膏</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>番茄汤膏</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>骨汤膏</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>藤椒料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>泰式料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>酸菜料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>特色料膏</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 2 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>酱料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>拌料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>调味粉</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>腌制料</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 3 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>香油</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>打锅牛油</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>香辛料</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>米面粮油</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>调味品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>干杂</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 4 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>酒品类</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>饮品类</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>饮品原料</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 5 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>爆品推荐</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 6 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>餐厨用具</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>服装服饰</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>餐具</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>易耗用品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>清洁工具</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>办公用品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>五金杂件</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>IP定制</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 7 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>软装</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 8 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>厨房设备</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>办公家具</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>IT设备</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>工器炉具</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>仓储设备</span></a>
              </div>
            </div>
            <div
              class="nav-detail-item"
              :style="{ display: `${num === 9 ? '' : 'none'}` }"
            >
              <div>
                <a class="nav-detail-item-link"><span>打包盒</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>打包袋</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>外卖锅</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>调味包</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>纸制品</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>餐包围兜</span></a>
              </div>
              <div>
                <a class="nav-detail-item-link"><span>保鲜膜</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-cnetre">
          <el-carousel height="392px" :interval="6000">
            <el-carousel-item :key="1">
              <img
                src="https://www.zrcsc.com/api/files/631862059221cdf64825d1d3"
                alt=""
              />
            </el-carousel-item>
            <el-carousel-item :key="2">
              <img
                src="https://www.zrcsc.com/api/files/6336b92f9221cdb9e48e25be"
                alt=""
              />
            </el-carousel-item>
            <el-carousel-item :key="3">
              <img
                src="https://www.zrcsc.com/api/files/64b7a9e09221cda79c53aaa2"
                alt=""
              />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="nav-right">
          <div class="nav-right-head">
            <div class="nav-right-login">
              <el-avatar
                :size="80"
                src="https://www.zrcsc.com/api/files/62a2ba8b9221cda8747d43e3"
              />
              <div class="nav-right-head-information">
                <div class="nav-right-head-information-name">{{ account ? `尊敬的${account}` : '请先登录' }}</div>
                <div class="nav-right-head-information-introduce">
                  下午好，欢迎来到特U选
                </div>
                <div class="hr-line">
                  <div class="circle"></div>
                  <div class="line"></div>
                  <div class="circle"></div>
                </div>
              </div>
            </div>
            <div class="nav-right-button">
              <div class="login-key" @click="linkToLogin">一键登录</div>
              <div class="register" @click="linkToRegister">免费注册</div>
            </div>
          </div>
          <img
            src="https://www.zrcsc.com/api/files/629ef91d9221cd8ba087dcff"
            alt=""
          />
          <div class="nav-right-state">
            <div @click="linkToMyOrder($event, 'second')">
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待付款</div>
            </div>
            <div @click="linkToMyOrder($event, 'third')">
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待发货</div>
            </div>
            <div @click="linkToMyOrder($event, 'fourth')">
              <div class="nav-right-state-num">0</div>
              <div class="pointer">待收货</div>
            </div>
            <div @click="linkToMyOrder($event, 'five')">
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
  height: 392px;
  display: flex;
  justify-content: space-between;

  .nav-left {
    width: 178px;
    height: 100%;
    position: relative;
    background-color: #fff;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;

      li {
        background: #fff;
        font-size: 14px;
        color: #333333;
        height: 38px;
        line-height: 40px;
        cursor: pointer;
      }

      li:hover .nav-left-item {
        color: #fff;
        background-color: #f3791d;
      }
    }

    .detail-item-panel {
      position: absolute;
      left: 178px;
      top: 0px;
      width: 662px;
      height: 392px;
      background: rgba(0, 0, 0, 0.6);
      z-index: 4;

      .nav-detail-item {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;

        .nav-detail-item-link {
          display: flex;
          flex-wrap: inherit;

          span {
            opacity: 1;
            color: #fff;
            min-width: 80px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }

  .nav-cnetre {
    width: 646px;
    height: 100%;

    :deep(.el-carousel img) {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
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
      text-align: center;
      margin-bottom: 5px;
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
