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
        d="M13.5 2.5C13.5 1.67157 12.8284 1 12 1C11.1716 1 10.5 1.67157 10.5 2.5V6.49999C10.5 7.32841 11.1716 7.99999 12 7.99999C12.8284 7.99999 13.5 7.32841 13.5 6.49999V2.5Z"
        fill="#AAB2BF"
      />
      <path
        d="M13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5V21.5C10.5 22.3284 11.1716 23 12 23C12.8284 23 13.5 22.3284 13.5 21.5V17.5Z"
        fill="#AAB2BF"
      />
      <path
        d="M4.52273 5.95097C3.80529 5.53675 2.88791 5.78256 2.47369 6.5C2.05948 7.21744 2.30529 8.13483 3.02273 8.54904L6.48682 10.549C7.20426 10.9632 8.12165 10.7174 8.53586 10C8.95007 9.28256 8.70426 8.36517 7.98682 7.95096L4.52273 5.95097Z"
        fill="#AAB2BF"
      />
      <path
        d="M17.5131 13.451C16.7957 13.0368 15.8783 13.2826 15.4641 14C15.0499 14.7174 15.2957 15.6348 16.0131 16.049L19.4772 18.049C20.1947 18.4633 21.1121 18.2175 21.5263 17.5C21.9405 16.7826 21.6947 15.8652 20.9772 15.451L17.5131 13.451Z"
        fill="#AAB2BF"
      />
      <path
        d="M3.02273 15.451C2.30529 15.8652 2.05948 16.7826 2.47369 17.5C2.88791 18.2174 3.80529 18.4633 4.52273 18.049L7.98682 16.049C8.70426 15.6348 8.95007 14.7174 8.53586 14C8.12165 13.2826 7.20426 13.0368 6.48682 13.451L3.02273 15.451Z"
        fill="#AAB2BF"
      />
      <path
        d="M16.0131 7.95097C15.2957 8.36518 15.0499 9.28256 15.4641 10C15.8783 10.7174 16.7957 10.9633 17.5131 10.549L20.9772 8.54903C21.6947 8.13482 21.9405 7.21743 21.5263 6.5C21.1121 5.78256 20.1947 5.53674 19.4772 5.95096L16.0131 7.95097Z"
        fill="#FF7D95"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconSpin',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'spin'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
