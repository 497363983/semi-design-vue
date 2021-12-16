
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
                d="M12.9393 2.9393C15.1819 0.69666 18.818 0.696668 21.0606 2.93931C23.3033 5.18195 23.3033 8.81799 21.0606 11.0606L17.5104 14.6109L15.3891 12.4896L18.9393 8.93931C20.0104 7.86824 20.0104 6.13169 18.9393 5.06063C17.8682 3.98956 16.1317 3.98956 15.0606 5.06062L11.5104 8.61088L9.38905 6.48956L12.9393 2.9393ZM2.9393 12.9393L5.98952 9.88911L8.11084 12.0104L5.06062 15.0606C3.98956 16.1317 3.98956 17.8683 5.06063 18.9393C6.13169 20.0104 7.86824 20.0104 8.9393 18.9393L11.9895 15.8891L14.1108 18.0104L11.0606 21.0606C8.81798 23.3033 5.18194 23.3033 2.9393 21.0606C0.696665 18.818 0.696663 15.182 2.9393 12.9393Z"
                fill="currentColor"
            />
            <rect x={5.379} y={7.5} width={2} height={3.85} transform="rotate(-45 5.37866 7.5)" fill="currentColor" />
            <rect
                x={13.779}
                y={15.9}
                width={2}
                height={3.84773}
                transform="rotate(-45 13.7793 15.9005)"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'unlink'} {...props} >
      <SvgComponent/>
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    