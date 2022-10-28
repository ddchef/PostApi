<template>
  <n-scrollbar class="h-full">
    <n-list>
      <n-list-item v-for="item in historyList" @click="handleSelect(item.key)">
        <div class="px-2">
          <div class="flex">
            <Method :method="item.method"></Method>
            <div class="flex-1">
              {{ item.name }}
            </div>
            <div>
              <NButton size="small" text type="error" @click.stop="handleRemove(item.key)">
                <NIcon>
                  <TrashBinOutline></TrashBinOutline>
                </NIcon>
              </NButton>
            </div>
          </div>
          <n-ellipsis style="max-width: 224px" class="text-slate-400" :tooltip="false">
            {{ item.url }}
          </n-ellipsis>
        </div>
      </n-list-item>
    </n-list>
  </n-scrollbar>
</template>
<script setup lang="ts">
import { useHistory } from '@/store/history-store';
import { useRuntimeStore } from '@/store/runtime-store';
import { useTemporary } from '@/store/temporary-store';
import { PostDataType } from '@/type';
import { NScrollbar, NList, NListItem, NSpace, NEllipsis, NIcon, NButton } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { TrashBinOutline } from "@vicons/ionicons5"
import Method from '../custom-components/method.vue';
import { useRemovePostData } from '@/hook/temporaryPostData';
const { historyPostData } = storeToRefs(useHistory())
const temporaryStore = useTemporary()
const historyList = computed(() => {
  return Array.from(historyPostData.value.keys()).map(key => {
    const v = historyPostData.value.get(key)
    return {
      key,
      name: v?.name,
      url: v?.url,
      method: v?.method
    }
  })
})
const handleSelect = (key: string) => {
  console.log('handleSelect', key)
  useRuntimeStore().changeActive(key)
  temporaryStore.openHistoryPostData(key, historyPostData.value.get(key) as PostDataType)
}
const removeAll = useRemovePostData()
const handleRemove = (key: string) => {
  removeAll(key)
}
</script>