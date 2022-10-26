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
        d="M4 4C2.34315 4 1 5.34315 1 7V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7C23 5.34315 21.6569 4 20 4H4ZM9.80467 12.1709C9.33102 13.3521 8.46885 14.1429 7.50001 14.1429C6.53131 14.1429 5.66924 13.3523 5.19554 12.1714C4.90071 12.0544 4.62002 11.698 4.49196 11.2325C4.32554 10.6275 4.35872 10.0874 4.81298 9.9199C4.85705 7.8147 5.71 7 7.50001 7C9.29014 7 10.1431 7.81481 10.1871 9.92031C10.6403 10.0883 10.6733 10.628 10.507 11.2325C10.3791 11.6974 10.099 12.0534 9.80467 12.1709ZM11.8349 16.026C12.2505 16.4518 11.821 17 11.2179 17H3.78213C3.17902 17 2.7495 16.4518 3.1651 16.026C3.98149 15.1898 5.61634 14.619 7.5 14.619C9.38366 14.619 11.0185 15.1898 11.8349 16.026ZM14 10C14 9.44772 14.4477 9 15 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H15C14.4477 11 14 10.5523 14 10ZM15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15H18C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13H15Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconIdCard',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'id_card'} {...props}>
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
