export const methods = [
  {
    value:'GET',
    label:'GET',
    color:'text-green-400',
    short:'GET'
  },
  {
    value:'POST',
    label:'POST',
    color:'text-orange-400',
    short:'POST'
  },
  {
    value:'PUT',
    label:'PUT',
    color:'text-sky-400',
    short:'PUT'
  },
  {
    value:'DELETE',
    label:'DELETE',
    color:'text-red-600',
    short:'DEL'
  },
  {
    value:'OPTIONS',
    label:'OPTIONS',
    color:'text-blue-600',
    short:'OPT'
  },
  {
    value:'HEAD',
    label:'HEAD',
    color:'text-blue-600',
    short:'HEAD'
  },
  {
    value:'PATCH',
    label:'PATCH',
    color:'text-fuchsia-600',
    short:'PAT'
  },
  {
    value:'TRACE',
    label:'TRACE',
    color:'text-indigo-600',
    short:'TRA'
  },
]

export const columns = [{name:'参数名',value:'key'},{name:'参数值',value:'value'}]

export const authOption = [{
  value:'No-Auth',
  label:'No Auth'
},{
  value:'API-Key',
  label:'API Key'
},{
  value:'Bearer-Token',
  label:'Bearer Token'
},{
  value:'Basic-Auth',
  label:'Basic Auth'
},]

export const APIKeyOption = [{
  value:'Header',
  label:'Header'
},{
  value:'Query-Params',
  label:'Query Params'
}]

export const contentTypeToCodeType=new Map([
  ['text/html','xml'],
  ['application/json','json']
])