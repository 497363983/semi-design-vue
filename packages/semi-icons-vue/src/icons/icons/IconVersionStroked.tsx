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
        d="M5.125 3.125V20.1518L11.4833 16.8643C11.8074 16.6968 12.1926 16.6968 12.5167 16.8643L18.875 20.1518V3.125H5.125ZM2.875 3C2.875 1.82639 3.82639 0.875 5 0.875H19C20.1736 0.875 21.125 1.82641 21.125 3V22C21.125 22.3926 20.9203 22.7568 20.585 22.961C20.2496 23.1651 19.8321 23.1796 19.4833 22.9993L12 19.1301L4.5167 22.9993C4.16794 23.1796 3.75041 23.1651 3.41505 22.961C3.07968 22.7568 2.875 22.3926 2.875 22V3Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.875 9C6.875 8.37868 7.37868 7.875 8 7.875H16C16.6213 7.875 17.125 8.37868 17.125 9C17.125 9.62132 16.6213 10.125 16 10.125H8C7.37868 10.125 6.875 9.62132 6.875 9Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconVersionStroked',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'version_stroked'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
