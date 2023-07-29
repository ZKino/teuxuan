<script setup lang="ts">
import Nav from '@/components/nav.vue'
import SearchBar from './components/SearchBar.vue'
import Title from '@/components/title.vue'
import Secondcontent from './components/Secondcontent.vue'
import NewbornZone from './components/NewbornZone.vue'
import Purchase from './components/Purchase.vue'
import FooterBox from './components/FooterBox.vue'
</script>

<template>
  <Nav />
  <SearchBar />
  <div id="HomeNavapp">HomeNavapp</div>
  <Secondcontent />
  <Title title="新品推荐" />
  <NewbornZone />
  <Title title="活动专区" />
  <Title title="商品选购" />
  <Purchase />
  <FooterBox />
</template>
