<template>
  <n-grid x-gap="10" class="mt-5">
    <n-gi :span="4" class="text-right leading-8.5">
      {{props.label}}
    </n-gi>
    <n-gi :span="20">
      <slot></slot>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import { NGi,NGrid } from 'naive-ui';
  const props = withDefaults(defineProps<{
    label:string
  }>(),{label:''})
</script>