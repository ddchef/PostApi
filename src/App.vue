<script setup lang="ts">
  import {NConfigProvider} from "naive-ui"
  import Layout from './components/layout.vue'
  import { useInitData } from "./hook/initData";
  import hljs from 'highlight.js/lib/core';
  import json from 'highlight.js/lib/languages/json';
  import xml from 'highlight.js/lib/languages/xml';
  hljs.registerLanguage('json',json)
  hljs.registerLanguage('xml',xml)
  useInitData()
</script>

<template>
  <n-config-provider preflight-style-disabled class="h-full" :hljs="hljs">
    <Layout></Layout>
  </n-config-provider>
</template>
