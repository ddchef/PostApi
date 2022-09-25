<template>
  <div>
    <n-radio-group v-model:value="responseType">
      <n-space>
        <n-radio value="JSON">
          JSON
        </n-radio>
        <n-radio value="Binary">
          Binary
        </n-radio>
        <n-radio value="Text">
          Text
        </n-radio>
      </n-space>
    </n-radio-group>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { NRadioGroup,NSpace,NRadio } from 'naive-ui';
  import { useGetPostData } from '@/hook/temporaryPostData';
  const postData = useGetPostData()
  const responseType = computed({
    get:()=>postData.responseType,
    set:(v)=>postData.responseType = v
  })
</script>