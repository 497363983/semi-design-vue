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
      <rect x={10.5} y={7.5} width={11} height={11} rx={2} fill="#DDE3E8" />
      <rect x={2.5} y={7.5} width={12} height={11} rx={2} fill="#AAB2BF" />
      <rect x={5} y={5.5} width={14} height={13} rx={2} fill="#6A6F7F" />
      <path
        d="M12.1824 10.7059C12.768 9.76471 14.232 9.76471 14.8176 10.7059L16.7939 13.8824C17.3795 14.8235 16.6475 16 15.4763 16H11.5237C10.3525 16 9.62051 14.8235 10.2061 13.8824L12.1824 10.7059Z"
        fill="#DDE3E8"
      />
      <circle cx={8.5} cy={9.5} r={1.5} fill="white" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconCarousel',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'carousel'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
