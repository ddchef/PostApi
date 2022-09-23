<template>
  <n-tabs type="line" default-value="Params" :bordered="false" :single-line="false">
    <n-tab-pane name="Params">
      <Params v-model:data="_params"></Params>
    </n-tab-pane>
    <n-tab-pane name="Body">
      <Body></Body>
    </n-tab-pane>
    <n-tab-pane name="Header">
      <Header></Header>
    </n-tab-pane>
    <n-tab-pane name="Cookie">
      <Cookie></Cookie>
    </n-tab-pane>
    <n-tab-pane name="Auth">
      <Auth></Auth>
    </n-tab-pane>
  </n-tabs>
</template>
<script setup lang="ts">
  import { NTabs,NTabPane } from 'naive-ui';
  import Params from './params.vue';
  import Body from './body.vue';
  import Header from './header.vue';
  import Cookie from './cookie.vue';
  import Auth from './auth.vue';
  import {TableDataType} from '@/type/index';
  import { computed } from 'vue';
  const props = withDefaults(defineProps<{
    params:TableDataType
  }>(),{})
  const emit = defineEmits<{
    (e:'update:params',params:TableDataType):void
  }>()
  const _params = computed({
    get:()=>props.params,
    set:(v)=>emit('update:params',v)
  })
</script>