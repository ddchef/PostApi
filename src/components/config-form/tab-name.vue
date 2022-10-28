<template>
  <span @dblclick="handleChangeName">{{ postData.name }}</span>
  <NModal v-model:show="show" preset="dialog" title="修改接口名称" positive-text="保存" negative-text="取消"
    @positive-click="handleSaveName">
    <NInput v-model:value="name" clearable :maxlength="10" :minlength="1"></NInput>
  </NModal>
</template>
<script setup lang="ts">
import { useGetPostData } from "@/hook/temporaryPostData";
import { NModal, NInput } from "naive-ui";
import { ref } from "vue";
const props = withDefaults(defineProps<{
  storeKey: string
}>(), {})
const postData = useGetPostData(props.storeKey)
const name = ref(postData?.name || '新建接口');

const show = ref(false);
const handleChangeName = () => {
  show.value = true
}
const handleSaveName = () => {
  postData.name = name.value
  show.value = false
}
</script>