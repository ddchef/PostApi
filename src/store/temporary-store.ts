import { PostDataType } from "@/type";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import { ref } from "vue";

export const useTemporary = defineStore('temporary',()=>{
  const temporaryPostData = ref<Map<string,PostDataType>>(new Map())
  const openNewPostData = ()=>{
    const key = uuidv4()
    temporaryPostData.value.set(key,{
      name:'新建接口',
      method: 'GET',
      url:'',
      params:[],
      bodyType:'none',
      form_data:[],
      bodyJson:'',
      cookie:[],
      header: [],
      authType:'No-Auth',
      apiKeyType:'Header',
      apiKey:'',
      apiValue:'',
      bearerToken:'',
      basicUsername:'',
      basicPassword:''
    })
    return key
  }
  const openHistoryPostData = (postData:PostDataType,key:string)=>{
    temporaryPostData.value.set(key,postData)
  }
  const removePostData =(key:string)=>{
    temporaryPostData.value.delete(key)
  }
  return {openNewPostData,openHistoryPostData,temporaryPostData,removePostData}
})