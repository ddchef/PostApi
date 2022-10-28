<template>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th class="w-8"></th>
        <th v-for="column in columns" :key="column.value">{{ column.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in self_data">
        <td class="w-8" style="padding: 0;">
          <n-space v-if="self_data.length > 1" align="center" :wrap-item="false" vertical>
            <n-button type="error" text size="small" @click="handleRemoveRow(rowIndex)">
              <n-icon size="20">
                <RemoveCircleOutline />
              </n-icon>
            </n-button>
          </n-space>
        </td>
        <td v-for="column in columns" :key="column.value" style="padding: 0;">
          <InputGhost v-model:value="row[column.value]" :placeholder="column.placeholder" @blur="handleBlur">
          </InputGhost>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup lang="ts">
import { NTable, NButton, NIcon, NSpace } from "naive-ui"
import { RemoveCircleOutline } from "@vicons/ionicons5"
import { ref, watchEffect } from "vue";
import InputGhost from "./input-ghost.vue";
type Column = {
  name: string,
  value: string,
  width?: number
  placeholder?: string,
}
type Data = Record<string, string>
const props = withDefaults(defineProps<{
  columns: Column[],
  data: Data[]
}>(), { columns: () => [], data: () => [] })
const emit = defineEmits<{
  (e: 'update:data', data: Data[]): void
}>()

const self_data = ref<Data[]>([])
watchEffect(() => {
  self_data.value = [...props.data, {}]
  console.log(self_data.value)
})

const emitData = () => {
  if (Object.values(self_data.value[self_data.value.length - 1]).every(v => v === undefined)) {
    emit('update:data', self_data.value.slice(0, -1))
    return
  }
  emit('update:data', self_data.value)
}

const handleRemoveRow = (index: number) => {
  self_data.value.splice(index, 1)
  emitData()
}

const handleBlur = () => {
  emitData()
}

</script>
<style>
.imput-ghost:focus {
  outline: none;
}
</style>