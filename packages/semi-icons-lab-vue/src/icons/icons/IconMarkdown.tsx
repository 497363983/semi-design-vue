import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path d="M0 14H22V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V14Z" fill="#6A6F7F" />
      <path d="M0 2C0 0.89543 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V14H0V2Z" fill="#DDE3E8" />
      <rect opacity={0.5} x={18} y={15} width={2} height={2} rx={1} fill="#DDE3E8" />
      <rect x={3} y={5} width={5} height={1.5} fill="#6A6F7F" />
      <rect x={3} y={9} width={7} height={1.5} fill="#6A6F7F" />
      <rect x={12} y={4} width={7} height={7} rx={1} fill="#F8CE27" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconMarkdown',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'markdown'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
