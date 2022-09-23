import { PostDataType } from "@/type";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import { ref } from "vue";

export const useTemporary = defineStore('temporary',()=>{
  const openedPostData = ref<Map<string,PostDataType|{}>>(new Map())
  const openNewPostData = ()=>{
    const key = uuidv4()
    openedPostData.value.set(key,{})
  }
  const openHistoryPostData = (postData:PostDataType,key:string)=>{
    openedPostData.value.set(key,postData)
  }
  return {openNewPostData,openHistoryPostData}
})