<template>
  <n-card>
    <n-empty>
      <template #extra>
        该请求没有Body请求体
      </template>
    </n-empty>
  </n-card>
</template>
<script setup lang="ts">
import { NEmpty, NCard } from "naive-ui"
</script>