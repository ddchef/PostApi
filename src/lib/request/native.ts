import { request } from "tauri-plugin-reqwest";
import { RequestOptions } from ".";

export default function nativeFetch(options: RequestOptions) {
  const { url, method, ...otherOptions } = options
  const res = request(url, method, otherOptions)
  console.log('res', res);
  return res
}