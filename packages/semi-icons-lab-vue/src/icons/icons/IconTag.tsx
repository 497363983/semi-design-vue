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
        d="M13.2427 3.34314C12.1819 3.34314 11.1644 3.76457 10.4143 4.51471L1.68637 13.2426C0.905324 14.0237 0.905324 15.29 1.68637 16.0711L7.34323 21.7279C8.12427 22.509 9.3906 22.509 10.1717 21.7279L18.8996 13C19.6497 12.2498 20.0711 11.2324 20.0711 10.1716V5.34314C20.0711 4.23857 19.1757 3.34314 18.0711 3.34314L13.2427 3.34314ZM13.0001 7.58578C12.219 8.36683 12.219 9.63316 13.0001 10.4142C13.7811 11.1953 15.0475 11.1953 15.8285 10.4142C16.6096 9.63316 16.6096 8.36683 15.8285 7.58578C15.0475 6.80473 13.7811 6.80473 13.0001 7.58578Z"
        fill="#F82C2C"
      />
      <path
        d="M14.85 8.40001C16.05 6.90001 19.7 4.7 21.5 6.5C23.75 8.75 20 12.5 20 16C20 18.4739 22.15 19 22.85 19"
        stroke="#AAB2BF"
        stroke-width={1.5}
        stroke-linecap="round"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconTag',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'tag'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
