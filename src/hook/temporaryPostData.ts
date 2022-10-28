import { useHistory } from "@/store/history-store";
import { useTemporary } from "@/store/temporary-store";
import { PostDataType } from "@/type";
import { storeToRefs } from "pinia";
import { inject } from "vue";

export function useGetPostData(key?: string): PostDataType {
  const storeKey = key || inject<string>('store_key')
  const temporaryStore = useTemporary()
  const { temporaryPostData } = storeToRefs(temporaryStore)
  const postData = temporaryPostData.value.get(storeKey as string) as PostDataType
  return postData
}

export function useRemovePostData(): (key: string) => void {
  const temporaryStore = useTemporary();
  const historyStore = useHistory()
  const removeAll = (key: string) => {
    temporaryStore.removePostData(key);
    historyStore.removePostData(key)
  }
  return removeAll
}