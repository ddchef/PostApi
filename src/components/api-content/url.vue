<template>
  <n-grid x-gap="0">
    <n-gi :span="20">
      <n-input-group class="flex-1">
        <div class="w-32">
          <n-select default-value="GET" :options="methods"></n-select>
        </div>
        <n-input clearable placeholder='接口路径，"/"开始'></n-input>
      </n-input-group>
    </n-gi>
    <n-gi :span="4">
      <n-space align="center" justify="center">
        <n-button strong secondary type="info">运行</n-button>
        <n-button type="success">保存</n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import {NInputGroup,NSelect,NInput,NGi,NGrid,NButton,NSpace} from "naive-ui"
  const methods = [
    {
      value:'GET',
      label:'GET',
      class:'text-green-400'
    },
    {
      value:'POST',
      label:'POST',
      class:'text-orange-400'
    },
    {
      value:'PUT',
      label:'PUT',
      class:'text-sky-400'
    },
    {
      value:'DELETE',
      label:'DELETE',
      class:'text-red-600'
    },
    {
      value:'OPTIONS',
      label:'OPTIONS',
      class:'text-blue-600'
    },
    {
      value:'HEAD',
      label:'HEAD',
      class:'text-blue-600'
    },
    {
      value:'PATCH',
      label:'PATCH',
      class:'text-fuchsia-600'
    },
    {
      value:'TRACE',
      label:'TRACE',
      class:'text-indigo-600'
    },
  ]
</script>