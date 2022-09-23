import { useTemporary } from "@/store/temporary-store";
import { PostDataType } from "@/type";
import { storeToRefs } from "pinia";
import { inject } from "vue";

export function useGetPostData():PostDataType{
  const storeKey = inject<string>('store_key')
  const temporaryStore = useTemporary()
  const {temporaryPostData} = storeToRefs(temporaryStore)
  const postData = temporaryPostData.value.get(storeKey as string) as PostDataType
  return postData
}