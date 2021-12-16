
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
                d="M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4ZM9 4H4V9H9V4ZM2 15C2 13.8954 2.89543 13 4 13H9C10.1046 13 11 13.8954 11 15V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V15ZM9 15H4V20H9V15ZM15 2C13.8954 2 13 2.89543 13 4V9C13 10.1046 13.8954 11 15 11H20C21.1046 11 22 10.1046 22 9V4C22 2.89543 21.1046 2 20 2H15ZM15 4H20V9H15V4ZM5 5.5C5 5.22386 5.22386 5 5.5 5H7.5C7.77614 5 8 5.22386 8 5.5V7.5C8 7.77614 7.77614 8 7.5 8H5.5C5.22386 8 5 7.77614 5 7.5V5.5ZM16.5 5C16.2239 5 16 5.22386 16 5.5V7.5C16 7.77614 16.2239 8 16.5 8H18.5C18.7761 8 19 7.77614 19 7.5V5.5C19 5.22386 18.7761 5 18.5 5H16.5ZM5 16.5C5 16.2239 5.22386 16 5.5 16H7.5C7.77614 16 8 16.2239 8 16.5V18.5C8 18.7761 7.77614 19 7.5 19H5.5C5.22386 19 5 18.7761 5 18.5V16.5ZM13.5 13C13.2239 13 13 13.2239 13 13.5V15.5C13 15.7761 13.2239 16 13.5 16H15.5C15.7761 16 16 15.7761 16 15.5V13.5C16 13.2239 15.7761 13 15.5 13H13.5ZM16 16.5C16 16.2239 16.2239 16 16.5 16H18.5C18.7761 16 19 16.2239 19 16.5V18.5C19 18.7761 18.7761 19 18.5 19H16.5C16.2239 19 16 18.7761 16 18.5V16.5ZM19.5 13C19.2239 13 19 13.2239 19 13.5V15.5C19 15.7761 19.2239 16 19.5 16H21.5C21.7761 16 22 15.7761 22 15.5V13.5C22 13.2239 21.7761 13 21.5 13H19.5ZM13 19.5C13 19.2239 13.2239 19 13.5 19H15.5C15.7761 19 16 19.2239 16 19.5V21.5C16 21.7761 15.7761 22 15.5 22H13.5C13.2239 22 13 21.7761 13 21.5V19.5ZM19.5 19C19.2239 19 19 19.2239 19 19.5V21.5C19 21.7761 19.2239 22 19.5 22H21.5C21.7761 22 22 21.7761 22 21.5V19.5C22 19.2239 21.7761 19 21.5 19H19.5Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'qr_code'} {...props} >
      <SvgComponent/>
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    