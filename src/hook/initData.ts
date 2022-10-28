import { Store } from "tauri-plugin-store-api";
import { useHistory } from "@/store/history-store";
import { PostDataType } from "@/type";

export async function useInitData() {
  const historyData = new Store('.history.dat')
  const historyStore = useHistory()
  const data = await historyData.entries<PostDataType>()
  historyStore.intiHistoryData(data)
}