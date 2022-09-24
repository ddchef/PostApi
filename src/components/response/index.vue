<template>
  <n-tabs default-value="Body">
    <n-tab-pane name="Body">
      <Body :data="response?.data"></Body>
    </n-tab-pane>
    <n-tab-pane name="Header">

    </n-tab-pane>
    <template #suffix>

    </template>
  </n-tabs>
</template>
<script setup lang="ts">
  import { useTemporary } from '@/store/temporary-store';
  import { NTabs,NTabPane } from 'naive-ui';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import Body from './body.vue';
  import { inject } from 'vue';
  const storeKey = inject<string>('store_key')
  const {temporaryResponse} = storeToRefs(useTemporary())
  const response = computed(()=>{
    return temporaryResponse.value.get(storeKey as string)
  })
</script>