
    import {defineComponent, ref, h, onActivated} from 'vue'
    import { ConvertIcon, IconProps, vuePropsType as iconVuePropsType} from '../components/Icon';

    interface ExampleProps {
      name?: string
    }
    export const vuePropsType = {
      name: String
    }
    const SvgComponent = defineComponent<ExampleProps>((props, {slots}) => {
      return ()=>(
            <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            
// @ts-ignore
focusable={false}
              
            aria-hidden={true}
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 19.7185L10.6251 17.3337C11.4878 16.8889 12.5123 16.8889 13.3749 17.3337L18 19.7185V3H6V19.7185ZM5 1C4.44772 1 4 1.44772 4 2V21.3593C4 22.1081 4.79274 22.5912 5.45829 22.2481L11.5417 19.1113C11.8293 18.963 12.1708 18.963 12.4583 19.1113L18.5417 22.2481C19.2073 22.5912 20 22.1081 20 21.3593V2C20 1.44772 19.5523 1 19 1H5ZM8 10C8 9.44771 8.44772 9 9 9H15C15.5523 9 16 9.44771 16 10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'bookmark_delete_stroked'} {...props} >
      <SvgComponent/>
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    