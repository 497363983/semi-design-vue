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
        d="M21.2122 15.0486L21.4658 15.1885C21.9809 15.4726 22.1534 16.0952 21.851 16.5793C21.7576 16.7288 21.625 16.8535 21.4658 16.9412L12.5474 21.8602C12.2094 22.0466 11.7906 22.0466 11.4526 21.8602L2.53419 16.9412C2.0191 16.6571 1.84663 16.0345 2.14896 15.5504C2.24239 15.4009 2.37501 15.2762 2.53419 15.1885L2.78753 15.0486L11.4526 19.8278C11.7737 20.0049 12.1678 20.0137 12.4961 19.8543L12.5474 19.8278L21.2122 15.0486ZM21.2122 10.9838L21.4658 11.1236C21.9809 11.4077 22.1534 12.0304 21.851 12.5144C21.7576 12.664 21.625 12.7886 21.4658 12.8764L12.5474 17.7953C12.2094 17.9818 11.7906 17.9818 11.4526 17.7953L2.53419 12.8764C2.0191 12.5923 1.84663 11.9696 2.14896 11.4856C2.24239 11.336 2.37501 11.2114 2.53419 11.1236L2.78753 10.9838L11.4526 15.7629C11.7737 15.94 12.1678 15.9489 12.4961 15.7895L12.5474 15.7629L21.2122 10.9838ZM12.5474 2.13981L21.4658 7.05875C21.9809 7.34285 22.1534 7.96554 21.851 8.44956C21.7576 8.59914 21.625 8.72375 21.4658 8.81155L12.5474 13.7305C12.2094 13.9169 11.7906 13.9169 11.4526 13.7305L2.53419 8.81155C2.0191 8.52745 1.84663 7.90477 2.14896 7.42074C2.24239 7.27117 2.37501 7.14655 2.53419 7.05875L11.4526 2.13981C11.7906 1.9534 12.2094 1.9534 12.5474 2.13981Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconLayers',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'layers'} {...props}>
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
