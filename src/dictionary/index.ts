export const methods = [
  {
    value:'GET',
    label:'GET',
    class:'text-green-400'
  },
  {
    value:'POST',
    label:'POST',
    class:'text-orange-400'
  },
  {
    value:'PUT',
    label:'PUT',
    class:'text-sky-400'
  },
  {
    value:'DELETE',
    label:'DELETE',
    class:'text-red-600'
  },
  {
    value:'OPTIONS',
    label:'OPTIONS',
    class:'text-blue-600'
  },
  {
    value:'HEAD',
    label:'HEAD',
    class:'text-blue-600'
  },
  {
    value:'PATCH',
    label:'PATCH',
    class:'text-fuchsia-600'
  },
  {
    value:'TRACE',
    label:'TRACE',
    class:'text-indigo-600'
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