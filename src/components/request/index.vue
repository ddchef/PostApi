<template>
  <div class="h-full" :style="`background: url(${noData}) center center no-repeat;background-size: 400px;`">
    <n-tabs animated type="card" closable size="small" v-model:value="active" addable @add="handleNewTab"
      @close="handleRemoveRab">
      <n-tab-pane displayDirective="if" v-for="tab in tabs" :tab="tab?.name || '新建接口'" :name="tab.key">
        <template #tab>
          <Method :method="tab.method">
            <TabName :storeKey="tab.key"></TabName>
          </Method>
        </template>
        <ApiContent :storeKey="tab.key"></ApiContent>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script setup lang="ts">
import { NTabs, NTabPane, NEmpty } from 'naive-ui';
import ApiContent from '@/components/config-form/index.vue'
import { useTemporary } from '@/store/temporary-store';
import { computed, ref } from 'vue';
import Method from '@/components/custom-components/method.vue';
import { storeToRefs } from 'pinia';
import { useRuntimeStore } from '@/store/runtime-store';
import TabName from "@/components/config-form/tab-name.vue";
import noData from "@/assets/no-data.png"

let temporaryStore = useTemporary();
const { temporaryPostData } = storeToRefs(temporaryStore)
const tabs = computed(() => {
  return Array.from(temporaryPostData.value.keys()).map((key) => {
    console.log(key, 'key')
    const postData = temporaryPostData.value.get(key)
    return {
      key,
      name: postData?.name,
      method: postData?.method
    }
  })
})

const { active } = storeToRefs(useRuntimeStore());
const handleNewTab = () => {
  active.value = temporaryStore.openNewPostData()
}
const handleRemoveRab = (key: string) => {
  const index = tabs.value.findIndex(item => item.key === key)
  temporaryStore.removePostData(key)
  // 没有tab了
  if (tabs.value.length === 0) {
    active.value = ''
    return
  }
  // 删除最后一个tab
  if (index === tabs.value.length) {
    active.value = tabs.value[index - 1].key
    return
  }
  // 其他情况
  if (index < tabs.value.length) {
    active.value = tabs.value[index].key
    return
  }
}
</script>