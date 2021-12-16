
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
                d="M6.22726 15.687C5.24243 14.8374 4.70895 13.7794 4.71022 12.477C4.71149 11.1797 5.24419 10.1248 6.20301 9.2963C6.03575 9.11828 5.86381 8.94761 5.70569 8.76499C4.35588 7.20602 4.36883 4.87808 5.74596 3.34267C6.56191 2.43296 7.59065 1.96634 8.81566 1.96311C10.9604 1.95746 13.1051 1.96152 15.2498 1.96155C17.2733 1.96157 19.0212 3.46469 19.2959 5.46889C19.4997 6.95612 19.0206 8.20447 17.9029 9.20711C17.8793 9.22827 17.8559 9.2496 17.8257 9.27692C18.8348 10.1483 19.3628 11.2397 19.3411 12.5778C19.3264 13.4863 19.033 14.3025 18.4722 15.0155C17.8105 15.8567 16.9463 16.3744 15.8888 16.5442C14.8385 16.7128 13.86 16.4989 12.9439 15.912V16.0545C12.9439 16.966 12.9428 17.8775 12.9443 18.789C12.9456 19.6041 12.7622 20.371 12.319 21.0597C11.5828 22.2037 10.5356 22.8654 9.17626 22.984C7.02254 23.1719 5.11251 21.704 4.76708 19.5694C4.52277 18.0597 5.00617 16.7814 6.14664 15.7569C6.17278 15.7333 6.19979 15.7108 6.22726 15.687ZM12.9486 8.3612C12.9845 8.36363 13.0092 8.36674 13.0339 8.36674C13.7412 8.36702 14.4485 8.36764 15.1558 8.36629C15.2663 8.36607 15.3777 8.36382 15.4872 8.35024C16.7639 8.19192 17.6455 7.06956 17.4978 5.79355C17.3675 4.66874 16.383 3.78887 15.2534 3.78825C14.5246 3.78784 13.7959 3.78816 13.0672 3.78816H12.9486L12.9486 8.3612ZM11.1058 14.7692V10.1973H10.9716C10.2498 10.1973 9.52793 10.1973 8.80613 10.1973C7.61453 10.1974 6.61432 11.1378 6.53791 12.3299C6.45321 13.6516 7.50057 14.7691 8.824 14.7692C9.54224 14.7693 10.2605 14.7692 10.9787 14.7692H11.1058ZM11.1076 3.78814H10.9873C10.2795 3.78814 9.57178 3.78732 8.86402 3.78898C8.75356 3.78924 8.64256 3.79551 8.53279 3.80777C6.97328 3.98221 6.04342 5.75134 6.79466 7.13083C7.24698 7.96142 7.96477 8.3638 8.90761 8.36659C9.60463 8.36865 10.3017 8.36708 10.9987 8.36672C11.0332 8.3667 11.0677 8.36264 11.1076 8.36012V3.78814ZM11.1136 16.6011C11.0751 16.5986 11.0542 16.5961 11.0332 16.5961C10.2866 16.5959 9.53981 16.5876 8.7933 16.5978C7.60457 16.6141 6.61836 17.5361 6.54208 18.7158C6.48582 19.586 6.82452 20.2919 7.54723 20.7803C8.26638 21.2664 9.0484 21.3244 9.82438 20.9379C10.6945 20.5045 11.1098 19.7665 11.1132 18.7971C11.1155 18.104 11.1136 17.4109 11.1136 16.7179V16.6011ZM12.9439 12.4849C12.9439 13.7383 13.9619 14.7679 15.2021 14.7692C16.4785 14.7706 17.515 13.7563 17.5158 12.5052C17.5167 11.2315 16.5059 10.2113 15.2598 10.1935C13.9906 10.1755 12.9228 11.2301 12.9439 12.4849Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'figma'} {...props} >
      <SvgComponent/>
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    