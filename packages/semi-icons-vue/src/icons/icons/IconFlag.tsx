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
        d="M22 3.61803V14.382C22 14.7607 21.7865 15.1065 21.4351 15.2481C20.7003 15.5443 19.3501 16 18 16C16 16 14.5 15.5 13 15C12.6869 14.8956 12.4174 14.7913 12.1597 14.6915C11.1824 14.3131 10.3739 14 8 14C6.73205 14 5.73205 14.1786 5 14.3849V20.5C5 21.3284 4.32843 22 3.5 22C2.67157 22 2 21.3284 2 20.5V3.58032C2 3.22147 2.19075 2.89111 2.50969 2.72663C3.57133 2.1791 6.08044 1 8 1C10.5 1 11.1906 1.30935 12.1479 1.6847C12.4077 1.78656 12.6798 1.89328 13 2C14.5 2.5 16 3 18 3C18.8895 3 19.7789 2.80221 20.4925 2.58256C21.203 2.36386 22 2.87465 22 3.61803Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFlag',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'flag'} {...props}>
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
