<script setup lang="ts">

type IProps = {
  iconColor?: string
  inputBg?: string
  inputColor?: string
}
const props = withDefaults(defineProps<IProps>(), {
  iconColor: '#fff',
  inputBg: '#ffffff67',
  inputColor: '#fff'
})
</script>

<template>
  <div class="search">
    <div class="inp-wrapper">
      <Search class="icon" :style="{ color: iconColor }" />
      <input type="text" class="inp" :style="{backgroundColor: inputBg, color: inputColor}" />
    </div>
    <button type="button" class="firm">搜索</button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  $h: 32px;

  height: $h;
  line-height: $h;
  display: flex;
  align-items: center;

  .inp-wrapper {
    height: $h;
    width: 256px;
    position: relative;
    display: flex;
    align-items: center;

    .icon {
      position: absolute;
      width: 25px;
      height: 25px;
      color: #fff;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }
    .inp {
      padding: 0 16px 0 50px;
      width: 100%;
      height: 100%;
      border: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      outline: none;
      box-sizing: border-box;
    }
  }

  .firm {
    display: inline-block;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    background: linear-gradient(271deg, #ff5500 0%, #ff5c0a 100%);
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: $h;
    line-height: $h;
    padding: 0 18px;
    transition: all .1s;
    cursor: pointer;
  }
}
</style>
