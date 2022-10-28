import { ContentType, Method } from "tauri-plugin-reqwest"

export type TableDataType = Record<string, string>[]

export type MethodType = 'Get' | 'Post' | 'Put' | 'Patch' | 'Delete' | 'Head'

export type BodyType = 'none' | 'form-data' | 'json'
export type AuthType = 'No-Auth' | 'Bearer-Token' | 'Basic-Auth'
export type ApiKeyType = 'Header' | 'Query-Params'

export type BodyDataType = {
  bodyType: BodyType,
  form_data: TableDataType,
  bodyJson: string
}

export type PostDataType = {
  name: string,
  method: Method,
  save: boolean,
  url: string,
  content_type: "none" | ContentType,
  query: TableDataType,
  params: TableDataType, // to body
  form_data: TableDataType,// to form
  bodyJson: string, //to json
  cookie: TableDataType, // to header
  header: TableDataType,
  authType: AuthType,
  bearerToken: string,
  basicUsername: string,
  basicPassword: string,
}