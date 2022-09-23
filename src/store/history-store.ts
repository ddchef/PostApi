import { PostDataType } from "@/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useHistory = defineStore('history',()=>{
  const historyPostData = ref<Map<string,PostDataType>>(new Map())
  const setPostData=(key:string,postData:PostDataType)=>{
    historyPostData.value.set(key,postData)
  }
  const getPostData = (key:string):PostDataType|undefined=>{
    return historyPostData.value.get(key)
  }
  return {setPostData,getPostData}
})