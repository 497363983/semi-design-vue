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
        d="M3.29164 3.86668C2.026 3.99971 1.10784 5.13355 1.24086 6.39919L2.44517 17.8574C2.57819 19.123 3.71203 20.0412 4.97767 19.9082L9.08038 19.477L12.5439 22.2817C12.7912 22.4819 13.1539 22.4438 13.3542 22.1966L16.1589 18.733L20.4463 18.2824C21.7119 18.1493 22.6301 17.0155 22.4971 15.7499L21.2927 4.29165C21.1597 3.02601 20.0259 2.10784 18.7602 2.24087L3.29164 3.86668Z"
        fill="#6A6F7F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4608 8.56884C10.9071 8.62704 10.5067 9.13593 10.5666 9.70549C10.6265 10.275 10.2261 10.7839 9.6724 10.8421C9.11868 10.9003 8.62127 10.4858 8.56141 9.91624C8.38182 8.20757 9.58287 6.68088 11.244 6.50629C12.9052 6.33169 14.3974 7.57531 14.577 9.28398C14.6689 10.1589 14.3122 10.8684 13.9927 11.3353C13.8289 11.5746 13.6556 11.7783 13.5175 11.9341C13.4509 12.0092 13.401 12.0643 13.3618 12.1076C13.3042 12.1712 13.2698 12.2092 13.24 12.2471L12.6442 13.0044C12.295 13.4483 11.6598 13.5155 11.2259 13.1539C10.7921 12.7923 10.7234 12.1394 11.0727 11.6955L11.6688 10.9377C11.7427 10.8438 11.8536 10.721 11.9427 10.6223C11.9728 10.589 12.0004 10.5584 12.0233 10.5326C12.14 10.4009 12.2484 10.271 12.3409 10.1357C12.5339 9.85365 12.5882 9.65108 12.5718 9.49474C12.5119 8.92518 12.0145 8.51064 11.4608 8.56884Z"
        fill="white"
      />
      <circle cx={12.0566} cy={15.1576} r={1.2} transform="rotate(-6 12.0566 15.1576)" fill="white" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconTooltip',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'tooltip'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
