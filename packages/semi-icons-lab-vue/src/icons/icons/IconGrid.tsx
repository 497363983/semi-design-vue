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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2V22H22V2ZM20 4H4V20H20V4Z" fill="#6A6F7F" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9H20V15H22V9ZM2 15H4V9H2V15Z" fill="#DDE3E8" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 22V20H9V22H15ZM9 2V4H15V2H9Z" fill="#DDE3E8" />
      <rect x={7} y={7} width={3} height={3} fill="#6A6F7F" />
      <rect x={7} y={10} width={3} height={4} fill="#DDE3E8" />
      <rect x={14} y={10} width={3} height={4} fill="#DDE3E8" />
      <rect x={10} y={7} width={4} height={3} fill="#DDE3E8" />
      <rect x={10} y={14} width={4} height={3} fill="#DDE3E8" />
      <rect x={14} y={7} width={3} height={3} fill="#6A6F7F" />
      <rect x={7} y={14} width={3} height={3} fill="#6A6F7F" />
      <rect x={14} y={14} width={3} height={3} fill="#6A6F7F" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconGrid',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'grid'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
