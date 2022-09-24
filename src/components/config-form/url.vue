<template>
  <n-grid x-gap="0">
    <n-gi :span="20">
      <n-input-group class="flex-1">
        <div class="w-32">
          <n-select v-model:value="method" :render-label="renderLabel" :options="methods"></n-select>
        </div>
        <n-input v-model:value="url" clearable placeholder='接口路径，"/"开始'></n-input>
      </n-input-group>
    </n-gi>
    <n-gi :span="4">
      <n-space align="center" justify="center">
        <n-button strong secondary type="info" @click="handleRun">运行</n-button>
        <n-button type="success" @click="handleSave">保存</n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import { useTemporary } from "@/store/temporary-store";
  import {NInputGroup,NSelect,NInput,NGi,NGrid,NButton,NSpace, SelectOption} from "naive-ui"
  import { storeToRefs } from "pinia";
  import { computed, inject, h, VNodeChild, watchEffect } from "vue";
  import {methods} from '../../dictionary/index'
  import {PostDataType} from "@/type";
  import { useHistory } from "@/store/history-store";
  import Method from "../custom-components/method.vue";
import { postDataToConfig } from "@/lib/utils";
import { request } from "@/lib/request";
  const storeKey = inject<string>('store_key')
  const temporaryStore = useTemporary()
  const {temporaryPostData} = storeToRefs(temporaryStore)
  const postData = temporaryPostData.value.get(storeKey as string) as PostDataType
  const method = computed({
    get:()=>postData?.method||'GET',
    set:(v)=>postData.method=v
  })
  const url = computed({
    get:()=>postData?.url||'',
    set:(v)=>postData.url=v
  })
  const handleRun = ()=>{
    const config = postDataToConfig(postData)
    request(config)?.then((res)=>{
      console.log(res)
    })
    console.log(postData)
  }
  const historyStore = useHistory()
  const handleSave = ()=>{
    historyStore.setPostData(storeKey as string,postData)
  }

  const renderLabel = (option: SelectOption):VNodeChild=>{
    return h(Method,{method:option.value as string})
  }
</script>