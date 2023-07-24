import {defineComponent, ref, h, Fragment, provide, watch} from 'vue'
import {AnchorContextType} from "../anchor-context";


export const vuePropsType = {
  value: Object
}
const Provider = defineComponent<{value:AnchorContextType}>((props, {slots}) => {
  const ConfigContext = ref<AnchorContextType>();

  watch(()=>props.value, ()=>{
    ConfigContext.value = props.value
  }, { deep: true, immediate: true})
  provide('AnchorContext', ConfigContext)
  return ()=>slots.default?slots.default(ConfigContext.value):null
})

// @ts-ignore
Provider.props = vuePropsType

export default Provider

