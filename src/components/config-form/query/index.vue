<template>
  <n-tabs type="line" default-value="Params" :bordered="false" :single-line="false">
    <n-tab-pane name="Params">
      <Params></Params>
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
    <n-tab-pane name="响应数据类型">
      <ResponseType></ResponseType>
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
  import ResponseType from './response-type.vue';
</script>