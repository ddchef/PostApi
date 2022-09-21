import { basicSetup } from 'codemirror';
import { json } from '@codemirror/lang-json';
import { Extension,EditorState } from "@codemirror/state"
import { ViewUpdate,EditorView } from '@codemirror/view';
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue'
export function useCodeMirror(code:string,target:Ref<Element|undefined>,change:(code:string)=>void){
  const editor = ref<EditorView>()

  const extensions:Extension ={
    extension:[
      // basicSetup 是一套插件集合，包含了很多常用插件
      basicSetup,
      // 这里只使用 json 解析器
      json(),
      // 新版本一切皆插件，所以实时侦听数据变化也要通过写插件实现
      EditorView.updateListener.of((update: ViewUpdate) => {
        change(update.state.doc.toString())
      })
    ]
  }
  const state = EditorState.create({
    doc: code,
    extensions
  })
  onMounted(()=>{
    console.log(target)
    editor.value = new EditorView({
      state,
      parent: target.value
    });
  })
  onBeforeUnmount(()=>{
    if(editor.value){
      editor.value.destroy()
    }
  })
  return editor
}