<template>
  <n-tabs type="card" closable size="small">
    <n-tab-pane name="test">
      <ApiContent/>
    </n-tab-pane>
    <template #prefix>
      <n-button quaternary type="primary">
        <n-icon size="20">
          <Add></Add>
        </n-icon>
      </n-button>
    </template>
  </n-tabs>
</template>
<script setup lang="ts">
  import { NTabs,NTabPane,NIcon,NButton } from 'naive-ui';
  import {Add} from "@vicons/ionicons5";
  import ApiContent from '../api-content/index.vue'
</script>