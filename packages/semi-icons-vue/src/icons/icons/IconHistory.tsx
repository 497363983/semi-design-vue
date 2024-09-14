import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 4.5C16.1422 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1422 19.5 12.0001 19.5C8.73699 19.5 5.95692 17.4151 4.92663 14.5001C4.65057 13.7191 3.7936 13.3097 3.01254 13.5857C2.23147 13.8618 1.82209 14.7188 2.09816 15.4999C3.53885 19.576 7.42611 22.5 12.0001 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12.0001 1.5C8.42348 1.5 5.26674 3.28785 3.37132 6.01642L2.93709 4.56899C2.69904 3.7755 1.86282 3.32523 1.06935 3.56328C0.275874 3.80133 -0.17439 4.63756 0.0636565 5.43105L1.56366 10.431C1.78602 11.1723 2.53574 11.6227 3.29455 11.4709L8.29447 10.4709C9.1068 10.3084 9.63362 9.51818 9.47115 8.70584C9.30869 7.8935 8.51846 7.36668 7.70613 7.52915L5.69871 7.93064C7.03543 5.86515 9.35963 4.5 12.0001 4.5ZM13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5V12C10.5 12.3978 10.658 12.7794 10.9393 13.0607L13.9393 16.0607C14.5251 16.6464 15.4749 16.6464 16.0607 16.0607C16.6464 15.4749 16.6464 14.5251 16.0607 13.9393L13.5 11.3787V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconHistory',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'history'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
