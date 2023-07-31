<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="myorder">
    <Nav />
    <SearchBar />
    <div class="container">
      <div class="inner">
        <div class="menu-list">
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </div>
        <div class="content-right">44545</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.myorder {
  height: 100vh;
}

.myorder .inner {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 24px;

  .menu-list {
    min-width: 208px;
    height: auto !important;
    margin-right: 16px;
    background-color: rgb(255, 255, 255);
  }

  .content-right {
    min-width: 976px;
  }
}
</style>
