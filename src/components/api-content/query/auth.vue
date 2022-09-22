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
  import { ref } from 'vue';
  import Row from '../../custom-components/row.vue';
  type AuthType = 'No-Auth'|'API-Key'|'Bearer-Token'|'Basic-Auth'
  const authOption = [{
    value:'No-Auth',
    label:'No Auth'
  },{
    value:'API-Key',
    label:'API Key'
  },{
    value:'Bearer-Token',
    label:'Bearer Token'
  },{
    value:'Basic-Auth',
    label:'Basic Auth'
  },]
  const authType = ref<AuthType>('No-Auth')

  // api-key
  const APIKeyOption = [{
    value:'Header',
    label:'Header'
  },{
    value:'Query-Params',
    label:'Query Params'
  }]
  type ApiKeyType = 'Header'|'Query-Params'
  const apiKeyType = ref<ApiKeyType>('Header')
  const apiKey = ref('')
  const apiValue = ref('')

  // Bearer-token
  const bearerToken = ref('')

  //Basic-auth
  const basicUsername = ref('')
  const basicPassword = ref('')
</script>