<template>
  <div class="group h-96 border	border-inherit relative">
    <div ref="editor" class="h-full"></div>
    <div class="absolute z-10 top-0 right-0.5 opacity-0 group-hover:opacity-100">
      <n-button tertiary circle type="info" @click="formatHook">
        { }
      </n-button>
    </div>
  </div>
  <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false" class="text-xs text-red-600">
    <template v-for="(err,i) in error||[]">{{err.message}}<br></template>
  </n-ellipsis>
</template>
<script setup lang="ts">
  import { computed, Ref, ref } from 'vue';
  import { NEllipsis,NButton } from 'naive-ui';
  import { useCodeMirror } from '../../hook/useCodeMirror';

  const emit = defineEmits<{
    (e:'update:code',code:string):void
  }>()
  const props = withDefaults(defineProps<{
    code:string
  }>(),{code:''})
  const editor = ref<Element>()
    
  const code = computed({
    get:()=>props.code,
    set:(v)=>emit('update:code',v)
  })
  const {error,formatHook} = useCodeMirror(code,editor as unknown as Ref<Element>)
</script>
<style>
  .cm-editor { height: 100% }
</style>