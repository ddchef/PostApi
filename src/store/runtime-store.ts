import { defineStore } from "pinia";
import { ref } from "vue";

export const useRuntimeStore = defineStore('runtime', () => {
  const active = ref("")
  const changeActive = (key: string) => active.value = key
  return { active, changeActive }
})