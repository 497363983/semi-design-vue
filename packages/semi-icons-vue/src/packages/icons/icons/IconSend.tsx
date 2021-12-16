
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
                d="M20.6027 2.13245L1.53504 8.48833C0.829806 8.72341 0.618511 9.61847 1.14416 10.1441L4.95675 13.9567C5.2771 14.2771 5.77281 14.3421 6.16489 14.1151L14.351 9.37577C14.5283 9.27312 14.7269 9.47176 14.6243 9.64907L9.88494 17.8351C9.65794 18.2272 9.7229 18.7229 10.0433 19.0433L13.8559 22.8559C14.3816 23.3815 15.2766 23.1702 15.5117 22.465L21.8676 3.39736C22.1282 2.6156 21.3844 1.87187 20.6027 2.13245Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'send'} {...props} >
      <SvgComponent/>
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    