<template>
  <div class="px-1 bg-white">
    <Url></Url>
    <NScrollbar style="height: calc(100vh - 77px);">
      <n-collapse class="py-10" :default-expanded-names="['请求参数', '返回响应']">
        <n-collapse-item title="请求参数" name="请求参数">
          <div class="px-5 min-h-[300px]">
            <Query></Query>
          </div>
        </n-collapse-item>
        <n-collapse-item title="返回响应" name="返回响应">
          <Response></Response>
        </n-collapse-item>
      </n-collapse>
    </NScrollbar>
  </div>
</template>
<script setup lang="ts">
import { NCollapse, NCollapseItem, NScrollbar } from "naive-ui"
import Url from "./url.vue"
import Query from "./query/index.vue";
import { provide } from "vue";
import Response from "../response/index.vue";
const props = withDefaults(defineProps<{
  storeKey: string
}>(), {})
provide('store_key', props.storeKey)
</script>