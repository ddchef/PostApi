<template>
  <div class="w-8/12 mt-5">
    <Row label="类型"><n-select :options="authOption" v-model:value="authType"></n-select></Row>
    <div class="mt-8">
      <div v-if="authType === 'API-Key'">
        <Row label="添加位置"><n-select :options="APIKeyOption" v-model:value="apiKeyType"></n-select></Row>
        <Row label="Key"><n-input v-model:value="apiKey" placeholder="Key"></n-input></Row>
        <Row label="Value"><n-input v-model:value="apiValue" placeholder="Value"></n-input></Row>
      </div>
      <div v-if="authType === 'Bearer-Token'">
        <Row label="Token"><n-input v-model:value="bearerToken" placeholder="Token"></n-input></Row>
      </div>
      <div v-if="authType === 'Basic-Auth'">
        <Row label="Username"><n-input v-model:value="basicUsername" placeholder="Username"></n-input></Row>
        <Row label="Password"><n-input v-model:value="basicPassword" placeholder="Password"></n-input></Row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { NSelect,NInput } from 'naive-ui';
  import { computed } from 'vue';
  import Row from '../../custom-components/row.vue';
  import { useGetPostData } from '@/hook/temporaryPostData';
  import { APIKeyOption,authOption } from '@/dictionary';
  const postData = useGetPostData()
  const authType = computed({
    get:()=>postData.authType||'No-Auth',
    set:(v)=>postData.authType = v
  })
  // api-key
  const apiKeyType = computed({
    get:()=>postData.apiKeyType||'Header',
    set:(v)=>postData.apiKeyType = v
  })
  const apiKey = computed({
    get:()=>postData.apiKey,
    set:(v)=>postData.apiKey = v
  })
  const apiValue = computed({
    get:()=>postData.apiValue,
    set:(v)=>postData.apiValue = v
  })

  // Bearer-token
  const bearerToken = computed({
    get:()=>postData.bearerToken,
    set:(v)=>postData.bearerToken = v
  })

  //Basic-auth
  const basicUsername = computed({
    get:()=>postData.basicUsername,
    set:(v)=>postData.basicUsername = v
  })
  const basicPassword = computed({
    get:()=>postData.basicPassword,
    set:(v)=>postData.basicPassword = v
  })
</script>