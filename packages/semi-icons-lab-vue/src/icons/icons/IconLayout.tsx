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
      <rect x={2} y={2} width={20} height={20} rx={3} fill="#DDE3E8" />
      <rect x={5} y={5} width={14} height={4} fill="#6A6F7F" />
      <rect x={11} y={11} width={8} height={3} fill="#AAB2BF" />
      <rect x={11} y={16} width={8} height={3} fill="#AAB2BF" />
      <rect x={5} y={11} width={4} height={8} fill="#AAB2BF" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconLayout',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'layout'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
