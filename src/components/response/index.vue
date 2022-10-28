<template>
  <div class="px-5" v-if="response">
    <n-space>
      <div>
        <span>状态：</span>
        <span :class="[status < 400 ? 'text-green-600' : 'text-rose-600']">
          {{ response.status }} {{ status < 400 ? 'OK' : 'ERROR' }} </span>
      </div>
      <div>
        <span>时间：</span>
        <span class="text-green-600">
          {{ response.interval }} ms
        </span>
      </div>
      <div>
        <span>大小：</span>
        <span class="text-green-600">
          {{ size }}
        </span>
      </div>
    </n-space>
    <n-tabs default-value="Body" type="line" animated>
      <n-tab-pane name="Body">
        <div class="max-h-96 border border-inherit overflow-auto">
          <n-code v-if="response.content_type === 'application/json'" show-line-numbers
            :code="jsonFormat(response?.body)" :language="'json'"></n-code>
          <n-code v-if="response.content_type === 'text/html'" show-line-numbers :code="response?.body"
            :language="'xml'"></n-code>
          <n-code v-if="response.content_type === 'text/plain'" show-line-numbers :code="response?.body"></n-code>
        </div>
      </n-tab-pane>
      <n-tab-pane name="Header">
        <div class="w-2/4 max-h-96 overflow-auto">
          <n-table :single-line="false" striped>
            <thead>
              <tr>
                <th class="w-[200px]">名称</th>
                <th>值</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in response?.headers">
                <td class="w-[200px]">{{ key }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script setup lang="ts">
// import { contentTypeToCodeType } from '@/dictionary';
import { useTemporary } from '@/store/temporary-store';
import { NTabs, NTabPane, NCode, NTable, NSpace } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { inject } from 'vue';
const storeKey = inject<string>('store_key')
const { temporaryResponse } = storeToRefs(useTemporary())
const response = computed(() => {
  return temporaryResponse.value.get(storeKey as string)
})
const jsonFormat = (str: string) => {
  return JSON.stringify(JSON.parse(str), null, 2);
}
const status = computed(() => {
  return Number(response.value?.status)
})
const size = computed(() => {
  if (!response.value?.size) return 0
  if (response.value?.size > 1024 * 1024) {
    return `${Math.round(response.value?.size * 100 / (1024 * 1024)) / 100} GB`
  }
  if (response.value?.size > 1024) {
    return `${Math.round(response.value?.size * 100 / (1024)) / 100} MB`
  }
  return `${response.value?.size} B`
})
</script>