<template>
  <n-grid x-gap="0">
    <n-gi :span="20">
      <n-input-group class="flex-1">
        <div class="w-32">
          <n-select v-model:value="method" :options="methods"></n-select>
        </div>
        <n-input v-model:value="url" clearable placeholder='接口路径，"/"开始'></n-input>
      </n-input-group>
    </n-gi>
    <n-gi :span="4">
      <n-space align="center" justify="center">
        <n-button strong secondary type="info" @click="handleRun">运行</n-button>
        <n-button type="success">保存</n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import {NInputGroup,NSelect,NInput,NGi,NGrid,NButton,NSpace} from "naive-ui"
  import { ref } from "vue";
  import {methods} from '../../dictionary/index'

  const emit = defineEmits<{
    (e:'run',method:string,url:string):void
  }>()

  const method = ref('GET')
  const url = ref('')

  const handleRun = ()=>{
    emit('run',method.value,url.value)
  }
  const handleSave = ()=>{

  }
</script>