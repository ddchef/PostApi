<template>
  <n-scrollbar class="h-full">
      <n-list>
        <n-list-item v-for="item in historyList" @click="handleSelect(item.key)">
          <div class="px-2">
            <n-space>
              <Method :method="item.method"></Method>
              <span>
                {{item.name}}
              </span>
            </n-space>
            <n-ellipsis style="max-width: 224px" class="text-slate-400" :tooltip="false">
              {{item.url}}
            </n-ellipsis>
          </div>
        </n-list-item>
      </n-list>
  </n-scrollbar>
</template>
<script setup lang="ts">
  import { useHistory } from '@/store/history-store';
  import { useTemporary } from '@/store/temporary-store';
  import { PostDataType } from '@/type';
  import { NScrollbar,NList,NListItem,NSpace,NEllipsis } from 'naive-ui';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import Method from '../custom-components/method.vue';
  const {historyPostData} = storeToRefs(useHistory())
  const temporaryStore = useTemporary()
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
  const handleSelect = (key:string)=>{
    temporaryStore.openHistoryPostData(key,historyPostData.value.get(key) as PostDataType)
  }
</script>