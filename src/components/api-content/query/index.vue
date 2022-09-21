<template>
  <n-tabs type="line" default-value="Params" :bordered="false" :single-line="false">
    <n-tab-pane name="Params">
      <Params></Params>
    </n-tab-pane>
    <n-tab-pane name="Body">
      <Body></Body>
    </n-tab-pane>
    <n-tab-pane name="Header"></n-tab-pane>
    <n-tab-pane name="Cookie"></n-tab-pane>
    <n-tab-pane name="Auth"></n-tab-pane>
    <n-tab-pane name="设置"></n-tab-pane>
  </n-tabs>
</template>
<script setup lang="ts">
  import { NTabs,NTabPane } from 'naive-ui';
  import Params from './params.vue';
  import Body from './body.vue';
</script>