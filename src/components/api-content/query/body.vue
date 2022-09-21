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
    <EditTable v-if="bodyType==='form-data'" :columns="columns" :data="form_data"></EditTable>
    <Codemirror v-if="bodyType === 'json'" v-model:code="bodyJson"></Codemirror>
  </div>
</template>
<script setup lang="ts">
  import { NRadio,NRadioGroup } from 'naive-ui';
  import { reactive, ref } from 'vue';
  import None from '../../custom-components/none.vue';
  import EditTable from '../../custom-components/edit-table.vue';
import Codemirror from '../../custom-components/codemirror.vue';
  const columns = [{name:'参数名',value:'form_name'},{name:'参数值',value:'form_value'}]
  const form_data = reactive([])

  type BodyType = 'none'|'form-data'|'json'
  const bodyType = ref<BodyType>('none')

  const bodyJson = ref('')
</script>