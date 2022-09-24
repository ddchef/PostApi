<template>
  <n-scrollbar class="h-full">
      <n-list>
        <n-list-item v-for="item in historyList">
          <Method :method="item.method"></Method>
          {{item.name}}
          {{item.url}}
        </n-list-item>
      </n-list>
  </n-scrollbar>
</template>
<script setup lang="ts">
  import { useHistory } from '@/store/history-store';
  import { NScrollbar,NList,NListItem } from 'naive-ui';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import Method from '../custom-components/method.vue';
  const {historyPostData} = storeToRefs(useHistory())
  const historyList = computed(()=>{
    return Array.from(historyPostData.value.keys()).map(key=>{
      const v = historyPostData.value.get(key)
      return {
        key,
        name:v?.name,
        url:v?.url,
        method:v?.method
      }
    })
  })
</script>