<template>
  <div>
    <span :class="[item?.color, 'inline-block', short ? 'w-10' : '']">{{ short ? item?.short : item?.label
    }}</span>&nbsp;
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { methods } from '@/dictionary';
import { MethodType } from '@/type';
import { computed } from 'vue';
const props = withDefaults(defineProps<{
  method: MethodType,
  short?: boolean
}>(), { method: 'Get', short: true })
const item = computed(() => {
  return methods.find(item => item.value === props.method)
})
</script>