import { PostDataType } from "@/type";
import { Response } from "tauri-plugin-reqwest";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import { ref } from "vue";

export const useTemporary = defineStore('temporary', () => {
  const temporaryPostData = ref<Map<string, PostDataType>>(new Map())
  const temporaryResponse = ref<Map<string, Response>>(new Map())
  const openNewPostData = () => {
    const key = uuidv4()
    temporaryPostData.value.set(key, {
      name: '新建接口',
      method: 'Get',
      save: false,
      url: '',
      params: [],
      query: [],
      content_type: 'none',
      form_data: [],
      bodyJson: '',
      cookie: [],
      header: [],
      authType: 'No-Auth',
      bearerToken: '',
      basicUsername: '',
      basicPassword: '',
    })
    return key
  }
  const openHistoryPostData = (key: string, postData: PostDataType,) => {
    temporaryPostData.value.set(key, postData)
  }
  const removePostData = (key: string) => {
    temporaryPostData.value.delete(key)
    temporaryResponse.value.delete(key)
  }
  const setTemporaryResponse = (key: string, response: Response) => {
    temporaryResponse.value.set(key, response)
  }
  return {
    openNewPostData,
    openHistoryPostData,
    temporaryPostData,
    removePostData,
    temporaryResponse,
    setTemporaryResponse
  }
})