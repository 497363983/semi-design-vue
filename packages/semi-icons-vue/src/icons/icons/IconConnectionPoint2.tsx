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
        d="M1 3C1 1.89543 1.89543 1 3 1H21C22.1045 1 23 1.89543 23 3V9C23 10.1046 22.1045 11 21 11H7.5V15C7.5 15.8284 8.17157 16.5 9 16.5H13V15C13 13.8954 13.8954 13 15 13H21C22.1046 13 23 13.8954 23 15V21C23 22.1046 22.1046 23 21 23H15C13.8954 23 13 22.1046 13 21V19.5H9C6.51472 19.5 4.5 17.4853 4.5 15V11H3C1.89543 11 1 10.1046 1 9V3ZM16 16V20H20V16H16Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconConnectionPoint2',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'connection_point_2'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
