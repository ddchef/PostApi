<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider class="h-full">
      <History></History>
    </n-layout-sider>
    <n-layout-content class="h-full px-1">
      <Content/>
    </n-layout-content>
  </n-layout>
</template>
<script setup lang="ts">
  import {NLayoutHeader,NLayoutSider,NLayoutContent,NLayout} from 'naive-ui'
  import Content from './content/index.vue'
  import History from './history/index.vue'
</script>