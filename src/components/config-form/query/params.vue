<template>
  <EditTable :columns="columns" v-model:data="query_data"></EditTable>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import EditTable from '../../custom-components/edit-table.vue';
import { columns } from '../../../dictionary/index';
import { useGetPostData } from '@/hook/temporaryPostData';
const postData = useGetPostData()

const query_data = computed({
  get: () => postData.query,
  set: (v) => postData.query = v
})
</script>