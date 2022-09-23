<template>
  <div class="px-1">
    <Url></Url>
    <n-h6 class="pt-4">请求参数</n-h6>
    <Query v-model:params="params"></Query>
  </div>
</template>
<script setup lang="ts">
  import {NH6} from "naive-ui"
  import Url from "./url.vue"
  import Query from "./query/index.vue";
  import { ref } from "vue";
  import { TableDataType } from "@/type";
  const params = ref<TableDataType>([])
</script>