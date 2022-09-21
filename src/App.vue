<script setup lang="ts">
  import {NConfigProvider} from "naive-ui"
  import Layout from './components/layout.vue'
</script>

<template>
  <n-config-provider preflight-style-disabled class="h-full">
    <Layout></Layout>
  </n-config-provider>
</template>
