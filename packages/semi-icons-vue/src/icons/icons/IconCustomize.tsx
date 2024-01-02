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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4ZM2 15C2 13.8954 2.89543 13 4 13H9C10.1046 13 11 13.8954 11 15V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V15ZM15 2C13.8954 2 13 2.89543 13 4V9C13 10.1046 13.8954 11 15 11H20C21.1046 11 22 10.1046 22 9V4C22 2.89543 21.1046 2 20 2H15ZM16 14.5C16 13.6716 16.6716 13 17.5 13C18.3284 13 19 13.6716 19 14.5V16H20.5C21.3284 16 22 16.6716 22 17.5C22 18.3284 21.3284 19 20.5 19H19V20.5C19 21.3284 18.3284 22 17.5 22C16.6716 22 16 21.3284 16 20.5V19H14.5C13.6716 19 13 18.3284 13 17.5C13 16.6716 13.6716 16 14.5 16H16V14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCustomize',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'customize'} {...props}>
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
