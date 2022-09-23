<template>
  <div class="px-2">
    <n-radio-group v-model:value="bodyType">
      <n-radio value="none">none</n-radio>
      <n-radio value="form-data">form-data</n-radio>
      <n-radio value="json">json</n-radio>
    </n-radio-group>
  </div>
  <div class="pt-5">
    <None v-if="bodyType === 'none'"></None>
    <EditTable v-if="bodyType==='form-data'" :columns="columns" v-model:data="form_data"></EditTable>
    <Codemirror v-if="bodyType === 'json'" v-model:code="bodyJson"></Codemirror>
  </div>
</template>
<script setup lang="ts">
  import { NRadio,NRadioGroup } from 'naive-ui';
  import { computed, reactive, ref } from 'vue';
  import None from '../../custom-components/none.vue';
  import EditTable from '../../custom-components/edit-table.vue';
  import Codemirror from '../../custom-components/codemirror.vue';
  import { columns } from '@/dictionary/index';
  import { useGetPostData } from '@/hook/temporaryPostData';
  const postData = useGetPostData()
  const form_data = computed({
    get:()=>postData.form_data,
    set:(v)=>postData.form_data = v
  })

  const bodyType = computed({
    get:()=>postData.bodyType||'none',
    set:(v)=>postData.bodyType = v
  })

  const bodyJson = computed({
    get:()=>postData.bodyJson,
    set:(v)=>postData.bodyJson = v
  })
</script>