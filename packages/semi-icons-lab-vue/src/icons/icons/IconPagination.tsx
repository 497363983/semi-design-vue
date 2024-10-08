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
      <path d="M1 8C1 6.34315 2.34315 5 4 5H12V19H4C2.34315 19 1 17.6569 1 16V8Z" fill="#6A6F7F" />
      <path d="M8 9L5 12L8 15" stroke="white" stroke-width={2} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H12V5Z" fill="#DDE3E8" />
      <path d="M16 9L19 12L16 15" stroke="#AAB2BF" stroke-width={2} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconPagination',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'pagination'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
