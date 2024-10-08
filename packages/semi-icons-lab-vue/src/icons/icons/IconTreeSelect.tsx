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
      <rect x={2} y={10} width={20} height={12} rx={2} fill="#DDE3E8" />
      <path
        d="M8 13C8 12.4477 8.44772 12 9 12H19C19.5523 12 20 12.4477 20 13V14C20 14.5523 19.5523 15 19 15H9C8.44772 15 8 14.5523 8 14V13Z"
        fill="#AAB2BF"
      />
      <path
        d="M4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13V14C7 14.5523 6.55228 15 6 15H5C4.44772 15 4 14.5523 4 14V13Z"
        fill="#AAB2BF"
      />
      <path
        d="M10 18C10 17.4477 10.4477 17 11 17H19C19.5523 17 20 17.4477 20 18V19C20 19.5523 19.5523 20 19 20H11C10.4477 20 10 19.5523 10 19V18Z"
        fill="#AAB2BF"
      />
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6C22 7.10457 21.1046 8 20 8H4C2.89543 8 2 7.10457 2 6V4Z"
        fill="#3BCE4A"
      />
      <path d="M14 2H20C21.1046 2 22 2.89543 22 4V6C22 7.10457 21.1046 8 20 8H14V2Z" fill="#818A9B" />
      <path
        d="M18.416 6.07597C18.2181 6.37284 17.7819 6.37284 17.584 6.07597L16.5182 4.47736C16.2967 4.14508 16.5349 3.70001 16.9343 3.70001L19.0657 3.70001C19.4651 3.70001 19.7033 4.14508 19.4818 4.47736L18.416 6.07597Z"
        fill="white"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconTreeSelect',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'tree-select'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
