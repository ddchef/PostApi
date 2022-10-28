<template>
  <div class="px-2">
    <n-radio-group v-model:value="contentType">
      <n-radio value="none">none</n-radio>
      <n-radio value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</n-radio>
      <n-radio value="multipart/form-data">multipart/form-data</n-radio>
      <n-radio value="application/json">application/json</n-radio>
    </n-radio-group>
  </div>
  <div class="pt-5">
    <None v-if="contentType === 'none'"></None>
    <EditTable v-if="contentType === 'multipart/form-data'" :columns="columns" v-model:data="form_data"></EditTable>
    <EditTable v-if="contentType === 'application/x-www-form-urlencoded'" :columns="columns" v-model:data="form_data">
    </EditTable>
    <Codemirror v-if="contentType === 'application/json'" v-model:code="bodyJson"></Codemirror>
  </div>
</template>
<script setup lang="ts">
import { NRadio, NRadioGroup } from 'naive-ui';
import { computed } from 'vue';
import None from '../../custom-components/none.vue';
import EditTable from '../../custom-components/edit-table.vue';
import Codemirror from '../../custom-components/codemirror.vue';
import { columns } from '@/dictionary/index';
import { useGetPostData } from '@/hook/temporaryPostData';
const postData = useGetPostData()
const form_data = computed({
  get: () => postData.form_data,
  set: (v) => postData.form_data = v
})

const contentType = computed({
  get: () => postData.content_type || 'none',
  set: (v) => postData.content_type = v
})

const bodyJson = computed({
  get: () => postData.bodyJson,
  set: (v) => postData.bodyJson = v
})
</script>