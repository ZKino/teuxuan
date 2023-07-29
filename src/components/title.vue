<script setup lang="ts">
type TProps = {
  title?: string
}
const props = withDefaults(defineProps<TProps>(), {
  title: '默认标题'
})
</script>

<template>
  <div class="title">
    <div class="container">
      <div class="inner">
        <div class="hr-line-left">
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <div class="center-text">{{ title }}</div>
        <div class="hr-line-left">
          <div class="circle"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title .inner {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 24px 0;
  height: 68px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.02em;
}

.center-text {
  font-size: 20px;
  color: #181818;
  margin: 0 20px;
}

.hr-line-left {
  display: flex;
  align-items: center;

  .line {
    width: 100px;
    height: 2px;
    background: #eb5411;
  }

  .circle {
    width: 10px;
    height: 10px;
    background: #eb5411;
    border-radius: 50%;
  }
}
</style>
