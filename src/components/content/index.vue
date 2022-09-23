<template>
  <n-tabs type="card" closable size="small" v-model:value="active">
    <n-tab-pane v-for="tab in tabs" :tab="tab?.name||'新建接口'" :name="tab.key">
      <ApiContent :storeKey="tab.key"></ApiContent>
    </n-tab-pane>
    <template #prefix>
      <n-button quaternary type="primary" @click="handleNewTab">
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
  import { useTemporary } from '@/store/temporary-store';
  import { computed, ref } from 'vue';
  
  const temporaryStore = useTemporary()
  const tabs = computed(()=>{
    return Array.from(temporaryStore.temporaryPostData.keys()).map(key=>{
      return {
        key,
        name: temporaryStore.temporaryPostData.get(key)?.name
      }
    })
  })
  const active=ref('')
  const handleNewTab = ()=>{
    active.value = temporaryStore.openNewPostData()
  }
</script>