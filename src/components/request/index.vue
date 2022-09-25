<template>
  <n-tabs animated type="card" closable size="small" v-model:value="active" addable @add="handleNewTab" @close="handleRemoveRab">
    <n-tab-pane v-for="tab in tabs" :tab="tab?.name||'新建接口'" :name="tab.key">
      <template #tab>
        <Method :method="tab.method">{{tab?.name||'新建接口'}}</Method>
      </template>
      <ApiContent :storeKey="tab.key"></ApiContent>
    </n-tab-pane>
  </n-tabs>
</template>
<script setup lang="ts">
  import { NTabs,NTabPane } from 'naive-ui';
  import ApiContent from '@/components/config-form/index.vue'
  import { useTemporary } from '@/store/temporary-store';
  import { computed, ref } from 'vue';
  import Method from '@/components/custom-components/method.vue';
  
  const temporaryStore = useTemporary()
  const tabs = computed(()=>{
    return Array.from(temporaryStore.temporaryPostData.keys()).map(key=>{
      const postData = temporaryStore.temporaryPostData.get(key)
      return {
        key,
        name: postData?.name,
        method: postData?.method
      }
    })
  })
  const active=ref('')
  const handleNewTab = ()=>{
    active.value = temporaryStore.openNewPostData()
  }
  const handleRemoveRab = (key:string)=>{
    const index = tabs.value.findIndex(item=>item.key === key)
    temporaryStore.removePostData(key)
    // 没有tab了
    if(tabs.value.length === 0){
      active.value = ''
      return
    }
    // 删除最后一个tab
    if(index === tabs.value.length){
      active.value = tabs.value[index-1].key
      return
    }
    // 其他情况
    if(index<tabs.value.length){
      active.value = tabs.value[index].key
      return
    }
  }
</script>