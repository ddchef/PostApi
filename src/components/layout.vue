<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider class="h-full" collapse-mode="width" :collapsed-width="0" :width="240" show-trigger="arrow-circle"
      collapsed-trigger-style="right: -20px;" bordered>
      <History></History>
    </n-layout-sider>
    <n-layout-content class="h-full px-1">
      <Request />
    </n-layout-content>
  </n-layout>
</template>
<script setup lang="ts">
import { NLayoutSider, NLayoutContent, NLayout } from 'naive-ui'
import Request from './request/index.vue'
import History from './history/index.vue'
</script>