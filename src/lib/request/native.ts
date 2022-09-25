import { RequestOptions,ResponseType as RT } from "@/type";
import { getClient, ResponseType } from "@tauri-apps/api/http";
import { createNativeBody } from "../utils";
const map = {
  "JSON":ResponseType.JSON,
  "Text":ResponseType.Text,
  "Binary":ResponseType.Binary
}

export async function GET(config:RequestOptions){
  const client = await getClient()
  return client.get(config.url,{
    headers:config.headers,
    query:config.query,
    responseType: map[config.responseType as RT]
  })
}

export async function POST(config:RequestOptions){
  const client = await getClient()
  let body = createNativeBody(config)
  return  client.post(config.url,body,{
    headers:config.headers,
    query:config.query,
    responseType: map[config.responseType as RT]
  })
}