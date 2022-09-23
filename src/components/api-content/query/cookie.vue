<template>
  <EditTable :columns="columns" v-model:data="cookie_data"></EditTable>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import EditTable from '../../custom-components/edit-table.vue';
  import { useGetPostData } from '@/hook/temporaryPostData';
  import {columns} from '../../../dictionary/index';
  const postData = useGetPostData()
  const cookie_data = computed({
    get:()=>postData.cookie,
    set:(v)=>postData.cookie = v
  })
</script>