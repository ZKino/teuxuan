<script setup lang="ts">
import { ref, watchEffect } from 'vue'

type TProps = {
  isShow: boolean
}
const props = withDefaults(defineProps<TProps>(), {})

const emits = defineEmits(['onClose'])

const onClose = () => {
  emits('onClose')
}
</script>
<template>
  <div
    v-if="props.isShow"
    id="customerDialog"
    style="
      width: 100vw;
      height: 100vh;
      position: fixed;
      overflow: hidden;
      left: 0px;
      top: 0px;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.5);
    "
  >
    <div
      class="box-auth"
      style="
        position: fixed;
        width: 320px;
        left: calc(50% - 160px);
        top: calc(50vh - 180px);
        z-index: 9999;
        text-align: center;
        background: rgb(255, 255, 255);
        border-radius: 20px;
      "
    >
      <img
        src="https://www.zrcsc.com/api/files/62de45579221cdceb8e07e37"
        alt=""
        class="icon"
        style="position: absolute; top: -65px; left: calc(50% - 82px)"
      />
      <div
        class="box-auth-title"
        style="
          font-size: 1.25rem;
          margin-top: 84px;
          margin-bottom: 16px;
          font-weight: bold;
        "
      >
        客服热线
      </div>
      <div
        class="box-auth-body"
        style="color: rgb(235, 84, 17); font-weight: bold"
      >
        <div
          style="
            color: rgb(235, 84, 17);
            margin-bottom: 40px;
            font-weight: bold;
          "
        >
          乐馋馋18030700142
        </div>
        <div
          style="
            color: rgb(235, 84, 17);
            margin-bottom: 40px;
            font-weight: bold;
          "
        >
          玉馋馋18030724247
        </div>
        <div
          style="
            color: rgb(235, 84, 17);
            margin-bottom: 40px;
            font-weight: bold;
          "
        >
          金馋馋17738723268
        </div>
        <div style="color: rgb(235, 84, 17); font-weight: bold">
          宝馋馋18030700141
        </div>
      </div>
      <div
        @click="onClose"
        class="close-btn"
        style="
          position: relative;
          cursor: pointer;
          top: 85px;
          width: 40px;
          margin: auto;
        "
      >
        <img
          src="https://www.zrcsc.com/api/files/62de477c9221cdc7b8832804"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
