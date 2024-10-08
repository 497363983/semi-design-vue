import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <rect width={22} height={18} rx={2} fill="#F9FCFF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 0H20C21.1046 0 22 0.895431 22 2V16C22 17.1046 21.1046 18 20 18H18V0ZM21 2V4H19V2H21ZM21 8V6H19V8H21ZM21 10V12H19V10H21ZM21 16V14H19V16H21Z"
        fill="#AEB2BE"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2C0 0.89543 0.895431 0 2 0H4V18H2C0.895431 18 0 17.1046 0 16V2ZM3 2V4H1V2H3ZM3 8V6H1V8H3ZM3 10V12H1V10H3ZM3 16V14H1V16H3Z"
        fill="#AEB2BE"
      />
      <path d="M14.5 5C12.5 5 10.5 5.35985 10.5 9C10.5 12.5 8.99951 14 6.5 14" stroke="#AEB2BE" />
      <rect x={14} y={4} width={2} height={2} fill="#F77C93" />
      <rect x={6} y={13} width={2} height={2} fill="#F8CE27" />
      <path
        d="M6.83088 9.21342C6.83394 9.19511 6.85814 9.1905 6.86773 9.20639L7.1788 9.72196C7.18182 9.72695 7.18687 9.73038 7.19263 9.73135L7.7865 9.8308C7.80481 9.83386 7.80942 9.85806 7.79353 9.86765L7.27796 10.1787C7.27297 10.1817 7.26954 10.1868 7.26857 10.1925L7.16912 10.7864C7.16606 10.8047 7.14186 10.8093 7.13227 10.7934L6.8212 10.2779C6.81818 10.2729 6.81313 10.2695 6.80737 10.2685L6.2135 10.169C6.19519 10.166 6.19058 10.1418 6.20647 10.1322L6.72204 9.82112C6.72703 9.8181 6.73046 9.81305 6.73143 9.80729L6.83088 9.21342Z"
        fill="#F8CE27"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconLottie',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'lottie'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
