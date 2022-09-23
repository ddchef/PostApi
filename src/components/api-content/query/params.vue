<template>
  <EditTable :columns="columns" v-model:data="query_data"></EditTable>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import EditTable from '../../custom-components/edit-table.vue';
import {columns} from '../../../dictionary/index';
import { TableDataType } from '@/type';
const props = withDefaults(defineProps<{
  data:TableDataType
}>(),{data:()=>[]})
const emit = defineEmits<{
  (e:'update:data',data:TableDataType):void
}>()
const query_data = computed({
  get:()=>props.data,
  set:(v)=>emit('update:data',v)
})
</script>