import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
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
        d="M2.84766 19.1289C3.62109 19.1289 4.05078 18.7314 4.35156 17.7217L5.16797 15.2295H10.3135L11.1406 17.7217C11.4307 18.7207 11.8818 19.1289 12.666 19.1289C13.4932 19.1289 14.041 18.6348 14.041 17.8613C14.041 17.5605 13.9658 17.2061 13.8154 16.7441L10.1201 6.15234C9.6582 4.77734 9.01367 4.21875 7.7998 4.21875C6.5752 4.21875 5.91992 4.78809 5.45801 6.15234L1.7627 16.7441C1.58008 17.292 1.50488 17.625 1.50488 17.915C1.50488 18.6455 2.05273 19.1289 2.84766 19.1289ZM5.8125 13.0703L7.68164 7.14062H7.82129L9.67969 13.0703H5.8125Z"
        fill="#6A6F7F"
      />
      <path
        d="M16.9307 15.9849C16.9307 15.1777 17.5244 14.6953 18.5264 14.6953H20.4189V15.7158C20.4189 16.6436 19.5933 17.3672 18.5356 17.3672C17.5801 17.3672 16.9307 16.8013 16.9307 15.9849ZM20.521 18.0273V17.7476V18.0908C20.5952 18.731 21.022 19.0928 21.6714 19.0928C22.4321 19.0928 22.8589 18.6196 22.8589 17.7847V12.4038C22.8589 10.2236 21.4116 8.99902 18.8325 8.99902C17.7563 8.99902 16.9307 9.18457 16.3091 9.50928C15.4463 9.94531 15.0474 10.5298 15.0474 11.105C15.0474 11.606 15.3813 11.9678 15.9194 11.9678C16.3184 11.9678 16.5781 11.8657 16.8564 11.6431C17.4038 11.1514 17.9326 10.873 18.6748 10.873C19.7974 10.873 20.4189 11.3926 20.4189 12.3853V13.1924H18.0811C15.8452 13.1924 14.5 14.3149 14.5 16.1333C14.5 17.9238 15.7988 19.1299 17.7192 19.1299C18.9253 19.1299 20.02 18.9087 20.521 18.0273Z"
        fill="#AAB2BF"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTypography',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'typography'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
