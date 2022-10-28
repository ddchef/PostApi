import nativeFetch from "./native";
import type { Options, Method, Response } from "tauri-plugin-reqwest";
export interface RequestOptions extends Options {
  url: string,
  method: Method
}

export function request(config: RequestOptions): Promise<Response> {
  return nativeFetch(config)
}