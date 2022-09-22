import { basicSetup } from 'codemirror';
import { json,jsonLanguage,jsonParseLinter } from '@codemirror/lang-json';
import { Extension,EditorState } from "@codemirror/state"
import { ViewUpdate,EditorView } from '@codemirror/view';
import {Diagnostic} from "@codemirror/lint"
import { onBeforeUnmount, onMounted, Ref, ref,WritableComputedRef } from 'vue';
export function useCodeMirror(code:WritableComputedRef<string>,target:Ref<Element|undefined>):{
  error:Ref<Diagnostic[]|undefined>,
  formatHook:()=>void
}{
  const editor = ref<EditorView>()
  const diagnostic = ref<Diagnostic[]>()
  const handleFormat = ()=>{
    if(!editor.value) return
    const content = editor.value.state.doc.toString();
    try {
      const formatedText = JSON.stringify(JSON.parse(content),null,2)
      console.log(formatedText,'formatedText')
      editor.value.dispatch({
        changes:{
          from:0,
          to:content.length,
          insert:formatedText
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const extensions:Extension ={
    extension:[
      // basicSetup 是一套插件集合，包含了很多常用插件
      basicSetup,
      // 这里只使用 json 解析器
      json(),
      jsonLanguage,
      // 新版本一切皆插件，所以实时侦听数据变化也要通过写插件实现
      EditorView.updateListener.of((update: ViewUpdate) => {
        if(!editor.value) return;
        diagnostic.value = jsonParseLinter()(editor.value)
        if(diagnostic.value.length>0) return
        code.value = update.state.doc.toString()
      }),
    ]
  }
  const state = EditorState.create({
    doc: code.value,
    extensions,
  })
  onMounted(()=>{
    editor.value = new EditorView({
      state,
      parent: target.value,
    });
  })
  onBeforeUnmount(()=>{
    if(editor.value){
      editor.value.destroy()
    }
  })
  return {
    error:diagnostic,
    formatHook:handleFormat
  }
}