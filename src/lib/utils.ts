import { PostDataType, TableDataType } from "@/type";
import { RequestOptions } from "@/lib/request";

function tableDataToData(data: TableDataType): [string, string][] {
  return data.map(item => [item.key, item.value])
}

export function postDataToConfig(postData: PostDataType): RequestOptions {
  console.log(postData)
  let baseOptions: { [key: string]: any } = {
    method: postData.method,
    url: postData.url
  }
  if (postData.authType === 'Bearer-Token') {
    baseOptions['bearer_auth'] = postData.bearerToken
  }
  if (postData.authType === 'Basic-Auth') {
    baseOptions['basic_auth'] = [postData.basicUsername, postData.basicPassword]
  }
  if (postData.header) baseOptions['headers'] = tableDataToData(postData.header)
  if (postData.query) baseOptions['query'] = tableDataToData(postData.query)
  if(postData.content_type!=='none') baseOptions['content_type'] = postData.content_type
  if (postData.content_type === 'application/json') {
    baseOptions['json'] = postData.bodyJson
  }
  if (postData.content_type === 'application/x-www-form-urlencoded' || postData.content_type === 'multipart/form-data') {
    baseOptions['form'] = tableDataToData(postData.form_data)
  }
  return baseOptions as RequestOptions
}