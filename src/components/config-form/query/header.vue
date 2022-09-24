<template>
  <EditTable :columns="columns" v-model:data="header_data"></EditTable>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import EditTable from '../../custom-components/edit-table.vue';
  import {columns} from '../../../dictionary/index';
  import { useGetPostData } from '@/hook/temporaryPostData';
  const postData = useGetPostData()
  const header_data = computed({
    get:()=>postData.header,
    set:(v)=>postData.header = v
  })
</script>