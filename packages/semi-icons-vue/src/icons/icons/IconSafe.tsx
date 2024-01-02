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
        d="M2.72094 3.72231L11.4397 1.08482C11.8136 0.971728 12.2121 0.971728 12.5859 1.08482L21.2939 3.71906C21.7063 3.8438 21.9922 4.21609 21.9964 4.65018C22.0221 7.29611 21.9634 16.4403 19.9905 19.0113C18.0206 21.5782 13.6266 22.689 12.3604 22.9631C12.1296 23.0131 11.8955 23.0123 11.665 22.9608C10.4204 22.6828 6.15076 21.5711 4.03517 19.0113C1.90719 16.4364 1.95882 7.26832 2.01959 4.63817C2.02949 4.20967 2.3138 3.84548 2.72094 3.72231ZM7.02674 12.978L10.2619 16.2402C10.6698 16.6515 11.3376 16.629 11.7175 16.1913L17.1403 9.94196C17.6219 9.38702 17.5943 8.55064 17.0772 8.02923C16.4996 7.44685 15.5508 7.49025 15.0279 8.12297L11.0156 12.978L9.02116 10.9669C8.47042 10.4115 7.57749 10.4115 7.02674 10.9669C6.476 11.5222 6.476 12.4226 7.02674 12.978Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSafe',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'safe'} {...props}>
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
