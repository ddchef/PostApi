<script setup lang="ts">
  import {NConfigProvider} from "naive-ui"
  import Layout from './components/layout.vue'
  import { useInitData } from "./hook/initData";
  import hljs from 'highlight.js/lib/core';
  import json from 'highlight.js/lib/languages/json';
  hljs.registerLanguage('json',json)
  useInitData()
</script>

<template>
  <n-config-provider preflight-style-disabled class="h-full" :hljs="hljs">
    <Layout></Layout>
  </n-config-provider>
</template>
