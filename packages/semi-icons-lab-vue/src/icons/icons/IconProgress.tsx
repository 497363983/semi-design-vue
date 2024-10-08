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
      <circle cx={12} cy={12} r={8} stroke="#3BCE4A" stroke-width={6} />
      <path
        d="M12.1378 4C16.48 4 20 7.58172 20 12C20 16.4183 16.48 20 12.1378 20C9.65493 20 7.44087 18.8289 6 17"
        stroke="#3BCE4A"
        stroke-width={6}
        stroke-linecap="round"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconProgress',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'progress'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
