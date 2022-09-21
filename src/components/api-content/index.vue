<template>
  <div class="px-1">
    <Url></Url>
    <n-h6 class="pt-4">请求参数</n-h6>
    <Query></Query>
  </div>
</template>
<script setup lang="ts">
  import {NH6} from "naive-ui"
  import Url from "./url.vue"
  import Query from "./query/index.vue";
</script>