import { request } from "tauri-plugin-reqwest";
import { RequestOptions } from ".";

export default async function nativeFetch(options: RequestOptions) {
  const { url, method, ...otherOptions } = options
  const res = await request(url, method, otherOptions)
  console.log(res)
  return res
}