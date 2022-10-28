export const methods = [
  {
    value: 'Get',
    label: 'Get',
    color: 'text-green-400',
    short: 'Get'
  },
  {
    value: 'Post',
    label: 'Post',
    color: 'text-orange-400',
    short: 'Post'
  },
  {
    value: 'Put',
    label: 'Put',
    color: 'text-sky-400',
    short: 'Put'
  },
  {
    value: 'Delete',
    label: 'Delete',
    color: 'text-red-600',
    short: 'Del'
  },
  {
    value: 'Head',
    label: 'Head',
    color: 'text-blue-600',
    short: 'Head'
  },
  {
    value: 'Patch',
    label: 'Patch',
    color: 'text-fuchsia-600',
    short: 'Pat'
  },
]

export const columns = [{ name: '参数名', value: 'key' }, { name: '参数值', value: 'value' }]

export const authOption = [{
  value: 'No-Auth',
  label: 'No Auth'
}, {
  value: 'API-Key',
  label: 'API Key'
}, {
  value: 'Bearer-Token',
  label: 'Bearer Token'
}, {
  value: 'Basic-Auth',
  label: 'Basic Auth'
},]

export const APIKeyOption = [{
  value: 'Header',
  label: 'Header'
}, {
  value: 'Query-Params',
  label: 'Query Params'
}]

export const contentTypeToCodeType = new Map([
  ['text/html', 'xml'],
  ['application/json', 'json']
])