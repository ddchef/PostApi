<template>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th class="w-8"></th>
        <th v-for="column in columns" :key="column.value">{{column.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,rowIndex) in self_data">
        <td class="w-8" style="padding: 0;">
          <n-space v-if="self_data.length > 1" align="center" :wrap-item="false" vertical>
            <n-button type="error" text size="small" @click="handleRemoveRow(rowIndex)">
              <n-icon size="20">
                <RemoveCircleOutline/>
              </n-icon>
            </n-button>
          </n-space>
        </td>
        <td v-for="column in columns" :key="column.value" style="padding: 0;">
          <InputGhost
            v-model:value="row[column.value]"
            :placeholder="column.placeholder"
            @blur="handleBlur"
          ></InputGhost>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup lang="ts">
import {NTable,NButton,NIcon,NSpace} from "naive-ui"
import {RemoveCircleOutline} from "@vicons/ionicons5"
import { reactive } from "vue";
import InputGhost from "./input-ghost.vue";
type Column = {
  name:string,
  value:string,
  width?:number
  placeholder?:string,
}
type Data = Record<string,string>
const props = withDefaults(defineProps<{
  columns:Column[],
  data:Data[]
}>(),{columns:()=>[],data:()=>[]})

const self_data = reactive<Data[]>([...props.data,{}])

const handleRemoveRow = (index:number)=>{
  self_data.splice(index,1)
}

const handleBlur = ()=>{
  if(self_data.every(item=>Object.values(item).some(v=>v!==undefined))){
    self_data.push({})
  }
}

</script>
<style>
.imput-ghost:focus{
  outline: none;
}
</style>