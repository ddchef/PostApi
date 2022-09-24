<template>
  <div><span :class="[item?.class]">{{item?.label}}</span> <slot></slot></div>
</template>
<script setup lang="ts">
  import { methods } from '@/dictionary';
  import { MethodType } from '@/type';
  import { computed } from 'vue';
  const props = withDefaults(defineProps<{
    method:MethodType
  }>(),{method:'GET'})
  const item = computed(()=>{
    return methods.find(item=>item.value === props.method)
  })
</script>