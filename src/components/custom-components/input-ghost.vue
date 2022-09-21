<template>
  <input 
    type="text" 
    v-model="_value" 
    @blur="handleBlur"
    :placeholder="placeholder" 
    class="input input-sm imput-ghost w-full h-10 rounded-none focus:outline-none focus:border-green-600" />
</template>
<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(defineProps<{
    value?: string,
    placeholder?: string
  }>(),{
    value:'',
    placeholder:'请输入内容'
  })
  const emit = defineEmits<{
    (e:'update:value',value:string|null):void
    (e:'blur'):void
  }>()
  const _value = computed({
    get:()=>props.value,
    set:(value)=>emit('update:value',value)
  })
  const handleBlur = ()=>emit('blur')
</script>
<style>
  .imput-ghost:focus{
    outline: none;
  }
</style>