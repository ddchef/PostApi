import { PostDataType, RequestOptions, TableDataType } from "@/type";
import { Body } from "@tauri-apps/api/http";

function tableDataToJson(data:TableDataType):Record<string,string>{
  return data.reduce((pre,cur)=>{
    pre[cur.key] = cur.value
    return pre
  },{})
}

export function createNativeBody(config:RequestOptions):Body|undefined{
  if(config.bodyType === 'none') return undefined
  if(config.bodyType === 'form-data'&&config.form_data) {
    return Body.form(tableDataToJson(config.form_data))
  }
  if(config.bodyType === 'json'&&config.bodyJson){
    try {
      return Body.json(JSON.parse(config.bodyJson))
    } catch (error) {
      throw(new Error("Body Json格式转换失败！"))
    }
  }
  return undefined
}

function createHeaders(postData:PostDataType):Record<string,any>{
  let headers = {...tableDataToJson(postData.header),...tableDataToJson(postData.cookie)}
  if(postData.authType === 'Bearer-Token'){
    return {...headers,token:postData.bearerToken}
  }
  if(postData.authType === 'API-Key'&&postData.apiKeyType === 'Header'){
    return {
      ...headers,
      [postData.apiKey]:postData.apiValue
    }
  }
  if(postData.authType === 'Basic-Auth'){
    return {
      ...headers,
      username:postData.basicUsername,
      password:postData.basicPassword
    }
  }
  return headers
}

function createParams(postData:PostDataType):Record<string,any>{
  if(postData.authType === 'API-Key' && postData.apiKeyType === 'Query-Params'){
    return {
      ...tableDataToJson(postData.params),
      [postData.apiKey]:postData.apiValue
    }
  }
  return tableDataToJson(postData.params)
}

export function postDataToConfig(postData:PostDataType):RequestOptions{
  return {
    method:postData.method,
    url:postData.url,
    headers:createHeaders(postData),
    query:createParams(postData),
    bodyType:postData.bodyType,
    bodyJson:postData.bodyJson,
    form_data:postData.form_data
  }
}