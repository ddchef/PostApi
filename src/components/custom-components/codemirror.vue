<template>
  <div class="h-96 min-h-min" ref="editor"></div>
</template>
<script setup lang="ts">
  import { Ref, ref } from 'vue';
  import { useCodeMirror } from '../../hook/useCodeMirror';

  const emit = defineEmits<{
    (e:'update:code',code:string):void
  }>()
  const props = withDefaults(defineProps<{
    code:string
  }>(),{code:''})
  const editor = ref<Element>()
  const handleCodeChange=(code:string)=>{
    emit('update:code',code)
  }
  useCodeMirror(props.code,editor as unknown as Ref<Element>,handleCodeChange)
</script>
<style>
  .cm-editor { height: 100% }
</style>