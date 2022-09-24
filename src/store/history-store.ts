import { PostDataType } from "@/type";
import { defineStore } from "pinia";
import { Store } from "tauri-plugin-store-api";
import { ref } from "vue";

export const useHistory = defineStore('history',()=>{
  const historyData = new Store('.history.dat')
  const historyPostData = ref<Map<string,PostDataType>>(new Map())
  const setPostData=(key:string,postData:PostDataType)=>{
    historyPostData.value.set(key,postData)
    historyData.set(key,postData)
  }
  const intiHistoryData=(data:[key:string,postData:PostDataType][])=>{
    historyPostData.value = new Map(data)
    console.log(historyPostData.value,data,'intiHistoryData')
  }
  const getPostData = (key:string):PostDataType|undefined=>{
    return JSON.parse(JSON.stringify(historyPostData.value.get(key)))
  }
  return {setPostData,getPostData,historyPostData,intiHistoryData}
})