<template>
  <n-grid x-gap="0">
    <n-gi :span="20">
      <n-input-group class="flex-1">
        <div class="w-32">
          <n-select v-model:value="method" :render-label="renderLabel" :options="methods"></n-select>
        </div>
        <n-input v-model:value="url" clearable placeholder='输入 http 或 https 起始的完整 URL'></n-input>
      </n-input-group>
    </n-gi>
    <n-gi :span="4">
      <n-space align="center" justify="center">
        <n-spin size="small" :show="loading">
          <n-button strong secondary type="info" @click="handleRun">
            运行
          </n-button>
        </n-spin>
        <n-button type="success" @click="handleSave">保存</n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import { useTemporary } from "@/store/temporary-store";
  import {NInputGroup,NSelect,NInput,NGi,NGrid,NButton,NSpace, SelectOption,NSpin} from "naive-ui"
  import { storeToRefs } from "pinia";
  import { computed, inject, h, VNodeChild, watchEffect, ref } from "vue";
  import {methods} from '../../dictionary/index'
  import {PostDataType, Response} from "@/type";
  import { useHistory } from "@/store/history-store";
  import Method from "../custom-components/method.vue";
  import { postDataToConfig } from "@/lib/utils";
  import { request } from "@/lib/request";
import { ResponseType } from "@tauri-apps/api/http";
  const storeKey = inject<string>('store_key','')
  const temporaryStore = useTemporary()
  const {temporaryPostData} = storeToRefs(temporaryStore)
  const postData = temporaryPostData.value.get(storeKey as string) as PostDataType
  console.log(postData,'postData')
  const method = computed({
    get:()=>postData?.method||'GET',
    set:(v)=>postData.method=v
  })
  const url = computed({
    get:()=>postData?.url||'',
    set:(v)=>postData.url=v
  })
  const loading = ref(false)
  const handleRun = ()=>{
    loading.value = true
    temporaryStore.setTemporaryResponse(storeKey,{} as Response)
    const config = postDataToConfig(postData)
    const startTime = Date.now()
    request(config)?.then((res)=>{
      const endTime = Date.now()
      console.log(res)
      temporaryStore.setTemporaryResponse(storeKey,{
        headers:res.headers,
        ok:res.ok,
        data:config.responseType==ResponseType.JSON?JSON.stringify(res.data,null,2):res.data as string,
        status: res.status,
        time:endTime-startTime,
        size:''
      })
      loading.value = false
    }).catch((err)=>{
      console.log(err)
      loading.value = false
    })
  }
  const historyStore = useHistory()
  const handleSave = ()=>{
    historyStore.setPostData(storeKey as string,JSON.parse(JSON.stringify(postData)))
  }

  const renderLabel = (option: SelectOption):VNodeChild=>{
    return h(Method,{method:option.value as string,short:false})
  }
</script>