<template>
  <EditTable :columns="columns" :data="cookie_data"></EditTable>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import EditTable from '../../custom-components/edit-table.vue';
  const columns = [{name:'参数名',value:'name'},{name:'参数值',value:'value'}]
  const cookie_data = reactive([])
</script>