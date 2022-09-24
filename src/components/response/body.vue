<template>
  <n-tabs default-value="code">
    <n-tab-pane name="code">
      <n-code :code="data" language="json"></n-code>
    </n-tab-pane>
  </n-tabs>
</template>
<script setup lang="ts">
  import { NTabs,NTabPane,NCode } from 'naive-ui';
  const props = withDefaults(defineProps<{
    data:string
  }>(),{data:''})
</script>