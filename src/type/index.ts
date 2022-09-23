export type TableDataType = Record<string,string>[]

export type MethodType = 'GET'|'POST'|'PUT'|'DELETE'|'OPTIONS'|'HEAD'|'PATCH'|'TRACE'

export type BodyType = 'none'|'form-data'|'json'
export type AuthType = 'No-Auth'|'API-Key'|'Bearer-Token'|'Basic-Auth'
export type ApiKeyType = 'Header'|'Query-Params'

export type BodyDataType = {
  bodyType:BodyType,
  form_data:TableDataType,
  bodyJson:string
}

export type PostDataType = {
  name:string,
  method: MethodType,
  url:string,
  params:TableDataType,
  bodyType:BodyType,
  form_data:TableDataType,
  bodyJson:string,
  cookie:TableDataType,
  header: TableDataType,
  authType:AuthType,
  apiKeyType:ApiKeyType,
  apiKey:string,
  apiValue:string,
  bearerToken:string,
  basicUsername:string,
  basicPassword:string
}