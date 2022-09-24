import { RequestOptions } from "@/type";
import { getClient } from "@tauri-apps/api/http";
import { createNativeBody } from "../utils";

export async function GET(config:RequestOptions){
  const client = await getClient()
  return client.get(config.url,{
    headers:config.headers,
    query:config.query
  })
}

export async function POST(config:RequestOptions){
  const client = await getClient()
  let body = createNativeBody(config)
  return  client.post(config.url,body,{
    headers:config.headers,
    query:config.query
  })
}