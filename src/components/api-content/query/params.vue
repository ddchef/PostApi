<template>
  <EditTable :columns="columns" :data="query_data"></EditTable>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import EditTable from '../../custom-components/edit-table.vue';
const columns = [{name:'参数名',value:'query_name'},{name:'参数值',value:'query_value'}]
const query_data = reactive([])
</script>