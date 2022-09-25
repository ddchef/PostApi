<template>
  <div class="px-5" v-if="response">
    <n-space>
      <div>
        <span>状态：</span>
        <span :class="[response.ok?'text-green-600':'text-rose-600']">
          {{response.status}} {{response.ok?'OK':'ERROR'}}
        </span>
      </div>
      <div>
        <span>时间：</span>
        <span class="text-green-600">
          {{response.time}}ms
        </span>
      </div>
      <div><span>大小：</span></div>
    </n-space>
    <n-tabs default-value="Body"  type="line" animated>
      <n-tab-pane name="Body">
        <div class="max-h-96 border border-inherit overflow-auto">
          <n-code show-line-numbers :code="response?.data" language="json"></n-code>
        </div>
      </n-tab-pane>
      <n-tab-pane name="Header">
        <div class="w-2/4 max-h-96 overflow-auto">
          <n-table :single-line="false" striped>
            <thead>
              <tr>
                <th>名称</th>
                <th>值</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value,key) in response?.headers">
                <td>{{key}}</td>
                <td>{{value}}</td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script setup lang="ts">
  import { useTemporary } from '@/store/temporary-store';
  import { NTabs,NTabPane,NCode,NTable,NSpace } from 'naive-ui';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import { inject } from 'vue';
  const storeKey = inject<string>('store_key')
  const {temporaryResponse} = storeToRefs(useTemporary())
  const response = computed(()=>{
    return temporaryResponse.value.get(storeKey as string)
  })
  console.log(response)
</script>