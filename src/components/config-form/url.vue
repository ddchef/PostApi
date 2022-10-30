<template>
  <n-grid x-gap="0">
    <n-gi :span="20">
      <n-input-group class="flex-1">
        <div class="w-32">
          <n-select v-model:value="method" :render-label="renderLabel" :options="methods"></n-select>
        </div>
        <n-input v-model:value="url" @blur="handleFormate" clearable placeholder='输入 http 或 https 起始的完整 URL'></n-input>
      </n-input-group>
    </n-gi>
    <n-gi :span="4">
      <n-space align="center" justify="center">
        <n-spin size="small" :show="loading">
          <n-button :disabled="!pass" strong secondary type="info" @click="handleRun">
            运行
          </n-button>
        </n-spin>
        <n-button :disabled="!canSave" type="success" @click="handleSave">保存</n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
import { useTemporary } from "@/store/temporary-store";
import { NInputGroup, NSelect, NInput, NGi, NGrid, NButton, NSpace, SelectOption, NSpin } from "naive-ui"
import { computed, inject, h, VNodeChild, watchEffect, ref } from "vue";
import { methods } from '../../dictionary/index'
import { useHistory } from "@/store/history-store";
import Method from "../custom-components/method.vue";
import { postDataToConfig } from "@/lib/utils";
import { request } from "@/lib/request";
import { Response } from "tauri-plugin-reqwest";
import { useGetPostData } from "@/hook/temporaryPostData";
import qs from "qs";
const storeKey = inject<string>('store_key', '')
const temporaryStore = useTemporary()
const postData = useGetPostData()
const method = computed({
  get: () => postData?.method || 'Get',
  set: (v) => postData.method = v
})
const url = computed({
  get: () => postData?.url || '',
  set: (v) => postData.url = v
})

const pass = computed(() => {
  return /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(url.value)
})

const canSave = computed(() => {
  return url.value.length > 0
})

const loading = ref(false)
const handleRun = () => {
  loading.value = true
  // temporaryStore.setTemporaryResponse(storeKey, {} as Response)
  const config = postDataToConfig(postData)
  request(config).then((res) => {
    temporaryStore.setTemporaryResponse(storeKey, res)
    loading.value = false
  }).catch((err) => {
    console.error(err)
    loading.value = false
  })
}
const historyStore = useHistory()
const handleSave = () => {
  historyStore.setPostData(storeKey as string, JSON.parse(JSON.stringify(postData)))
}

const handleFormate = () => {
  if (!pass.value) return
  const [uri, queryStr] = url.value.split("?");
  postData.url = uri
  if (!queryStr) return;
  const query = Object.entries(qs.parse(queryStr)).map(item => ({
    key: item[0],
    value: item[1] as string
  }))
  postData.query = query
}

const renderLabel = (option: SelectOption): VNodeChild => {
  return h(Method, { method: option.value as string, short: false })
}
</script>